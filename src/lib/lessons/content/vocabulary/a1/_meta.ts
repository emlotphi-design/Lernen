import type { LessonMeta } from "../../../types";
import { buildLessonHref } from "../../../href";

export const META: LessonMeta[] = [
  {
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
  },
];
