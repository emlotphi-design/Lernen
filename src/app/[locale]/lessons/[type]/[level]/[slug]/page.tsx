import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Hammer } from "lucide-react";
import { ComingSoon } from "../../../../_components/coming-soon";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/navigation";
import { cefrLevels, type CefrLevel } from "@/components/ui/level-badge";
import {
  LESSON_TYPES,
  LESSON_TYPE_LABEL_DE,
  getLesson,
  getLessonMeta,
  getLessonExplanationCache,
  getAdjacentLessons,
  getCategoryProgress,
  getCategoryMeta,
  getCategoryLessons,
  getRequiredKeysByLevel,
  listLessons,
  type LessonType,
} from "@/lib/lessons";
import { LessonSidebarLeft } from "../../../_components/lesson-sidebar-left";
import { LessonSidebarRight } from "../../../_components/lesson-sidebar-right";
import { LessonMobileMenu } from "../../../_components/lesson-mobile-menu";
import { LessonMainContent } from "../../../_components/lesson-content";
import { LessonBottomNav } from "../../../_components/lesson-bottom-nav";
import { ExercisesSection } from "../../../_components/exercises-section";
import { QuizSection } from "../../../_components/quiz/quiz-section";

function parseType(value: string): LessonType | null {
  return (LESSON_TYPES as readonly string[]).includes(value) ? (value as LessonType) : null;
}

function parseLevel(value: string): CefrLevel | null {
  const upper = value.toUpperCase();
  return (cefrLevels as readonly string[]).includes(upper) ? (upper as CefrLevel) : null;
}

export function generateStaticParams() {
  return listLessons()
    .filter((lesson) => lesson.status !== "locked")
    .map((lesson) => ({ type: lesson.type, level: lesson.level.toLowerCase(), slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; type: string; level: string; slug: string }>;
}): Promise<Metadata> {
  const { type: rawType, level: rawLevel, slug } = await params;
  const type = parseType(rawType);
  const level = parseLevel(rawLevel);
  if (!type || !level) return {};
  const meta = getLessonMeta(type, level, slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: `${LESSON_TYPE_LABEL_DE[type]}: ${meta.summary}`,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ locale: string; type: string; level: string; slug: string }>;
}) {
  const { locale, type: rawType, level: rawLevel, slug } = await params;
  setRequestLocale(locale);

  const type = parseType(rawType);
  const level = parseLevel(rawLevel);
  if (!type || !level) notFound();

  // No metadata at all for this slug — the URL itself doesn't correspond to any real curriculum
  // item (typo, stale link, etc.), so this is a genuine 404, not a "not authored yet" case.
  const meta = getLessonMeta(type, level, slug);
  if (!meta) notFound();

  const lesson = await getLesson(type, level, slug);
  if (!lesson) {
    // A real, planned curriculum item exists (it has a title/level/category), it just isn't
    // authored yet — show a professional "coming soon" state instead of a bare 404, with enough
    // real context (title, level, category) that it reads as intentional, not broken.
    const lockedCategory = getCategoryMeta(meta.category);
    return (
      <ComingSoon
        icon={Hammer}
        eyebrow={`${LESSON_TYPE_LABEL_DE[type]} · ${meta.level}${lockedCategory ? ` · ${lockedCategory.title}` : ""}`}
        title={meta.title}
        description="Diese Lektion wird gerade vorbereitet und ist bald verfügbar. Schau in der Zwischenzeit bei den bereits freigeschalteten Lektionen vorbei."
        backLabel={`Zurück zu ${LESSON_TYPE_LABEL_DE[type]}`}
        backHref={`/lessons/${type}`}
      />
    );
  }
  const explanationCache = await getLessonExplanationCache(type, level, slug);

  const tNav = await getTranslations("nav");

  const { previous, next } = getAdjacentLessons(type, slug);
  const category = getCategoryMeta(lesson.category);
  const categoryLessons = getCategoryLessons(lesson.category);
  const { progress: courseProgress, done, total } = getCategoryProgress(lesson.category);
  const categoryTitle = category?.title ?? "";
  const requiredKeysByLevel = await getRequiredKeysByLevel(type);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-6 px-4 pt-6 pb-20 sm:px-6 lg:grid-cols-[240px_1fr_300px] lg:px-8 xl:grid-cols-[260px_1fr_320px]">
      <div className="lg:col-span-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>{tNav("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href={`/lessons/${type}`} />}>
                {LESSON_TYPE_LABEL_DE[type]}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{categoryTitle}</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{lesson.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="lg:hidden">
        <LessonMobileMenu
          activeSlug={slug}
          categoryTitle={categoryTitle}
          lessons={categoryLessons}
          courseProgress={courseProgress}
          done={done}
          total={total}
          requiredKeysByLevel={requiredKeysByLevel}
        />
      </div>

      <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
        <LessonSidebarLeft
          activeSlug={slug}
          categoryTitle={categoryTitle}
          lessons={categoryLessons}
          courseProgress={courseProgress}
          done={done}
          total={total}
          requiredKeysByLevel={requiredKeysByLevel}
        />
      </aside>

      <div className="min-w-0">
        <LessonMainContent lesson={lesson} explanationCache={explanationCache} locale={locale} />

        <ExercisesSection lesson={lesson} explanationCache={explanationCache} />

        <QuizSection
          lesson={lesson}
          explanationCache={explanationCache}
          nextLessonHref={next && next.status !== "locked" ? next.href : null}
          nextLessonTitle={next && next.status !== "locked" ? next.title : null}
        />

        <LessonBottomNav
          previousLesson={previous}
          nextLesson={next}
          nextLessonRequiredKeys={next ? requiredKeysByLevel[next.level] ?? [] : []}
          lessonKey={`${type}/${level.toLowerCase()}/${slug}`}
          initiallyCompleted={lesson.status === "completed"}
        />
      </div>

      <aside className="lg:sticky lg:top-24 lg:block lg:self-start">
        <LessonSidebarRight progress={lesson.progress} nextLesson={next} />
      </aside>
    </div>
  );
}
