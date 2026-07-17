import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@/i18n/navigation";
import {
  chapter,
  getAdjacentLessons,
  getChapterProgress,
  getCompletedCount,
  getLesson,
} from "./_lib/lessons";
import { LessonSidebarLeft } from "./_components/lesson-sidebar-left";
import { LessonSidebarRight } from "./_components/lesson-sidebar-right";
import { LessonMobileMenu } from "./_components/lesson-mobile-menu";
import { LessonMainContent } from "./_components/lesson-content";
import { LessonBottomNav } from "./_components/lesson-bottom-nav";
import { QuizSection } from "./_components/quiz/quiz-section";
import { getQuiz } from "./_lib/quiz-data";

export function generateStaticParams() {
  return chapter.lessons
    .filter((lesson) => lesson.status !== "locked")
    .map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  const t = await getTranslations({ locale, namespace: "grammar" });
  return {
    title: lesson.titleDe,
    description: `${t("title")}: ${lesson.titleDe}`,
  };
}

function caseLabelFor(slug: string, t: (key: string) => string): string {
  switch (slug) {
    case "nominativ":
      return t("caseNominative");
    case "akkusativ":
      return t("caseAccusative");
    case "dativ":
      return t("caseDative");
    case "genitiv":
      return t("caseGenitive");
    default:
      return "";
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const lesson = getLesson(slug);
  if (!lesson) notFound();
  const quiz = getQuiz(slug);

  const t = await getTranslations("lesson");
  const tGrammar = await getTranslations("grammar");
  const tNav = await getTranslations("nav");
  const tHome = await getTranslations("home");

  const { previous, next } = getAdjacentLessons(slug);
  const courseProgress = getChapterProgress();
  const { done, total } = getCompletedCount();
  const chapterTitle = tHome("grammarCatCases");
  const caseLabel = caseLabelFor(slug, t);

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
              <BreadcrumbLink render={<Link href="/grammar" />}>{tNav("grammar")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>{chapterTitle}</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{lesson.titleDe}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="lg:hidden">
        <LessonMobileMenu
          triggerLabel={t("lessonListTitle")}
          activeSlug={slug}
          chapterTitle={chapterTitle}
          lessons={chapter.lessons}
          courseProgress={courseProgress}
          courseProgressLabel={t("courseProgressTitle")}
          currentChapterLabel={t("currentChapterLabel")}
          lessonListLabel={t("lessonListTitle")}
          searchPlaceholder={t("searchLessonsPlaceholder")}
          noResultsLabel={t("noLessonsFound")}
          completedCountLabel={t("completedCountLabel", { done, total })}
          lockedHint={t("lockedLessonHint")}
        />
      </div>

      <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
        <LessonSidebarLeft
          activeSlug={slug}
          chapterTitle={chapterTitle}
          lessons={chapter.lessons}
          courseProgress={courseProgress}
          courseProgressLabel={t("courseProgressTitle")}
          currentChapterLabel={t("currentChapterLabel")}
          lessonListLabel={t("lessonListTitle")}
          searchPlaceholder={t("searchLessonsPlaceholder")}
          noResultsLabel={t("noLessonsFound")}
          completedCountLabel={t("completedCountLabel", { done, total })}
          lockedHint={t("lockedLessonHint")}
        />
      </aside>

      <div className="min-w-0">
        <LessonMainContent
          lesson={lesson}
          locale={locale}
          progressLabel={t("progressLabel")}
          lastUpdatedLabel={t("lastUpdatedLabel")}
          readingTimeLabel={t("readingTimeLabel", { min: lesson.readingMinutes })}
          simpleExplanationTitle={tGrammar("simpleExplanation")}
          detailedExplanationTitle={tGrammar("detailedExplanation")}
          grammarRulesTitle={t("grammarRulesTitle")}
          importantNotesTitle={t("importantNotesTitle")}
          declensionTableTitle={t("declensionTableTitle")}
          examplesTitle={tGrammar("examples")}
          commonMistakesTitle={tGrammar("commonMistakes")}
          exceptionsTitle={tGrammar("exceptions")}
          tipsTitle={tGrammar("tips")}
          summaryTitle={t("summaryTitle")}
          caseLabel={caseLabel}
          genderMasculine={t("genderMasculine")}
          genderFeminine={t("genderFeminine")}
          genderNeuter={t("genderNeuter")}
          genderPlural={t("genderPlural")}
          definiteArticleLabel={t("definiteArticleLabel")}
          indefiniteArticleLabel={t("indefiniteArticleLabel")}
          personalPronounLabel={t("personalPronounLabel")}
          incorrectLabel={t("incorrectLabel")}
          correctLabel={t("correctLabel")}
        />

        {quiz && (
          <QuizSection
            quiz={quiz}
            nextLessonSlug={next && next.status !== "locked" ? next.slug : null}
            nextLessonTitle={next && next.status !== "locked" ? next.titleDe : null}
          />
        )}

        <LessonBottomNav
          previousLesson={previous}
          nextLesson={next}
          initiallyCompleted={lesson.status === "completed"}
          previousLabel={t("previousLessonLabel")}
          nextLabel={t("nextLessonLabel")}
          markCompleteLabel={t("markCompleteLabel")}
          markedCompleteLabel={t("markedCompleteLabel")}
          markCompleteToast={t("markCompleteToast")}
          markIncompleteToast={t("markIncompleteToast")}
          lockedHint={t("lockedLessonHint")}
        />
      </div>

      <aside className="lg:sticky lg:top-24 lg:block lg:self-start">
        <LessonSidebarRight
          progress={lesson.progress}
          nextLesson={next}
          learningProgressTitle={t("learningProgressTitle")}
          quickNotesTitle={t("quickNotesTitle")}
          quickNotesPlaceholder={t("quickNotesPlaceholder")}
          bookmarkLabel={t("bookmarkLabel")}
          bookmarkedLabel={t("bookmarkedLabel")}
          bookmarkToast={t("bookmarkToast")}
          unbookmarkToast={t("unbookmarkToast")}
          shareLabel={t("shareLabel")}
          shareToast={t("shareToast")}
          askAiLabel={t("askAiLabel")}
          askAiComingSoon={t("askAiComingSoon")}
          nextLessonLabel={t("nextLessonLabel")}
          lockedHint={t("lockedLessonHint")}
        />
      </aside>
    </div>
  );
}
