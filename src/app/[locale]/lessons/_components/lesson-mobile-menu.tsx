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
import type { CefrLevel, LessonMeta } from "@/lib/lessons/types";

// German UI, fixed regardless of explanation language (see the German-UI-vs-explanation-language
// split in project memory).
export function LessonMobileMenu({
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
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <ListTree className="size-4" />
              Lektionen in diesem Kapitel
            </span>
            <span className="text-caption text-muted-foreground tabular-nums">{courseProgress}%</span>
          </Button>
        }
      />
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto rounded-t-2xl">
        <SheetHeader>
          <SheetTitle>Lektionen in diesem Kapitel</SheetTitle>
        </SheetHeader>
        <div className="px-4 pb-6">
          <LessonSidebarLeft
            activeSlug={activeSlug}
            categoryTitle={categoryTitle}
            lessons={lessons}
            courseProgress={courseProgress}
            done={done}
            total={total}
            requiredKeysByLevel={requiredKeysByLevel}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
