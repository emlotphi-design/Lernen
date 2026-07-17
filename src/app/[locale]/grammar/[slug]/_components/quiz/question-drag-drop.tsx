"use client";

import { GripVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DragDropQuestion } from "../../_lib/quiz-data";

export function DragDropQuestionView({
  question,
  response,
  onChange,
  checked,
  hint,
  clearLabel,
}: {
  question: DragDropQuestion;
  response: (number | null)[];
  onChange: (value: (number | null)[]) => void;
  checked: boolean;
  hint: string;
  clearLabel: string;
}) {
  const available = question.choices
    .map((choice, index) => ({ choice, index }))
    .filter(({ index }) => !response.includes(index));

  function placeInSlot(choiceIndex: number, slotIndex: number) {
    const next = [...response];
    next[slotIndex] = choiceIndex;
    onChange(next);
  }

  function placeInFirstEmptySlot(choiceIndex: number) {
    const slotIndex = response.findIndex((value) => value === null);
    if (slotIndex === -1) return;
    placeInSlot(choiceIndex, slotIndex);
  }

  function clearSlot(slotIndex: number) {
    const next = [...response];
    next[slotIndex] = null;
    onChange(next);
  }

  return (
    <div>
      <p className="text-h4">{question.prompt}</p>
      <p className="mt-1 text-body-sm text-muted-foreground">{hint}</p>

      <p className="mt-4 flex flex-wrap items-center gap-1.5 text-body-lg leading-loose">
        {question.parts.map((part, i) => (
          <span key={i} className="contents">
            {part && <span>{part}</span>}
            {i < response.length && (
              <button
                type="button"
                disabled={checked}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  const choiceIndex = Number(event.dataTransfer.getData("text/plain"));
                  if (!Number.isNaN(choiceIndex)) placeInSlot(choiceIndex, i);
                }}
                onClick={() => {
                  if (response[i] !== null) clearSlot(i);
                }}
                className={cn(
                  "inline-flex min-w-20 items-center justify-center rounded-md border-b-2 border-dashed px-2 py-1 align-middle text-center font-medium transition-colors",
                  response[i] === null && "border-primary/40 text-muted-foreground",
                  response[i] !== null && !checked && "border-primary bg-accent text-accent-foreground",
                  checked && question.correctAnswers[i] === question.choices[response[i] ?? -1] && "border-success bg-success/10 text-success",
                  checked &&
                    response[i] !== null &&
                    question.correctAnswers[i] !== question.choices[response[i] ?? -1] &&
                    "border-destructive bg-destructive/10 text-destructive",
                )}
              >
                {response[i] !== null ? question.choices[response[i] as number] : "___"}
              </button>
            )}
          </span>
        ))}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {available.map(({ choice, index }) => (
          <button
            key={index}
            type="button"
            draggable={!checked}
            disabled={checked}
            onDragStart={(event) => event.dataTransfer.setData("text/plain", String(index))}
            onClick={() => placeInFirstEmptySlot(index)}
            className="flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-1.5 text-body-sm font-medium shadow-sm transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
          >
            <GripVertical className="size-3.5 text-muted-foreground" />
            {choice}
          </button>
        ))}
      </div>

      {!checked && response.some((v) => v !== null) && (
        <button
          type="button"
          onClick={() => onChange(response.map(() => null))}
          className="mt-3 flex items-center gap-1 text-caption text-muted-foreground hover:text-foreground"
        >
          <X className="size-3" />
          {clearLabel}
        </button>
      )}
    </div>
  );
}
