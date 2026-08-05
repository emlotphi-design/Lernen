import type { Category } from "./types";

/** Hand-written for the placeholder content set — at real scale this becomes a `categories`
 *  table, queried the same way `getCategories()` in index.ts already abstracts it. */
export const CATEGORIES: Category[] = [
  // Grammar — the full curriculum roadmap. Titles are German (interface-is-always-German rule),
  // matching the existing lesson-title convention ("Der Nominativ" etc). Every category here has
  // real lessons in its bucket's `_meta.ts` — most still `locked` until authored, never a "coming
  // soon" dead end: see the `locked` LessonStatus handling in lessons/[type]/page.tsx and
  // lesson-sidebar-left.tsx, which already renders locked lessons with a lock icon and a real
  // summary instead of a link.
  { id: "cases", type: "grammar", level: "A1", title: "Fälle", order: 0 },
  { id: "articles", type: "grammar", level: "A1", title: "Artikel", order: 1 },
  { id: "pronouns", type: "grammar", level: "A1", title: "Pronomen", order: 2 },
  { id: "verbs", type: "grammar", level: "A1", title: "Verben", order: 3 },
  { id: "sentence-structure", type: "grammar", level: "A2", title: "Satzbau", order: 4 },
  { id: "adjectives", type: "grammar", level: "A2", title: "Adjektive", order: 5 },
  { id: "adverbs", type: "grammar", level: "A2", title: "Adverbien", order: 6 },
  { id: "prepositions", type: "grammar", level: "A1", title: "Präpositionen", order: 7 },
  { id: "conjunctions", type: "grammar", level: "A2", title: "Konjunktionen", order: 8 },
  { id: "subordinate-clauses", type: "grammar", level: "B1", title: "Nebensätze", order: 9 },
  { id: "relative-clauses", type: "grammar", level: "B1", title: "Relativsätze", order: 10 },
  { id: "infinitive-clauses", type: "grammar", level: "B1", title: "Infinitivsätze", order: 11 },
  { id: "negation", type: "grammar", level: "A1", title: "Negation", order: 12 },
  { id: "question-forms", type: "grammar", level: "A1", title: "Fragen", order: 13 },

  { id: "everyday-words", type: "vocabulary", level: "A1", title: "Everyday words", order: 0 },
  { id: "short-texts", type: "reading", level: "A1", title: "Short texts", order: 0 },
  { id: "everyday-audio", type: "listening", level: "A1", title: "Everyday audio", order: 0 },
  { id: "introductions", type: "speaking", level: "A1", title: "Introductions", order: 0 },
  { id: "review", type: "quiz", level: "A1", title: "Review", order: 0 },
];

export function getCategories(filter?: { type?: Category["type"] }): Category[] {
  const list = filter?.type ? CATEGORIES.filter((c) => c.type === filter.type) : CATEGORIES;
  return [...list].sort((a, b) => a.order - b.order);
}

export function getCategory(id: string): Category | null {
  return CATEGORIES.find((c) => c.id === id) ?? null;
}
