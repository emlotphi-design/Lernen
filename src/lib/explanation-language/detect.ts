import {
  DEFAULT_EXPLANATION_LANGUAGE,
  isExplanationLanguageCode,
  type ExplanationLanguageCode,
} from "./languages";

/** Shared matching routine — given an ordered list of BCP-47-ish language tags (already sorted
 *  by preference), returns the first one that maps to a supported explanation language, matching
 *  on the primary subtag only (e.g. "pt-BR" → "pt"). */
function matchFirstSupported(tags: string[]): ExplanationLanguageCode | null {
  for (const tag of tags) {
    const primary = tag.trim().split(/[-_]/)[0]?.toLowerCase();
    if (primary && isExplanationLanguageCode(primary)) return primary;
  }
  return null;
}

/** Parses a raw `Accept-Language` header ("fa;q=0.9,en;q=0.8,de;q=0.7") into tags ordered by
 *  q-value, highest first. Missing q defaults to 1. */
function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";");
      const q = qPart?.startsWith("q=") ? parseFloat(qPart.slice(2)) : 1;
      return { tag: tag?.trim(), q: Number.isFinite(q) ? q : 1 };
    })
    .filter((entry): entry is { tag: string; q: number } => !!entry.tag)
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.tag);
}

/** Server-usable: resolves the best supported explanation language from a raw Accept-Language
 *  header value, falling back to the default when nothing matches (or the header is absent). */
export function detectFromAcceptLanguageHeader(header: string | null | undefined): ExplanationLanguageCode {
  if (!header) return DEFAULT_EXPLANATION_LANGUAGE;
  return matchFirstSupported(parseAcceptLanguage(header)) ?? DEFAULT_EXPLANATION_LANGUAGE;
}

/** Client-usable fallback (e.g. `navigator.languages`) for the rare case a session has no cookie
 *  yet and no server-rendered initial value is available. */
export function detectFromNavigatorLanguages(languages: readonly string[]): ExplanationLanguageCode {
  return matchFirstSupported([...languages]) ?? DEFAULT_EXPLANATION_LANGUAGE;
}
