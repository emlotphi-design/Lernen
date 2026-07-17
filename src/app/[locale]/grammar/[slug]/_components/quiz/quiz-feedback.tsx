"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, BookMarked, ArrowUpRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizFeedback({
  isCorrect,
  explanation,
  grammarRule,
  referenceSectionId,
  referenceLabel,
  correctLabel,
  incorrectLabel,
  grammarRuleLabel,
  reviewInLesson,
  xp,
  xpShort,
  correctAnswerLabel,
  correctAnswerText,
}: {
  isCorrect: boolean;
  explanation: string;
  grammarRule: string;
  referenceSectionId: string;
  referenceLabel: string;
  correctLabel: string;
  incorrectLabel: string;
  grammarRuleLabel: string;
  reviewInLesson: string;
  xp: number;
  xpShort: string;
  correctAnswerLabel: string;
  correctAnswerText?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isCorrect ? "correct" : "incorrect"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mt-5 space-y-3 rounded-xl border p-4",
          isCorrect ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <div className={cn("flex items-center gap-2 font-medium", isCorrect ? "text-success" : "text-destructive")}>
            {isCorrect ? <CheckCircle2 className="size-5" /> : <XCircle className="size-5" />}
            {isCorrect ? correctLabel : incorrectLabel}
          </div>
          {isCorrect && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-caption font-medium text-primary"
            >
              <Zap className="size-3.5 fill-current" />+{xp} {xpShort}
            </motion.span>
          )}
        </div>

        {!isCorrect && correctAnswerText && (
          <p className="text-body-sm text-foreground/90">
            <span className="font-medium">{correctAnswerLabel}:</span> {correctAnswerText}
          </p>
        )}

        <p className="text-body-sm text-foreground/90">{explanation}</p>

        <p className="flex items-start gap-1.5 text-body-sm text-muted-foreground">
          <BookMarked className="mt-0.5 size-3.5 shrink-0" />
          <span>
            <span className="font-medium text-foreground/80">{grammarRuleLabel}:</span> {grammarRule}
          </span>
        </p>

        <a
          href={`#${referenceSectionId}`}
          className="inline-flex items-center gap-1 text-body-sm font-medium text-primary hover:underline"
        >
          {reviewInLesson}: {referenceLabel}
          <ArrowUpRight className="size-3.5" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
