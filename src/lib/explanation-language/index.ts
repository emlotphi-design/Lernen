/** Client-safe barrel — deliberately excludes server.ts (imports `next/headers`), the same way
 *  Supabase's server client is never re-exported from a shared barrel in this codebase. Import
 *  `@/lib/explanation-language/server` directly from Server Components/layouts instead. */
export {
  EXPLANATION_LANGUAGES,
  DEFAULT_EXPLANATION_LANGUAGE,
  isExplanationLanguageCode,
  getExplanationLanguageDefinition,
  type ExplanationLanguageCode,
  type ExplanationLanguageDefinition,
} from "./languages";
export { detectFromAcceptLanguageHeader, detectFromNavigatorLanguages } from "./detect";
export {
  EXPLANATION_LANGUAGE_COOKIE,
  readExplanationLanguageCookie,
  writeExplanationLanguageCookie,
} from "./cookie";
export { resolveExplanationText, type ExplanationDictionary } from "./resolve";
