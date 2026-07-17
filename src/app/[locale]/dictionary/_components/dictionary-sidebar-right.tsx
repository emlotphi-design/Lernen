"use client";

import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Star, Sparkles, Shuffle, BarChart3, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FREQUENCY_LABEL_KEYS, type DictionaryWord } from "../_lib/dictionary-data";

export function DictionarySidebarRight({
  word,
  isSaved,
  onToggleSaved,
  isStudyLater,
  onToggleStudyLater,
}: {
  word: DictionaryWord;
  isSaved: boolean;
  onToggleSaved: () => void;
  isStudyLater: boolean;
  onToggleStudyLater: () => void;
}) {
  const t = useTranslations("dictionary");

  function handleToggleSaved() {
    const wasSaved = isSaved;
    onToggleSaved();
    toast(wasSaved ? t("unsavedWordToast") : t("savedWordToast"));
  }

  function handleToggleStudyLater() {
    const wasInList = isStudyLater;
    onToggleStudyLater();
    toast(wasInList ? t("removedFromStudyLaterToast") : t("addedToStudyLaterToast"));
  }

  return (
    <div className="flex flex-col gap-6">
      <Button
        variant="outline"
        size="lg"
        onClick={handleToggleSaved}
        className={cn("w-full", isSaved && "border-primary/40 bg-accent text-accent-foreground")}
      >
        <Star className={cn("size-4", isSaved && "fill-current")} />
        {isSaved ? t("savedLabel") : t("saveWord")}
      </Button>

      <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
        <p className="flex items-center gap-1.5 text-caption font-medium tracking-wide text-muted-foreground uppercase">
          <Sparkles className="size-3.5" />
          {t("aiExplanationLabel")}
        </p>
        <p className="mt-2.5 text-body-sm text-foreground/90">{word.aiExplanation}</p>
      </div>

      {word.similarWords.length > 0 && (
        <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
          <p className="flex items-center gap-1.5 text-caption font-medium tracking-wide text-muted-foreground uppercase">
            <Shuffle className="size-3.5" />
            {t("similarWordsLabel")}
          </p>
          <div className="mt-2.5 space-y-2.5">
            {word.similarWords.map((similar) => (
              <div key={similar.word}>
                <p className="font-medium text-foreground">{similar.word}</p>
                <p className="text-body-sm text-muted-foreground">{similar.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
        <p className="flex items-center gap-1.5 text-caption font-medium tracking-wide text-muted-foreground uppercase">
          <BarChart3 className="size-3.5" />
          {t("wordFrequencyLabel")}
        </p>
        <div className="mt-3 flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((segment) => (
            <span
              key={segment}
              className={cn(
                "h-2 flex-1 rounded-full",
                segment <= word.frequency ? "bg-primary" : "bg-muted",
              )}
            />
          ))}
        </div>
        <p className="mt-2 text-body-sm font-medium text-foreground">{t(FREQUENCY_LABEL_KEYS[word.frequency])}</p>
      </div>

      <Button
        variant="outline"
        size="lg"
        onClick={handleToggleStudyLater}
        className={cn("w-full", isStudyLater && "border-primary/40 bg-accent text-accent-foreground")}
      >
        <Clock className="size-4" />
        {isStudyLater ? t("inStudyListLabel") : t("studyLaterLabel")}
      </Button>
    </div>
  );
}
