import type { Lesson } from "../../../types";
import { buildLessonHref } from "../../../href";

const lesson: Lesson = {
  slug: "am-bahnhof",
  type: "listening",
  level: "A1",
  category: "everyday-audio",
  title: "Am Bahnhof",
  summary: "A short station announcement — listen for the platform and departure time.",
  durationMinutes: 5,
  order: 0,
  status: "available",
  progress: 0,
  href: buildLessonHref("listening", "A1", "am-bahnhof"),
  lastUpdated: "2026-07-10",
  objectives: ["Understand a short public announcement", "Recognize numbers and times spoken aloud"],
  explanation: {
    simple: ["A short station announcement — no audio file is wired up yet, so read the transcript as if you're hearing it."],
    detailed: [
      "Station and airport announcements follow a very predictable structure in German — that predictability is exactly what makes them a good first listening exercise: train number, platform (Gleis), and time, always in roughly the same order.",
      "Once you can reliably pick a platform number and a time out of an announcement, you can generalize the same listening strategy to any similarly formulaic audio (weather reports, safety briefings, etc.).",
    ],
  },
  examples: [],
  details: {
    // No audio file wired up yet for the placeholder set — the transcript stands in for it.
    transcript:
      "Achtung, eine Durchsage: Der Zug nach München, IC 118, fährt heute von Gleis 7. Die Abfahrt ist um vierzehn Uhr dreißig. Wir wünschen Ihnen eine gute Reise.",
  },
  exercises: [
    {
      id: "bhf-ex-1",
      type: "fill-blank",
      prompt: "Which platform does the train leave from?",
      sentenceBefore: "Der Zug fährt von Gleis ",
      sentenceAfter: ".",
      accepted: ["7", "sieben"],
      explanation: "Gleis 7 — platform 7.",
      grammarRule: "von + dative platform number.",
      referenceSectionId: "transcript",
      referenceLabel: "Transcript",
      xp: 10,
    },
  ],
  quiz: [
    {
      id: "bhf-1",
      type: "multiple-choice",
      prompt: "Where is the train to Munich departing from?",
      options: ["Platform 7", "Platform 8", "Platform 1", "Platform 14"],
      correctIndex: 0,
      explanation: "…fährt heute von Gleis 7 — platform 7.",
      grammarRule: "von + dative.",
      referenceSectionId: "transcript",
      referenceLabel: "Transcript",
      xp: 10,
    },
    {
      id: "bhf-2",
      type: "typing",
      prompt: "Type the departure time in 24-hour digits (e.g. 09:15).",
      accepted: ["14:30"],
      explanation: "vierzehn Uhr dreißig = 14:30.",
      grammarRule: "Spoken 24-hour time: [hour] Uhr [minutes].",
      referenceSectionId: "transcript",
      referenceLabel: "Transcript",
      xp: 15,
    },
  ],
  conclusion:
    "Station announcements are formulaic — train number, platform, time — which makes them an ideal first listening exercise once you know the pattern to listen for.",
};

export default lesson;
