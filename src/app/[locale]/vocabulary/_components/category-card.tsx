"use client";

import { useLocale, useTranslations } from "next-intl";
import { Star, BookOpen, History } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LevelBadge } from "@/components/ui/level-badge";
import { FadeIn } from "@/components/motion/fade-in";
import type { VocabCategory } from "../_lib/vocabulary-data";

const DIFFICULTY_CLASSES: Record<VocabCategory["difficulty"], string> = {
  beginner: "bg-success/10 text-success",
  intermediate: "bg-warning/10 text-warning",
  advanced: "bg-accent text-accent-foreground",
};

function formatLastStudied(daysAgo: number | null, locale: string, neverLabel: string): string {
  if (daysAgo === null) return neverLabel;
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  return rtf.format(-daysAgo, "day");
}

export function CategoryCard({
  category,
  index,
  isFavorite,
  onToggleFavorite,
}: {
  category: VocabCategory;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  const t = useTranslations("vocabulary");
  const tHome = useTranslations("home");
  const locale = useLocale();

  const difficultyLabel =
    category.difficulty === "beginner"
      ? tHome("difficultyBeginner")
      : category.difficulty === "intermediate"
        ? tHome("difficultyIntermediate")
        : tHome("difficultyAdvanced");

  return (
    <FadeIn delay={Math.min(index, 12) * 0.03}>
      <Card className="group relative h-full gap-3 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-start justify-between">
          <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
            <category.icon className="size-4.5" />
          </span>
          <div className="flex items-center gap-1.5">
            <LevelBadge level={category.level} size="sm" />
            <button
              type="button"
              onClick={onToggleFavorite}
              aria-pressed={isFavorite}
              aria-label={isFavorite ? t("removeFavoriteLabel") : t("saveFavoriteLabel")}
              className="flex size-6 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Star className={cn("size-4", isFavorite && "fill-primary text-primary")} />
            </button>
          </div>
        </div>

        <p className="text-body font-medium">{t(category.labelKey)}</p>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn("rounded-full px-2 py-0.5 text-caption font-medium", DIFFICULTY_CLASSES[category.difficulty])}
          >
            {difficultyLabel}
          </span>
          <span className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <BookOpen className="size-3.5" />
            {t("wordsCount", { count: category.wordCount })}
          </span>
        </div>

        <div className="mt-1 flex items-center gap-2">
          <Progress value={category.completion} className="flex-1" />
          <span className="text-caption tabular-nums text-muted-foreground">{category.completion}%</span>
        </div>

        <p className="flex items-center gap-1.5 text-caption text-muted-foreground">
          <History className="size-3.5" />
          {t("lastStudiedLabel")}: {formatLastStudied(category.lastStudiedDaysAgo, locale, t("neverStudiedLabel"))}
        </p>
      </Card>
    </FadeIn>
  );
}
