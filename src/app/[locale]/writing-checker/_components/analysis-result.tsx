"use client";

import type { ComponentType } from "react";
import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ListChecks,
  SpellCheck2,
  Wand2,
  Lightbulb,
  ArrowRight,
  Quote,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { LevelBadge } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import type { WritingAnalysis } from "../_lib/analyzer";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

function AnalysisSection({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={item}>
      <h3 className="flex items-center gap-2 text-h4">
        <Icon className="size-4.5 text-primary" />
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </motion.section>
  );
}

export function AnalysisResult({ analysis, original }: { analysis: WritingAnalysis; original: string }) {
  const t = useTranslations("writingChecker");

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={item} className="flex flex-wrap items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-body-sm font-medium",
            analysis.isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
          )}
        >
          {analysis.isCorrect ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
          {analysis.isCorrect ? t("correctLabel") : t("incorrectLabel")}
        </span>
        <span className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
          {t("difficultyTitle")}
          <LevelBadge level={analysis.difficulty} />
        </span>
      </motion.div>

      {!analysis.isCorrect && (
        <motion.div variants={item} className="space-y-2 rounded-xl bg-muted/50 p-4">
          <p className="text-body-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">{t("yourSentenceLabel")}:</span>{" "}
            <span className="text-destructive line-through decoration-destructive/50">{original}</span>
          </p>
          <p className="text-body-sm">
            <span className="font-medium text-foreground/80">{t("suggestedCorrectionLabel")}:</span>{" "}
            <span className="font-medium text-success">{analysis.correctedSentence}</span>
          </p>
        </motion.div>
      )}

      <AnalysisSection icon={ListChecks} title={t("mistakesTitle")}>
        {analysis.mistakes.length === 0 ? (
          <p className="flex items-center gap-1.5 text-body-sm text-success">
            <CheckCircle2 className="size-3.5" />
            {t("noMistakesTitle")}
          </p>
        ) : (
          <div className="space-y-2.5">
            {analysis.mistakes.map((mistake) => (
              <div key={mistake.original} className="rounded-lg bg-destructive/5 p-3.5">
                <p className="text-body-sm font-medium text-foreground">{mistake.issue}</p>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  <span className="text-destructive line-through decoration-destructive/50">{mistake.original}</span>
                  <span className="mx-1.5">→</span>
                  <span className="font-medium text-success">{mistake.correction}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </AnalysisSection>

      <AnalysisSection icon={SpellCheck2} title={t("vocabSuggestionsTitle")}>
        {analysis.vocabularySuggestions.length === 0 ? (
          <p className="text-body-sm text-muted-foreground">{t("noVocabSuggestionsTitle")}</p>
        ) : (
          <div className="space-y-2">
            {analysis.vocabularySuggestions.map((vocab) => (
              <div key={vocab.word} className="rounded-lg bg-accent px-3 py-2 text-body-sm text-accent-foreground">
                <p>
                  <span className="opacity-70 line-through">{vocab.word}</span>
                  <span className="mx-1.5">→</span>
                  <span className="font-medium">{vocab.suggestion}</span>
                </p>
                <p className="mt-0.5 text-caption opacity-80">{vocab.reason}</p>
              </div>
            ))}
          </div>
        )}
      </AnalysisSection>

      <AnalysisSection icon={Wand2} title={t("naturalAlternativeTitle")}>
        {analysis.naturalAlternative ? (
          <p className="flex items-start gap-2 rounded-lg bg-primary/5 p-3.5 text-body-sm font-medium text-foreground">
            <Quote className="mt-0.5 size-3.5 shrink-0 text-primary" />
            {analysis.naturalAlternative}
          </p>
        ) : (
          <p className="text-body-sm text-muted-foreground">{t("alreadyNaturalLabel")}</p>
        )}
      </AnalysisSection>

      <AnalysisSection icon={Lightbulb} title={t("explanationTitle")}>
        <p className="text-body-sm text-muted-foreground">{analysis.explanation}</p>
      </AnalysisSection>

      <AnalysisSection icon={Sparkles} title={t("betterExamplesTitle")}>
        <div className="space-y-2">
          {analysis.betterExamples.map((example) => (
            <div key={example.de} className="rounded-lg bg-muted/50 p-3.5">
              <p className="font-medium text-foreground">{example.de}</p>
              <p className="mt-0.5 text-body-sm text-muted-foreground">{example.en}</p>
            </div>
          ))}
        </div>
      </AnalysisSection>

      <motion.div variants={item}>
        <p className="mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
          {t("relatedTopicTitle")}
        </p>
        <Link
          href={analysis.relatedTopic.href}
          className="flex items-center justify-between gap-2 rounded-xl bg-card p-4 ring-1 ring-foreground/10 outline-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="font-medium">{analysis.relatedTopic.label}</span>
          <span className="flex items-center gap-1 text-body-sm font-medium text-primary">
            {t("reviewLessonLabel")}
            <ArrowRight className="size-3.5" />
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
