import type { LessonMeta } from "../../../types";
import { buildLessonHref } from "../../../href";

export const META: LessonMeta[] = [
  {
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
  },
];
