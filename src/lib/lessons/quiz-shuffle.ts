import type { QuizQuestion } from "./types";
import { shuffleArray } from "./generators/shuffle";

/** Randomizes an already-authored (or already-generated) question's *presentation* — option
 *  order, drag-drop choice order, sentence-order word order — without changing what's correct.
 *  Safe because grading is value-based, not index-based, for drag-drop (`choices[i] ===
 *  correctAnswers[i]`) and sentence-order (joined-value comparison) — only multiple-choice needs
 *  `correctIndex` remapped alongside the shuffle. True-false/fill-blank/typing have nothing to
 *  shuffle and pass through unchanged. */
export function shuffleQuestionPresentation(question: QuizQuestion, rng: () => number = Math.random): QuizQuestion {
  if (question.type === "multiple-choice") {
    const order = shuffleArray(
      question.options.map((_, i) => i),
      rng,
    );
    return {
      ...question,
      options: order.map((i) => question.options[i]),
      correctIndex: order.indexOf(question.correctIndex),
    };
  }
  if (question.type === "drag-drop") {
    return { ...question, choices: shuffleArray(question.choices, rng) };
  }
  if (question.type === "sentence-order") {
    return { ...question, shuffled: shuffleArray(question.shuffled, rng) };
  }
  return question;
}
