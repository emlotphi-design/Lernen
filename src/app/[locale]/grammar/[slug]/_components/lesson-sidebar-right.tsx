"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Bookmark, Share2, Bot, ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { LevelBadge } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import type { LessonListItem } from "../_lib/lessons";

export function LessonSidebarRight({
  progress,
  nextLesson,
  learningProgressTitle,
  quickNotesTitle,
  quickNotesPlaceholder,
  bookmarkLabel,
  bookmarkedLabel,
  bookmarkToast,
  unbookmarkToast,
  shareLabel,
  shareToast,
  askAiLabel,
  askAiComingSoon,
  nextLessonLabel,
  lockedHint,
}: {
  progress: number;
  nextLesson: LessonListItem | null;
  learningProgressTitle: string;
  quickNotesTitle: string;
  quickNotesPlaceholder: string;
  bookmarkLabel: string;
  bookmarkedLabel: string;
  bookmarkToast: string;
  unbookmarkToast: string;
  shareLabel: string;
  shareToast: string;
  askAiLabel: string;
  askAiComingSoon: string;
  nextLessonLabel: string;
  lockedHint: string;
}) {
  const [bookmarked, setBookmarked] = useState(false);
  const [notes, setNotes] = useState("");

  function toggleBookmark() {
    setBookmarked((prev) => {
      toast(prev ? unbookmarkToast : bookmarkToast);
      return !prev;
    });
  }

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // clipboard access unavailable — the toast still confirms intent
    }
    toast(shareToast);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
          {learningProgressTitle}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Progress value={progress} className="flex-1" />
          <span className="text-body-sm font-medium tabular-nums">{progress}%</span>
        </div>
      </div>

      <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
          {quickNotesTitle}
        </p>
        <Textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder={quickNotesPlaceholder}
          className="mt-3 min-h-24 text-body-sm"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className={cn("flex-1", bookmarked && "border-primary/40 bg-accent text-accent-foreground")}
          onClick={toggleBookmark}
        >
          <Bookmark className={cn("size-3.5", bookmarked && "fill-current")} />
          {bookmarked ? bookmarkedLabel : bookmarkLabel}
        </Button>
        <Button variant="outline" size="sm" className="flex-1" onClick={handleShare}>
          <Share2 className="size-3.5" />
          {shareLabel}
        </Button>
      </div>

      <Button
        className="w-full border border-primary-300/30 bg-primary/90 text-primary-foreground"
        onClick={() => toast(askAiComingSoon)}
      >
        <Bot className="size-4" />
        {askAiLabel}
      </Button>

      {nextLesson && (
        <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
          <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
            {nextLessonLabel}
          </p>
          {nextLesson.status === "locked" ? (
            <div className="mt-3 flex items-center gap-2.5 opacity-60" title={lockedHint}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Lock className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{nextLesson.titleDe}</p>
                <LevelBadge level={nextLesson.level} size="sm" className="mt-1" />
              </div>
            </div>
          ) : (
            <Link
              href={`/grammar/${nextLesson.slug}`}
              className="mt-3 flex items-center gap-2.5 rounded-lg transition-colors hover:bg-muted"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <ArrowRight className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{nextLesson.titleDe}</p>
                <LevelBadge level={nextLesson.level} size="sm" className="mt-1" />
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
