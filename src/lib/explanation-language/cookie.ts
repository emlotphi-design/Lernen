import { isExplanationLanguageCode, type ExplanationLanguageCode } from "./languages";

export const EXPLANATION_LANGUAGE_COOKIE = "explanation_lang";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 year

/** Client-side only — Server Components can read cookies via `next/headers`, but Next.js only
 *  allows *writing* them from a Server Action or Route Handler. Nothing here needs that: the
 *  provider persists the preference itself once mounted, via `document.cookie`. */
export function readExplanationLanguageCookie(): ExplanationLanguageCode | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${EXPLANATION_LANGUAGE_COOKIE}=([^;]*)`),
  );
  const value = match ? decodeURIComponent(match[1]) : null;
  return value && isExplanationLanguageCode(value) ? value : null;
}

export function writeExplanationLanguageCookie(code: ExplanationLanguageCode): void {
  if (typeof document === "undefined") return;
  document.cookie = `${EXPLANATION_LANGUAGE_COOKIE}=${encodeURIComponent(code)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
}
