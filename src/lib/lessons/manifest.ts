import type { LessonMeta } from "./types";
import { META as grammarA1 } from "./content/grammar/a1/_meta";
import { META as grammarA2 } from "./content/grammar/a2/_meta";
import { META as grammarB1 } from "./content/grammar/b1/_meta";
import { META as grammarB2 } from "./content/grammar/b2/_meta";
import { META as vocabularyA1 } from "./content/vocabulary/a1/_meta";
import { META as readingA1 } from "./content/reading/a1/_meta";
import { META as listeningA1 } from "./content/listening/a1/_meta";
import { META as speakingA1 } from "./content/speaking/a1/_meta";
import { META as quizA1 } from "./content/quiz/a1/_meta";

/** Every `_meta.ts` bucket concatenated into one eagerly-loaded array. This is cheap even at
 *  real scale — metadata rows only, never full lesson bodies (those are lazy-loaded per request,
 *  see content-loader.ts) — exactly the shape a `SELECT slug, type, level, title, ... FROM
 *  lessons` would return from a real backend. Adding a new lesson means adding one entry to its
 *  bucket's `_meta.ts` (alongside writing the matching content file) and, the first time a new
 *  (type, level) bucket is introduced, importing it here. */
export const LESSON_MANIFEST: LessonMeta[] = [
  ...grammarA1,
  ...grammarA2,
  ...grammarB1,
  ...grammarB2,
  ...vocabularyA1,
  ...readingA1,
  ...listeningA1,
  ...speakingA1,
  ...quizA1,
];
