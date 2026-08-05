import type { LessonMeta } from "../../../types";
import { buildLessonHref } from "../../../href";

export const META: LessonMeta[] = [
  {
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
  },
];
