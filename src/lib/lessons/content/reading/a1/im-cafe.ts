import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "im-cafe",
  type: "reading",
  level: "A1",
  category: "short-texts",
  title: "Im Café",
  summary: "A short everyday text about ordering at a café, with comprehension questions.",
  durationMinutes: 6,
  order: 0,
  status: "available",
  progress: 0,
  href: buildLessonHref("reading", "A1", "im-cafe"),
  lastUpdated: "2026-07-10",
  objectives: ["Read a short everyday text for gist", "Recognize café/ordering vocabulary in context"],
  explanation: {
    simple: ["A short scene at a café — read it once for the general idea before checking any words."],
    detailed: [
      "Reading at A1 works best in two passes: first for the overall situation (who, where, what's happening), then a second time noticing individual words you didn't catch the first time.",
      "You don't need to understand every word to answer the comprehension questions below — focus on what actually changes the meaning of the scene.",
    ],
  },
  examples: [],
  details: {
    passage:
      "Anna geht in ein Café in der Stadt. Sie setzt sich an einen Tisch am Fenster. Der Kellner kommt und fragt: \"Was möchten Sie trinken?\" Anna bestellt einen Kaffee und ein Stück Kuchen. Nach zehn Minuten bringt der Kellner die Bestellung. Anna trinkt den Kaffee langsam und liest ein Buch. Es ist ein ruhiger Nachmittag.",
  },
  exercises: [
    {
      id: "cafe-ex-1",
      type: "true-false",
      statement: "Anna orders tea.",
      correct: false,
      explanation: "Anna orders coffee (einen Kaffee), not tea.",
      grammarRule: "bestellen + accusative object.",
      referenceSectionId: "passage",
      referenceLabel: "Passage",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "cafe-1",
      type: "multiple-choice",
      prompt: "Where does Anna sit?",
      options: ["At a table by the window", "At the counter", "Outside", "In the kitchen"],
      correctIndex: 0,
      explanation: "Sie setzt sich an einen Tisch am Fenster — she sits at a table by the window.",
      grammarRule: "sich setzen an + accusative.",
      referenceSectionId: "passage",
      referenceLabel: "Passage",
      xp: 10,
    },
    {
      id: "cafe-2",
      type: "true-false",
      statement: "Anna reads a book while she drinks her coffee.",
      correct: true,
      explanation: "Correct — Anna trinkt den Kaffee langsam und liest ein Buch.",
      grammarRule: "Two coordinated verbs joined with und.",
      referenceSectionId: "passage",
      referenceLabel: "Passage",
      xp: 10,
    },
    {
      id: "cafe-3",
      type: "fill-blank",
      prompt: "Complete: the waiter brings the order after ten ___.",
      sentenceBefore: "Nach zehn ",
      sentenceAfter: " bringt der Kellner die Bestellung.",
      accepted: ["minuten"],
      explanation: "Minuten (minutes) — Nach zehn Minuten.",
      grammarRule: "nach + dative time expression.",
      referenceSectionId: "passage",
      referenceLabel: "Passage",
      xp: 15,
    },
  ],
  conclusion:
    "A short café scene built entirely from A1-level vocabulary and simple main clauses — good practice for reading for gist before worrying about every individual word.",
};

export default lesson;
