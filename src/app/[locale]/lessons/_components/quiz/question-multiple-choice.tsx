"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BidiText } from "@/components/lessons/bidi-text";
import type { MultipleChoiceQuestion } from "@/lib/lessons/types";

export function MultipleChoiceQuestionView({
  question,
  response,
  onChange,
  checked,
}: {
  question: MultipleChoiceQuestion;
  response: number | null;
  onChange: (value: number) => void;
  checked: boolean;
}) {
  return (
    <div>
      <p className="text-h4">
        <BidiText text={question.prompt} />
      </p>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {question.options.map((option, i) => {
          const isSelected = response === i;
          const isCorrectOption = i === question.correctIndex;
          const showCorrect = checked && isCorrectOption;
          const showIncorrect = checked && isSelected && !isCorrectOption;

          return (
            <button
              key={option}
              type="button"
              disabled={checked}
              onClick={() => onChange(i)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-lg border px-4 py-3 text-start text-body-sm transition-colors",
                "disabled:cursor-not-allowed",
                !checked && isSelected && "border-primary bg-accent text-accent-foreground",
                !checked && !isSelected && "border-border hover:bg-muted",
                showCorrect && "border-success bg-success/10 text-success",
                showIncorrect && "border-destructive bg-destructive/10 text-destructive",
                checked && !isSelected && !isCorrectOption && "opacity-50",
              )}
            >
              <bdi>{option}</bdi>
              {showCorrect && <Check className="size-4 shrink-0" />}
              {showIncorrect && <X className="size-4 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
