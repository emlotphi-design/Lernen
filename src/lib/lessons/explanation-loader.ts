import type { CefrLevel, LessonType } from "./types";
import type { LessonExplanationCache } from "./explanation-types";

/** Mirrors content-loader.ts exactly — one lazy `import()` per (type, level) bucket that
 *  currently has generated `.explanations.ts` caches, so cache files are only loaded when their
 *  lesson is actually requested. Add a bucket here at the same time content-loader.ts gets one. */
type Loader = (slug: string) => Promise<{ default: LessonExplanationCache }>;

const LOADERS: Record<LessonType, Partial<Record<CefrLevel, Loader>>> = {
  grammar: {
    A1: (slug) => import(`./content/grammar/a1/${slug}.explanations`),
    A2: (slug) => import(`./content/grammar/a2/${slug}.explanations`),
    B1: (slug) => import(`./content/grammar/b1/${slug}.explanations`),
    B2: (slug) => import(`./content/grammar/b2/${slug}.explanations`),
  },
  vocabulary: {
    A1: (slug) => import(`./content/vocabulary/a1/${slug}.explanations`),
  },
  reading: {
    A1: (slug) => import(`./content/reading/a1/${slug}.explanations`),
  },
  listening: {
    A1: (slug) => import(`./content/listening/a1/${slug}.explanations`),
  },
  speaking: {
    A1: (slug) => import(`./content/speaking/a1/${slug}.explanations`),
  },
  quiz: {
    A1: (slug) => import(`./content/quiz/a1/${slug}.explanations`),
  },
};

export async function loadLessonExplanations(
  type: LessonType,
  level: CefrLevel,
  slug: string,
): Promise<LessonExplanationCache | null> {
  const loader = LOADERS[type]?.[level];
  if (!loader) return null;
  try {
    const mod = await loader(slug);
    return mod.default;
  } catch {
    return null;
  }
}
