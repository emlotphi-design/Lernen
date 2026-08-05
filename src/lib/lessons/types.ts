import type { CefrLevel } from "@/components/ui/level-badge";

export type { CefrLevel };

export const LESSON_TYPES = [
  "grammar",
  "vocabulary",
  "reading",
  "listening",
  "speaking",
  "quiz",
] as const;

export type LessonType = (typeof LESSON_TYPES)[number];

export type LessonStatus = "completed" | "available" | "locked";

/** The cheap, listing-safe shape — this is what a `SELECT slug, type, level, title, ...` would
 *  return from a real backend. Loaded eagerly for all lessons (see manifest.ts); never carries
 *  full lesson content. `href` is precomputed once here so nothing downstream re-derives the URL
 *  scheme — if routing ever changes, only buildHref() (index.ts) needs to change. */
export type LessonMeta = {
  slug: string;
  type: LessonType;
  level: CefrLevel;
  /** Groups lessons into a chapter that can span levels (e.g. "cases" holds an A1 and a B1
   *  lesson) — adjacency/progress is computed per-category, not per-level. */
  category: string;
  title: string;
  summary: string;
  durationMinutes: number;
  /** Position within the category, for ordering and prev/next navigation. */
  order: number;
  status: LessonStatus;
  /** 0-100 placeholder progress — today a static value on the seed data, later a per-user query. */
  progress: number;
  href: string;
};

export type LessonExample = { de: string; en: string };

// ---- Quiz questions --------------------------------------------------------------------------
// Moved here (from the old grammar-only _lib/quiz-data.ts) since quiz is cross-cutting: every
// lesson type can carry both an ungraded `exercises` list and a graded `quiz` list built from
// these same six question shapes.

export type QuizQuestionBase = {
  id: string;
  explanation: string;
  grammarRule: string;
  referenceSectionId: string;
  referenceLabel: string;
  xp: number;
};

export type MultipleChoiceQuestion = QuizQuestionBase & {
  type: "multiple-choice";
  prompt: string;
  options: string[];
  correctIndex: number;
};

export type TrueFalseQuestion = QuizQuestionBase & {
  type: "true-false";
  statement: string;
  correct: boolean;
};

export type FillBlankQuestion = QuizQuestionBase & {
  type: "fill-blank";
  prompt: string;
  sentenceBefore: string;
  sentenceAfter: string;
  accepted: string[];
};

export type SentenceOrderQuestion = QuizQuestionBase & {
  type: "sentence-order";
  prompt: string;
  correctOrder: string[];
  shuffled: string[];
  translation: string;
};

export type DragDropQuestion = QuizQuestionBase & {
  type: "drag-drop";
  prompt: string;
  parts: string[];
  correctAnswers: string[];
  choices: string[];
};

export type TypingQuestion = QuizQuestionBase & {
  type: "typing";
  prompt: string;
  accepted: string[];
};

export type QuizQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | FillBlankQuestion
  | SentenceOrderQuestion
  | DragDropQuestion
  | TypingQuestion;

export function getQuizMaxXp(questions: QuizQuestion[]): number {
  return questions.reduce((sum, question) => sum + question.xp, 0);
}

// ---- Type-specific lesson details ------------------------------------------------------------

export type DeclensionRow = {
  gender: "masculine" | "feminine" | "neuter" | "plural";
  definite: string;
  indefinite: string;
  pronoun: string;
};

export type LessonMistake = { wrong: string; right: string; note: string };

export type GrammarDetails = {
  rules: string[];
  notes: string[];
  /** Not every grammar lesson is about a declined case — only rendered when present. */
  table?: DeclensionRow[];
  mistakes: LessonMistake[];
  exceptions: string[];
  tips: string[];
};

export type VocabularyWord = { de: string; en: string; example?: string };
export type VocabularyDetails = { words: VocabularyWord[] };

export type ReadingDetails = { passage: string };

export type ListeningDetails = { audioUrl?: string; transcript: string };

/** Split so `instruction` (translatable teaching text) never risks mangling `germanPhrase`
 *  (fixed German content) when explanation content is generated/resolved. */
export type SpeakingPrompt = { instruction: string; germanPhrase: string };
export type SpeakingDetails = { prompts: SpeakingPrompt[] };

export type QuizDetails = Record<string, never>;

/** Kept as a fixed simple/detailed pair (not a variable list) so the section titles stay driven
 *  by translation props (see `grammar.json`'s `simpleExplanation`/`detailedExplanation`) exactly
 *  like the original grammar lesson page — the same two-block shape reads fine across every
 *  lesson type ("simple" = the quick take, "detailed" = fuller context). */
export type LessonExplanation = { simple: string[]; detailed: string[] };

/** Identifies a runtime question generator for grammar-pattern topics — a noun/verb bank plus a
 *  rule table produces fresh, correctly-graded question instances on demand instead of drawing
 *  from a fixed hand-authored array. See `src/lib/lessons/generators/`. Optional and additive:
 *  a lesson without `generator` behaves exactly as before, sampling from its static `quiz` array. */
export type QuizGeneratorSpec =
  | { kind: "case-article"; case: "nominativ" | "akkusativ" | "dativ" | "genitiv" }
  | { kind: "verb-conjugation"; tense: "praesens" | "praeteritum" };

/** Fields shared by every lesson type, regardless of `details`. */
export type LessonCommon = LessonMeta & {
  objectives: string[];
  explanation: LessonExplanation;
  examples: LessonExample[];
  /** Ungraded, inline practice — reuses the same question components as `quiz` but rendered
   *  without scoring or a results screen. Always static/hand-authored, even when `generator` is
   *  present — the generator only drives the graded quiz. */
  exercises: QuizQuestion[];
  /** The graded, end-of-lesson assessment (scoring, results screen, XP, retake). Used as the
   *  question pool directly when `generator` is absent; kept as a small hand-authored
   *  fallback/seed set even when `generator` is present. */
  quiz: QuizQuestion[];
  /** When present, the graded quiz is populated at runtime from this generator instead of
   *  sampling `quiz` directly — see `quiz-section.tsx`. */
  generator?: QuizGeneratorSpec;
  /** The lesson's closing "Summary" section — a longer wrap-up paragraph, distinct from the
   *  short `LessonMeta.summary` blurb used on listing cards. */
  conclusion: string;
  lastUpdated: string;
};

export type Lesson =
  | (LessonCommon & { type: "grammar"; details: GrammarDetails })
  | (LessonCommon & { type: "vocabulary"; details: VocabularyDetails })
  | (LessonCommon & { type: "reading"; details: ReadingDetails })
  | (LessonCommon & { type: "listening"; details: ListeningDetails })
  | (LessonCommon & { type: "speaking"; details: SpeakingDetails })
  | (LessonCommon & { type: "quiz"; details: QuizDetails });

export type Category = {
  id: string;
  type: LessonType;
  /** Categories can list a representative level (used for browse-page badges), but membership
   *  isn't restricted to it — see LessonMeta.category. */
  level: CefrLevel;
  title: string;
  order: number;
};
