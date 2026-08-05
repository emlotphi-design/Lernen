/** Restricted to singular masculine/feminine/neuter — plural declension (dativ -n suffix,
 *  genitiv-plural behavior) is a genuinely different rule set and out of scope for this
 *  generator; the noun bank simply never includes plural entries. */
export type Gender = "masculine" | "feminine" | "neuter";

export type NounEntry = {
  id: string;
  /** Bare nominative-singular form, no article, e.g. "Hund". */
  de: string;
  en: string;
  gender: Gender;
  /** Genitiv noun suffix ("s" or "es") — only masculine/neuter nouns take one; feminine nouns
   *  never change form for case. */
  genitiveSuffix?: "s" | "es";
};

export type CaseName = "nominativ" | "akkusativ" | "dativ" | "genitiv";

export type VerbEntry = {
  id: string;
  infinitive: string;
  /** infinitive minus "-en". */
  stem: string;
  en: string;
  /** Stem ends in a consonant cluster (t/d, or consonant+n/m, e.g. arbeiten/öffnen) that needs an
   *  -e- glide before a consonant-initial ending, e.g. du arbeitest, not du arbeitst. */
  needsGlide: boolean;
};

export type TenseName = "praesens" | "praeteritum";

export type Pronoun = "ich" | "du" | "er" | "wir" | "ihr" | "sie";

export const PRONOUNS: Pronoun[] = ["ich", "du", "er", "wir", "ihr", "sie"];
