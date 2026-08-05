import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  Compass,
  Footprints,
  Volume2,
  MessagesSquare,
  Users,
  Award,
  Crown,
  SpellCheck,
  BookOpen,
  BookMarked,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { ProductPreview } from "./_components/product-preview";
import { Roadmap } from "./_components/roadmap";
import { Skills } from "./_components/skills";
import { AiTeacherPreview } from "./_components/ai-teacher-preview";
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

  const featureItems = [
    { icon: BookOpen, title: t("featureGrammarTitle"), desc: t("featureGrammarDesc") },
    { icon: BookMarked, title: t("featureDictionaryTitle"), desc: t("featureDictionaryDesc") },
    { icon: Layers, title: t("featureVocabularyTitle"), desc: t("featureVocabularyDesc") },
    { icon: CheckCircle2, title: t("featureQuizTitle"), desc: t("featureQuizDesc") },
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

      <Features title={t("featuresTitle")} items={featureItems} />

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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2">{t("interactiveDemoTitle")}</h2>
            <p className="mt-3 text-body text-muted-foreground">{t("interactiveDemoSubtitle")}</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10">
            <ProductPreview
              grammarLabel={tNav("grammar")}
              quizLabel={tQuiz("title")}
              dictionaryLabel={tNav("dictionary")}
            />
          </div>
        </FadeIn>
      </section>

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

      <section id="lehrer" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
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
