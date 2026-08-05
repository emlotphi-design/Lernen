"use client";

import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BidiText } from "@/components/lessons/bidi-text";
import type { TrueFalseQuestion } from "@/lib/lessons/types";

export function TrueFalseQuestionView({
  question,
  response,
  onChange,
  checked,
  trueLabel,
  falseLabel,
}: {
  question: TrueFalseQuestion;
  response: boolean | null;
  onChange: (value: boolean) => void;
  checked: boolean;
  trueLabel: string;
  falseLabel: string;
}) {
  const options: { value: boolean; label: string }[] = [
    { value: true, label: trueLabel },
    { value: false, label: falseLabel },
  ];

  return (
    <div>
      <p className="text-h4">
        <BidiText text={question.statement} />
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {options.map((option) => {
          const isSelected = response === option.value;
          const isCorrectOption = question.correct === option.value;
          const showCorrect = checked && isCorrectOption;
          const showIncorrect = checked && isSelected && !isCorrectOption;

          return (
            <button
              key={String(option.value)}
              type="button"
              disabled={checked}
              onClick={() => onChange(option.value)}
              className={cn(
                "flex items-center justify-center gap-2 rounded-lg border px-4 py-4 text-body font-medium transition-colors",
                "disabled:cursor-not-allowed",
                !checked && isSelected && "border-primary bg-accent text-accent-foreground",
                !checked && !isSelected && "border-border hover:bg-muted",
                showCorrect && "border-success bg-success/10 text-success",
                showIncorrect && "border-destructive bg-destructive/10 text-destructive",
                checked && !isSelected && !isCorrectOption && "opacity-50",
              )}
            >
              {option.label}
              {showCorrect && <Check className="size-4 shrink-0" />}
              {showIncorrect && <X className="size-4 shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
