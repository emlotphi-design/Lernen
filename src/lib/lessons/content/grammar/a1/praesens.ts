import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "praesens",
  type: "grammar",
  level: "A1",
  category: "verbs",
  title: "Das Präsens",
  summary: "The German present tense — regular endings, and how it also covers what English says with 'is doing'.",
  durationMinutes: 7,
  order: 0,
  status: "available",
  progress: 0,
  href: buildLessonHref("grammar", "A1", "praesens"),
  lastUpdated: "2026-07-28",
  generator: { kind: "verb-conjugation", tense: "praesens" },
  objectives: [
    "Conjugate regular verbs in the Präsens",
    "Use the Präsens for both present and near-future actions",
    "Recognize the -e- glide for stems ending in -t or -d",
  ],
  explanation: {
    simple: [
      "The Präsens is the German present tense — used for what's happening now, general facts, and often the near future too.",
      "Regular verbs add a predictable ending to the stem depending on who's doing the action.",
    ],
    detailed: [
      "To conjugate a regular verb, remove -en from the infinitive to get the stem, then add the ending for the subject: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
      "German has no separate continuous form — ich spiele covers both 'I play' and 'I am playing'. Context tells you which is meant.",
      "The Präsens is also commonly used to talk about the near future, especially with a time word: Ich fliege morgen nach Berlin (I'm flying to Berlin tomorrow).",
    ],
  },
  examples: [
    { de: "Ich spiele Fußball.", en: "I play/am playing soccer." },
    { de: "Du lernst Deutsch.", en: "You are learning German." },
    { de: "Er arbeitet heute.", en: "He is working today." },
    { de: "Wir fahren morgen nach Berlin.", en: "We're going to Berlin tomorrow." },
  ],
  details: {
    rules: [
      "Remove -en from the infinitive to find the stem.",
      "Add the ending that matches the subject: -e, -st, -t, -en, -t, -en.",
      "Insert an -e- before the ending if the stem ends in -t or -d (arbeiten → du arbeitest).",
    ],
    notes: [
      "The du and er/sie/es endings are the ones most likely to need the -e- glide, since -st and -t are hard to pronounce directly after a stem ending in -t/-d.",
      "A handful of very common verbs are irregular in just the du/er forms (fahren → du fährst, er fährt) — these aren't part of the regular pattern covered here.",
    ],
    mistakes: [
      {
        wrong: "Du arbeitst heute.",
        right: "Du arbeitest heute.",
        note: "Stems ending in -t need an -e- before the -st ending, or the word becomes unpronounceable.",
      },
      {
        wrong: "Er spielt gern Fußball, ich auch spielt.",
        right: "Er spielt gern Fußball, ich spiele auch.",
        note: "Every subject needs its own matching ending — ich always takes -e, never the er-form -t.",
      },
    ],
    exceptions: [
      "Stem-changing (strong) verbs like fahren, sehen, and sprechen change their vowel in the du and er/sie/es forms only (du fährst, er fährt) — a separate pattern from the regular endings here.",
      "Sein and haben are fully irregular and must be memorized as their own forms: ich bin, du bist, er ist…",
    ],
    tips: [
      "Learn the six endings as one fixed set — once they're automatic, every regular verb conjugates the same way.",
      "When a new verb's stem ends in -t, -d, or a consonant cluster like -ffn (öffnen), expect the -e- glide before -st and -t.",
    ],
  },
  exercises: [
    {
      id: "praes-ex-1",
      type: "typing",
      prompt: "Type the correct Präsens form of 'spielen' for 'du'.",
      accepted: ["spielst"],
      explanation: "du takes the regular -st ending: spiel + st = spielst.",
      grammarRule: "Präsens du-ending: -st.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "praes-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly uses the Präsens?",
      options: ["Er arbeitet jeden Tag.", "Er arbeit jeden Tag.", "Er arbeitest jeden Tag.", "Er arbeiten jeden Tag."],
      correctIndex: 0,
      explanation: "Arbeiten's stem ends in -t, so the er-form needs the glide: arbeitet, not arbeit.",
      grammarRule: "Insert -e- before the ending when the stem ends in -t or -d.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "praes-2",
      type: "true-false",
      statement: "The Präsens can be used to talk about the near future, especially with a time word like morgen.",
      correct: true,
      explanation:
        "Correct — German often uses the Präsens instead of a separate future tense when the context or a time word already makes the future clear.",
      grammarRule: "Use the Präsens for near-future actions with a time expression.",
      referenceSectionId: "detailed-explanation",
      referenceLabel: "Detailed explanation",
      xp: 10,
    },
    {
      id: "praes-3",
      type: "typing",
      prompt: "Type the correct Präsens form of 'wohnen' for 'wir'.",
      accepted: ["wohnen"],
      explanation: "wir takes the ending -en, which for a regular verb is identical to the infinitive: wohnen.",
      grammarRule: "Präsens wir-ending: -en (same as the infinitive).",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "praes-4",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct Präsens form of 'kaufen'.",
      sentenceBefore: "Ich ",
      sentenceAfter: " einen Apfel.",
      accepted: ["kaufe"],
      explanation: "ich takes the ending -e: kauf + e = kaufe.",
      grammarRule: "Präsens ich-ending: -e.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
  ],
  conclusion:
    "The Präsens uses six predictable endings — -e, -st, -t, -en, -t, -en — added to the verb stem, with an -e- glide for stems ending in -t or -d. It covers both the present and the near future, so mastering these endings goes a long way before you even reach the past tenses.",
};

export default lesson;
