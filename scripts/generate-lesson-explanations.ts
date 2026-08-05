/**
 * Generates the per-lesson explanation caches (`content/<type>/<level>/<slug>.explanations.ts`)
 * from the single canonical lesson source. Content-hash gated: a lesson whose translatable
 * fields haven't changed since the last run is left untouched — regenerating one lesson never
 * rewrites another's cache file.
 *
 * The actual translation step is a pluggable function (`translateLesson` below), backed by
 * `scripts/translations/<lang>.ts` — one file per explanation language, each exporting a
 * `Record<lessonKey, TranslatedLessonContent>`. This is what makes the system scale to new
 * lessons and new languages independently: authoring a new lesson never touches existing
 * translation files, and authoring a new language's content for the existing lesson set never
 * touches lesson content or any other language's file. `English` needs no file — canonical
 * (English-authored) lesson fields already *are* the English content, by construction.
 *
 * No live translation API is configured in this repo — hand-authored content stands in for
 * where a real provider call would go; swapping one in later changes nothing about the cache
 * format, the hashing, or any code that consumes the cache.
 *
 * Run: node scripts/generate-lesson-explanations.ts [--only=type/level/slug] [--force]
 */
import { createHash } from "node:crypto";
import { writeFileSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

import { LESSON_MANIFEST } from "../src/lib/lessons/manifest.ts";
import type { Lesson, QuizQuestion } from "../src/lib/lessons/types.ts";
import type { LessonExplanationCache, TranslatedLessonContent } from "../src/lib/lessons/explanation-types.ts";
import type { ExplanationLanguageCode } from "../src/lib/explanation-language/languages.ts";
import { EXPLANATION_LANGUAGES } from "../src/lib/explanation-language/languages.ts";

import { fa } from "./translations/fa.ts";
import { ru } from "./translations/ru.ts";
import { uk } from "./translations/uk.ts";
import { tr } from "./translations/tr.ts";
import { ar } from "./translations/ar.ts";
import { ku } from "./translations/ku.ts";
import { pl } from "./translations/pl.ts";
import { ro } from "./translations/ro.ts";
import { bg } from "./translations/bg.ts";
import { el } from "./translations/el.ts";
import { it } from "./translations/it.ts";
import { es } from "./translations/es.ts";
import { fr } from "./translations/fr.ts";
import { nl } from "./translations/nl.ts";
import { pt } from "./translations/pt.ts";

/** Every non-English language's per-lesson content, keyed by language then lessonKey(). Adding a
 *  16th+ language later means one new `scripts/translations/<lang>.ts` file and one line here —
 *  nothing else in this script changes. */
const TRANSLATIONS_BY_LANGUAGE: Partial<Record<Exclude<ExplanationLanguageCode, "en">, Record<string, TranslatedLessonContent>>> =
  { fa, ru, uk, tr, ar, ku, pl, ro, bg, el, it, es, fr, nl, pt };

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_ROOT = join(__dirname, "..", "src", "lib", "lessons", "content");

type LessonLocation = { type: string; level: string; slug: string };

function lessonKey(loc: LessonLocation): string {
  return `${loc.type}/${loc.level.toLowerCase()}/${loc.slug}`;
}

function contentPath(loc: LessonLocation): string {
  return join(CONTENT_ROOT, loc.type, loc.level.toLowerCase(), `${loc.slug}.ts`);
}

function cachePath(loc: LessonLocation): string {
  return join(CONTENT_ROOT, loc.type, loc.level.toLowerCase(), `${loc.slug}.explanations.ts`);
}

/** Exactly the fields a translator needs to see — never German content (title, `de` sentences,
 *  passage/transcript, `germanPhrase`), never structural/meta fields (slug, order, progress).
 *  This is also what the hash is computed over: any wording change here invalidates the cache;
 *  any change outside it (e.g. reordering categories, bumping progress) does not. */
function extractTranslatableFields(lesson: Lesson) {
  const quizText = (q: QuizQuestion) => ({
    explanation: q.explanation,
    grammarRule: q.grammarRule,
    translation: q.type === "sentence-order" ? q.translation : undefined,
    prompt: q.type === "true-false" ? q.statement : q.prompt,
  });

  const details =
    lesson.type === "grammar"
      ? {
          kind: "grammar",
          rules: lesson.details.rules,
          notes: lesson.details.notes,
          mistakeNotes: lesson.details.mistakes.map((m) => m.note),
          exceptions: lesson.details.exceptions,
          tips: lesson.details.tips,
        }
      : lesson.type === "vocabulary"
        ? { kind: "vocabulary", wordMeanings: lesson.details.words.map((w) => w.en) }
        : lesson.type === "speaking"
          ? { kind: "speaking", promptInstructions: lesson.details.prompts.map((p) => p.instruction) }
          : { kind: "none" };

  return {
    summary: lesson.summary,
    objectives: lesson.objectives,
    explanationSimple: lesson.explanation.simple,
    explanationDetailed: lesson.explanation.detailed,
    exampleMeanings: lesson.examples.map((e) => e.en),
    exerciseTexts: lesson.exercises.map(quizText),
    quizTexts: lesson.quiz.map(quizText),
    conclusion: lesson.conclusion,
    details,
  };
}

function computeSourceHash(lesson: Lesson): string {
  return createHash("sha256").update(JSON.stringify(extractTranslatableFields(lesson))).digest("hex");
}

// ---- Translator plug-in point ------------------------------------------------------------
async function translateLesson(
  loc: LessonLocation,
): Promise<Partial<Record<Exclude<ExplanationLanguageCode, "en">, TranslatedLessonContent>>> {
  const key = lessonKey(loc);
  const result: Partial<Record<Exclude<ExplanationLanguageCode, "en">, TranslatedLessonContent>> = {};
  for (const [lang, byLesson] of Object.entries(TRANSLATIONS_BY_LANGUAGE) as [
    Exclude<ExplanationLanguageCode, "en">,
    Record<string, TranslatedLessonContent>,
  ][]) {
    const entry = byLesson[key];
    if (entry) result[lang] = entry;
  }
  return result;
}

/** Coverage check — makes gaps visible instead of silently falling back to English. Warns (does
 *  not fail the run) whenever a language has *some* translated lessons but is missing this one,
 *  so adding a lesson without yet translating it into every language is a loud, visible TODO
 *  rather than something a learner discovers by hitting an untranslated page. */
function reportCoverageGaps(locations: LessonLocation[]) {
  const nonEnglish = EXPLANATION_LANGUAGES.filter((l) => l.code !== "en").map((l) => l.code);
  const keys = locations.map(lessonKey);
  const gaps: string[] = [];
  for (const lang of nonEnglish) {
    const byLesson = TRANSLATIONS_BY_LANGUAGE[lang];
    for (const key of keys) {
      if (!byLesson?.[key]) gaps.push(`  ${lang}: ${key}`);
    }
  }
  if (gaps.length > 0) {
    console.log(`\nCoverage gaps (${gaps.length}) — these lessons fall back to English until translated:`);
    console.log(gaps.join("\n"));
  } else {
    console.log("\nFull coverage — every lesson has content in every explanation language.");
  }
}

// ---- Runner -------------------------------------------------------------------------------

function serializeCache(cache: LessonExplanationCache): string {
  return `import type { LessonExplanationCache } from "../../../explanation-types";

// Generated by scripts/generate-lesson-explanations.ts — do not hand-edit. Re-run the script
// after changing this lesson's canonical (English) content to regenerate.
const cache: LessonExplanationCache = ${JSON.stringify(cache, null, 2)};

export default cache;
`;
}

async function run() {
  const onlyArg = process.argv.find((a) => a.startsWith("--only="))?.slice("--only=".length);
  const force = process.argv.includes("--force");

  const locations: LessonLocation[] = LESSON_MANIFEST.filter((m) => m.status !== "locked").map((m) => ({
    type: m.type,
    level: m.level,
    slug: m.slug,
  }));

  let generated = 0;
  let skipped = 0;

  for (const loc of locations) {
    const key = lessonKey(loc);
    if (onlyArg && key !== onlyArg) continue;

    const lessonModule = await import(pathToFileURL(contentPath(loc)).href);
    const lesson: Lesson = lessonModule.default;
    const sourceHash = computeSourceHash(lesson);

    let existingCache: LessonExplanationCache | null = null;
    if (existsSync(cachePath(loc))) {
      // Cache-bust: without a unique query, repeated `--only` runs in the same process would
      // reuse Node's module cache and never see a freshly-written file.
      const mod = await import(`${pathToFileURL(cachePath(loc)).href}?t=${Date.now()}`);
      existingCache = mod.default;
    }

    const newLanguages = await translateLesson(loc);
    const hasNewLanguages = Object.keys(newLanguages).some(
      (lang) => !existingCache?.languages?.[lang as keyof typeof newLanguages],
    );

    if (!force && existingCache && existingCache.sourceHash === sourceHash && !hasNewLanguages) {
      console.log(`skip    ${key} (unchanged)`);
      skipped++;
      continue;
    }

    const languages =
      existingCache && existingCache.sourceHash === sourceHash
        ? { ...existingCache.languages, ...newLanguages }
        : { ...newLanguages }; // source changed (or no prior cache) — old translations are stale

    const cache: LessonExplanationCache = { sourceHash, languages };
    writeFileSync(cachePath(loc), serializeCache(cache), "utf8");
    console.log(`write   ${key} (${Object.keys(languages).join(", ") || "no languages yet"})`);
    generated++;
  }

  console.log(`\nDone — ${generated} written, ${skipped} skipped.`);
  reportCoverageGaps(locations);
}

run();
