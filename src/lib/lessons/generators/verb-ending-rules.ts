import type { Pronoun, TenseName } from "./types";

/** Fixed German grammar term, never translated — same rule as CASE_DISPLAY_NAME. */
export const TENSE_DISPLAY_NAME: Record<TenseName, string> = {
  praesens: "Präsens",
  praeteritum: "Präteritum",
};

type PronounForms = Record<Pronoun, string>;

/** Regular ("weak") verb endings per tense, with a glide variant for stems ending in a consonant
 *  cluster (t/d, or consonant+n/m) that needs an -e- before a consonant-initial ending — e.g.
 *  du arbeitest, not du arbeitst. */
const ENDINGS: Record<TenseName, { regular: PronounForms; glide: PronounForms }> = {
  praesens: {
    regular: { ich: "e", du: "st", er: "t", wir: "en", ihr: "t", sie: "en" },
    glide: { ich: "e", du: "est", er: "et", wir: "en", ihr: "et", sie: "en" },
  },
  praeteritum: {
    regular: { ich: "te", du: "test", er: "te", wir: "ten", ihr: "tet", sie: "ten" },
    glide: { ich: "ete", du: "etest", er: "ete", wir: "eten", ihr: "etet", sie: "eten" },
  },
};

export function conjugationEnding(tense: TenseName, needsGlide: boolean, pronoun: Pronoun): string {
  return ENDINGS[tense][needsGlide ? "glide" : "regular"][pronoun];
}

export function conjugate(stem: string, tense: TenseName, needsGlide: boolean, pronoun: Pronoun): string {
  return `${stem}${conjugationEnding(tense, needsGlide, pronoun)}`;
}
