import type { ExplanationLanguageCode } from "@/lib/explanation-language";
import type { QuizQuestion } from "./types";

/** The translatable overlay for one lesson's *body content* — never section labels (those are a
 *  fixed set shared across every lesson, see `@/lib/explanation-language/ui-labels.ts`), and
 *  never German-language material (example sentences, reading passages, transcripts, grammar
 *  terms) — only explanatory prose generated from the canonical (English-authored) lesson.
 *
 *  Fields are positionally parallel to the canonical `Lesson`'s arrays (same length, same order)
 *  rather than keyed by id, keeping the cache lean — a lesson's `sourceHash` changing (any
 *  structural edit) is exactly the signal that invalidates this parallel structure too. */

export type TranslatedQuizText = {
  explanation: string;
  grammarRule: string;
  /** Only present for sentence-order questions — the translated meaning of the German sentence
   *  being reordered, shown the same way an example's meaning is. */
  translation?: string;
  /** The question's own instructional framing — `prompt` for every type except true-false, which
   *  uses `statement` instead. This is pure instruction text ("Complete the sentence with the
   *  correct accusative article."), never the German learning material itself, so it always
   *  translates. Never `options`, `sentenceBefore`/`sentenceAfter`, `correctOrder`/`shuffled`,
   *  `parts`/`correctAnswers`/`choices`, or `accepted` — those are quiz *content* (the German
   *  being taught, or — for a handful of reading/listening comprehension questions — the
   *  canonical answer choices themselves) and must never be translated, regardless of what
   *  script they happen to be authored in. */
  prompt?: string;
};

export type TranslatedGrammarDetails = {
  rules: string[];
  notes: string[];
  /** Parallel to `GrammarDetails.mistakes` — only the explanatory `note` is translatable; the
   *  German `wrong`/`right` sentences never change. */
  mistakeNotes: string[];
  exceptions: string[];
  tips: string[];
};

export type TranslatedVocabularyDetails = {
  /** Parallel to `VocabularyDetails.words` — the meaning of each German word. */
  wordMeanings: string[];
};

export type TranslatedSpeakingDetails = {
  /** Parallel to `SpeakingDetails.prompts` — only the instruction, never `germanPhrase`. */
  promptInstructions: string[];
};

export type TranslatedDetails =
  | { kind: "grammar"; value: TranslatedGrammarDetails }
  | { kind: "vocabulary"; value: TranslatedVocabularyDetails }
  | { kind: "speaking"; value: TranslatedSpeakingDetails }
  | { kind: "none" };

export type TranslatedLessonContent = {
  /** The short LessonMeta blurb shown on listing cards. */
  summary: string;
  /** Parallel to `Lesson.objectives` — the "What you'll learn" bullets. Optional (older cache
   *  entries predate this field) — resolves to canonical English when absent, same as every
   *  other not-yet-generated field here. */
  objectives?: string[];
  explanationSimple: string[];
  explanationDetailed: string[];
  /** Parallel to `Lesson.examples` — the meaning of each German example sentence. */
  exampleMeanings: string[];
  /** Parallel to `Lesson.exercises`. */
  exerciseTexts: TranslatedQuizText[];
  /** Parallel to `Lesson.quiz`. */
  quizTexts: TranslatedQuizText[];
  conclusion: string;
  details: TranslatedDetails;
};

export type LessonExplanationCache = {
  /** sha256 over the lesson's canonical translatable fields — see
   *  scripts/generate-lesson-explanations.ts. Unchanged hash means this cache is still current
   *  for every language already generated; a changed hash means every language here is stale and
   *  must be regenerated (source drifted, positional parallelism can no longer be trusted). */
  sourceHash: string;
  /** English needs no entry — canonical Lesson fields *are* the English content. Any language
   *  absent here (not yet generated) resolves to canonical/English automatically. */
  languages: Partial<Record<Exclude<ExplanationLanguageCode, "en">, TranslatedLessonContent>>;
};

export type { QuizQuestion };
