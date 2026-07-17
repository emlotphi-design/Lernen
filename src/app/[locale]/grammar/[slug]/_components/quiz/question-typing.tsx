"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import type { TypingQuestion } from "../../_lib/quiz-data";

export function TypingQuestionView({
  question,
  response,
  onChange,
  checked,
  isCorrect,
  placeholder,
}: {
  question: TypingQuestion;
  response: string;
  onChange: (value: string) => void;
  checked: boolean;
  isCorrect: boolean | null;
  placeholder: string;
}) {
  return (
    <div>
      <p className="text-h4">{question.prompt}</p>
      <Input
        type="text"
        value={response}
        disabled={checked}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={cn(
          "mt-4 h-11 max-w-sm text-body",
          checked && isCorrect && "border-success text-success",
          checked && isCorrect === false && "border-destructive text-destructive",
        )}
      />
    </div>
  );
}
