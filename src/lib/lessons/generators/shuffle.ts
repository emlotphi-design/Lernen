/** Fisher-Yates — used by both generators (sampling nouns/verbs) and `quiz-shuffle.ts`
 *  (shuffling presentation order of an already-authored question's options). */
export function shuffleArray<T>(items: T[], rng: () => number = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Samples `count` items without replacement, preferring `pool` order already shuffled by the
 *  caller when exclusion is involved (see `quiz-sampling.ts`); here it's a plain random draw. */
export function sampleN<T>(items: T[], count: number, rng: () => number = Math.random): T[] {
  return shuffleArray(items, rng).slice(0, Math.min(count, items.length));
}

export function randomId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Recovers the deterministic prefix `randomId` embedded before its trailing random suffix — the
 *  content signature (case/verb/pronoun combo) a generated question represents, for "recently
 *  seen" tracking. A generated question's own `id` is fresh every run and can't be used directly
 *  for exclusion; this signature can. Relies on the random suffix never containing a hyphen. */
export function signatureForGeneratedId(id: string): string {
  return id.slice(0, id.lastIndexOf("-"));
}
