"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Circle, Lock, Search, SearchX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { LevelBadge } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import type { CefrLevel, LessonMeta } from "@/lib/lessons/types";
import { useLessonCompletion, isEffectivelyLocked } from "@/lib/lessons/level-progress";

// Navigation/sidebar chrome — German UI, fixed regardless of explanation language (see the
// German-UI-vs-explanation-language split in project memory).
export function LessonSidebarLeft({
  activeSlug,
  categoryTitle,
  lessons,
  courseProgress,
  done,
  total,
  requiredKeysByLevel,
}: {
  activeSlug: string;
  categoryTitle: string;
  lessons: LessonMeta[];
  courseProgress: number;
  done: number;
  total: number;
  requiredKeysByLevel: Partial<Record<CefrLevel, string[]>>;
}) {
  const [query, setQuery] = useState("");
  const { completedKeys } = useLessonCompletion();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lessons;
    return lessons.filter((lesson) => lesson.title.toLowerCase().includes(q));
  }, [lessons, query]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">Kursfortschritt</p>
        <div className="mt-2 flex items-center gap-3">
          <Progress value={courseProgress} className="flex-1" />
          <span className="text-body-sm font-medium tabular-nums">{courseProgress}%</span>
        </div>
      </div>

      <div>
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">Aktuelles Kapitel</p>
        <p className="mt-2 text-h4">{categoryTitle}</p>
        <p className="mt-1 text-body-sm text-muted-foreground">
          {done} von {total} Lektionen abgeschlossen
        </p>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Lektionen suchen…"
          className="h-8 w-full rounded-lg border border-input bg-transparent ps-8 pe-2.5 text-body-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>

      <div>
        <p className="mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
          Lektionen in diesem Kapitel
        </p>
        <ul className="flex flex-col gap-1">
          {filtered.map((lesson) => {
            const isActive = lesson.slug === activeSlug;
            const isLocked = isEffectivelyLocked(
              lesson.status,
              requiredKeysByLevel[lesson.level] ?? [],
              completedKeys,
            );
            const lessonKey = `${lesson.type}/${lesson.level.toLowerCase()}/${lesson.slug}`;
            const isCompleted = lesson.status === "completed" || completedKeys.includes(lessonKey);
            const StatusIcon = isCompleted ? CheckCircle2 : isLocked ? Lock : Circle;

            const rowClass = cn(
              "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-body-sm transition-all duration-200 ease-(--ease-premium)",
              isActive && "bg-accent text-accent-foreground font-medium shadow-xs",
              !isActive && !isLocked && "text-foreground hover:translate-x-0.5 hover:bg-muted",
              isLocked && "cursor-not-allowed text-muted-foreground/60",
            );

            const content = (
              <>
                <StatusIcon
                  className={cn(
                    "size-4 shrink-0",
                    isCompleted && "text-success",
                    isActive && "text-accent-foreground",
                    !isActive && !isCompleted && !isLocked && "text-muted-foreground",
                  )}
                />
                <span className="flex-1 truncate">{lesson.title}</span>
                <LevelBadge level={lesson.level} size="sm" />
              </>
            );

            if (isLocked) {
              return (
                <li key={lesson.slug} title="Schließe die vorherige Lektion ab, um freizuschalten" className={rowClass}>
                  {content}
                </li>
              );
            }

            return (
              <li key={lesson.slug}>
                <Link href={lesson.href} className={rowClass}>
                  {content}
                </Link>
              </li>
            );
          })}
          {filtered.length === 0 && (
            <li className="flex flex-col items-center gap-2 px-2.5 py-8 text-center text-body-sm text-muted-foreground">
              <span className="flex size-9 items-center justify-center rounded-full bg-muted">
                <SearchX className="size-4" />
              </span>
              Keine Lektionen gefunden.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
