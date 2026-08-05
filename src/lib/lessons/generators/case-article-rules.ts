import type { CaseName, Gender, NounEntry } from "./types";

/** The case name as it's actually taught — a fixed German grammar term, never translated,
 *  same rule as every other embedded German term in this app. */
export const CASE_DISPLAY_NAME: Record<CaseName, string> = {
  nominativ: "Nominativ",
  akkusativ: "Akkusativ",
  dativ: "Dativ",
  genitiv: "Genitiv",
};

type ArticleForms = { definite: string; indefinite: string };

/** Case × gender → article. Genitiv masculine/neuter also requires appending the noun's own
 *  `genitiveSuffix` (see `nounForCase`) — the article table alone isn't enough for genitiv. */
export const CASE_ARTICLE_TABLE: Record<CaseName, Record<Gender, ArticleForms>> = {
  nominativ: {
    masculine: { definite: "der", indefinite: "ein" },
    feminine: { definite: "die", indefinite: "eine" },
    neuter: { definite: "das", indefinite: "ein" },
  },
  akkusativ: {
    masculine: { definite: "den", indefinite: "einen" },
    feminine: { definite: "die", indefinite: "eine" },
    neuter: { definite: "das", indefinite: "ein" },
  },
  dativ: {
    masculine: { definite: "dem", indefinite: "einem" },
    feminine: { definite: "der", indefinite: "einer" },
    neuter: { definite: "dem", indefinite: "einem" },
  },
  genitiv: {
    masculine: { definite: "des", indefinite: "eines" },
    feminine: { definite: "der", indefinite: "einer" },
    neuter: { definite: "des", indefinite: "eines" },
  },
};

/** The noun form to use for a given case — unchanged except in the genitiv, where masculine/
 *  neuter nouns take their `genitiveSuffix`. */
export function nounForCase(noun: NounEntry, caseName: CaseName): string {
  if (caseName === "genitiv" && noun.genitiveSuffix) {
    return `${noun.de}${noun.genitiveSuffix}`;
  }
  return noun.de;
}

/** One fill-blank sentence frame per case — `___` marks where the article goes, `{noun}` is
 *  replaced with the case-appropriate noun form. Chosen to be grammatically valid and semantically
 *  reasonable across all genders/nouns in the bank, not tied to any specific noun's meaning. */
export const CASE_SENTENCE_FRAME: Record<CaseName, { sentenceBefore: string; sentenceAfter: string; en: string }> = {
  nominativ: { sentenceBefore: "", sentenceAfter: " {noun} ist neu.", en: "The {noun} is new." },
  akkusativ: { sentenceBefore: "Ich sehe ", sentenceAfter: " {noun}.", en: "I see the {noun}." },
  dativ: { sentenceBefore: "Ich helfe ", sentenceAfter: " {noun}.", en: "I am helping the {noun}." },
  genitiv: { sentenceBefore: "Der Preis ", sentenceAfter: " {noun} ist hoch.", en: "The price of the {noun} is high." },
};
