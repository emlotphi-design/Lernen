"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { LessonListItem } from "../_lib/lessons";

export function LessonBottomNav({
  previousLesson,
  nextLesson,
  initiallyCompleted,
  previousLabel,
  nextLabel,
  markCompleteLabel,
  markedCompleteLabel,
  markCompleteToast,
  markIncompleteToast,
  lockedHint,
}: {
  previousLesson: LessonListItem | null;
  nextLesson: LessonListItem | null;
  initiallyCompleted: boolean;
  previousLabel: string;
  nextLabel: string;
  markCompleteLabel: string;
  markedCompleteLabel: string;
  markCompleteToast: string;
  markIncompleteToast: string;
  lockedHint: string;
}) {
  const [completed, setCompleted] = useState(initiallyCompleted);

  function toggleComplete() {
    setCompleted((prev) => {
      toast(prev ? markIncompleteToast : markCompleteToast);
      return !prev;
    });
  }

  const navLinkClass = "gap-1.5";

  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex justify-start">
        {previousLesson ? (
          <Link
            href={`/grammar/${previousLesson.slug}`}
            className={cn(buttonVariants({ variant: "outline" }), navLinkClass)}
          >
            <ArrowLeft className="size-3.5" />
            <span>
              {previousLabel}
              <span className="ms-1.5 hidden text-muted-foreground sm:inline">— {previousLesson.titleDe}</span>
            </span>
          </Link>
        ) : (
          <span className={cn(buttonVariants({ variant: "outline" }), navLinkClass, "pointer-events-none opacity-40")}>
            <ArrowLeft className="size-3.5" />
            {previousLabel}
          </span>
        )}
      </div>

      <Button
        size="lg"
        variant={completed ? "secondary" : "default"}
        className={cn(completed && "text-success")}
        onClick={toggleComplete}
      >
        <CheckCircle2 className={cn("size-4", completed && "fill-success/20")} />
        {completed ? markedCompleteLabel : markCompleteLabel}
      </Button>

      <div className="flex justify-end">
        {nextLesson && nextLesson.status !== "locked" ? (
          <Link
            href={`/grammar/${nextLesson.slug}`}
            className={cn(buttonVariants({ variant: "outline" }), navLinkClass)}
          >
            <span>
              {nextLabel}
              <span className="ms-1.5 hidden text-muted-foreground sm:inline">— {nextLesson.titleDe}</span>
            </span>
            <ArrowRight className="size-3.5" />
          </Link>
        ) : nextLesson ? (
          <span
            title={lockedHint}
            className={cn(buttonVariants({ variant: "outline" }), navLinkClass, "cursor-not-allowed opacity-40")}
          >
            {nextLabel}
            <Lock className="size-3.5" />
          </span>
        ) : (
          <span className="w-0" />
        )}
      </div>
    </div>
  );
}
