import type { VerbEntry } from "./types";

/** Regular ("weak") verbs only — no stem-changing/strong verbs (fahren, sehen, …). Weak verbs are
 *  the entire point of a rule-derivable conjugation generator; strong verbs would need an
 *  irregular-form lookup table instead of a rule, which is a different (unbuilt) generator. */
export const VERB_BANK: VerbEntry[] = [
  { id: "machen", infinitive: "machen", stem: "mach", en: "to make/do", needsGlide: false },
  { id: "spielen", infinitive: "spielen", stem: "spiel", en: "to play", needsGlide: false },
  { id: "lernen", infinitive: "lernen", stem: "lern", en: "to learn", needsGlide: false },
  { id: "kaufen", infinitive: "kaufen", stem: "kauf", en: "to buy", needsGlide: false },
  { id: "fragen", infinitive: "fragen", stem: "frag", en: "to ask", needsGlide: false },
  { id: "sagen", infinitive: "sagen", stem: "sag", en: "to say", needsGlide: false },
  { id: "suchen", infinitive: "suchen", stem: "such", en: "to search", needsGlide: false },
  { id: "zeigen", infinitive: "zeigen", stem: "zeig", en: "to show", needsGlide: false },
  { id: "hoeren", infinitive: "hören", stem: "hör", en: "to hear", needsGlide: false },
  { id: "kochen", infinitive: "kochen", stem: "koch", en: "to cook", needsGlide: false },
  { id: "wohnen", infinitive: "wohnen", stem: "wohn", en: "to live/reside", needsGlide: false },
  { id: "holen", infinitive: "holen", stem: "hol", en: "to fetch", needsGlide: false },
  { id: "tanzen", infinitive: "tanzen", stem: "tanz", en: "to dance", needsGlide: false },
  { id: "leben", infinitive: "leben", stem: "leb", en: "to live", needsGlide: false },
  { id: "lieben", infinitive: "lieben", stem: "lieb", en: "to love", needsGlide: false },
  { id: "glauben", infinitive: "glauben", stem: "glaub", en: "to believe", needsGlide: false },
  { id: "brauchen", infinitive: "brauchen", stem: "brauch", en: "to need", needsGlide: false },
  { id: "zahlen", infinitive: "zahlen", stem: "zahl", en: "to pay", needsGlide: false },
  { id: "warten", infinitive: "warten", stem: "wart", en: "to wait", needsGlide: true },
  { id: "arbeiten", infinitive: "arbeiten", stem: "arbeit", en: "to work", needsGlide: true },
  { id: "reden", infinitive: "reden", stem: "red", en: "to talk", needsGlide: true },
  { id: "oeffnen", infinitive: "öffnen", stem: "öffn", en: "to open", needsGlide: true },
];
