import type { QuizQuestion } from "@/lib/lessons/types";
import type { ExplanationUiLabels } from "@/lib/explanation-language/ui-labels";

/** Shared grading/response logic used by both the graded QuizSection and the ungraded
 *  ExercisesSection — one set of rules for what counts as "correct" and "ready to check",
 *  regardless of which orchestrator is rendering the question. */

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function isAnswerCorrect(question: QuizQuestion, response: unknown): boolean {
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

export function isResponseReady(question: QuizQuestion, response: unknown): boolean {
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

export function initialResponse(question: QuizQuestion): unknown {
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

export function correctAnswerText(question: QuizQuestion): string | undefined {
  if (question.type === "fill-blank" || question.type === "typing") {
    return question.accepted[0];
  }
  return undefined;
}

/** `QuizQuestion.referenceLabel` is canonical (always-English) lesson-section chrome — "Grammar
 *  rules", "Declension table" — not part of the generated per-lesson translation cache. Rather
 *  than translating it as its own field (which would duplicate content that already exists),
 *  every value it takes across every lesson matches one of the fixed EXPLANATION_UI_LABELS
 *  section titles one-to-one, so it's resolved by lookup instead — correct in all 16 languages
 *  immediately, with no generation step. */
const REFERENCE_LABEL_KEYS: Record<string, keyof ExplanationUiLabels> = {
  "Grammar rules": "grammarRulesTitle",
  "Declension table": "declensionTableTitle",
  Examples: "examplesTitle",
  Exceptions: "exceptionsTitle",
  "Important notes": "importantNotesTitle",
  "Detailed explanation": "detailedExplanationTitle",
  Quiz: "quizTitle",
  Transcript: "listeningTranscriptTitle",
  Passage: "readingPassageTitle",
  "Speaking prompts": "speakingPromptsTitle",
};

export function resolveReferenceLabel(labels: ExplanationUiLabels, referenceLabel: string): string {
  const key = REFERENCE_LABEL_KEYS[referenceLabel];
  const resolved = key ? labels[key] : undefined;
  return typeof resolved === "string" ? resolved : referenceLabel;
}
