"use client";

import { motion } from "framer-motion";
import { PartyPopper, RotateCcw, ArrowRight, Zap, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { AnimatedNumber } from "./animated-number";

export function QuizResults({
  correctCount,
  total,
  xpEarned,
  maxXp,
  passed,
  nextLessonSlug,
  nextLessonTitle,
  yourScoreLabel,
  xpEarnedLabel,
  lessonCompleteTitle,
  lessonCompleteDesc,
  keepPracticingTitle,
  keepPracticingDesc,
  continueToNextLesson,
  retakeLabel,
  onRetake,
}: {
  correctCount: number;
  total: number;
  xpEarned: number;
  maxXp: number;
  passed: boolean;
  nextLessonSlug: string | null;
  nextLessonTitle: string | null;
  yourScoreLabel: string;
  xpEarnedLabel: string;
  lessonCompleteTitle: string;
  lessonCompleteDesc: string;
  keepPracticingTitle: string;
  keepPracticingDesc: string;
  continueToNextLesson: string;
  retakeLabel: string;
  onRetake: () => void;
}) {
  const percent = Math.round((correctCount / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mx-auto flex size-16 items-center justify-center rounded-full",
          passed ? "bg-success/15 text-success" : "bg-accent text-accent-foreground",
        )}
      >
        {passed ? <PartyPopper className="size-7" /> : <Target className="size-7" />}
      </motion.span>

      <h3 className="mt-4 text-h3">{passed ? lessonCompleteTitle : keepPracticingTitle}</h3>
      <p className="mt-1 text-body text-muted-foreground">{passed ? lessonCompleteDesc : keepPracticingDesc}</p>

      <div className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-3">
        <div className="rounded-xl bg-muted/50 p-4">
          <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">{yourScoreLabel}</p>
          <p className="mt-1 text-h2 tabular-nums">
            <AnimatedNumber value={percent} suffix="%" />
          </p>
          <p className="text-body-sm text-muted-foreground">
            {correctCount}/{total}
          </p>
        </div>
        <div className="rounded-xl bg-primary/5 p-4">
          <p className="flex items-center justify-center gap-1 text-caption font-medium tracking-wide text-primary uppercase">
            <Zap className="size-3.5 fill-current" />
            {xpEarnedLabel}
          </p>
          <p className="mt-1 text-h2 tabular-nums text-primary">
            <AnimatedNumber value={xpEarned} />
          </p>
          <p className="text-body-sm text-muted-foreground">/ {maxXp} XP</p>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" onClick={onRetake}>
          <RotateCcw className="size-3.5" />
          {retakeLabel}
        </Button>
        {passed && nextLessonSlug && nextLessonTitle && (
          <Link href={`/grammar/${nextLessonSlug}`} className={cn(buttonVariants({ variant: "default" }))}>
            {continueToNextLesson}
            <ArrowRight className="size-3.5" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
