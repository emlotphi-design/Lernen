import type { CefrLevel } from "@/components/ui/level-badge";

export type Mistake = {
  original: string;
  issue: string;
  correction: string;
};

export type VocabSuggestion = {
  word: string;
  suggestion: string;
  reason: string;
};

export type BetterExample = { de: string; en: string };

export type RelatedTopic = { label: string; href: string };

export type WritingAnalysis = {
  isCorrect: boolean;
  correctedSentence: string;
  mistakes: Mistake[];
  vocabularySuggestions: VocabSuggestion[];
  naturalAlternative: string | null;
  explanation: string;
  relatedTopic: RelatedTopic;
  difficulty: CefrLevel;
  betterExamples: BetterExample[];
};

type Rule = {
  id: string;
  pattern: RegExp;
  replacer: (...groups: string[]) => string;
  issue: string;
  explanation: string;
  relatedTopic: RelatedTopic;
  difficulty: CefrLevel;
  betterExamples: BetterExample[];
};

const NOMINATIV_TOPIC: RelatedTopic = { label: "Der Nominativ", href: "/lessons/grammar/a1/nominativ" };
const AKKUSATIV_TOPIC: RelatedTopic = { label: "Der Akkusativ", href: "/lessons/grammar/a1/akkusativ" };
const DATIV_TOPIC: RelatedTopic = { label: "Der Dativ", href: "/lessons/grammar/b1/dativ" };

// Every rule's `pattern` is the single source of truth for what it matches — `replacer` only
// describes how to rewrite a match (via String.replace's callback signature), so the regex
// itself is never duplicated between detection and correction.
const RULES: Rule[] = [
  {
    id: "akk-masculine-article",
    pattern: /\b(sehe|siehst|sieht|sehen|habe|hast|hat|haben|kaufe|kaufst|kauft|kaufen|liebe|liebst|liebt|lieben|brauche|brauchst|braucht|brauchen)\s+der\s+(Mann|Hund|Apfel|Tisch|Lehrer)\b/i,
    replacer: (_match, verb, noun) => `${verb} den ${noun}`,
    issue: "‘der’ should be ‘den’ here — the noun is a direct object.",
    explanation:
      "This verb takes a direct object, which German marks with the accusative case. Masculine nouns are the only ones that visibly change in the accusative: der becomes den (and ein becomes einen). Feminine, neuter, and plural articles stay identical to the nominative, which is why this mix-up almost always involves a masculine noun.",
    relatedTopic: AKKUSATIV_TOPIC,
    difficulty: "A1",
    betterExamples: [
      { de: "Ich sehe den Mann auf der Straße.", en: "I see the man on the street." },
      { de: "Wir kaufen den Tisch für die Küche.", en: "We're buying the table for the kitchen." },
    ],
  },
  {
    id: "dativ-feminine-verb",
    pattern: /\b(helfe|hilfst|hilft|helfen|danke|dankst|dankt|danken|gehört|gehören|glaube|glaubst|glaubt|glauben)\s+die\s+(Frau|Katze|Schule)\b/i,
    replacer: (_match, verb, noun) => `${verb} der ${noun}`,
    issue: "‘die’ should be ‘der’ here — this verb always takes a dative object.",
    explanation:
      "A small group of verbs — helfen, danken, gehören, glauben among them — always take a dative object, even though they might look like they should take an accusative one. In the dative, the feminine article die becomes der, which is easy to confuse with the masculine nominative der.",
    relatedTopic: DATIV_TOPIC,
    difficulty: "B1",
    betterExamples: [
      { de: "Ich helfe der Frau mit den Taschen.", en: "I'm helping the woman with the bags." },
      { de: "Das Auto gehört der Schule.", en: "The car belongs to the school." },
    ],
  },
  {
    id: "dativ-mit-feminine",
    pattern: /\bmit\s+die\s+(Frau|Katze|Schule)\b/i,
    replacer: (_match, noun) => `mit der ${noun}`,
    issue: "‘mit die’ should be ‘mit der’ — mit always triggers the dative.",
    explanation:
      "mit is one of a fixed set of prepositions (aus, bei, mit, nach, seit, von, zu) that always take the dative case, with no exceptions. In the dative, the feminine article die becomes der.",
    relatedTopic: DATIV_TOPIC,
    difficulty: "A2",
    betterExamples: [
      { de: "Ich spreche mit der Frau.", en: "I'm talking with the woman." },
      { de: "Wir fahren mit der Schule ins Museum.", en: "We're going to the museum with the school." },
    ],
  },
  {
    id: "dativ-plural-n",
    pattern: /\b(mit|bei|von|nach|aus|zu|seit)\s+den\s+Kinder\b/i,
    replacer: (_match, prep) => `${prep} den Kindern`,
    issue: "‘Kinder’ needs an -n ending after a dative preposition.",
    explanation:
      "Plural nouns add an -n ending in the dative, unless they already end in -n or -s. Kinder becomes Kindern — the missing -n is one of the easiest dative signals to miss, and one of the fastest to spot once you know to look for it.",
    relatedTopic: DATIV_TOPIC,
    difficulty: "B1",
    betterExamples: [
      { de: "Ich spiele mit den Kindern im Park.", en: "I'm playing with the children in the park." },
      { de: "Das Geschenk ist von den Kindern.", en: "The gift is from the children." },
    ],
  },
  {
    id: "akk-fuer-ich",
    pattern: /\bfür\s+ich\b/i,
    replacer: () => "für mich",
    issue: "‘für ich’ should be ‘für mich’ — für always takes the accusative.",
    explanation:
      "für belongs to the fixed group of prepositions (durch, für, gegen, ohne, um) that always trigger the accusative. Personal pronouns change form in the accusative too: ich becomes mich, just like der becomes den.",
    relatedTopic: AKKUSATIV_TOPIC,
    difficulty: "A1",
    betterExamples: [
      { de: "Das Geschenk ist für mich.", en: "The gift is for me." },
      { de: "Gibt es Post für mich?", en: "Is there any mail for me?" },
    ],
  },
  {
    id: "akk-ohne-ich",
    pattern: /\bohne\s+ich\b/i,
    replacer: () => "ohne mich",
    issue: "‘ohne ich’ should be ‘ohne mich’ — ohne always takes the accusative.",
    explanation:
      "ohne is another of the fixed accusative prepositions (durch, für, gegen, ohne, um). The pronoun that follows it must be in the accusative: ich becomes mich.",
    relatedTopic: AKKUSATIV_TOPIC,
    difficulty: "A1",
    betterExamples: [
      { de: "Geh nicht ohne mich!", en: "Don't go without me!" },
      { de: "Er hat es ohne mich entschieden.", en: "He decided it without me." },
    ],
  },
  {
    id: "dativ-mit-ich",
    pattern: /\bmit\s+ich\b/i,
    replacer: () => "mit mir",
    issue: "‘mit ich’ should be ‘mit mir’ — mit always takes the dative.",
    explanation:
      "mit is a dative preposition, and personal pronouns take their dative form after it: ich becomes mir, not mich. It's worth contrasting this with für mich and ohne mich, which use the accusative instead.",
    relatedTopic: DATIV_TOPIC,
    difficulty: "A2",
    betterExamples: [
      { de: "Kommst du mit mir?", en: "Are you coming with me?" },
      { de: "Sie wohnt jetzt mit mir.", en: "She lives with me now." },
    ],
  },
  {
    id: "nom-frau-subject",
    pattern: /\bDer\s+Frau\s+(ist|arbeitet|kommt|lacht|wohnt|schläft)\b/i,
    replacer: (_match, verb) => `Die Frau ${verb}`,
    issue: "‘Der Frau’ should be ‘Die Frau’ — Frau is feminine and this is the subject.",
    explanation:
      "Frau is a feminine noun, so its nominative article is die, not der — der is reserved for masculine nouns like der Mann. Since Frau is the subject of this sentence (the one doing the being/acting), it needs the nominative case.",
    relatedTopic: NOMINATIV_TOPIC,
    difficulty: "A1",
    betterExamples: [
      { de: "Die Frau arbeitet heute im Büro.", en: "The woman is working in the office today." },
      { de: "Die Frau ist sehr freundlich.", en: "The woman is very friendly." },
    ],
  },
  {
    id: "akk-weak-noun",
    pattern: /\b(sehe|siehst|sieht|sehen|kenne|kennst|kennt|kennen)\s+den\s+Student\b(?!en)/i,
    replacer: (_match, verb) => `${verb} den Studenten`,
    issue: "‘Student’ needs an -en ending — it's a weak noun.",
    explanation:
      "Student belongs to a small group of masculine nouns called weak (or n-) nouns, which include der Junge, der Name, and der Herr. They add -n or -en in every case except the nominative singular — so as a direct object, den Student must become den Studenten.",
    relatedTopic: AKKUSATIV_TOPIC,
    difficulty: "B1",
    betterExamples: [
      { de: "Ich kenne den Studenten aus meinem Kurs.", en: "I know the student from my course." },
      { de: "Sie sieht den Studenten jeden Morgen.", en: "She sees the student every morning." },
    ],
  },
];

const VOCAB_TABLE: { pattern: RegExp; suggestion: string; reason: string }[] = [
  { pattern: /\bsehr gut\b/i, suggestion: "ausgezeichnet", reason: "More precise and confident than the plain sehr gut." },
  { pattern: /\bgut\b/i, suggestion: "klasse", reason: "A livelier, more conversational alternative to gut." },
  { pattern: /\bschön\b/i, suggestion: "wunderschön", reason: "Adds intensity when you want more than just schön." },
  { pattern: /\bgroß\b/i, suggestion: "riesig", reason: "A more vivid choice than groß when something is really big." },
  { pattern: /\bAuto\b/i, suggestion: "Wagen", reason: "A common, slightly more formal synonym for Auto." },
  { pattern: /\bviel\b/i, suggestion: "eine ganze Menge", reason: "A more natural, idiomatic way to say ‘a lot’ in conversation." },
];

const STYLE_TABLE: { pattern: RegExp; replacement: string }[] = [
  { pattern: /\bsehr gut\b/i, replacement: "richtig gut" },
  { pattern: /\bsehr schön\b/i, replacement: "wunderschön" },
  { pattern: /\bich möchte\b/i, replacement: "ich würde gern" },
  { pattern: /\bkein Problem\b/i, replacement: "gar kein Problem" },
  { pattern: /\bkann ich\b/i, replacement: "könnte ich" },
];

const SUBORDINATING_CONJUNCTIONS = /\b(weil|dass|obwohl|während|wenn|damit)\b/i;

/** Shared word-counting rule so the editor's live counter and the difficulty
 *  estimate can never drift apart by counting differently. */
export function countWords(text: string): number {
  const trimmed = text.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}

function estimateDifficulty(sentence: string): CefrLevel {
  const wordCount = countWords(sentence);
  const hasSubordinateClause = SUBORDINATING_CONJUNCTIONS.test(sentence);
  const hasKonjunktiv = /\b(würde|hätte|wäre|könnte)\b/i.test(sentence);

  if (hasKonjunktiv) return "B2";
  if (hasSubordinateClause && wordCount > 10) return "B1";
  if (hasSubordinateClause) return "A2";
  if (wordCount > 12) return "B1";
  if (wordCount > 6) return "A2";
  return "A1";
}

function findVocabSuggestions(sentence: string): VocabSuggestion[] {
  const found: VocabSuggestion[] = [];
  // Matched spans are masked (not removed, so offsets stay stable) before the next
  // pattern is tested, so a shorter phrase (e.g. "gut") can't also fire on text
  // already claimed by a longer overlapping one (e.g. "sehr gut").
  let workingText = sentence;
  for (const entry of VOCAB_TABLE) {
    const match = workingText.match(entry.pattern);
    if (match && match.index !== undefined) {
      found.push({ word: match[0], suggestion: entry.suggestion, reason: entry.reason });
      workingText =
        workingText.slice(0, match.index) +
        "\0".repeat(match[0].length) +
        workingText.slice(match.index + match[0].length);
      if (found.length >= 2) break;
    }
  }
  return found;
}

function findNaturalAlternative(sentence: string): string | null {
  let result = sentence;
  let changed = false;
  for (const entry of STYLE_TABLE) {
    if (entry.pattern.test(result)) {
      result = result.replace(entry.pattern, entry.replacement);
      changed = true;
    }
  }
  return changed ? result : null;
}

const DEFAULT_BETTER_EXAMPLES: BetterExample[] = [
  { de: "Ich lerne jeden Tag ein bisschen Deutsch.", en: "I study a little German every day." },
  { de: "Am Wochenende besuche ich meine Familie.", en: "On weekends I visit my family." },
];

export function analyzeSentence(rawSentence: string): WritingAnalysis {
  const sentence = rawSentence.trim();
  const vocabularySuggestions = findVocabSuggestions(sentence);

  for (const rule of RULES) {
    const match = rule.pattern.exec(sentence);
    if (match) {
      const original = match[0];
      const correctedSentence = sentence.replace(rule.pattern, rule.replacer);
      return {
        isCorrect: false,
        correctedSentence,
        mistakes: [
          {
            original,
            issue: rule.issue,
            correction: correctedSentence,
          },
        ],
        vocabularySuggestions,
        naturalAlternative: findNaturalAlternative(correctedSentence),
        explanation: rule.explanation,
        relatedTopic: rule.relatedTopic,
        difficulty: rule.difficulty,
        betterExamples: rule.betterExamples,
      };
    }
  }

  const naturalAlternative = findNaturalAlternative(sentence);

  return {
    isCorrect: true,
    correctedSentence: sentence,
    mistakes: [],
    vocabularySuggestions,
    naturalAlternative,
    explanation:
      "No grammar issues stood out — the case endings, verb position, and articles all line up correctly. Keep an eye on the vocabulary and style notes alongside this to make the sentence sound even more natural.",
    relatedTopic: NOMINATIV_TOPIC,
    difficulty: estimateDifficulty(sentence),
    betterExamples: DEFAULT_BETTER_EXAMPLES,
  };
}

export const EXAMPLE_SENTENCES: string[] = [
  "Ich sehe der Mann.",
  "Ich helfe die Frau.",
  "Wir fahren mit die Schule.",
  "Das Geschenk ist für ich.",
  "Der Frau arbeitet heute.",
  "Ich sehe den Studenten.",
  "Die Frau hilft dem Mann.",
];
