import type { LessonMeta } from "./types";

/** Placeholder progress accessors — today these just read the static `status`/`progress` that
 *  ships on each lesson's seed data (see manifest.ts). There's no live auth session to attach
 *  real per-user progress to yet (sign-in is still a stub), so this is the seam where a
 *  Supabase-backed `userProgress` query plugs in later: swap the bodies below for a query keyed
 *  on `(userId, lessonType, slug)` and every call site here stays the same. Note the current
 *  Drizzle schema's `savedEntryTypeEnum`/`progressStatusEnum` (src/lib/db/schema/enums.ts) don't
 *  yet have a `"lesson"` variant and `userProgress.status` is a 3-state enum rather than a 0-100
 *  percentage — reconciling that is a separate task once there's a live DB to verify against. */

export function isLessonCompleted(meta: LessonMeta): boolean {
  return meta.status === "completed";
}

export function getLessonProgress(meta: LessonMeta): number {
  return meta.progress;
}
