"use client";

import { cn } from "@/lib/utils";
import { LevelBadge } from "@/components/ui/level-badge";
import type { DictionaryWord } from "../_lib/dictionary-data";

export function WordListItem({
  entry,
  isActive,
  onSelect,
}: {
  entry: DictionaryWord;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive ? "true" : undefined}
      aria-label={`${entry.gender ? `${entry.gender} ` : ""}${entry.word}, ${entry.level}`}
      className={cn(
        "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-start text-body-sm outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
        isActive ? "bg-accent font-medium text-accent-foreground" : "text-foreground hover:bg-muted",
      )}
    >
      {entry.gender && <span className="text-caption text-muted-foreground">{entry.gender}</span>}
      <span className="flex-1 truncate">{entry.word}</span>
      <LevelBadge level={entry.level} size="sm" />
    </button>
  );
}
