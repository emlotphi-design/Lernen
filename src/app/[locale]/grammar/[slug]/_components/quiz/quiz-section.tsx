"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Quiz, QuizQuestion } from "../../_lib/quiz-data";
import { getQuizMaxXp } from "../../_lib/quiz-data";
import { QuizProgress } from "./quiz-progress";
import { QuizFeedback } from "./quiz-feedback";
import { QuizResults } from "./quiz-results";
import { MultipleChoiceQuestionView } from "./question-multiple-choice";
import { TrueFalseQuestionView } from "./question-true-false";
import { FillBlankQuestionView } from "./question-fill-blank";
import { SentenceOrderQuestionView } from "./question-sentence-order";
import { DragDropQuestionView } from "./question-drag-drop";
import { TypingQuestionView } from "./question-typing";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function isAnswerCorrect(question: QuizQuestion, response: unknown): boolean {
  switch (question.type) {
    case "multiple-choice":
      return response === question.correctIndex;
    case "true-false":
      return response === question.correct;
    case "fill-blank":
      return typeof response === "string" && question.accepted.includes(normalize(response));
    case "typing":
      return typeof response === "string" && question.accepted.includes(normalize(response));
    case "sentence-order": {
      const indices = response as number[];
      if (indices.length !== question.correctOrder.length) return false;
      return indices.map((i) => question.shuffled[i]).join(" ") === question.correctOrder.join(" ");
    }
    case "drag-drop": {
      const slots = response as (number | null)[];
      return slots.every(
        (choiceIndex, i) => choiceIndex !== null && question.choices[choiceIndex] === question.correctAnswers[i],
      );
    }
  }
}

function isResponseReady(question: QuizQuestion, response: unknown): boolean {
  switch (question.type) {
    case "multiple-choice":
      return response !== null && response !== undefined;
    case "true-false":
      return response !== null && response !== undefined;
    case "fill-blank":
    case "typing":
      return typeof response === "string" && response.trim().length > 0;
    case "sentence-order":
      return (response as number[]).length === question.correctOrder.length;
    case "drag-drop":
      return (response as (number | null)[]).every((v) => v !== null);
  }
}

function initialResponse(question: QuizQuestion): unknown {
  switch (question.type) {
    case "multiple-choice":
    case "true-false":
      return null;
    case "fill-blank":
    case "typing":
      return "";
    case "sentence-order":
      return [];
    case "drag-drop":
      return question.correctAnswers.map(() => null);
  }
}

function correctAnswerText(question: QuizQuestion): string | undefined {
  if (question.type === "fill-blank" || question.type === "typing") {
    return question.accepted[0];
  }
  return undefined;
}

function QuizQuestionRunner({
  question,
  isLast,
  onAnswered,
  onNext,
}: {
  question: QuizQuestion;
  isLast: boolean;
  onAnswered: (isCorrect: boolean, xp: number) => void;
  onNext: () => void;
}) {
  const t = useTranslations("quiz");
  const [response, setResponse] = useState<unknown>(initialResponse(question));
  const [checked, setChecked] = useState(false);

  const ready = isResponseReady(question, response);
  const correct = checked ? isAnswerCorrect(question, response) : null;

  const typeLabels: Record<QuizQuestion["type"], string> = {
    "multiple-choice": t("multipleChoice"),
    "true-false": t("trueFalse"),
    "fill-blank": t("fillBlank"),
    "sentence-order": t("sentenceOrder"),
    "drag-drop": t("dragDrop"),
    typing: t("typing"),
  };

  function handleCheck() {
    const isCorrect = isAnswerCorrect(question, response);
    setChecked(true);
    onAnswered(isCorrect, isCorrect ? question.xp : 0);
  }

  return (
    <div>
      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-caption font-medium text-muted-foreground">
        {typeLabels[question.type]}
      </span>

      <div className="mt-4">
        {question.type === "multiple-choice" && (
          <MultipleChoiceQuestionView
            question={question}
            response={response as number | null}
            onChange={setResponse}
            checked={checked}
          />
        )}
        {question.type === "true-false" && (
          <TrueFalseQuestionView
            question={question}
            response={response as boolean | null}
            onChange={setResponse}
            checked={checked}
            trueLabel={t("trueLabel")}
            falseLabel={t("falseLabel")}
          />
        )}
        {question.type === "fill-blank" && (
          <FillBlankQuestionView
            question={question}
            response={response as string}
            onChange={setResponse}
            checked={checked}
            isCorrect={correct}
          />
        )}
        {question.type === "sentence-order" && (
          <SentenceOrderQuestionView
            question={question}
            response={response as number[]}
            onChange={setResponse}
            checked={checked}
            isCorrect={correct}
            hint={t("tapToBuildSentence")}
          />
        )}
        {question.type === "drag-drop" && (
          <DragDropQuestionView
            question={question}
            response={response as (number | null)[]}
            onChange={setResponse}
            checked={checked}
            hint={t("dragDropHint")}
            clearLabel={t("clearAnswer")}
          />
        )}
        {question.type === "typing" && (
          <TypingQuestionView
            question={question}
            response={response as string}
            onChange={setResponse}
            checked={checked}
            isCorrect={correct}
            placeholder={t("typeYourAnswer")}
          />
        )}
      </div>

      {checked && (
        <QuizFeedback
          isCorrect={correct === true}
          explanation={question.explanation}
          grammarRule={question.grammarRule}
          referenceSectionId={question.referenceSectionId}
          referenceLabel={question.referenceLabel}
          correctLabel={t("correct")}
          incorrectLabel={t("incorrect")}
          grammarRuleLabel={t("grammarRuleLabel")}
          reviewInLesson={t("reviewInLesson")}
          xp={question.xp}
          xpShort={t("xpShort")}
          correctAnswerLabel={t("correctAnswerLabel")}
          correctAnswerText={correct === false ? correctAnswerText(question) : undefined}
        />
      )}

      <div className="mt-5 flex justify-end">
        {!checked ? (
          <Button onClick={handleCheck} disabled={!ready}>
            {t("checkAnswer")}
          </Button>
        ) : (
          <Button onClick={onNext}>{isLast ? t("seeResults") : t("next")}</Button>
        )}
      </div>
    </div>
  );
}

export function QuizSection({
  quiz,
  nextLessonSlug,
  nextLessonTitle,
}: {
  quiz: Quiz;
  nextLessonSlug: string | null;
  nextLessonTitle: string | null;
}) {
  const t = useTranslations("quiz");
  const tGrammar = useTranslations("grammar");
  const [phase, setPhase] = useState<"intro" | "active" | "results">("intro");
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>(quiz.questions.map(() => null));
  const [xpEarned, setXpEarned] = useState(0);
  const [runKey, setRunKey] = useState(0);

  const maxXp = getQuizMaxXp(quiz);
  const question = quiz.questions[index];
  const correctCount = results.filter((r) => r === true).length;
  const passed = phase === "results" && correctCount / quiz.questions.length >= 0.6;

  function handleAnswered(isCorrect: boolean, xp: number) {
    setResults((prev) => {
      const next = [...prev];
      next[index] = isCorrect;
      return next;
    });
    setXpEarned((prev) => prev + xp);
  }

  function handleNext() {
    if (index + 1 < quiz.questions.length) {
      setIndex((i) => i + 1);
    } else {
      setPhase("results");
    }
  }

  function handleRetake() {
    setPhase("active");
    setIndex(0);
    setResults(quiz.questions.map(() => null));
    setXpEarned(0);
    setRunKey((k) => k + 1);
  }

  return (
    <section id="quiz" className="mt-8 scroll-mt-24 rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-9">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Sparkles className="size-4" />
        </span>
        <h2 className="text-h4">{t("title")}</h2>
      </div>

      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p className="text-body text-muted-foreground">
              {t("quizIntroDesc", { count: quiz.questions.length })}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-body-sm font-medium text-primary">
              <Zap className="size-3.5 fill-current" />
              {maxXp} {t("xpShort")}
            </p>
            <Button className="mt-5" onClick={() => setPhase("active")}>
              {tGrammar("startQuiz")}
            </Button>
          </motion.div>
        )}

        {phase === "active" && (
          <motion.div
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5"
          >
            <QuizProgress
              total={quiz.questions.length}
              currentIndex={index}
              results={results}
              progressLabel={t("questionProgress", { current: index + 1, total: quiz.questions.length })}
            />

            <div className="mt-6">
              <QuizQuestionRunner
                key={`${runKey}-${question.id}`}
                question={question}
                isLast={index === quiz.questions.length - 1}
                onAnswered={handleAnswered}
                onNext={handleNext}
              />
            </div>
          </motion.div>
        )}

        {phase === "results" && (
          <div className="mt-5">
            <QuizResults
              correctCount={correctCount}
              total={quiz.questions.length}
              xpEarned={xpEarned}
              maxXp={maxXp}
              passed={passed}
              nextLessonSlug={nextLessonSlug}
              nextLessonTitle={nextLessonTitle}
              yourScoreLabel={t("yourScore")}
              xpEarnedLabel={t("xpEarned")}
              lessonCompleteTitle={t("lessonCompleteTitle")}
              lessonCompleteDesc={t("lessonCompleteDesc")}
              keepPracticingTitle={t("keepPracticingTitle")}
              keepPracticingDesc={t("keepPracticingDesc")}
              continueToNextLesson={t("continueToNextLesson")}
              retakeLabel={t("retake")}
              onRetake={handleRetake}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
