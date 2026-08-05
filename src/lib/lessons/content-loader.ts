import type { CefrLevel, Lesson, LessonType } from "./types";

/** Lesson bodies are lazy-loaded via `import()` rather than bundled up front — at 10,000+
 *  lessons, loading every file eagerly is not an option. Webpack/Turbopack can only build a
 *  context module for an `import()` whose directory actually exists on disk, so this table has
 *  one literal call site per (type, level) bucket that currently has content, with only `slug`
 *  left dynamic — each becomes its own small lazy chunk scoped to just that directory.
 *
 *  Adding a lesson to an *existing* bucket (new file + a `_meta.ts` entry) never touches this
 *  file. Introducing a bucket's *first* lesson does: create the directory, then add its one-line
 *  entry here — the same one-time step a real backend's routing table would need the first time
 *  a new (type, level) combination goes live. */
type Loader = (slug: string) => Promise<{ default: Lesson }>;

const LOADERS: Record<LessonType, Partial<Record<CefrLevel, Loader>>> = {
  grammar: {
    A1: (slug) => import(`./content/grammar/a1/${slug}`),
    A2: (slug) => import(`./content/grammar/a2/${slug}`),
    B1: (slug) => import(`./content/grammar/b1/${slug}`),
    B2: (slug) => import(`./content/grammar/b2/${slug}`),
  },
  vocabulary: {
    A1: (slug) => import(`./content/vocabulary/a1/${slug}`),
  },
  reading: {
    A1: (slug) => import(`./content/reading/a1/${slug}`),
  },
  listening: {
    A1: (slug) => import(`./content/listening/a1/${slug}`),
  },
  speaking: {
    A1: (slug) => import(`./content/speaking/a1/${slug}`),
  },
  quiz: {
    A1: (slug) => import(`./content/quiz/a1/${slug}`),
  },
};

export async function loadLessonContent(
  type: LessonType,
  level: CefrLevel,
  slug: string,
): Promise<Lesson | null> {
  const loader = LOADERS[type]?.[level];
  if (!loader) return null;
  try {
    const mod = await loader(slug);
    return mod.default;
  } catch {
    return null;
  }
}
