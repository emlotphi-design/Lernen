"use client";

import { useMemo } from "react";
import { useExplanationLanguage } from "@/components/providers/explanation-language-provider";
import type { ExplanationLanguageCode } from "@/lib/explanation-language";
import type { Lesson, QuizQuestion } from "./types";
import type { LessonExplanationCache, TranslatedLessonContent, TranslatedQuizText } from "./explanation-types";

function pickTranslated(
  cache: LessonExplanationCache | null,
  language: ExplanationLanguageCode,
): TranslatedLessonContent | null {
  // English needs no cache entry — canonical Lesson fields *are* the English content.
  if (!cache || language === "en") return null;
  return cache.languages[language as Exclude<ExplanationLanguageCode, "en">] ?? null;
}

function resolveQuizList(canonical: QuizQuestion[], translated: TranslatedQuizText[] | undefined): QuizQuestion[] {
  if (!translated) return canonical;
  return canonical.map((question, i) => {
    const t = translated[i];
    if (!t) return question;
    const resolved: QuizQuestion = { ...question, explanation: t.explanation, grammarRule: t.grammarRule };
    if (resolved.type === "sentence-order" && t.translation) {
      resolved.translation = t.translation;
    }
    if (t.prompt) {
      if (resolved.type === "true-false") {
        resolved.statement = t.prompt;
      } else {
        resolved.prompt = t.prompt;
      }
    }
    return resolved;
  });
}

/** Resolves a canonical lesson's explanatory content into the given explanation language —
 *  falling back to the canonical (English) field whenever the cache has no entry (language not
 *  yet generated, or `en` itself). German content (title, example `de`, passage, transcript,
 *  `germanPhrase`) is never touched — only the fields listed in TranslatedLessonContent. */
export function resolveLesson(
  lesson: Lesson,
  cache: LessonExplanationCache | null,
  language: ExplanationLanguageCode,
): Lesson {
  const t = pickTranslated(cache, language);
  if (!t) return lesson;

  const resolved = {
    ...lesson,
    summary: t.summary || lesson.summary,
    objectives: t.objectives?.length ? t.objectives : lesson.objectives,
    explanation: {
      simple: t.explanationSimple.length ? t.explanationSimple : lesson.explanation.simple,
      detailed: t.explanationDetailed.length ? t.explanationDetailed : lesson.explanation.detailed,
    },
    examples: lesson.examples.map((example, i) => ({ ...example, en: t.exampleMeanings[i] ?? example.en })),
    exercises: resolveQuizList(lesson.exercises, t.exerciseTexts),
    quiz: resolveQuizList(lesson.quiz, t.quizTexts),
    conclusion: t.conclusion || lesson.conclusion,
  } as Lesson;

  if (t.details.kind === "grammar" && resolved.type === "grammar") {
    const d = t.details.value;
    resolved.details = {
      ...resolved.details,
      rules: d.rules.length ? d.rules : resolved.details.rules,
      notes: d.notes.length ? d.notes : resolved.details.notes,
      exceptions: d.exceptions.length ? d.exceptions : resolved.details.exceptions,
      tips: d.tips.length ? d.tips : resolved.details.tips,
      mistakes: resolved.details.mistakes.map((m, i) => ({ ...m, note: d.mistakeNotes[i] ?? m.note })),
    };
  } else if (t.details.kind === "vocabulary" && resolved.type === "vocabulary") {
    const d = t.details.value;
    resolved.details = {
      words: resolved.details.words.map((w, i) => ({ ...w, en: d.wordMeanings[i] ?? w.en })),
    };
  } else if (t.details.kind === "speaking" && resolved.type === "speaking") {
    const d = t.details.value;
    resolved.details = {
      prompts: resolved.details.prompts.map((p, i) => ({ ...p, instruction: d.promptInstructions[i] ?? p.instruction })),
    };
  }

  return resolved;
}

/** Client hook — resolves an entire lesson for the *currently selected* explanation language,
 *  so switching the selector updates the page immediately without a reload. */
export function useResolvedLesson(lesson: Lesson, cache: LessonExplanationCache | null): Lesson {
  const { code } = useExplanationLanguage();
  return useMemo(() => resolveLesson(lesson, cache, code), [lesson, cache, code]);
}
