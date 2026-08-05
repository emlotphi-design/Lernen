import type { LessonMeta } from "../../../types";
import { buildLessonHref } from "../../../href";

export const META: LessonMeta[] = [
  {
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
  },
];
