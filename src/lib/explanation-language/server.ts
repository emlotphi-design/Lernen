import { cookies, headers } from "next/headers";
import { isExplanationLanguageCode, type ExplanationLanguageCode } from "./languages";
import { EXPLANATION_LANGUAGE_COOKIE } from "./cookie";
import { detectFromAcceptLanguageHeader } from "./detect";

/** Server-only — imports `next/headers`, so only import this from Server Components/layouts,
 *  the same way `@/lib/supabase/server` is kept separate from the client Supabase helper.
 *
 *  Resolution order: existing cookie → detected from the request's Accept-Language header →
 *  default. Used to compute the *initial* value handed to ExplanationLanguageProvider so first
 *  paint is already correct — no flash while the client provider figures out the same thing. */
export async function getExplanationLanguage(): Promise<ExplanationLanguageCode> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(EXPLANATION_LANGUAGE_COOKIE)?.value;
  if (fromCookie && isExplanationLanguageCode(fromCookie)) return fromCookie;

  const headerStore = await headers();
  return detectFromAcceptLanguageHeader(headerStore.get("accept-language"));
}
