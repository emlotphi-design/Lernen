import type { QuizQuestion } from "./types";
import { shuffleArray } from "./generators/shuffle";

/** Draws up to `count` questions from a static pool, preferring ids not in `excludeIds` (recently
 *  seen). If exclusion would leave fewer than `count` available, tops up with the
 *  least-recently-seen ones rather than under-delivering — small pools (2-4 items) must degrade
 *  gracefully, never throw. Draw order is shuffled; presentation (option/choice order) is a
 *  separate step, see `quiz-shuffle.ts`. */
export function sampleQuestions(pool: QuizQuestion[], count: number, excludeIds: Set<string>): QuizQuestion[] {
  if (pool.length === 0) return [];
  const fresh = pool.filter((q) => !excludeIds.has(q.id));
  const seen = pool.filter((q) => excludeIds.has(q.id));
  const ordered = [...shuffleArray(fresh), ...shuffleArray(seen)];
  return ordered.slice(0, Math.min(count, ordered.length));
}
