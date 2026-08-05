import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/motion/fade-in";
import { LessonBrowseCard } from "../_components/lesson-browse-card";
import {
  LESSON_TYPES,
  LESSON_TYPE_LABEL_DE,
  getCategories,
  getCategoryLessons,
  getRequiredKeysByLevel,
  type LessonType,
} from "@/lib/lessons";

// German UI, fixed regardless of explanation language (see the German-UI-vs-explanation-language
// split in project memory).
const TYPE_DESCRIPTION_DE: Record<LessonType, string> = {
  grammar: "Jede Regel klar erklärt — mit den Ausnahmen, die wirklich zu Fehlern führen.",
  vocabulary: "Wörter nach Themen geordnet, mit Beispielsätzen aus dem echten Sprachgebrauch.",
  reading: "Kurze Texte auf deinem Niveau, mit Verständnisfragen zur Selbstkontrolle.",
  listening: "Alltägliche Hörsituationen — Durchsagen, Gespräche und kurze Szenen.",
  speaking: "Angeleitete Übungen, um laut zu sprechen — eine Situation nach der anderen.",
  quiz: "Gemischte Wiederholungsquiz, um das Gelernte zu überprüfen.",
};

function parseType(value: string): LessonType | null {
  return (LESSON_TYPES as readonly string[]).includes(value) ? (value as LessonType) : null;
}

export function generateStaticParams() {
  return LESSON_TYPES.map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type: rawType } = await params;
  const type = parseType(rawType);
  if (!type) return {};
  return { title: LESSON_TYPE_LABEL_DE[type] };
}

export default async function LessonTypeIndexPage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type: rawType } = await params;
  setRequestLocale(locale);

  const type = parseType(rawType);
  if (!type) notFound();

  const categories = getCategories({ type }).filter((category) => getCategoryLessons(category.id).length > 0);
  const requiredKeysByLevel = await getRequiredKeysByLevel(type);

  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
      <FadeIn>
        <h1 className="text-h1">{LESSON_TYPE_LABEL_DE[type]}</h1>
        <p className="mt-3 max-w-2xl text-body text-muted-foreground">{TYPE_DESCRIPTION_DE[type]}</p>
      </FadeIn>

      {categories.length === 0 && (
        <p className="mt-10 text-body text-muted-foreground">Hier gibt es noch keine Lektionen.</p>
      )}

      <div className="mt-10 space-y-12">
        {categories.map((category) => {
          const lessons = getCategoryLessons(category.id);
          return (
            <FadeIn key={category.id}>
              <section>
                <h2 className="text-h3">{category.title}</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {lessons.map((lesson) => (
                    <LessonBrowseCard
                      key={lesson.slug}
                      lesson={lesson}
                      requiredKeys={requiredKeysByLevel[lesson.level] ?? []}
                    />
                  ))}
                </div>
              </section>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
