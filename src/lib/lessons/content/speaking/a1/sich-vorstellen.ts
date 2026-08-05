import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "sich-vorstellen",
  type: "speaking",
  level: "A1",
  category: "introductions",
  title: "Sich vorstellen",
  summary: "Practice introducing yourself out loud — name, origin, and a couple of details.",
  durationMinutes: 5,
  order: 0,
  status: "available",
  progress: 0,
  href: buildLessonHref("speaking", "A1", "sich-vorstellen"),
  lastUpdated: "2026-07-10",
  objectives: ["Say your name, where you're from, and what you do", "Ask someone else the same questions"],
  explanation: {
    simple: [
      "A self-introduction is one of the first things you'll actually say out loud in German — a fixed handful of short sentences you'll reuse constantly.",
    ],
    detailed: [
      "Speaking practice here works best out loud, not just mentally — say each prompt below as a full sentence before moving to the next one, even if no one's listening.",
      "There's no recording or speech-scoring built in yet; treat this as a self-guided speaking drill using the prompts and example sentences as a script to adapt.",
    ],
  },
  examples: [
    { de: "Ich heiße Anna.", en: "My name is Anna." },
    { de: "Ich komme aus Deutschland.", en: "I'm from Germany." },
    { de: "Ich bin Studentin.", en: "I'm a student." },
  ],
  details: {
    prompts: [
      { instruction: "Say your name:", germanPhrase: "Ich heiße …" },
      { instruction: "Say where you're from:", germanPhrase: "Ich komme aus …" },
      { instruction: "Say what you do:", germanPhrase: "Ich bin … / Ich arbeite als …" },
      { instruction: "Ask someone else their name:", germanPhrase: "Wie heißt du?" },
      { instruction: "Put all three of your own sentences together into one short introduction.", germanPhrase: "" },
    ],
  },
  exercises: [
    {
      id: "vor-ex-1",
      type: "typing",
      prompt: "Type the German for 'I come from …'.",
      accepted: ["ich komme aus"],
      explanation: "Ich komme aus … is the standard way to say where you're from.",
      grammarRule: "kommen aus + dative country/city name.",
      referenceSectionId: "examples",
      referenceLabel: "Examples",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "vor-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly says 'My name is Anna'?",
      options: ["Ich heiße Anna.", "Ich bin heiße Anna.", "Mein Name Anna.", "Ich Anna heiße."],
      correctIndex: 0,
      explanation: "heißen conjugates directly with the name as its complement: Ich heiße Anna.",
      grammarRule: "heißen + name, no extra verb needed.",
      referenceSectionId: "examples",
      referenceLabel: "Examples",
      xp: 10,
    },
    {
      id: "vor-2",
      type: "fill-blank",
      prompt: "Complete: asking someone's name informally.",
      sentenceBefore: "Wie ",
      sentenceAfter: " du?",
      accepted: ["heißt"],
      explanation: "heißt is the du-form of heißen.",
      grammarRule: "du heißt (regular -en verb conjugation).",
      referenceSectionId: "prompts",
      referenceLabel: "Speaking prompts",
      xp: 15,
    },
  ],
  conclusion:
    "A self-introduction is built from three fixed sentence patterns — name, origin, occupation — that are worth over-practicing out loud since you'll use them from day one.",
};

export default lesson;
