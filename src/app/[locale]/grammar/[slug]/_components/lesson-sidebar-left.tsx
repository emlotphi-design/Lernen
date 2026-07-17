"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Circle, Lock, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { LevelBadge } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import type { LessonListItem } from "../_lib/lessons";

export function LessonSidebarLeft({
  activeSlug,
  chapterTitle,
  lessons,
  courseProgress,
  courseProgressLabel,
  currentChapterLabel,
  lessonListLabel,
  searchPlaceholder,
  noResultsLabel,
  completedCountLabel,
  lockedHint,
}: {
  activeSlug: string;
  chapterTitle: string;
  lessons: LessonListItem[];
  courseProgress: number;
  courseProgressLabel: string;
  currentChapterLabel: string;
  lessonListLabel: string;
  searchPlaceholder: string;
  noResultsLabel: string;
  completedCountLabel: string;
  lockedHint: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lessons;
    return lessons.filter((lesson) => lesson.titleDe.toLowerCase().includes(q));
  }, [lessons, query]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
          {courseProgressLabel}
        </p>
        <div className="mt-2 flex items-center gap-3">
          <Progress value={courseProgress} className="flex-1" />
          <span className="text-body-sm font-medium tabular-nums">{courseProgress}%</span>
        </div>
      </div>

      <div>
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
          {currentChapterLabel}
        </p>
        <p className="mt-2 text-h4">{chapterTitle}</p>
        <p className="mt-1 text-body-sm text-muted-foreground">{completedCountLabel}</p>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="h-8 w-full rounded-lg border border-input bg-transparent ps-8 pe-2.5 text-body-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </div>

      <div>
        <p className="mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
          {lessonListLabel}
        </p>
        <ul className="flex flex-col gap-1">
          {filtered.map((lesson) => {
            const isActive = lesson.slug === activeSlug;
            const isLocked = lesson.status === "locked";
            const StatusIcon =
              lesson.status === "completed" ? CheckCircle2 : lesson.status === "locked" ? Lock : Circle;

            const rowClass = cn(
              "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-body-sm transition-colors",
              isActive && "bg-accent text-accent-foreground font-medium",
              !isActive && !isLocked && "text-foreground hover:bg-muted",
              isLocked && "cursor-not-allowed text-muted-foreground/60",
            );

            const content = (
              <>
                <StatusIcon
                  className={cn(
                    "size-4 shrink-0",
                    lesson.status === "completed" && "text-success",
                    isActive && "text-accent-foreground",
                    !isActive && lesson.status === "available" && "text-muted-foreground",
                  )}
                />
                <span className="flex-1 truncate">{lesson.titleDe}</span>
                <LevelBadge level={lesson.level} size="sm" />
              </>
            );

            if (isLocked) {
              return (
                <li key={lesson.slug} title={lockedHint} className={rowClass}>
                  {content}
                </li>
              );
            }

            return (
              <li key={lesson.slug}>
                <Link href={`/grammar/${lesson.slug}`} className={rowClass}>
                  {content}
                </Link>
              </li>
            );
          })}
          {filtered.length === 0 && (
            <li className="px-2.5 py-4 text-center text-body-sm text-muted-foreground">{noResultsLabel}</li>
          )}
        </ul>
      </div>
    </div>
  );
}
