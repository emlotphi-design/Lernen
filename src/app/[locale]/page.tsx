import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  Boxes,
  Clock,
  Tag,
  UserRound,
  Compass,
  Plane,
  ShoppingBag,
  UtensilsCrossed,
  Users,
  Briefcase,
  Cpu,
  SpellCheck,
  Volume2,
  Footprints,
  MessagesSquare,
  Award,
  Crown,
  History,
  ArrowRightLeft,
  Key,
  Repeat,
  ArrowUpDown,
  RotateCcw,
  GitBranch,
  Link2,
  Rows3,
  Stethoscope,
  Utensils,
  GraduationCap,
  CloudSun,
  Bus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { Hero } from "./_components/hero";
import { ProductPreview } from "./_components/product-preview";
import { Roadmap } from "./_components/roadmap";
import { ContinueLearning } from "./_components/continue-learning";
import { LevelsGrid } from "./_components/levels-grid";
import { CategoryGrid } from "./_components/category-grid";
import { GrammarDashboard, type GrammarCategory } from "./_components/grammar-dashboard";
import { VocabularyExplorer, type VocabCategory } from "./_components/vocabulary-explorer";
import { Skills } from "./_components/skills";
import { AiTeacherPreview } from "./_components/ai-teacher-preview";
import { Today } from "./_components/today";
import { StatsPreview } from "./_components/stats-preview";
import { RecommendedLessons } from "./_components/recommended-lessons";
import { PopularTopics } from "./_components/popular-topics";
import { Testimonials } from "./_components/testimonials";
import { FloatingDock } from "./_components/floating-dock";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const tQuiz = await getTranslations("quiz");
  const tDashboard = await getTranslations("dashboard");
  const tCommon = await getTranslations("common");

  const roadmapLevels = [
    {
      key: "alphabet",
      title: t("levelAlphabetName"),
      desc: t("levelAlphabetDesc"),
      icon: SpellCheck,
      lessons: 15,
      hours: 3,
      progress: 100,
      status: "completed" as const,
    },
    {
      key: "pronunciation",
      title: t("levelPronunciationName"),
      desc: t("levelPronunciationDesc"),
      icon: Volume2,
      lessons: 12,
      hours: 3,
      progress: 100,
      status: "completed" as const,
    },
    {
      key: "A1",
      title: "A1",
      desc: t("levelA1Desc"),
      icon: Footprints,
      lessons: 180,
      hours: 45,
      progress: 65,
      status: "current" as const,
    },
    {
      key: "A2",
      title: "A2",
      desc: t("levelA2Desc"),
      icon: Compass,
      lessons: 210,
      hours: 50,
      progress: 0,
      status: "locked" as const,
    },
    {
      key: "B1",
      title: "B1",
      desc: t("levelB1Desc"),
      icon: MessagesSquare,
      lessons: 240,
      hours: 60,
      progress: 0,
      status: "locked" as const,
    },
    {
      key: "B2",
      title: "B2",
      desc: t("levelB2Desc"),
      icon: Users,
      lessons: 260,
      hours: 65,
      progress: 0,
      status: "locked" as const,
    },
    {
      key: "C1",
      title: "C1",
      desc: t("levelC1Desc"),
      icon: Award,
      lessons: 220,
      hours: 55,
      progress: 0,
      status: "locked" as const,
    },
    {
      key: "C2",
      title: "C2",
      desc: t("levelC2Desc"),
      icon: Crown,
      lessons: 180,
      hours: 45,
      progress: 0,
      status: "locked" as const,
    },
  ];

  const continueLessons = [
    {
      key: "modalverben",
      title: "Modalverben",
      level: "A2" as const,
      category: t("grammarCatVerbs"),
      progress: 90,
      icon: Key,
      timeLeftLabel: t("continueLearningTimeLeft", { min: 5 }),
      lastOpenedLabel: t("continueOpenedToday"),
    },
    {
      key: "praesens",
      title: "Präsens",
      level: "A1" as const,
      category: t("grammarCatVerbs"),
      progress: 80,
      icon: Clock,
      timeLeftLabel: t("continueLearningTimeLeft", { min: 8 }),
      lastOpenedLabel: t("continueOpenedYesterday"),
    },
    {
      key: "akkusativ",
      title: "Akkusativ",
      level: "A1" as const,
      category: t("grammarCatCases"),
      progress: 60,
      icon: Boxes,
      timeLeftLabel: t("continueLearningTimeLeft", { min: 12 }),
      lastOpenedLabel: t("continueOpened3DaysAgo"),
    },
    {
      key: "perfekt",
      title: "Perfekt",
      level: "A2" as const,
      category: t("grammarCatVerbs"),
      progress: 45,
      icon: History,
      timeLeftLabel: t("continueLearningTimeLeft", { min: 15 }),
      lastOpenedLabel: t("continueOpened2DaysAgo"),
    },
    {
      key: "dativ",
      title: "Dativ",
      level: "B1" as const,
      category: t("grammarCatCases"),
      progress: 25,
      icon: ArrowRightLeft,
      timeLeftLabel: t("continueLearningTimeLeft", { min: 20 }),
      lastOpenedLabel: t("continueOpenedWeekAgo"),
    },
  ];

  const grammarDashboardCategories: GrammarCategory[] = [
    { key: "articles", label: t("gramCatArticles"), icon: Tag, lessons: 18, completion: 85, difficulty: "beginner" },
    { key: "pronouns", label: t("grammarCatPronouns"), icon: UserRound, lessons: 15, completion: 70, difficulty: "beginner" },
    { key: "verbConjugation", label: t("gramCatVerbConjugation"), icon: Repeat, lessons: 24, completion: 55, difficulty: "beginner" },
    { key: "tenses", label: t("gramCatTenses"), icon: Clock, lessons: 22, completion: 40, difficulty: "intermediate" },
    { key: "cases", label: t("grammarCatCases"), icon: Boxes, lessons: 20, completion: 30, difficulty: "intermediate" },
    { key: "modalVerbs", label: t("gramCatModalVerbs"), icon: Key, lessons: 12, completion: 60, difficulty: "beginner" },
    { key: "wordOrder", label: t("gramCatWordOrder"), icon: ArrowUpDown, lessons: 14, completion: 20, difficulty: "intermediate" },
    { key: "prepositions", label: t("grammarCatPrepositions"), icon: Compass, lessons: 18, completion: 15, difficulty: "intermediate" },
    { key: "passive", label: t("gramCatPassive"), icon: RotateCcw, lessons: 10, completion: 0, difficulty: "advanced" },
    { key: "konjunktiv", label: t("gramCatKonjunktiv"), icon: GitBranch, lessons: 16, completion: 0, difficulty: "advanced" },
    { key: "relativeClauses", label: t("gramCatRelativeClauses"), icon: Link2, lessons: 12, completion: 0, difficulty: "advanced" },
    { key: "sentenceStructure", label: t("grammarCatSentence"), icon: Rows3, lessons: 14, completion: 25, difficulty: "intermediate" },
  ];

  const vocabCategories = [
    { icon: Plane, label: t("vocabCatTravel") },
    { icon: ShoppingBag, label: t("vocabCatShopping") },
    { icon: UtensilsCrossed, label: t("vocabCatRestaurant") },
    { icon: Users, label: t("vocabCatFamily") },
    { icon: Briefcase, label: t("vocabCatBusiness") },
    { icon: Cpu, label: t("vocabCatTechnology") },
  ];

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

  const levelDescs = {
    A1: t("levelA1Desc"),
    A2: t("levelA2Desc"),
    B1: t("levelB1Desc"),
    B2: t("levelB2Desc"),
    C1: t("levelC1Desc"),
    C2: t("levelC2Desc"),
  } as const;

  const recommendedLessons = [
    { title: t("recLesson1"), level: "A2" as const, minutes: 12 },
    { title: t("recLesson2"), level: "A1" as const, minutes: 8 },
    { title: t("recLesson3"), level: "A2" as const, minutes: 15 },
    { title: t("recLesson4"), level: "A1" as const, minutes: 10 },
  ];

  const popularTopics = [
    t("vocabCatTravel"),
    t("vocabCatBusiness"),
    t("topicEveryday"),
    t("vocabCatTechnology"),
    t("topicExam"),
    t("vocabCatShopping"),
  ];

  const testimonials = [
    { quote: t("testimonial1Quote"), name: t("testimonial1Name"), role: t("testimonial1Role") },
    { quote: t("testimonial2Quote"), name: t("testimonial2Name"), role: t("testimonial2Role") },
    { quote: t("testimonial3Quote"), name: t("testimonial3Name"), role: t("testimonial3Role") },
  ];

  return (
    <>
      <Hero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        ctaPrimary={t("ctaPrimary")}
        ctaSecondary={t("ctaSecondary")}
        scrollHint={t("heroScrollHint")}
        stats={{
          lessons: t("heroStatLessons"),
          curriculum: t("heroStatCurriculum"),
          vocabulary: t("heroStatVocabulary"),
          quizzes: t("heroStatQuizzes"),
          aiTeacher: t("heroStatAiTeacher"),
        }}
      />

      <Roadmap
        title={t("roadmapTitle")}
        subtitle={t("roadmapSubtitle")}
        levels={roadmapLevels}
        lessonsLabel={t("roadmapLessonsLabel")}
        hoursLabel={t("roadmapHoursLabel")}
        completedLabel={t("roadmapCompletedLabel")}
        currentLabel={t("roadmapCurrentLabel")}
        lockedLabel={t("roadmapLockedLabel")}
      />

      <section>
        <FadeIn>
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <ProductPreview
              grammarLabel={tNav("grammar")}
              quizLabel={tQuiz("title")}
              dictionaryLabel={tNav("dictionary")}
            />
          </div>
        </FadeIn>
      </section>

      <ContinueLearning
        title={t("continueLearningTitle")}
        subtitle={t("continueLearningSubtitle")}
        cta={t("continueLearningCta")}
        lessons={continueLessons}
      />

      <LevelsGrid
        title={t("levelsGridTitle")}
        subtitle={t("levelsGridSubtitle")}
        alphabetName={t("levelAlphabetName")}
        alphabetDesc={t("levelAlphabetDesc")}
        pronunciationName={t("levelPronunciationName")}
        pronunciationDesc={t("levelPronunciationDesc")}
        levelDescs={levelDescs}
      />

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

      <CategoryGrid
        title={t("vocabCategoriesTitle")}
        subtitle={t("vocabCategoriesSubtitle")}
        items={vocabCategories}
      />

      <VocabularyExplorer
        title={t("vocabExplorerTitle")}
        subtitle={t("vocabExplorerSubtitle")}
        categories={vocabExplorerCategories}
        wordsLabel={t("vocabWordsLabel")}
        continueLabel={tCommon("continue")}
      />

      <Skills
        title={t("skillsTitle")}
        subtitle={t("skillsSubtitle")}
        conversationsTitle={t("skillConversationsTitle")}
        conversationsDesc={t("skillConversationsDesc")}
        readingTitle={t("featureReadingTitle")}
        readingDesc={t("featureReadingDesc")}
        listeningTitle={t("featureListeningTitle")}
        listeningDesc={t("featureListeningDesc")}
        writingTitle={t("skillWritingTitle")}
        writingDesc={t("skillWritingDesc")}
      />

      <section id="ai-tutor" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-h2">{t("aiTeacherSectionTitle")}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10">
            <AiTeacherPreview
              title={t("featureAiTitle")}
              description={t("featureAiDesc")}
              question={t("aiQuestion")}
              answer={t("aiAnswer")}
            />
          </div>
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

      <RecommendedLessons
        title={t("recommendedTitle")}
        subtitle={t("recommendedSubtitle")}
        unitMinutes={t("unitMinutes")}
        lessons={recommendedLessons}
      />

      <PopularTopics title={t("popularTopicsTitle")} topics={popularTopics} />

      <Testimonials
        title={t("testimonialsTitle")}
        subtitle={t("testimonialsSubtitle")}
        items={testimonials}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--color-primary-300),transparent_40%),transparent_60%)]"
            />
            <h2 className="relative text-h2">{t("closingTitle")}</h2>
            <p className="relative mx-auto mt-3 max-w-md text-body-lg text-primary-foreground/80">
              {t("closingSubtitle")}
            </p>
            <div className="relative mt-8">
              <Button
                size="lg"
                variant="secondary"
                nativeButton={false}
                render={
                  <Link href="/auth/sign-up">
                    {t("closingButton")}
                    <ArrowRight className="size-4" />
                  </Link>
                }
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <FloatingDock
        aiLabel={t("aiAssistantButtonLabel")}
        continueLabel={t("continueLearningCta")}
        backToTopLabel={tCommon("backToTop")}
      />
    </>
  );
}
