/** The single source of truth for supported explanation languages — adding a new one later
 *  means appending one entry here, nothing else. Mirrors the `as const` array → derived union
 *  pattern already used for `CefrLevel` (see src/components/ui/level-badge.tsx).
 *
 *  `latinScript` drives BidiText (@/components/lessons/bidi-text): it only needs to isolate and
 *  chip-highlight embedded German terms when the surrounding explanation prose is in a different
 *  script — for a Latin-alphabet language (English, Turkish, Polish, ...) every word in the
 *  sentence would otherwise match the same "Latin run" pattern as the German term itself. */
export const EXPLANATION_LANGUAGES = [
  { code: "fa", englishName: "Persian", nativeName: "فارسی", rtl: true, latinScript: false },
  { code: "en", englishName: "English", nativeName: "English", rtl: false, latinScript: true },
  { code: "ru", englishName: "Russian", nativeName: "Русский", rtl: false, latinScript: false },
  { code: "uk", englishName: "Ukrainian", nativeName: "Українська", rtl: false, latinScript: false },
  { code: "tr", englishName: "Turkish", nativeName: "Türkçe", rtl: false, latinScript: true },
  { code: "ar", englishName: "Arabic", nativeName: "العربية", rtl: true, latinScript: false },
  { code: "ku", englishName: "Kurdish", nativeName: "Kurmancî", rtl: false, latinScript: true },
  { code: "pl", englishName: "Polish", nativeName: "Polski", rtl: false, latinScript: true },
  { code: "ro", englishName: "Romanian", nativeName: "Română", rtl: false, latinScript: true },
  { code: "bg", englishName: "Bulgarian", nativeName: "Български", rtl: false, latinScript: false },
  { code: "el", englishName: "Greek", nativeName: "Ελληνικά", rtl: false, latinScript: false },
  { code: "it", englishName: "Italian", nativeName: "Italiano", rtl: false, latinScript: true },
  { code: "es", englishName: "Spanish", nativeName: "Español", rtl: false, latinScript: true },
  { code: "fr", englishName: "French", nativeName: "Français", rtl: false, latinScript: true },
  { code: "nl", englishName: "Dutch", nativeName: "Nederlands", rtl: false, latinScript: true },
  { code: "pt", englishName: "Portuguese", nativeName: "Português", rtl: false, latinScript: true },
] as const;

export type ExplanationLanguageCode = (typeof EXPLANATION_LANGUAGES)[number]["code"];

export type ExplanationLanguageDefinition = (typeof EXPLANATION_LANGUAGES)[number];

export const DEFAULT_EXPLANATION_LANGUAGE: ExplanationLanguageCode = "en";

const CODE_SET: ReadonlySet<string> = new Set(EXPLANATION_LANGUAGES.map((l) => l.code));

export function isExplanationLanguageCode(value: string): value is ExplanationLanguageCode {
  return CODE_SET.has(value);
}

export function getExplanationLanguageDefinition(
  code: ExplanationLanguageCode,
): ExplanationLanguageDefinition {
  const found = EXPLANATION_LANGUAGES.find((l) => l.code === code);
  if (found) return found;
  // Unreachable given ExplanationLanguageCode is derived from this same array, but keeps the
  // function total instead of possibly-undefined.
  return EXPLANATION_LANGUAGES.find((l) => l.code === DEFAULT_EXPLANATION_LANGUAGE)!;
}
