"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getQuizMaxXp, type Lesson, type QuizQuestion } from "@/lib/lessons/types";
import type { LessonExplanationCache } from "@/lib/lessons/explanation-types";
import { useResolvedLesson } from "@/lib/lessons/resolve-explanation";
import { useQuizHistory } from "@/lib/lessons/quiz-history";
import { sampleQuestions } from "@/lib/lessons/quiz-sampling";
import { shuffleQuestionPresentation } from "@/lib/lessons/quiz-shuffle";
import { signatureForGeneratedId } from "@/lib/lessons/generators/shuffle";
import { generateCaseQuestions } from "@/lib/lessons/generators/case-question-generator";
import { generateConjugationQuestions } from "@/lib/lessons/generators/verb-conjugation-generator";
import { GENERATOR_LABELS } from "@/lib/explanation-language/generator-labels";
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
} from "./quiz-logic";
import { QuizProgress } from "./quiz-progress";
import { QuizFeedback } from "./quiz-feedback";
import { QuizResults } from "./quiz-results";
import { MultipleChoiceQuestionView } from "./question-multiple-choice";
import { TrueFalseQuestionView } from "./question-true-false";
import { FillBlankQuestionView } from "./question-fill-blank";
import { SentenceOrderQuestionView } from "./question-sentence-order";
import { DragDropQuestionView } from "./question-drag-drop";
import { TypingQuestionView } from "./question-typing";

const LENGTH_OPTIONS = [5, 10, 20, 40];
const GENERATOR_MAX_CUSTOM = 100;

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
  const labels = useExplanationUiLabels();
  const [response, setResponse] = useState<unknown>(initialResponse(question));
  const [checked, setChecked] = useState(false);

  const ready = isResponseReady(question, response);
  const correct = checked ? isAnswerCorrect(question, response) : null;

  const typeLabels: Record<QuizQuestion["type"], string> = {
    "multiple-choice": labels.multipleChoiceLabel,
    "true-false": labels.trueFalseLabel,
    "fill-blank": labels.fillBlankLabel,
    "sentence-order": labels.sentenceOrderLabel,
    "drag-drop": labels.dragDropLabel,
    typing: labels.typingLabel,
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
            trueLabel={labels.trueLabel}
            falseLabel={labels.falseLabel}
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
      </div>

      {checked && (
        <QuizFeedback
          isCorrect={correct === true}
          explanation={question.explanation}
          grammarRule={question.grammarRule}
          referenceSectionId={question.referenceSectionId}
          correctLabel={labels.correctFeedback}
          incorrectLabel={labels.incorrectFeedback}
          grammarRuleLabel={labels.grammarRuleLabel}
          reviewInLesson={labels.reviewInLesson}
          xp={question.xp}
          xpShort={labels.xpShort}
          correctAnswerLabel={labels.correctAnswerLabel}
          correctAnswerText={correct === false ? correctAnswerText(question) : undefined}
          referenceLabel={resolveReferenceLabel(labels, question.referenceLabel)}
        />
      )}

      <div className="mt-5 flex justify-end">
        {!checked ? (
          <Button onClick={handleCheck} disabled={!ready}>
            {labels.checkAnswerLabel}
          </Button>
        ) : (
          <Button onClick={onNext}>{isLast ? labels.seeResultsLabel : labels.nextLabel}</Button>
        )}
      </div>
    </div>
  );
}

export function QuizSection({
  lesson: canonicalLesson,
  explanationCache,
  nextLessonHref,
  nextLessonTitle,
}: {
  lesson: Lesson;
  explanationCache: LessonExplanationCache | null;
  nextLessonHref: string | null;
  nextLessonTitle: string | null;
}) {
  const lesson = useResolvedLesson(canonicalLesson, explanationCache);
  const labels = useExplanationUiLabels();
  const { code, language } = useExplanationLanguage();

  const isGenerated = Boolean(lesson.generator);
  const poolSize = lesson.quiz.length;
  const effectiveMaxLength = isGenerated ? GENERATOR_MAX_CUSTOM : poolSize;
  const showPicker = isGenerated || poolSize >= LENGTH_OPTIONS[0];
  const availableLengths = LENGTH_OPTIONS.filter((n) => n <= effectiveMaxLength);
  const defaultLength = Math.min(10, effectiveMaxLength) || 1;

  const lessonKey = `${lesson.type}/${lesson.level.toLowerCase()}/${lesson.slug}`;
  const historyWindow = isGenerated ? 30 : Math.max(1, Math.min(30, Math.ceil(poolSize / 2)));
  const { recentIds, markSeen } = useQuizHistory(lessonKey, historyWindow);

  const [phase, setPhase] = useState<"intro" | "active" | "results">("intro");
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>([]);
  const [xpEarned, setXpEarned] = useState(0);
  const [runKey, setRunKey] = useState(0);
  const [selectedLength, setSelectedLength] = useState(defaultLength);
  const [useCustomLength, setUseCustomLength] = useState(false);
  const [customLengthInput, setCustomLengthInput] = useState("");

  // Once a run starts, `questions` is a frozen snapshot (generated/sampled text baked in at that
  // moment) — it doesn't re-derive from `lesson.quiz`/`code` like everything else on this page,
  // so a language switch mid-quiz would otherwise leave the question text stuck in the old
  // language while the surrounding labels update, i.e. visibly mixed-language content. Rather
  // than re-deriving in place (would need a seeded/replayable shuffle for pool questions and a
  // "re-skin without re-randomizing" split for generated ones — a real generator change), drop
  // back to the intro screen on a language change so nothing stale or mixed is ever shown; the
  // intro itself is already fully reactive. No-ops while already on the intro screen.
  const skipNextLanguageReset = useRef(true);
  useEffect(() => {
    if (skipNextLanguageReset.current) {
      skipNextLanguageReset.current = false;
      return;
    }
    setPhase((prev) => {
      if (prev === "intro") return prev;
      setQuestions(null);
      return "intro";
    });
  }, [code]);

  function resolveRequestedLength(): number {
    if (useCustomLength) {
      const parsed = Number.parseInt(customLengthInput, 10);
      if (Number.isFinite(parsed) && parsed > 0) {
        return Math.min(parsed, effectiveMaxLength);
      }
    }
    return selectedLength;
  }

  function generateQuestions(length: number): QuizQuestion[] {
    const generatorLabels = GENERATOR_LABELS[code];
    const genderLabels = {
      masculine: labels.genderMasculine,
      feminine: labels.genderFeminine,
      neuter: labels.genderNeuter,
    };

    let generated: QuizQuestion[];
    if (lesson.generator?.kind === "case-article") {
      generated = generateCaseQuestions({
        caseName: lesson.generator.case,
        count: length,
        excludeIds: recentIds,
        labels: generatorLabels,
        genderLabels,
        declensionTableLabel: labels.declensionTableTitle,
        grammarRulesLabel: labels.grammarRulesTitle,
      });
    } else if (lesson.generator?.kind === "verb-conjugation") {
      generated = generateConjugationQuestions({
        tense: lesson.generator.tense,
        count: length,
        excludeIds: recentIds,
        labels: generatorLabels,
        grammarRulesLabel: labels.grammarRulesTitle,
      });
    } else {
      return sampleQuestions(lesson.quiz, length, recentIds).map((q) => shuffleQuestionPresentation(q));
    }
    return generated.map((q) => shuffleQuestionPresentation(q));
  }

  function startRun(length: number) {
    const nextQuestions = generateQuestions(length);
    const idsToMark = isGenerated
      ? nextQuestions.map((q) => signatureForGeneratedId(q.id))
      : nextQuestions.map((q) => q.id);
    markSeen(idsToMark);

    setRunKey((k) => k + 1);
    setIndex(0);
    setResults(nextQuestions.map(() => null));
    setXpEarned(0);
    setQuestions(nextQuestions);
    setPhase("active");
  }

  const estimatedXpPerQuestion = poolSize > 0 ? Math.round(getQuizMaxXp(lesson.quiz) / poolSize) : 10;
  const introMaxXp = estimatedXpPerQuestion * resolveRequestedLength();

  const maxXp = questions ? getQuizMaxXp(questions) : 0;
  const question = questions?.[index];
  const correctCount = results.filter((r) => r === true).length;
  const passed = phase === "results" && questions !== null && correctCount / questions.length >= 0.6;

  function handleAnswered(isCorrect: boolean, xp: number) {
    setResults((prev) => {
      const next = [...prev];
      next[index] = isCorrect;
      return next;
    });
    setXpEarned((prev) => prev + xp);
  }

  function handleNext() {
    if (!questions) return;
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
    } else {
      setPhase("results");
    }
  }

  function handleRetake() {
    startRun(resolveRequestedLength());
  }

  if (!isGenerated && poolSize === 0) return null;

  return (
    <section
      id="quiz"
      className="mt-8 scroll-mt-24 rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-9"
      dir={language.rtl ? "rtl" : "ltr"}
      lang={code}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <Sparkles className="size-4" />
        </span>
        <h2 className="text-h4">{labels.quizTitle}</h2>
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
            <p className="text-body text-muted-foreground">{labels.quizIntroDesc(resolveRequestedLength())}</p>
            <p className="mt-2 flex items-center gap-1.5 text-body-sm font-medium text-primary">
              <Zap className="size-3.5 fill-current" />
              {introMaxXp} {labels.xpShort}
            </p>

            {showPicker && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-body-sm font-medium text-muted-foreground">{labels.quizLengthLabel}:</span>
                {availableLengths.map((n) => (
                  <Button
                    key={n}
                    type="button"
                    size="sm"
                    variant={!useCustomLength && selectedLength === n ? "default" : "outline"}
                    onClick={() => {
                      setUseCustomLength(false);
                      setSelectedLength(n);
                    }}
                  >
                    {labels.quizLengthOptionLabel(n)}
                  </Button>
                ))}
                <Button
                  type="button"
                  size="sm"
                  variant={useCustomLength ? "default" : "outline"}
                  onClick={() => setUseCustomLength(true)}
                >
                  {labels.quizLengthCustomLabel}
                </Button>
                {useCustomLength && (
                  <Input
                    type="number"
                    min={1}
                    max={effectiveMaxLength}
                    value={customLengthInput}
                    onChange={(event) => setCustomLengthInput(event.target.value)}
                    placeholder={labels.quizLengthCustomPlaceholder}
                    className="h-8 w-24"
                  />
                )}
              </div>
            )}
            {!isGenerated && poolSize < LENGTH_OPTIONS[0] && (
              <p className="mt-1 text-caption text-muted-foreground">{labels.quizLengthMaxNote(poolSize)}</p>
            )}

            <Button className="mt-5" onClick={() => startRun(resolveRequestedLength())}>
              {labels.startQuizLabel}
            </Button>
          </motion.div>
        )}

        {phase === "active" && questions && question && (
          <motion.div
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5"
          >
            <QuizProgress
              total={questions.length}
              currentIndex={index}
              results={results}
              progressLabel={labels.questionProgress(index + 1, questions.length)}
            />

            <div className="mt-6">
              <QuizQuestionRunner
                key={`${runKey}-${question.id}`}
                question={question}
                isLast={index === questions.length - 1}
                onAnswered={handleAnswered}
                onNext={handleNext}
              />
            </div>
          </motion.div>
        )}

        {phase === "results" && questions && (
          <div className="mt-5">
            <QuizResults
              correctCount={correctCount}
              total={questions.length}
              xpEarned={xpEarned}
              maxXp={maxXp}
              passed={passed}
              nextLessonHref={nextLessonHref}
              nextLessonTitle={nextLessonTitle}
              yourScoreLabel={labels.yourScoreLabel}
              xpEarnedLabel={labels.xpEarnedLabel}
              lessonCompleteTitle={labels.lessonCompleteTitle}
              lessonCompleteDesc={labels.lessonCompleteDesc}
              keepPracticingTitle={labels.keepPracticingTitle}
              keepPracticingDesc={labels.keepPracticingDesc}
              continueToNextLesson={labels.continueToNextLessonLabel}
              retakeLabel={labels.retakeLabel}
              onRetake={handleRetake}
            />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
