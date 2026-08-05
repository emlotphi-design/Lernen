import type { CefrLevel, LessonType } from "./types";

/** The one place the `/lessons/[type]/[level]/[slug]` URL shape is written down — every
 *  LessonMeta's `href` is built through this, so changing the route later means changing this
 *  function, not every call site. */
export function buildLessonHref(type: LessonType, level: CefrLevel, slug: string): string {
  return `/lessons/${type}/${level.toLowerCase()}/${slug}`;
}

export function buildTypeIndexHref(type: LessonType): string {
  return `/lessons/${type}`;
}
