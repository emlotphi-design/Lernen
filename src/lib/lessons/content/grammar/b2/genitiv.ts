import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "genitiv",
  type: "grammar",
  level: "B2",
  category: "cases",
  title: "Der Genitiv",
  summary: "The case of possession — increasingly formal in speech, but still essential for reading and writing.",
  durationMinutes: 10,
  order: 3,
  status: "available",
  progress: 0,
  href: buildLessonHref("grammar", "B2", "genitiv"),
  lastUpdated: "2026-07-28",
  generator: { kind: "case-article", case: "genitiv" },
  objectives: [
    "Identify the genitiv as the case of possession",
    "Add the correct noun ending for masculine and neuter nouns",
    "Use the genitiv after trotz, wegen, während, and statt",
  ],
  explanation: {
    simple: [
      "The genitiv shows possession — who or what something belongs to.",
      "It also follows a small, fixed set of prepositions: trotz, wegen, während, statt.",
    ],
    detailed: [
      "Unlike the other three cases, the genitiv changes the noun itself, not just its article — masculine and neuter nouns add -s or -es, while feminine and plural nouns stay exactly as they are.",
      "In everyday spoken German, von + dativ often takes the genitiv's place (von meinem Vater instead of meines Vaters) — but the genitiv is still the expected, more formal form in writing and careful speech, and you'll see it constantly when reading.",
      "Genitiv word order places the possessor after the noun it modifies — das Auto meines Vaters, not meines Vaters Auto — except with names, which come first: Annas Auto.",
    ],
  },
  examples: [
    { de: "Das Auto meines Vaters ist neu.", en: "My father's car is new." },
    { de: "Die Farbe des Hauses gefällt mir.", en: "I like the color of the house." },
    { de: "Der Name der Frau ist Anna.", en: "The woman's name is Anna." },
    { de: "Trotz des Regens gehen wir spazieren.", en: "Despite the rain, we're going for a walk." },
  ],
  details: {
    rules: [
      "Use the genitiv to show possession — who or what something belongs to.",
      "Use it after the fixed prepositions trotz, wegen, während, and statt.",
      "Add -s or -es to masculine and neuter nouns; feminine and plural nouns don't change.",
    ],
    notes: [
      "In everyday spoken German, von + dativ often replaces the genitiv (von meinem Vater instead of meines Vaters) — but the genitiv is still expected in writing and formal speech.",
      "Genitiv word order places the possessor after the noun it modifies: das Auto meines Vaters, not meines Vaters Auto (except with names: Annas Auto).",
    ],
    table: [
      { gender: "masculine", definite: "des", indefinite: "eines", pronoun: "dessen" },
      { gender: "feminine", definite: "der", indefinite: "einer", pronoun: "deren" },
      { gender: "neuter", definite: "des", indefinite: "eines", pronoun: "dessen" },
      { gender: "plural", definite: "der", indefinite: "–", pronoun: "deren" },
    ],
    mistakes: [
      {
        wrong: "Das Auto mein Vater ist neu.",
        right: "Das Auto meines Vaters ist neu.",
        note: "The possessive itself needs the genitiv ending -es, and the noun needs -s — both change together.",
      },
      {
        wrong: "Die Farbe des Haus gefällt mir.",
        right: "Die Farbe des Hauses gefällt mir.",
        note: "The article des alone isn't enough — neuter nouns also add -es in the genitiv.",
      },
    ],
    exceptions: [
      "One-syllable neuter/masculine nouns usually take -es (des Hauses, des Mannes); longer nouns often just take -s (des Computers, des Lehrers).",
      "Weak (n-noun) masculines like der Student or der Junge take -en in the genitiv too, not -s: des Studenten, not des Studentens.",
    ],
    tips: [
      "If you can rephrase a sentence with 'von + dativ' and it still sounds natural, the genitiv is usually optional there — but recognize it either way, since you'll see it constantly in writing.",
      "Learn trotz, wegen, während, and statt as a set — they're the four genitiv prepositions you'll meet most often.",
    ],
  },
  exercises: [
    {
      id: "gen-ex-1",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct genitiv article.",
      sentenceBefore: "Der Name ",
      sentenceAfter: " Frau ist Anna.",
      accepted: ["der"],
      explanation: "Frau is feminine, so it takes der in the genitiv — the noun itself doesn't change.",
      grammarRule: "Feminine genitiv article: der.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "gen-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly uses the genitiv?",
      options: [
        "Das Auto meines Vaters ist neu.",
        "Das Auto mein Vater ist neu.",
        "Das Auto meinen Vater ist neu.",
        "Das Auto meinem Vater ist neu.",
      ],
      correctIndex: 0,
      explanation: "Vaters takes the genitiv -s ending after the possessive meines, showing whose car it is.",
      grammarRule: "Masculine genitiv nouns add -s or -es.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 10,
    },
    {
      id: "gen-2",
      type: "true-false",
      statement: "Masculine and neuter nouns typically add -s or -es in the genitiv, but feminine nouns never change.",
      correct: true,
      explanation:
        "Correct — only masculine and neuter nouns take a genitiv noun ending; feminine and plural nouns stay unchanged.",
      grammarRule: "Genitiv noun endings: -s/-es for masculine and neuter only.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "gen-3",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct genitiv article.",
      sentenceBefore: "Die Farbe ",
      sentenceAfter: " Hauses gefällt mir.",
      accepted: ["des"],
      explanation: "Haus is neuter, so it takes des in the genitiv, and the noun itself adds -es: Hauses.",
      grammarRule: "Neuter genitiv article: des, noun +(e)s.",
      referenceSectionId: "declension-table",
      referenceLabel: "Declension table",
      xp: 15,
    },
    {
      id: "gen-4",
      type: "typing",
      prompt: "Type the genitiv preposition that means 'despite'.",
      accepted: ["trotz"],
      explanation: "Trotz is one of the fixed prepositions that always trigger the genitiv.",
      grammarRule: "Genitiv prepositions: während, trotz, wegen, statt.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
  ],
  conclusion:
    "The genitiv marks possession and follows a small set of prepositions like trotz, wegen, and während. Masculine and neuter nouns add -s or -es; feminine and plural nouns stay unchanged. It's increasingly replaced by von + dativ in casual speech, but stays essential for reading and formal writing.",
};

export default lesson;
