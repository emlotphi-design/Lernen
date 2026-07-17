"use client";

import type { ComponentType } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BookOpenText, ListChecks, MessagesSquare, Repeat, Ban, Link2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { LevelBadge } from "@/components/ui/level-badge";
import { AudioButton } from "./audio-button";
import {
  findWordByText,
  PART_OF_SPEECH_LABEL_KEYS,
  type DictionaryWord,
} from "../_lib/dictionary-data";

const GENDER_CLASSES: Record<"der" | "die" | "das", string> = {
  der: "bg-primary/10 text-primary",
  die: "bg-warning/10 text-warning",
  das: "bg-success/10 text-success",
};

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2.5">
      <h2 className="flex items-center gap-2 text-h4">
        <Icon className="size-4.5 text-primary" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function WordChipList({
  words,
  onSelect,
}: {
  words: string[];
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((label) => {
        const match = findWordByText(label);
        if (match) {
          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelect(match.id)}
              className="rounded-full border border-primary/30 bg-accent px-3 py-1 text-body-sm font-medium text-accent-foreground outline-none transition-colors hover:bg-accent/70 focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {label}
            </button>
          );
        }
        return (
          <span key={label} className="rounded-full border border-border px-3 py-1 text-body-sm text-muted-foreground">
            {label}
          </span>
        );
      })}
    </div>
  );
}

export function WordDetail({
  word,
  onSelectWord,
}: {
  word: DictionaryWord;
  onSelectWord: (id: string) => void;
}) {
  const t = useTranslations("dictionary");

  return (
    <motion.div
      key={word.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-8 rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8"
    >
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <span className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
              {t(PART_OF_SPEECH_LABEL_KEYS[word.partOfSpeech])}
            </span>
            <h1 className="text-h1">{word.word}</h1>
          </div>
          <LevelBadge level={word.level} />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-body-sm">
          {word.gender && (
            <span className={cn("rounded-full px-2.5 py-1 font-medium", GENDER_CLASSES[word.gender])}>
              {t("gender")}: {word.gender}
            </span>
          )}
          {word.plural && (
            <span className="text-muted-foreground">
              {t("plural")}: <span className="font-medium text-foreground">{word.plural}</span>
            </span>
          )}
          <span className="flex items-center gap-2 text-muted-foreground">
            <span className="font-mono">{word.ipa}</span>
            <AudioButton text={word.word} label={t("playPronunciationLabel")} />
          </span>
        </div>

        <p className="mt-4 text-body-lg text-foreground/90">{word.translations.join(", ")}</p>
      </div>

      <Section icon={BookOpenText} title={t("examples")}>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {word.examples.map((example) => (
            <div key={example.de} className="rounded-lg bg-muted/50 p-3.5">
              <p className="font-medium text-foreground">{example.de}</p>
              <p className="mt-1 text-body-sm text-muted-foreground">{example.en}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={ListChecks} title={t("grammarNotesLabel")}>
        <ul className="space-y-2">
          {word.grammarNotes.map((note) => (
            <li key={note} className="flex gap-2.5 text-body-sm text-foreground/90">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {note}
            </li>
          ))}
        </ul>
      </Section>

      {word.commonExpressions.length > 0 && (
        <Section icon={MessagesSquare} title={t("commonExpressionsLabel")}>
          <div className="space-y-2">
            {word.commonExpressions.map((expression) => (
              <div key={expression.de} className="rounded-lg border-s-2 border-primary bg-primary/5 px-3.5 py-2.5">
                <p className="font-medium text-foreground">{expression.de}</p>
                <p className="mt-0.5 text-body-sm text-muted-foreground">{expression.en}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {word.synonyms.length > 0 && (
        <Section icon={Repeat} title={t("synonyms")}>
          <WordChipList words={word.synonyms} onSelect={onSelectWord} />
        </Section>
      )}

      {word.antonyms.length > 0 && (
        <Section icon={Ban} title={t("antonyms")}>
          <WordChipList words={word.antonyms} onSelect={onSelectWord} />
        </Section>
      )}

      {word.relatedWords.length > 0 && (
        <Section icon={Link2} title={t("relatedWordsLabel")}>
          <WordChipList words={word.relatedWords} onSelect={onSelectWord} />
        </Section>
      )}
    </motion.div>
  );
}

export function WordDetailEmpty() {
  const t = useTranslations("dictionary");
  return (
    <div className="flex min-h-[26rem] flex-col items-center justify-center gap-3 rounded-2xl bg-card p-8 text-center ring-1 ring-foreground/10">
      <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Sparkles className="size-5" />
      </span>
      <p className="max-w-xs text-body-sm text-muted-foreground">{t("selectWordPrompt")}</p>
    </div>
  );
}
