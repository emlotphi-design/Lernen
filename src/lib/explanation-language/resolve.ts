import { DEFAULT_EXPLANATION_LANGUAGE, type ExplanationLanguageCode } from "./languages";

/** The shape any future translated-explanation content should take — a sparse per-language map,
 *  since not every explanation string needs to exist in all 16 languages from day one. This is
 *  the seam the (unchanged) Lesson Engine will eventually store its explanations, hints, and
 *  quiz feedback in. */
export type ExplanationDictionary<T = string> = Partial<Record<ExplanationLanguageCode, T>>;

/** Resolves a piece of explanation content for the current language: exact match → English →
 *  first available entry → the given fallback. Shared by both the client hook
 *  (`useExplanationText`) and any Server Component that wants the same logic without a hook. */
export function resolveExplanationText<T>(
  dictionary: ExplanationDictionary<T>,
  code: ExplanationLanguageCode,
  fallback?: T,
): T | undefined {
  if (dictionary[code] !== undefined) return dictionary[code];
  if (dictionary[DEFAULT_EXPLANATION_LANGUAGE] !== undefined) {
    return dictionary[DEFAULT_EXPLANATION_LANGUAGE];
  }
  const firstAvailable = Object.values(dictionary)[0] as T | undefined;
  return firstAvailable ?? fallback;
}
