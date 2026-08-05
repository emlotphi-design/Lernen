import type { CefrLevel, Lesson, LessonMeta, LessonType } from "./types";
import type { LessonExplanationCache } from "./explanation-types";
import { LESSON_MANIFEST } from "./manifest";
import { loadLessonContent } from "./content-loader";
import { loadLessonExplanations } from "./explanation-loader";
import { getCategories as getCategoriesFromRegistry, getCategory } from "./categories";
import { cefrLevels } from "@/components/ui/level-badge";

import type { LessonType as LessonTypeValue } from "./types";

export type { LessonMeta, LessonType, Lesson, Category } from "./types";
export type { LessonExplanationCache } from "./explanation-types";
export { LESSON_TYPES } from "./types";
export { buildLessonHref, buildTypeIndexHref } from "./href";

/** Lesson-type display names — German UI, fixed regardless of explanation language or the old
 *  per-locale UI system (see the German-UI-vs-explanation-language split in project memory). */
export const LESSON_TYPE_LABEL_DE: Record<LessonTypeValue, string> = {
  grammar: "Grammatik",
  vocabulary: "Wortschatz",
  reading: "Lesen",
  listening: "Hören",
  speaking: "Sprechen",
  quiz: "Quiz",
};

/** Plain async functions, not a class/interface — matches this codebase's existing `_lib`
 *  convention (see `vocabulary/_lib`, `dictionary/_lib`). Every function here already returns
 *  data shaped like a query result, so swapping the body for a real Supabase call later doesn't
 *  change any call site — only this file changes. */

export function getLessonMeta(type: LessonType, level: CefrLevel, slug: string): LessonMeta | null {
  return (
    LESSON_MANIFEST.find((m) => m.type === type && m.level === level && m.slug === slug) ?? null
  );
}

export async function getLesson(type: LessonType, level: CefrLevel, slug: string): Promise<Lesson | null> {
  const meta = getLessonMeta(type, level, slug);
  if (!meta || meta.status === "locked") return null;
  return loadLessonContent(type, level, slug);
}

/** The generated per-language explanation overlay for a lesson (see explanation-types.ts) — null
 *  if none has been generated yet for this lesson, in which case every language simply falls
 *  back to the canonical (English) content via resolveLesson(). */
export async function getLessonExplanationCache(
  type: LessonType,
  level: CefrLevel,
  slug: string,
): Promise<LessonExplanationCache | null> {
  return loadLessonExplanations(type, level, slug);
}

export function listLessons(filter?: { type?: LessonType; level?: CefrLevel; category?: string }): LessonMeta[] {
  return LESSON_MANIFEST.filter(
    (m) =>
      (!filter?.type || m.type === filter.type) &&
      (!filter?.level || m.level === filter.level) &&
      (!filter?.category || m.category === filter.category),
  );
}

export function getAdjacentLessons(
  type: LessonType,
  slug: string,
): { previous: LessonMeta | null; next: LessonMeta | null } {
  const current = LESSON_MANIFEST.find((m) => m.type === type && m.slug === slug);
  if (!current) return { previous: null, next: null };

  const siblings = listLessons({ type, category: current.category }).sort((a, b) => a.order - b.order);
  const index = siblings.findIndex((m) => m.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: index > 0 ? siblings[index - 1] : null,
    next: index < siblings.length - 1 ? siblings[index + 1] : null,
  };
}

export function getCategories(filter?: { type?: LessonType }) {
  return getCategoriesFromRegistry(filter);
}

export function getCategoryLessons(categoryId: string): LessonMeta[] {
  return listLessons({ category: categoryId }).sort((a, b) => a.order - b.order);
}

/** Generalizes the old grammar page's `getChapterProgress`/`getCompletedCount` to any category —
 *  operates on the placeholder `status`/`progress` fields in LessonMeta for now (see progress.ts
 *  for the note on where real per-user progress plugs in later). */
export function getCategoryProgress(categoryId: string): { progress: number; done: number; total: number } {
  const lessons = getCategoryLessons(categoryId).filter((l) => l.status !== "locked");
  if (lessons.length === 0) return { progress: 0, done: 0, total: 0 };
  const progress = Math.round(lessons.reduce((sum, l) => sum + l.progress, 0) / lessons.length);
  const done = lessons.filter((l) => l.status === "completed").length;
  return { progress, done, total: lessons.length };
}

export function getCategoryMeta(categoryId: string) {
  return getCategory(categoryId);
}

function lessonKeyOf(m: LessonMeta): string {
  return `${m.type}/${m.level.toLowerCase()}/${m.slug}`;
}

/** For every CEFR level, the content-bearing lesson keys (real content, not a locked stub) at the
 *  level *before* it — A1 always gets an empty array (nothing precedes it). A dynamic
 *  level-unlock gate (see `level-progress.ts`) checks a lesson's own level's entry here against
 *  the learner's real completion history: if every key is completed, that level is unlocked.
 *  Empty arrays (no real content yet at the previous level) always pass — progression is never
 *  blocked on lessons that don't exist. Computed once per page via `getLesson()`, which already
 *  encapsulates "not locked AND a content file actually loads" — exactly what "has real content"
 *  means here, so no separate signal is needed. Lessons already seeded as `status: "completed"`
 *  at authoring time (e.g. nominativ) are excluded from the required set entirely — their
 *  completion is never written to the client's localStorage history (there is nothing to "mark
 *  complete"), so requiring their key would make the gate impossible to satisfy. */
export async function getRequiredKeysByLevel(type: LessonType): Promise<Partial<Record<CefrLevel, string[]>>> {
  const metas = listLessons({ type });
  const withContent = await Promise.all(
    metas.map(async (m) => ({ meta: m, hasContent: (await getLesson(m.type, m.level, m.slug)) !== null })),
  );

  const keysByLevel: Partial<Record<CefrLevel, string[]>> = {};
  for (const { meta, hasContent } of withContent) {
    if (!hasContent || meta.status === "completed") continue;
    (keysByLevel[meta.level] ??= []).push(lessonKeyOf(meta));
  }

  const requiredByLevel: Partial<Record<CefrLevel, string[]>> = {};
  for (let i = 0; i < cefrLevels.length; i++) {
    const level = cefrLevels[i];
    const previousLevel = i > 0 ? cefrLevels[i - 1] : null;
    requiredByLevel[level] = previousLevel ? (keysByLevel[previousLevel] ?? []) : [];
  }
  return requiredByLevel;
}
