"use client";

import { useState } from "react";
import { PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lesson, QuizQuestion } from "@/lib/lessons/types";
import type { LessonExplanationCache } from "@/lib/lessons/explanation-types";
import { useResolvedLesson } from "@/lib/lessons/resolve-explanation";
import {
  useExplanationLanguage,
  useExplanationUiLabels,
} from "@/components/providers/explanation-language-provider";
import {
  isAnswerCorrect,
  isResponseReady,
  initialResponse,
  correctAnswerText,
  resolveReferenceLabel,
} from "./quiz/quiz-logic";
import { QuizFeedback } from "./quiz/quiz-feedback";
import { MultipleChoiceQuestionView } from "./quiz/question-multiple-choice";
import { TrueFalseQuestionView } from "./quiz/question-true-false";
import { FillBlankQuestionView } from "./quiz/question-fill-blank";
import { SentenceOrderQuestionView } from "./quiz/question-sentence-order";
import { DragDropQuestionView } from "./quiz/question-drag-drop";
import { TypingQuestionView } from "./quiz/question-typing";

/** One exercise, checked in place — no aggregate score, no results screen, no "next" flow.
 *  Reuses the same six question-type views and grading rules as the graded QuizSection
 *  (see quiz-logic.ts), just orchestrated much more simply since exercises are ungraded,
 *  inline practice rather than the end-of-lesson assessment. */
function ExerciseItem({ question }: { question: QuizQuestion }) {
  const labels = useExplanationUiLabels();
  const [response, setResponse] = useState<unknown>(initialResponse(question));
  const [checked, setChecked] = useState(false);

  const ready = isResponseReady(question, response);
  const correct = checked ? isAnswerCorrect(question, response) : null;

  return (
    <div className="rounded-2xl bg-card p-5 shadow-xs ring-1 ring-foreground/10">
      {question.type === "multiple-choice" && (
        <MultipleChoiceQuestionView question={question} response={response as number | null} onChange={setResponse} checked={checked} />
      )}
      {question.type === "true-false" && (
        <TrueFalseQuestionView
          question={question}
          response={response as boolean | null}
          onChange={setResponse}
          checked={checked}
          trueLabel={labels.trueLabel}
          falseLabel={labels.falseLabel}
        />
      )}
      {question.type === "fill-blank" && (
        <FillBlankQuestionView question={question} response={response as string} onChange={setResponse} checked={checked} isCorrect={correct} />
      )}
      {question.type === "sentence-order" && (
        <SentenceOrderQuestionView
          question={question}
          response={response as number[]}
          onChange={setResponse}
          checked={checked}
          isCorrect={correct}
          hint={labels.tapToBuildSentenceHint}
        />
      )}
      {question.type === "drag-drop" && (
        <DragDropQuestionView
          question={question}
          response={response as (number | null)[]}
          onChange={setResponse}
          checked={checked}
          hint={labels.dragDropHint}
          clearLabel={labels.clearLabel}
        />
      )}
      {question.type === "typing" && (
        <TypingQuestionView
          question={question}
          response={response as string}
          onChange={setResponse}
          checked={checked}
          isCorrect={correct}
          placeholder={labels.typeYourAnswerPlaceholder}
        />
      )}

      {checked && (
        <QuizFeedback
          isCorrect={correct === true}
          explanation={question.explanation}
          grammarRule={question.grammarRule}
          referenceSectionId={question.referenceSectionId}
          referenceLabel={resolveReferenceLabel(labels, question.referenceLabel)}
          correctLabel={labels.correctFeedback}
          incorrectLabel={labels.incorrectFeedback}
          grammarRuleLabel={labels.grammarRuleLabel}
          reviewInLesson={labels.reviewInLesson}
          xp={question.xp}
          xpShort={labels.xpShort}
          correctAnswerLabel={labels.correctAnswerLabel}
          correctAnswerText={correct === false ? correctAnswerText(question) : undefined}
        />
      )}

      {!checked && (
        <div className="mt-5 flex justify-end">
          <Button size="sm" onClick={() => setChecked(true)} disabled={!ready}>
            {labels.checkAnswerLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

export function ExercisesSection({
  lesson: canonicalLesson,
  explanationCache,
}: {
  lesson: Lesson;
  explanationCache: LessonExplanationCache | null;
}) {
  const lesson = useResolvedLesson(canonicalLesson, explanationCache);
  const labels = useExplanationUiLabels();
  const { code, language } = useExplanationLanguage();
  const exercises = lesson.exercises;

  if (exercises.length === 0) return null;

  return (
    <section id="exercises" className="scroll-mt-24 space-y-4" dir={language.rtl ? "rtl" : "ltr"} lang={code}>
      <h2 className="flex items-center gap-2.5 text-h4">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <PenLine className="size-4" />
        </span>
        {labels.exercisesTitle}
      </h2>
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <ExerciseItem key={exercise.id} question={exercise} />
        ))}
      </div>
    </section>
  );
}
