"use client";

import { Clock, Lock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LevelBadge } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import type { LessonMeta } from "@/lib/lessons/types";
import { useLessonCompletion, isEffectivelyLocked } from "@/lib/lessons/level-progress";

/** One lesson card in the category browse grid. Client component (not just the inline JSX the
 *  page used to render directly) because "locked" is no longer purely the lesson's static
 *  content-availability status — it's combined at render time with the learner's own completion
 *  history (level-progression gate), which only exists in localStorage on the client. */
export function LessonBrowseCard({ lesson, requiredKeys }: { lesson: LessonMeta; requiredKeys: string[] }) {
  const { completedKeys } = useLessonCompletion();
  const isLocked = isEffectivelyLocked(lesson.status, requiredKeys, completedKeys);

  const cardBody = (
    <Card
      interactive={!isLocked}
      className={`group h-full gap-3 p-5 shadow-sm transition-all duration-300 ease-(--ease-premium) ${
        isLocked ? "opacity-60" : "hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between">
        <LevelBadge level={lesson.level} size="sm" />
        {isLocked ? (
          <Lock className="size-3.5 text-muted-foreground" />
        ) : (
          <ArrowRight className="size-3.5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 ease-(--ease-premium) group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
        )}
      </div>
      <p className="text-body font-medium">{lesson.title}</p>
      <p className="text-body-sm text-muted-foreground">{lesson.summary}</p>
      <div className="mt-1 flex items-center justify-between gap-2 text-caption text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5" />
          {lesson.durationMinutes} Min.
        </span>
      </div>
      {!isLocked && (
        <div className="flex items-center gap-2">
          <Progress value={lesson.progress} className="flex-1" />
          <span className="text-caption tabular-nums text-muted-foreground">{lesson.progress}%</span>
        </div>
      )}
    </Card>
  );

  return isLocked ? (
    <div title="Schließe die vorherige Stufe ab, um freizuschalten">{cardBody}</div>
  ) : (
    <Link href={lesson.href}>{cardBody}</Link>
  );
}
