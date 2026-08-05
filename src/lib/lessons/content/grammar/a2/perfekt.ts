import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "perfekt",
  type: "grammar",
  level: "A2",
  category: "verbs",
  title: "Das Perfekt",
  summary: "The everyday German past tense — how to build it and when to use it.",
  durationMinutes: 8,
  order: 1,
  status: "available",
  progress: 0,
  href: buildLessonHref("grammar", "A2", "perfekt"),
  lastUpdated: "2026-07-10",
  objectives: [
    "Build the Perfekt with haben or sein plus a past participle",
    "Choose between haben and sein correctly",
    "Recognize regular and irregular past participles",
  ],
  explanation: {
    simple: [
      "The Perfekt is how spoken German usually talks about the past — not a single verb form, but haben or sein plus a past participle.",
      "It's built the same way regardless of who's speaking: an auxiliary verb in position two, and the participle at the very end of the clause.",
    ],
    detailed: [
      "Most verbs use haben as their auxiliary. Verbs of motion (gehen, fahren, kommen) or change of state (aufwachen, werden) usually use sein instead.",
      "Regular (weak) verbs form their participle with ge- + stem + -t: machen → gemacht, spielen → gespielt. Irregular (strong) verbs often change their stem vowel and end in -en: sprechen → gesprochen, gehen → gegangen.",
      "Because the participle goes to the end of the clause, everything else — objects, time expressions, negation — sits between the auxiliary and the participle.",
    ],
  },
  examples: [
    { de: "Ich habe das Buch gelesen.", en: "I read the book." },
    { de: "Wir sind nach Berlin gefahren.", en: "We traveled to Berlin." },
    { de: "Sie hat gestern gearbeitet.", en: "She worked yesterday." },
    { de: "Er ist früh aufgewacht.", en: "He woke up early." },
  ],
  details: {
    rules: [
      "Use haben as the auxiliary for most verbs.",
      "Use sein for verbs of motion or change of state.",
      "Regular participles: ge- + stem + -t.",
      "Irregular participles often end in -en and may change their stem vowel.",
      "The participle always goes to the end of the clause.",
    ],
    notes: [
      "A handful of common irregular participles are worth memorizing directly rather than deriving: gewesen (sein), gehabt (haben), gegessen (essen), getrunken (trinken).",
      "Separable-prefix verbs insert -ge- between the prefix and the stem: aufwachen → aufgewacht, not geaufwacht.",
    ],
    mistakes: [
      {
        wrong: "Ich habe nach Berlin gefahren.",
        right: "Ich bin nach Berlin gefahren.",
        note: "fahren is a verb of motion, so it takes sein, not haben.",
      },
    ],
    exceptions: [
      "Verbs ending in -ieren (telefonieren, studieren) never take ge-: telefoniert, studiert.",
      "Inseparable-prefix verbs (be-, ver-, er-, ge-, ent-, zer-) also skip ge-: besuchen → besucht, verstehen → verstanden.",
    ],
    tips: [
      "When in doubt about haben vs. sein, ask: does this verb describe movement from A to B, or a change of state? If yes, it's almost certainly sein.",
      "Learn new irregular verbs with all three forms at once — infinitive, simple past, participle — the same way you'd learn der/die/das with a new noun.",
    ],
  },
  exercises: [
    {
      id: "perf-ex-1",
      type: "multiple-choice",
      prompt: "Which auxiliary does 'fahren' take in the Perfekt?",
      options: ["sein", "haben", "werden", "möchten"],
      correctIndex: 0,
      explanation: "fahren describes motion from one place to another, so it takes sein: Wir sind gefahren.",
      grammarRule: "Use sein for verbs of motion or change of state.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "perf-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly forms the Perfekt?",
      options: ["Ich habe das Buch gelesen.", "Ich bin das Buch gelesen.", "Ich habe das Buch lesen.", "Ich las das Buch gelesen."],
      correctIndex: 0,
      explanation: "lesen takes haben, and its irregular participle is gelesen, placed at the end of the clause.",
      grammarRule: "Use haben as the auxiliary for most verbs.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "perf-2",
      type: "true-false",
      statement: "Verbs like telefonieren never take a ge- prefix in the Perfekt.",
      correct: true,
      explanation: "Correct — telefonieren → telefoniert, no ge-.",
      grammarRule: "Verbs ending in -ieren never take ge-.",
      referenceSectionId: "exceptions",
      referenceLabel: "Exceptions",
      xp: 10,
    },
    {
      id: "perf-3",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct auxiliary.",
      sentenceBefore: "Wir ",
      sentenceAfter: " nach Berlin gefahren.",
      accepted: ["sind"],
      explanation: "fahren is a verb of motion, so it takes sein: sind gefahren.",
      grammarRule: "Use sein for verbs of motion or change of state.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 15,
    },
    {
      id: "perf-4",
      type: "typing",
      prompt: "Type the past participle of 'essen'.",
      accepted: ["gegessen"],
      explanation: "essen is irregular: gegessen, not the regular geesst.",
      grammarRule: "Irregular participles often change their stem vowel and end in -en.",
      referenceSectionId: "important-notes",
      referenceLabel: "Important notes",
      xp: 15,
    },
  ],
  conclusion:
    "The Perfekt is built from haben or sein plus a past participle placed at the end of the clause. Most verbs take haben; verbs of motion or change of state take sein. Regular participles end in -t, irregular ones often in -en.",
};

export default lesson;
