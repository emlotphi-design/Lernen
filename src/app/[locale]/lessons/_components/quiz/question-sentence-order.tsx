"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BidiText } from "@/components/lessons/bidi-text";
import type { SentenceOrderQuestion } from "@/lib/lessons/types";

export function SentenceOrderQuestionView({
  question,
  response,
  onChange,
  checked,
  isCorrect,
  hint,
}: {
  question: SentenceOrderQuestion;
  response: number[];
  onChange: (value: number[]) => void;
  checked: boolean;
  isCorrect: boolean | null;
  hint: string;
}) {
  const available = question.shuffled
    .map((word, index) => ({ word, index }))
    .filter(({ index }) => !response.includes(index));

  return (
    <div>
      <p className="text-h4">
        <BidiText text={question.prompt} />
      </p>
      <p className="mt-1 text-body-sm text-muted-foreground">{hint}</p>

      <div
        dir="ltr"
        className={cn(
          "mt-4 flex min-h-14 flex-wrap items-center gap-2 rounded-lg border-2 border-dashed p-3",
          !checked && "border-border",
          checked && isCorrect && "border-success/50 bg-success/5",
          checked && isCorrect === false && "border-destructive/50 bg-destructive/5",
        )}
      >
        {response.length === 0 && <span className="text-body-sm text-muted-foreground">…</span>}
        {response.map((wordIndex, position) => (
          <button
            key={`${wordIndex}-${position}`}
            type="button"
            disabled={checked}
            onClick={() => onChange(response.filter((i) => i !== wordIndex))}
            className={cn(
              "flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-body-sm font-medium text-accent-foreground transition-colors",
              !checked && "hover:bg-accent/70",
              checked && "cursor-not-allowed",
            )}
          >
            {question.shuffled[wordIndex]}
            {!checked && <X className="size-3.5" />}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2" dir="ltr">
        {available.map(({ word, index }) => (
          <button
            key={index}
            type="button"
            disabled={checked}
            onClick={() => onChange([...response, index])}
            className="rounded-lg border border-border px-3 py-1.5 text-body-sm font-medium transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}
