"use client";

import { cn } from "@/lib/utils";
import { BidiText } from "@/components/lessons/bidi-text";
import type { FillBlankQuestion } from "@/lib/lessons/types";

export function FillBlankQuestionView({
  question,
  response,
  onChange,
  checked,
  isCorrect,
}: {
  question: FillBlankQuestion;
  response: string;
  onChange: (value: string) => void;
  checked: boolean;
  isCorrect: boolean | null;
}) {
  return (
    <div>
      <p className="text-h4">
        <BidiText text={question.prompt} />
      </p>
      <p className="mt-4 flex flex-wrap items-center gap-2 text-body-lg" dir="ltr">
        {question.sentenceBefore && <span>{question.sentenceBefore}</span>}
        <input
          type="text"
          value={response}
          disabled={checked}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            "w-36 rounded-md border-b-2 bg-transparent px-2 py-1 text-center font-medium outline-none transition-colors",
            !checked && "border-primary/40 focus-visible:border-primary",
            checked && isCorrect && "border-success text-success",
            checked && isCorrect === false && "border-destructive text-destructive",
          )}
        />
        {question.sentenceAfter && <span>{question.sentenceAfter}</span>}
      </p>
    </div>
  );
}
