"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  DICTIONARY,
  findWordById,
  searchDictionary,
  type PartOfSpeechFilter,
} from "../_lib/dictionary-data";
import { useRecentSearches, useToggleWordSet } from "../_hooks/use-word-lists";
import { DictionarySidebarLeft } from "./dictionary-sidebar-left";
import { DictionarySidebarRight } from "./dictionary-sidebar-right";
import { MobileWordMenu } from "./mobile-word-menu";
import { WordDetail, WordDetailEmpty } from "./word-detail";

const RECENT_SEARCHES_KEY = "dictionary-recent-searches";
const FAVORITES_KEY = "dictionary-favorites";
const STUDY_LATER_KEY = "dictionary-study-later";

export function DictionaryApp() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<PartOfSpeechFilter>("all");
  const [selectedId, setSelectedId] = useState<string>(DICTIONARY[0].id);

  const { ids: recentIds, addRecent, clearRecent } = useRecentSearches(RECENT_SEARCHES_KEY);
  const { ids: favoriteIds, toggle: toggleFavorite } = useToggleWordSet(FAVORITES_KEY);
  const { ids: studyLaterIds, toggle: toggleStudyLater } = useToggleWordSet(STUDY_LATER_KEY);

  const results = useMemo(() => searchDictionary(query, filter), [query, filter]);
  const selectedWord = findWordById(selectedId);
  const recentWords = recentIds.map(findWordById).filter((entry) => entry !== undefined);
  const favoriteWords = favoriteIds.map(findWordById).filter((entry) => entry !== undefined);

  function handleSelect(id: string) {
    setSelectedId(id);
    addRecent(id);
    setQuery("");
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr_280px] lg:items-start lg:gap-8">
      <div className="lg:hidden">
        <MobileWordMenu
          query={query}
          onQueryChange={setQuery}
          filter={filter}
          onFilterChange={setFilter}
          recentWords={recentWords}
          onClearRecent={clearRecent}
          favoriteWords={favoriteWords}
          results={results}
          selectedId={selectedId}
          onSelect={handleSelect}
          selectedWord={selectedWord}
        />
      </div>

      <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
        <DictionarySidebarLeft
          query={query}
          onQueryChange={setQuery}
          filter={filter}
          onFilterChange={setFilter}
          recentWords={recentWords}
          onClearRecent={clearRecent}
          favoriteWords={favoriteWords}
          results={results}
          selectedId={selectedId}
          onSelect={handleSelect}
        />
      </aside>

      <div className="min-w-0">
        <AnimatePresence mode="wait">
          {selectedWord ? (
            <WordDetail word={selectedWord} onSelectWord={handleSelect} />
          ) : (
            <WordDetailEmpty key="empty" />
          )}
        </AnimatePresence>
      </div>

      {selectedWord && (
        <aside className="lg:sticky lg:top-24 lg:block lg:self-start">
          <DictionarySidebarRight
            word={selectedWord}
            isSaved={favoriteIds.includes(selectedWord.id)}
            onToggleSaved={() => toggleFavorite(selectedWord.id)}
            isStudyLater={studyLaterIds.includes(selectedWord.id)}
            onToggleStudyLater={() => toggleStudyLater(selectedWord.id)}
          />
        </aside>
      )}
    </div>
  );
}
