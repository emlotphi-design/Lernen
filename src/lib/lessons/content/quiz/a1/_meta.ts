import type { LessonMeta } from "../../../types";
import { buildLessonHref } from "../../../href";

export const META: LessonMeta[] = [
  {
    slug: "wiederholung",
    type: "quiz",
    level: "A1",
    category: "review",
    title: "A1 Wiederholung",
    summary: "A mixed review quiz covering cases, everyday vocabulary, and basic sentence order.",
    durationMinutes: 8,
    order: 0,
    status: "available",
    progress: 0,
    href: buildLessonHref("quiz", "A1", "wiederholung"),
  },
];
