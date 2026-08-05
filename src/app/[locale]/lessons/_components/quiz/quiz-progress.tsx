"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizProgress({
  total,
  currentIndex,
  results,
  progressLabel,
}: {
  total: number;
  currentIndex: number;
  results: (boolean | null)[];
  progressLabel: string;
}) {
  const answeredCount = results.filter((r) => r !== null).length;
  const percent = Math.round((answeredCount / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between text-caption text-muted-foreground">
        <span>{progressLabel}</span>
        <span className="tabular-nums">{percent}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="mt-4 flex items-center gap-2">
        {results.map((result, i) => {
          const isCurrent = i === currentIndex;
          return (
            <span
              key={i}
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full text-caption font-medium transition-colors",
                result === true && "bg-success text-success-foreground",
                result === false && "bg-destructive/15 text-destructive",
                result === null && !isCurrent && "bg-muted text-muted-foreground",
                result === null && isCurrent && "bg-accent text-accent-foreground ring-2 ring-primary/40",
              )}
            >
              {result === true ? (
                <Check className="size-3.5" />
              ) : result === false ? (
                <X className="size-3.5" />
              ) : (
                i + 1
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
