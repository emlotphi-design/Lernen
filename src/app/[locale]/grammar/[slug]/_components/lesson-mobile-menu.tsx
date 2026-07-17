"use client";

import { ListTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LessonSidebarLeft } from "./lesson-sidebar-left";
import type { LessonListItem } from "../_lib/lessons";

export function LessonMobileMenu({
  triggerLabel,
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
  triggerLabel: string;
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
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <ListTree className="size-4" />
              {triggerLabel}
            </span>
            <span className="text-caption text-muted-foreground tabular-nums">{courseProgress}%</span>
          </Button>
        }
      />
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto rounded-t-2xl">
        <SheetHeader>
          <SheetTitle>{lessonListLabel}</SheetTitle>
        </SheetHeader>
        <div className="px-4 pb-6">
          <LessonSidebarLeft
            activeSlug={activeSlug}
            chapterTitle={chapterTitle}
            lessons={lessons}
            courseProgress={courseProgress}
            courseProgressLabel={courseProgressLabel}
            currentChapterLabel={currentChapterLabel}
            lessonListLabel={lessonListLabel}
            searchPlaceholder={searchPlaceholder}
            noResultsLabel={noResultsLabel}
            completedCountLabel={completedCountLabel}
            lockedHint={lockedHint}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
