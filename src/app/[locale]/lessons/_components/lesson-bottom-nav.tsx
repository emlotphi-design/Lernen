"use client";

import { toast } from "sonner";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { LessonMeta } from "@/lib/lessons/types";
import { useLessonCompletion, isEffectivelyLocked } from "@/lib/lessons/level-progress";

// Bottom nav/buttons — German UI, fixed regardless of explanation language (see the German-UI-
// vs-explanation-language split in project memory).
export function LessonBottomNav({
  previousLesson,
  nextLesson,
  nextLessonRequiredKeys,
  lessonKey,
  initiallyCompleted,
}: {
  previousLesson: LessonMeta | null;
  nextLesson: LessonMeta | null;
  /** The content-bearing lesson keys required to unlock `nextLesson`'s level — see
   *  `getRequiredKeysByLevel`. */
  nextLessonRequiredKeys: string[];
  /** This lesson's own key ("type/level/slug"), so "mark complete" persists against the right
   *  entry and — for a lesson at the *next* level after this one — actually unlocks it. */
  lessonKey: string;
  initiallyCompleted: boolean;
}) {
  const { completedKeys, isCompleted, setCompletion } = useLessonCompletion();
  const completed = isCompleted(lessonKey) || initiallyCompleted;

  function toggleComplete() {
    const next = !completed;
    setCompletion(lessonKey, next);
    toast(next ? "Gut gemacht! Lektion abgeschlossen." : "Als nicht abgeschlossen markiert.");
  }

  const nextLessonLocked =
    nextLesson !== null && isEffectivelyLocked(nextLesson.status, nextLessonRequiredKeys, completedKeys);

  const navLinkClass = "gap-1.5";

  return (
    <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex justify-start">
        {previousLesson ? (
          <Link href={previousLesson.href} className={cn(buttonVariants({ variant: "outline" }), navLinkClass)}>
            <ArrowLeft className="size-3.5" />
            <span>
              Vorherige Lektion
              <span className="ms-1.5 hidden text-muted-foreground sm:inline">— {previousLesson.title}</span>
            </span>
          </Link>
        ) : (
          <span className={cn(buttonVariants({ variant: "outline" }), navLinkClass, "pointer-events-none opacity-40")}>
            <ArrowLeft className="size-3.5" />
            Vorherige Lektion
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
        {completed ? "Lektion abgeschlossen" : "Als abgeschlossen markieren"}
      </Button>

      <div className="flex justify-end">
        {nextLesson && !nextLessonLocked ? (
          <Link href={nextLesson.href} className={cn(buttonVariants({ variant: "outline" }), navLinkClass)}>
            <span>
              Nächste Lektion
              <span className="ms-1.5 hidden text-muted-foreground sm:inline">— {nextLesson.title}</span>
            </span>
            <ArrowRight className="size-3.5" />
          </Link>
        ) : nextLesson ? (
          <span
            title="Schließe die vorherige Lektion ab, um freizuschalten"
            className={cn(buttonVariants({ variant: "outline" }), navLinkClass, "cursor-not-allowed opacity-40")}
          >
            Nächste Lektion
            <Lock className="size-3.5" />
          </span>
        ) : (
          <span className="w-0" />
        )}
      </div>
    </div>
  );
}
