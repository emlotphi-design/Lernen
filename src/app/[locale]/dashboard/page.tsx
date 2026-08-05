import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Plane,
  ShoppingBag,
  UtensilsCrossed,
  Users,
  Briefcase,
  Cpu,
  Stethoscope,
  Utensils,
  GraduationCap,
  CloudSun,
  Bus,
  BookOpenText,
  Layers,
  Headphones,
  Mic,
  ListChecks,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { ContinueLearning, type ContinueLesson } from "../_components/continue-learning";
import { GrammarDashboard, type GrammarCategory, type Difficulty } from "../_components/grammar-dashboard";
import { VocabularyExplorer, type VocabCategory } from "../_components/vocabulary-explorer";
import { Today } from "../_components/today";
import { StatsPreview } from "../_components/stats-preview";
import { RecommendedLessons } from "../_components/recommended-lessons";
import { PopularTopics } from "../_components/popular-topics";
import {
  listLessons,
  getCategories,
  getCategoryLessons,
  getCategoryProgress,
  buildTypeIndexHref,
  LESSON_TYPE_LABEL_DE,
  type LessonType,
} from "@/lib/lessons";

const TYPE_ICON: Record<LessonType, LucideIcon> = {
  grammar: BookOpenText,
  vocabulary: Layers,
  reading: BookOpenText,
  listening: Headphones,
  speaking: Mic,
  quiz: ListChecks,
};

function difficultyForLevel(level: string): Difficulty {
  if (level === "A1" || level === "A2") return "beginner";
  if (level === "B1" || level === "B2") return "intermediate";
  return "advanced";
}

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tDashboard = await getTranslations("dashboard");
  const tCommon = await getTranslations("common");

  // "Continue learning" — lessons already started (some progress, not yet completed), most
  // progress first, across every lesson type. Real per-user tracking isn't wired up yet (no
  // working auth session — see src/lib/lessons/progress.ts), so this reads the same placeholder
  // progress that backs each lesson's own page.
  const continueLessons: ContinueLesson[] = listLessons()
    .filter((lesson) => lesson.status === "available" && lesson.progress > 0)
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 5)
    .map((lesson) => ({
      key: `${lesson.type}-${lesson.slug}`,
      title: lesson.title,
      level: lesson.level,
      category: LESSON_TYPE_LABEL_DE[lesson.type],
      progress: lesson.progress,
      icon: TYPE_ICON[lesson.type],
      timeLeftLabel: t("continueLearningTimeLeft", {
        min: Math.max(1, Math.round((lesson.durationMinutes * (100 - lesson.progress)) / 100)),
      }),
      lastOpenedLabel: t("continueOpenedToday"),
      href: lesson.href,
    }));

  const grammarDashboardCategories: GrammarCategory[] = getCategories({ type: "grammar" })
    .map((category) => ({ category, lessons: getCategoryLessons(category.id) }))
    .filter(({ lessons }) => lessons.length > 0)
    .map(({ category, lessons }) => {
      const { progress } = getCategoryProgress(category.id);
      const firstAvailable = lessons.find((l) => l.status !== "locked");
      return {
        key: category.id,
        label: category.title,
        icon: TYPE_ICON.grammar,
        lessons: lessons.length,
        completion: progress,
        difficulty: difficultyForLevel(category.level),
        href: firstAvailable?.href ?? buildTypeIndexHref("grammar"),
      };
    });

  const vocabExplorerCategories: VocabCategory[] = [
    { key: "travel", label: t("vocabCatTravel"), icon: Plane, wordCount: 145, level: "A2" },
    { key: "restaurant", label: t("vocabCatRestaurant"), icon: UtensilsCrossed, wordCount: 120, level: "A1" },
    { key: "shopping", label: t("vocabCatShopping"), icon: ShoppingBag, wordCount: 110, level: "A1" },
    { key: "hospital", label: t("vocabCatHospital"), icon: Stethoscope, wordCount: 95, level: "B1" },
    { key: "business", label: t("vocabCatBusiness"), icon: Briefcase, wordCount: 160, level: "B2" },
    { key: "technology", label: t("vocabCatTechnology"), icon: Cpu, wordCount: 130, level: "B1" },
    { key: "family", label: t("vocabCatFamily"), icon: Users, wordCount: 80, level: "A1" },
    { key: "food", label: t("vocabCatFood"), icon: Utensils, wordCount: 150, level: "A1" },
    { key: "university", label: t("vocabCatUniversity"), icon: GraduationCap, wordCount: 100, level: "B1" },
    { key: "weather", label: t("vocabCatWeather"), icon: CloudSun, wordCount: 70, level: "A2" },
    { key: "transportation", label: t("vocabCatTransportation"), icon: Bus, wordCount: 90, level: "A2" },
  ];

  // A short, varied set pulled from across every lesson type — anything not locked and not
  // already finished.
  const recommendedLessons = listLessons()
    .filter((lesson) => lesson.status !== "locked" && lesson.status !== "completed")
    .slice(0, 4)
    .map((lesson) => ({
      title: lesson.title,
      level: lesson.level,
      minutes: lesson.durationMinutes,
      href: lesson.href,
    }));

  const popularTopics = [
    t("vocabCatTravel"),
    t("vocabCatBusiness"),
    t("topicEveryday"),
    t("vocabCatTechnology"),
    t("topicExam"),
    t("vocabCatShopping"),
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-h1">{tDashboard("title")}</h1>
        </FadeIn>
      </section>

      <Today
        title={t("todayTitle")}
        dailyProgressLabel={t("dailyProgressLabel")}
        unitMinutes={t("unitMinutes")}
        dailyGoalTitle={t("dailyGoalTitle")}
        dailyGoalDesc={t("dailyGoalDesc")}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2">{t("statsTitle")}</h2>
            <p className="mt-3 text-body text-muted-foreground">{t("statsSubtitle")}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10">
            <StatsPreview
              streakLabel={tDashboard("streak")}
              xpLabel={tDashboard("xp")}
              achievementsLabel={tDashboard("achievements")}
            />
          </div>
        </FadeIn>
      </section>

      {continueLessons.length > 0 && (
        <ContinueLearning
          title={t("continueLearningTitle")}
          subtitle={t("continueLearningSubtitle")}
          cta={t("continueLearningCta")}
          lessons={continueLessons}
        />
      )}

      {recommendedLessons.length > 0 && (
        <RecommendedLessons
          title={t("recommendedTitle")}
          subtitle={t("recommendedSubtitle")}
          unitMinutes={t("unitMinutes")}
          lessons={recommendedLessons}
        />
      )}

      <GrammarDashboard
        title={t("grammarCategoriesTitle")}
        subtitle={t("grammarCategoriesSubtitle")}
        categories={grammarDashboardCategories}
        lessonsLabel={t("roadmapLessonsLabel")}
        difficultyLabels={{
          beginner: t("difficultyBeginner"),
          intermediate: t("difficultyIntermediate"),
          advanced: t("difficultyAdvanced"),
        }}
        continueLabel={tCommon("continue")}
      />

      <VocabularyExplorer
        title={t("vocabExplorerTitle")}
        subtitle={t("vocabExplorerSubtitle")}
        categories={vocabExplorerCategories}
        wordsLabel={t("vocabWordsLabel")}
        continueLabel={tCommon("continue")}
      />

      <PopularTopics title={t("popularTopicsTitle")} topics={popularTopics} />
    </>
  );
}
