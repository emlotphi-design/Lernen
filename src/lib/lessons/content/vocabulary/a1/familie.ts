import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "familie",
  type: "vocabulary",
  level: "A1",
  category: "everyday-words",
  title: "Familie",
  summary: "Core vocabulary for talking about family members.",
  durationMinutes: 7,
  order: 0,
  status: "available",
  progress: 0,
  href: buildLessonHref("vocabulary", "A1", "familie"),
  lastUpdated: "2026-07-10",
  objectives: ["Name immediate family members in German", "Use simple possessives (mein/meine) with them"],
  explanation: {
    simple: [
      "This lesson covers the German words for immediate family — the ones you'll use constantly once you start describing your own life.",
    ],
    detailed: [
      "Family nouns follow regular gender patterns you already know: most people-nouns are der or die based on the person's gender, with a few fixed exceptions like das Kind (the child) and das Baby (the baby), which are grammatically neuter regardless of the child's gender.",
      "Possessives (mein, meine) agree with the noun's gender the same way ein/eine do — mein Vater, meine Mutter, mein Kind.",
    ],
  },
  examples: [
    { de: "Das ist meine Mutter.", en: "This is my mother." },
    { de: "Mein Bruder wohnt in Berlin.", en: "My brother lives in Berlin." },
    { de: "Ich habe zwei Schwestern.", en: "I have two sisters." },
  ],
  details: {
    words: [
      { de: "die Mutter", en: "mother", example: "Meine Mutter kocht gern." },
      { de: "der Vater", en: "father", example: "Mein Vater arbeitet viel." },
      { de: "die Schwester", en: "sister" },
      { de: "der Bruder", en: "brother" },
      { de: "die Eltern", en: "parents (plural)" },
      { de: "das Kind", en: "child" },
      { de: "die Großmutter", en: "grandmother" },
      { de: "der Großvater", en: "grandfather" },
    ],
  },
  exercises: [
    {
      id: "fam-ex-1",
      type: "typing",
      prompt: "Type the German word for 'sister'.",
      accepted: ["die schwester", "schwester"],
      explanation: "Schwester is feminine: die Schwester.",
      grammarRule: "Family-member nouns take the gender of the person they name.",
      referenceSectionId: "examples",
      referenceLabel: "Examples",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "fam-1",
      type: "multiple-choice",
      prompt: "Which word means 'father'?",
      options: ["der Vater", "die Mutter", "der Bruder", "das Kind"],
      correctIndex: 0,
      explanation: "der Vater means 'father'.",
      grammarRule: "der Vater is masculine.",
      referenceSectionId: "examples",
      referenceLabel: "Examples",
      xp: 10,
    },
    {
      id: "fam-2",
      type: "true-false",
      statement: "'das Kind' is grammatically neuter, regardless of the child's gender.",
      correct: true,
      explanation: "Correct — das Kind is always neuter.",
      grammarRule: "A few people-nouns like das Kind and das Baby are fixed neuter.",
      referenceSectionId: "detailed-explanation",
      referenceLabel: "Detailed explanation",
      xp: 10,
    },
    {
      id: "fam-3",
      type: "fill-blank",
      prompt: "Complete the sentence.",
      sentenceBefore: "Ich habe zwei ",
      sentenceAfter: ".",
      accepted: ["schwestern"],
      explanation: "Schwestern is the plural of Schwester.",
      grammarRule: "Most feminine nouns add -n or -en in the plural.",
      referenceSectionId: "examples",
      referenceLabel: "Examples",
      xp: 15,
    },
  ],
  conclusion:
    "Family vocabulary is grammatically regular — gendered nouns for people, with das Kind as a fixed neuter exception — and gives you an immediate reason to practice possessives.",
};

export default lesson;
