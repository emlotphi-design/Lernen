"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Bookmark, Bot, ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { LevelBadge } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import type { LessonMeta } from "@/lib/lessons/types";

// Sidebar chrome/buttons — German UI, fixed regardless of explanation language (see the
// German-UI-vs-explanation-language split in project memory). This is the single place lesson
// progress is displayed (the lesson header shows only objective facts — level/duration/date —
// not to repeat this same number twice on one page).
export function LessonSidebarRight({
  progress,
  nextLesson,
}: {
  progress: number;
  nextLesson: LessonMeta | null;
}) {
  const [bookmarked, setBookmarked] = useState(false);
  const [notes, setNotes] = useState("");

  function toggleBookmark() {
    setBookmarked((prev) => {
      toast(prev ? "Lesezeichen entfernt" : "Lektion gespeichert");
      return !prev;
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/10">
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">Lernfortschritt</p>
        <div className="mt-3 flex items-center gap-3">
          <Progress value={progress} className="flex-1" />
          <span className="text-body-sm font-medium tabular-nums">{progress}%</span>
        </div>
      </div>

      <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/10">
        <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">Notizen</p>
        <Textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Notiere dir, was du dir merken willst…"
          dir="auto"
          className="mt-3 min-h-24 text-body-sm"
        />
      </div>

      <Button
        variant="outline"
        size="sm"
        className={cn("w-full", bookmarked && "border-primary/40 bg-accent text-accent-foreground")}
        onClick={toggleBookmark}
      >
        <Bookmark className={cn("size-3.5", bookmarked && "fill-current")} />
        {bookmarked ? "Gespeichert" : "Speichern"}
      </Button>

      <Button
        className="w-full justify-between border border-primary-300/30 bg-primary/90 text-primary-foreground"
        onClick={() => toast("Lehrer-Chat ist ein Premium-Feature — bald verfügbar.")}
      >
        <span className="flex items-center gap-2">
          <Bot className="size-4" />
          Lehrer fragen
        </span>
        <Badge variant="secondary">Premium</Badge>
      </Button>

      {nextLesson && (
        <div className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/10">
          <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
            Nächste Lektion
          </p>
          {nextLesson.status === "locked" ? (
            <div
              className="mt-3 flex items-center gap-2.5 opacity-60"
              title="Schließe die vorherige Lektion ab, um freizuschalten"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Lock className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{nextLesson.title}</p>
                <LevelBadge level={nextLesson.level} size="sm" className="mt-1" />
              </div>
            </div>
          ) : (
            <Link
              href={nextLesson.href}
              className="group mt-3 flex items-center gap-2.5 rounded-lg p-1 -m-1 transition-all duration-200 ease-(--ease-premium) hover:bg-muted"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-transform duration-300 ease-(--ease-premium) group-hover:scale-110">
                <ArrowRight className="size-4 transition-transform duration-300 ease-(--ease-premium) group-hover:translate-x-0.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{nextLesson.title}</p>
                <LevelBadge level={nextLesson.level} size="sm" className="mt-1" />
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
