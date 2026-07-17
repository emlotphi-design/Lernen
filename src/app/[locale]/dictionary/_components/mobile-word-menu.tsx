"use client";

import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DictionarySidebarLeft } from "./dictionary-sidebar-left";
import type { DictionaryWord, PartOfSpeechFilter } from "../_lib/dictionary-data";

export function MobileWordMenu({
  query,
  onQueryChange,
  filter,
  onFilterChange,
  recentWords,
  onClearRecent,
  favoriteWords,
  results,
  selectedId,
  onSelect,
  selectedWord,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  filter: PartOfSpeechFilter;
  onFilterChange: (value: PartOfSpeechFilter) => void;
  recentWords: DictionaryWord[];
  onClearRecent: () => void;
  favoriteWords: DictionaryWord[];
  results: DictionaryWord[];
  selectedId: string;
  onSelect: (id: string) => void;
  selectedWord: DictionaryWord | undefined;
}) {
  const t = useTranslations("dictionary");

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center gap-2">
              <Search className="size-4" />
              {selectedWord ? selectedWord.word : t("browseAllLabel")}
            </span>
            <span className="text-caption text-muted-foreground">{t("wordCountLabel", { count: results.length })}</span>
          </Button>
        }
      />
      <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto rounded-t-2xl">
        <SheetHeader>
          <SheetTitle>{t("title")}</SheetTitle>
        </SheetHeader>
        <div className="px-4 pb-6">
          <DictionarySidebarLeft
            query={query}
            onQueryChange={onQueryChange}
            filter={filter}
            onFilterChange={onFilterChange}
            recentWords={recentWords}
            onClearRecent={onClearRecent}
            favoriteWords={favoriteWords}
            results={results}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
