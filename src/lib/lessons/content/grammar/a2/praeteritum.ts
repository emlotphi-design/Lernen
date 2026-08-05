import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "praeteritum",
  type: "grammar",
  level: "A2",
  category: "verbs",
  title: "Das Präteritum",
  summary: "The simple past used in writing and for common verbs like sein and haben — how it differs from the Perfekt.",
  durationMinutes: 8,
  order: 2,
  status: "available",
  progress: 0,
  href: buildLessonHref("grammar", "A2", "praeteritum"),
  lastUpdated: "2026-07-28",
  generator: { kind: "verb-conjugation", tense: "praeteritum" },
  objectives: [
    "Conjugate regular (weak) verbs in the Präteritum",
    "Recognize when the Präteritum is preferred over the Perfekt",
    "Use sein and haben correctly in their common Präteritum forms",
  ],
  explanation: {
    simple: [
      "The Präteritum is the other German past tense — used mostly in writing, and in speech for sein, haben, and the modal verbs.",
      "Regular verbs add -te plus a personal ending to the stem.",
    ],
    detailed: [
      "While the Perfekt dominates spoken German for most verbs, the Präteritum is the normal past tense in written German — stories, news articles, and formal writing almost always use it.",
      "Regular (weak) verbs form the Präteritum by adding -te to the stem, then a personal ending: ich -te, du -test, er -te, wir -ten, ihr -tet, sie -ten.",
      "Even in speech, a handful of very common verbs almost always appear in the Präteritum rather than the Perfekt: war (was), hatte (had), and the modal verbs like konnte (could) or wollte (wanted).",
    ],
  },
  examples: [
    { de: "Ich machte meine Hausaufgaben.", en: "I did my homework." },
    { de: "Sie spielte gestern Klavier.", en: "She played piano yesterday." },
    { de: "Er war müde.", en: "He was tired." },
    { de: "Wir hatten keine Zeit.", en: "We didn't have time." },
  ],
  details: {
    rules: [
      "Add -te to the stem of a regular verb, then the personal ending: -te, -test, -te, -ten, -tet, -ten.",
      "Insert an -e- before -te if the stem ends in -t or -d (arbeiten → er arbeitete).",
      "Prefer the Präteritum for sein, haben, and the modal verbs, even in speech.",
    ],
    notes: [
      "Unlike the Präsens, the ich and er/sie/es forms are identical in the Präteritum — both just take -te.",
      "The Präteritum of sein (war) and haben (hatte) are among the first irregular past forms most learners memorize, since they're used constantly.",
    ],
    mistakes: [
      {
        wrong: "Er arbeitte gestern.",
        right: "Er arbeitete gestern.",
        note: "Stems ending in -t need the -e- glide before -te, the same rule as in the Präsens.",
      },
      {
        wrong: "Ich habte keine Zeit.",
        right: "Ich hatte keine Zeit.",
        note: "Haben is irregular in the Präteritum — hatte, not the regular habte.",
      },
    ],
    exceptions: [
      "Strong (irregular) verbs change their stem vowel entirely instead of adding -te: gehen → ging, sehen → sah — a different pattern from the regular endings here.",
      "Sein's Präteritum (war) and haben's (hatte) don't follow the regular -te pattern at all and are simply memorized.",
    ],
    tips: [
      "If you're telling a story or writing something formal, reach for the Präteritum by default — it's the natural narrative past tense in German.",
      "In everyday conversation, you can usually get away with the Perfekt for most verbs — except war, hatte, and the modal verbs, which almost always sound more natural in the Präteritum even in speech.",
    ],
  },
  exercises: [
    {
      id: "praet-ex-1",
      type: "typing",
      prompt: "Type the correct Präteritum form of 'spielen' for 'sie' (they).",
      accepted: ["spielten"],
      explanation: "sie (they) takes the ending -ten, same as wir: spiel + ten = spielten.",
      grammarRule: "Präteritum sie(plural)-ending: -ten.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "praet-1",
      type: "multiple-choice",
      prompt: "Which sentence correctly uses the Präteritum?",
      options: [
        "Er arbeitete den ganzen Tag.",
        "Er arbeitte den ganzen Tag.",
        "Er arbeitest den ganzen Tag.",
        "Er arbeiten den ganzen Tag.",
      ],
      correctIndex: 0,
      explanation: "Arbeiten's stem ends in -t, so it needs the glide before -te: arbeitete.",
      grammarRule: "Insert -e- before -te when the stem ends in -t or -d.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "praet-2",
      type: "true-false",
      statement: "In the Präteritum, the ich-form and the er/sie/es-form use the exact same ending.",
      correct: true,
      explanation: "Correct — both ich and er/sie/es simply add -te, unlike the Präsens where they differ (-e vs -t).",
      grammarRule: "Präteritum ich- and er-endings are identical: -te.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
    {
      id: "praet-3",
      type: "typing",
      prompt: "Type the Präteritum form of 'haben' for 'wir'.",
      accepted: ["hatten"],
      explanation: "Haben is irregular in the Präteritum — the wir-form is hatten, not a regular habten.",
      grammarRule: "Haben's Präteritum stem is irregular: hatt-.",
      referenceSectionId: "exceptions",
      referenceLabel: "Exceptions",
      xp: 15,
    },
    {
      id: "praet-4",
      type: "fill-blank",
      prompt: "Complete the sentence with the correct Präteritum form of 'machen'.",
      sentenceBefore: "Ich ",
      sentenceAfter: " meine Hausaufgaben.",
      accepted: ["machte"],
      explanation: "ich takes -te: mach + te = machte.",
      grammarRule: "Präteritum ich-ending: -te.",
      referenceSectionId: "grammar-rules",
      referenceLabel: "Grammar rules",
      xp: 10,
    },
  ],
  conclusion:
    "The Präteritum adds -te plus a personal ending to a regular verb's stem, with ich and er/sie/es sharing the same form. It's the default past tense in writing, and — for sein, haben, and the modal verbs — the natural choice in speech too, even though the Perfekt otherwise dominates everyday conversation.",
};

export default lesson;
