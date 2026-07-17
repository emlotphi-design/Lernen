"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, History, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DictionaryWord, PartOfSpeechFilter } from "../_lib/dictionary-data";
import { WordListItem } from "./word-list-item";

export function DictionarySidebarLeft({
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
}) {
  const t = useTranslations("dictionary");
  const isBrowsing = query.trim() === "";

  const filters: { value: PartOfSpeechFilter; label: string }[] = [
    { value: "all", label: t("filterAll") },
    { value: "noun", label: t("filterNoun") },
    { value: "verb", label: t("filterVerb") },
    { value: "adjective", label: t("filterAdjective") },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="relative">
          <Search className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchPlaceholder")}
            className="h-9 w-full rounded-lg border border-input bg-transparent ps-8 pe-8 text-body-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => onQueryChange("")}
              aria-label={t("clearSearchLabel")}
              className="absolute end-2 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        <div className="mt-3">
          <p className="mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
            {t("searchFiltersLabel")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {filters.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => onFilterChange(option.value)}
                aria-pressed={filter === option.value}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-caption font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
                  filter === option.value
                    ? "border-primary/40 bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:bg-muted",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isBrowsing ? (
          <motion.div
            key="browse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >
            {recentWords.length > 0 && (
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <p className="flex items-center gap-1.5 text-caption font-medium tracking-wide text-muted-foreground uppercase">
                    <History className="size-3.5" />
                    {t("recentSearchesLabel")}
                  </p>
                  <button
                    type="button"
                    onClick={onClearRecent}
                    className="rounded text-caption text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {t("clearRecentLabel")}
                  </button>
                </div>
                <div className="flex flex-col gap-0.5">
                  {recentWords.map((entry) => (
                    <WordListItem
                      key={entry.id}
                      entry={entry}
                      isActive={entry.id === selectedId}
                      onSelect={() => onSelect(entry.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {favoriteWords.length > 0 && (
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-caption font-medium tracking-wide text-muted-foreground uppercase">
                  <Star className="size-3.5" />
                  {t("favoritesLabel")}
                </p>
                <div className="flex flex-col gap-0.5">
                  {favoriteWords.map((entry) => (
                    <WordListItem
                      key={entry.id}
                      entry={entry}
                      isActive={entry.id === selectedId}
                      onSelect={() => onSelect(entry.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
                {t("browseAllLabel")}
              </p>
              <div className="flex max-h-80 flex-col gap-0.5 overflow-y-auto">
                {results.map((entry) => (
                  <WordListItem
                    key={entry.id}
                    entry={entry}
                    isActive={entry.id === selectedId}
                    onSelect={() => onSelect(entry.id)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
              {t("resultsLabel")} · {t("wordCountLabel", { count: results.length })}
            </p>
            {results.length === 0 ? (
              <p className="py-6 text-center text-body-sm text-muted-foreground">{t("noResults")}</p>
            ) : (
              <div className="flex max-h-[28rem] flex-col gap-0.5 overflow-y-auto">
                {results.map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                  >
                    <WordListItem entry={entry} isActive={entry.id === selectedId} onSelect={() => onSelect(entry.id)} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

