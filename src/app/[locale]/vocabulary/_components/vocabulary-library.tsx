"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Star, X, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CATEGORIES, CEFR_LEVELS } from "../_lib/vocabulary-data";
import { useFavoriteCategories } from "../_hooks/use-favorite-categories";
import { CategoryCard } from "./category-card";

type LevelFilter = (typeof CEFR_LEVELS)[number] | "all";

export function VocabularyLibrary() {
  const t = useTranslations("vocabulary");
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const { ids: favoriteIds, toggle } = useFavoriteCategories();

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return CATEGORIES.filter((category) => {
      if (level !== "all" && category.level !== level) return false;
      if (favoritesOnly && !favoriteIds.includes(category.id)) return false;
      if (normalized === "") return true;
      const label = t(category.labelKey).toLowerCase();
      return label.includes(normalized);
    });
  }, [query, level, favoritesOnly, favoriteIds, t]);

  const hasActiveFilters = query.trim() !== "" || level !== "all" || favoritesOnly;

  function handleClearFilters() {
    setQuery("");
    setLevel("all");
    setFavoritesOnly(false);
  }

  function handleToggleFavorite(id: string) {
    const wasFavorite = favoriteIds.includes(id);
    toggle(id);
    toast(wasFavorite ? t("favoriteRemovedToast") : t("favoriteAddedToast"));
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchPlaceholder")}
            className="h-10 w-full rounded-xl border border-input bg-card ps-10 pe-9 text-body-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label={t("clearFiltersLabel")}
              className="absolute end-2.5 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-caption font-medium tracking-wide text-muted-foreground uppercase">
            <SlidersHorizontal className="size-3.5" />
          </span>
          <button
            type="button"
            onClick={() => setLevel("all")}
            aria-pressed={level === "all"}
            className={cn(
              "rounded-full border px-3 py-1.5 text-body-sm font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
              level === "all"
                ? "border-primary/40 bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:bg-muted",
            )}
          >
            {t("allLevelsLabel")}
          </button>
          {CEFR_LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevel(lvl)}
              aria-pressed={level === lvl}
              className={cn(
                "rounded-full border px-3 py-1.5 text-body-sm font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
                level === lvl
                  ? "border-primary/40 bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:bg-muted",
              )}
            >
              {lvl}
            </button>
          ))}

          <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />

          <button
            type="button"
            onClick={() => setFavoritesOnly((prev) => !prev)}
            aria-pressed={favoritesOnly}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-body-sm font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
              favoritesOnly
                ? "border-primary/40 bg-accent text-accent-foreground"
                : "border-border text-muted-foreground hover:bg-muted",
            )}
          >
            <Star className={cn("size-3.5", favoritesOnly && "fill-current")} />
            {t("favoritesOnlyLabel")}
          </button>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="rounded-full text-body-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {t("clearFiltersLabel")}
            </button>
          )}
        </div>

        <p className="text-caption text-muted-foreground">{t("resultsCountLabel", { count: results.length })}</p>
      </div>

      <AnimatePresence mode="wait">
        {results.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-card py-20 text-center ring-1 ring-foreground/10"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Search className="size-5" />
            </span>
            <p className="font-medium">{t("noResultsTitle")}</p>
            <p className="max-w-xs text-body-sm text-muted-foreground">{t("noResultsDesc")}</p>
            <Button variant="outline" size="sm" onClick={handleClearFilters}>
              {t("clearFiltersLabel")}
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {results.map((category, i) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={i}
                isFavorite={favoriteIds.includes(category.id)}
                onToggleFavorite={() => handleToggleFavorite(category.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
