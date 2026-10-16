# Lernen — Project Memory

> **Purpose.** Single source of truth for resuming work on this project without re-research.
> Read this before changing anything. Keep it updated at the end of every working session.
>
> **Last updated:** 2026-10-16 (Claude Code session `b1eb2306…`), consolidating:
> this session's full conversation, the code as it exists on disk today, and Claude's persistent
> memory notes from earlier sessions (2026-07-28 → 2026-07-30). Earlier-session facts were
> re-verified against the current code where possible; anything not re-verified is marked.
>
> **Legend** — **[CONFIRMED]** verified in code/browser · **[DECISION]** explicitly chosen by the
> user (or by Claude with the user's approval) · **[ASSUMPTION]** inferred, not verified ·
> **[OPEN]** unresolved question/issue · **[UNKNOWN]** information not available.

---

## Table of contents
1. [Project overview & vision](#1-project-overview--vision)
2. [Standing rules (always apply)](#2-standing-rules-always-apply)
3. [Tech stack](#3-tech-stack)
4. [Architecture & file map](#4-architecture--file-map)
5. [Learning systems (lessons, explanation languages, RTL, curriculum)](#5-learning-systems)
6. [Homepage (hero) — current spec & full history](#6-homepage-hero--current-spec--full-history)
7. [Performance findings & measurement method](#7-performance-findings--measurement-method)
8. [Decision log](#8-decision-log)
9. [Rejected / reverted approaches](#9-rejected--reverted-approaches)
10. [Research findings & references](#10-research-findings--references)
11. [Current status](#11-current-status)
12. [Known bugs, issues & open questions](#12-known-bugs-issues--open-questions)
13. [Pending tasks, next steps & priorities](#13-pending-tasks-next-steps--priorities)
14. [Developer gotchas & conventions](#14-developer-gotchas--conventions)
15. [Verification & tooling](#15-verification--tooling)
16. [User preferences & prompt history](#16-user-preferences--prompt-history)

---

## 1. Project overview & vision

- **[CONFIRMED]** *Lernen* is a German-language learning web platform. Brand name in the UI:
  **"Deutschlernen"** (nav logo text, from `messages/*/common.json → appName`); hero wordmark:
  **"Lern mal!"**.
- **[CONFIRMED]** Learners pick an **Explanation Language** (16 languages) in which explanations,
  hints and feedback are shown; the **interface itself is always German**; the **German learning
  content is never translated** (see §2).
- **[CONFIRMED]** Content types: grammar (14-category curriculum, CEFR A1–C2 roadmap), vocabulary,
  reading, listening, speaking, quiz; plus dictionary, vocabulary library, writing checker,
  dashboard pages.
- **Vision / aesthetic (from the user's prompts, 2026-10-16) [DECISION]:** premium, polished,
  "designed by a professional creative studio, not a generic AI template"; playful but not
  childish; colorful 3D German vocabulary background as the brand's signature; restrained motion.
- **[UNKNOWN]** Business model, target audience specifics, launch timeline, hosting target
  (README is the stock create-next-app text; Vercel is only mentioned there generically).

## 2. Standing rules (always apply)

These are explicit, repeated user requirements. Do not violate them without asking.

1. **German-only interface [DECISION, 2026-07-28 "IMPORTANT GLOBAL PROJECT RULE"].** All
   navigation, menus, buttons, lesson titles, dashboard, dialogs, forms, placeholders, routes are
   German. Other languages only in code/comments. New UI text → hardcode German, do **not** route
   through the old `next-intl` messages system.
   - Exception by explicit spec: the **"Lehrer/Teacher" nav label** followed the explanation
     language (currently the item is hidden — see §6.6).
   - Exception by explicit spec: **quiz/exercise action buttons and in-flow instructions** follow
     the explanation language (they are "the teaching experience").
2. **Explanation Language translates only instructional/explanatory text [DECISION, 2026-07-28].**
   Translate: explanations, hints, feedback, quiz/exercise instructions (`prompt`/`statement`),
   notes, success/error messages, `grammarRule`, `translation` (sentence-order gloss).
   **Never translate** quiz/exercise *content*: German sentences/examples, fill-blank sentences,
   MC `options`, `sentenceBefore/After`, `correctOrder/shuffled`, `parts/correctAnswers/choices`,
   `accepted`, vocabulary, articles, grammar terms — *even if that content happens to be authored
   in English* ("it wasn't German to begin with" is not an exception).
3. **Natural localization, not calques [DECISION].** Per-language text must read as natively
   authored (esp. RTL word order). Budget **two critical review passes** for generated
   instructional text (first catches calques; second catches number/agreement mismatches, nested
   relative clauses, stacked pre-verbal qualifiers, label+parenthetical constructions). Concrete
   Persian example: ❌ "کدام جمله Nominativ را درست به‌کار برده است؟" → ✅ "در کدام جمله حالت
   Nominativ به‌درستی به‌کار رفته است؟".
4. **One canonical lesson; translations are a generated overlay [DECISION].** Never duplicate
   lesson files per language.
5. **Homepage background is protected [DECISION, repeated 2026-10-16].** Preserve every
   vocabulary word (2000 instances / 43 unique), colors, 3D look, depth and mouse interaction
   unless the user explicitly asks to change them. Never replace it with a static image.
6. **Don't invent routes or numbers [DECISION].** E.g., Start goes to an existing route; never
   show invented statistics.
7. **Smallest safe change; inspect first; don't redesign unrelated parts [DECISION]** — stated in
   nearly every prompt.
8. **Respect `prefers-reduced-motion`** for decorative motion [DECISION].

## 3. Tech stack

**[CONFIRMED from package.json, 2026-10-16]**

| Area | Choice |
|---|---|
| Framework | **Next.js 16.2.10** (App Router, Turbopack dev) — *not* Vite (the user sometimes says "React/Vite"; the project is Next.js). `AGENTS.md`: "This is NOT the Next.js you know… read `node_modules/next/dist/docs/` before writing code". `middleware` is `src/proxy.ts` (Next 16 naming). |
| UI | React 19.2.4, TypeScript 5, Tailwind CSS 4 (`@tailwindcss/postcss`), `tw-animate-css`, shadcn (v4) on **Base UI** (`@base-ui/react`), `lucide-react`, `sonner`, `cmdk`, `next-themes` |
| i18n | `next-intl` 4.13 with `[locale]` routing, locales `en, de, fa, tr, ru, uk, ar` (`src/i18n/routing.ts`, default `en`, prefix always). UI is nonetheless hardcoded German in most places (see §2/§12). |
| Motion | `framer-motion` 12 (wrapped in `MotionConfig reducedMotion="user"` via `MotionProvider`), `gsap` (installed; usage not audited) |
| 3D | `three` 0.185.1, `@react-three/fiber` 9.6.1, `@react-three/drei` 10.7.7, `@react-three/rapier` 2.2.0 (Rapier WASM **0.12** — has no `setContactSkin`), `cannon-es` (installed; usage not audited) |
| Data | `drizzle-orm` + `postgres` + `drizzle-kit` (schema in `src/lib/db/schema/*`, migration `drizzle/0000_remarkable_zuras.sql`) — **defined but unused by any page [CONFIRMED]**. `@supabase/ssr` + `supabase-js` wired only via `src/proxy.ts` / `src/lib/supabase/*`. |
| Forms/state | `react-hook-form`, `zod` 4, `zustand` 5 |
| Fonts | `next/font/google`: Geist (`--font-latin`), Geist Mono, Vazirmatn (fa), Noto Sans Arabic (ar) in `src/lib/fonts.ts`. Hero wordmark uses its own outline data (Recursive, §6.3), not a web font. |
| Dev | ESLint 9 (`eslint-config-next`), **Playwright** (devDependency, used for verification), Node 24 |
| Scripts | `dev`, `build`, `start`, `lint`, `db:*`, `generate:explanations` (= `node --import ./scripts/register-ts-loader.mjs scripts/generate-lesson-explanations.ts`) |

Dev machine (for perf context) **[CONFIRMED]**: Windows 11, AMD integrated Radeon GPU.

## 4. Architecture & file map

**Routes [CONFIRMED]** (`src/app/[locale]/…/page.tsx`): `/` (homepage), `/about`, `/contact`,
`/privacy`, `/terms` (ComingSoon pages), `/auth/sign-in`, `/auth/sign-up` (**ComingSoon — no real
auth**), `/dashboard`, `/dictionary`, `/vocabulary`, `/writing-checker`, `/style-guide`,
`/lessons/[type]` (browse), `/lessons/[type]/[level]/[slug]` (lesson). `[locale]/layout.tsx` is
the de-facto root layout (owns `<html>/<body>`); `[locale]/not-found.tsx` + minimal root
`app/not-found.tsx` exist.

**Key directories**
- `src/app/[locale]/_components/` — homepage parts: `hero.tsx`, `hero-wordmark*.ts(x)`,
  `hero-scene/*` (3D background), plus now-unused former homepage sections (`features`, `roadmap`,
  `product-preview`, `skills`, `ai-teacher-preview`, `testimonials`, `floating-dock`, …).
- `src/components/layout/` — `header.tsx`, `nav-bar.tsx`, `mobile-nav.tsx`, `nav-links.ts`
  (single source of nav data + `NAV_ITEM_CLASS`), `library-dropdown.tsx`, `teacher-nav-link.tsx`
  (kept, currently unused), `charcoal-glass.ts` (shared glass style), `hide-on-home.tsx`,
  `footer.tsx`, `theme-toggle.tsx`.
- `src/lib/lessons/` — lesson types, `content/**` (canonical lessons + `.explanations.ts` caches +
  `_meta.ts`), `categories.ts`, `content-loader.ts`, `explanation-loader.ts`,
  `resolve-explanation.ts`, `generators/*`, `quiz-*.ts`, `level-progress.ts`.
- `src/lib/explanation-language/` — `languages.ts` (16), `ui-labels.ts`, `generator-labels.ts`,
  `detect.ts`, `cookie.ts`, `resolve.ts`, `server.ts`.
- `src/components/lessons/bidi-text.tsx` — `BidiText`, `GermanTerm`.
- `scripts/` — `generate-lesson-explanations.ts`, `translations/<lang>.ts` (15 files),
  `register-ts-loader.mjs`, `ts-extensionless-loader.mjs` (excluded from root tsconfig).
- `public/fonts/` — `droid-sans-bold.typeface.json` (background words),
  `recursive-lern-mal.morph.json` (hero wordmark, ~61 KB).
- `messages/<locale>/*.json` — legacy next-intl namespaces still used by some pages: `auth,
  common, dashboard, dictionary, home, nav, quiz, search, settings, vocabulary, writingChecker`
  (`lesson/grammar/lessons` namespaces were deleted 2026-07-28).
- `docs/PROJECT_MEMORY.md` (this file), `docs/tools/*.txt` (preserved verification tools, §15).

## 5. Learning systems

### 5.1 Lessons & content [CONFIRMED 2026-10-16]
- **16 authored lessons**: grammar A1 `nominativ, akkusativ, praesens, definite-indefinite-articles,
  noun-gender`; A2 `perfekt, praeteritum, plural-forms`; B1 `dativ, futur-i`; B2 `genitiv`;
  `vocabulary/a1/familie`, `reading/a1/im-cafe`, `listening/a1/am-bahnhof`,
  `speaking/a1/sich-vorstellen`, `quiz/a1/wiederholung`.
- **Grammar `_meta.ts` status counts:** 10 `available`, 1 `completed`, 41 `locked` (the 48-topic
  roadmap; locked lessons have real titles/summaries, never "coming soon" tiles in the roadmap).
- **Categories** (`categories.ts`): 14 German grammar categories — Fälle, Artikel, Pronomen,
  Verben, Satzbau, Adjektive, Adverbien, Präpositionen, Konjunktionen, Nebensätze, Relativsätze,
  Infinitivsätze, Negation, Fragen — plus 5 non-grammar categories **still titled in English**
  (`Everyday words`, `Short texts`, `Everyday audio`, `Introductions`, `Review`, lines 27–31) →
  violates the German-only rule **[OPEN]**.
- **Loaders:** `content-loader.ts` and `explanation-loader.ts` have parallel per-(type, level)
  bucket tables — **always update both together** (missing B2 bucket in the explanation loader
  once caused "titles translated, body English").

### 5.2 Explanation Language system [CONFIRMED; earlier sessions]
- 16 languages: `fa, en, ru, uk, tr, ar, ku, pl, ro, bg, el, it, es, fr, nl, pt` (`languages.ts`,
  each with an `rtl` flag).
- Canonical lesson (English explanatory text + German content) + generated per-lesson
  `<slug>.explanations.ts` cache `{ sourceHash, languages }`; `resolveLesson()` /
  `useResolvedLesson()` merge them; English = canonical fields.
- Content source: hand-authored `scripts/translations/<lang>.ts` (one file per language, all
  lessons). No live translation API (a provider could replace these files later without changing
  formats). Pipeline sha256-hashes translatable fields, skips unchanged lessons, writes caches,
  then `reportCoverageGaps()`.
- `EXPLANATION_UI_LABELS` (~59 labels × 16 languages) via `useExplanationUiLabels()`;
  `GENERATOR_LABELS` for generated questions (templates; German content interpolated raw).
- **Coverage gap [CONFIRMED 2026-10-16, OPEN]:** the 15 translation files contain **13** lesson
  keys each; `grammar/a1/definite-indefinite-articles`, `grammar/a1/noun-gender`,
  `grammar/a2/plural-forms` have **no entries** and their caches have `"languages": {}` → non-English
  learners see English explanation text for those 3 lessons. (Earlier memory said "zero gaps"; that
  was true at 13 lessons, before these 3 were added — how/when they were added is **[UNKNOWN]**.)
- Not yet covered: dictionary definitions, AI-teacher responses (features don't exist yet);
  `lesson.objectives` always canonical English.

### 5.3 RTL / BiDi [CONFIRMED in earlier sessions]
- Region roots set `dir`/`lang` from `useExplanationLanguage().language.rtl` (LessonMainContent,
  ExercisesSection, QuizSection).
- `BidiText` wraps Latin runs in prose (groups consecutive words into **one** isolate; returns one
  `<span>`, never a bare Fragment — both were real bugs). Whole German sentences/options use
  whole-string `dir="ltr"`/`<bdi>` — never split word-by-word. `GermanTerm` = muted chip.
- `resolveReferenceLabel()` maps the 10 canonical reference labels to UI-label keys.

### 5.4 Quiz engine & generators [CONFIRMED in earlier sessions]
- Hybrid generator: template generation for cases (`case-article`) and regular-verb tenses
  (`verb-conjugation`); pool+shuffle for everything else (`quiz-shuffle.ts`, `quiz-sampling.ts`,
  `quiz-history.ts` localStorage recent-ids). Length picker 5/10/20/40/Custom; retake regenerates.
- MC generation only for masculine nouns (fem/neuter articles collide → duplicate options).
- Unlock system: `status` is static availability; per-learner progression is a client-only
  localStorage overlay (`level-progress.ts`, `getRequiredKeysByLevel`). Gating is **UI-only** —
  locked-by-progression lessons are still reachable by URL (intentional; no backend).
  All A1 grammar topics were unlocked by user decision (content-less stubs → graceful page).
- Direct URL to a locked lesson renders `ComingSoon` (not raw 404).

## 6. Homepage (hero) — current spec & full history

### 6.1 Current structure [CONFIRMED 2026-10-16]
- `src/app/[locale]/page.tsx` renders **only** `<Hero title="Lern mal!" ctaLabel="Start"
  ctaHref="/lessons/grammar" />` (hardcoded German). Homepage is a **single non-scrolling screen**.
- `hero.tsx`: `<section>` `h-svh`, pulled up under the header by `HEADER_OFFSET = 4.25rem`
  (`marginTop: -4.25rem`), `overflow-hidden bg-black`. A `useEffect` sets
  `document.documentElement.style.overflow = "hidden"` and `overscrollBehavior = "none"` while
  mounted, restoring previous values on unmount (because the layout shell uses `min-h-screen` =
  100vh, taller than 100svh on mobile).
- Layers: 3D background canvas (`HeroSceneLoader`, `-z-20`) → soft radial darkening
  (`radial-gradient(ellipse 38% 34% at 50% 50%, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.18) 50%, transparent)`,
  `-z-10`) → content column (`max-w-5xl`, centered, `paddingTop: HEADER_OFFSET`, `pb-16`) →
  `FadeIn` → **glass panel** (`rounded-[1.75rem] px-8 pb-8 pt-5 sm:px-12`, `style={CHARCOAL_GLASS}`)
  containing `<HeroWordmark>` and the Start link.
- Footer hidden on `/` via `<HideOnHome>` in `[locale]/layout.tsx`. Former below-the-fold sections
  and the floating dock are no longer rendered (components kept).

### 6.2 3D vocabulary background [CONFIRMED values]
Files: `hero-scene/hero-scene-loader.tsx` (dynamic import, IntersectionObserver pauses
`frameloop` off-screen), `hero-scene.tsx`, `word-cloud.tsx`, `instanced-word-group.tsx`,
`word-data.ts`, `word-geometry-cache.ts`, `mouse-rigid-body.tsx`, `surface-texture.ts`.
(Unused leftovers in the same folder: `camera-rig.tsx`, `particle-field.tsx`, `mouse-world.ts`,
`use-prefers-reduced-motion.ts`, `use-scroll-progress.ts` — pre-existing lint errors live there.)
- **Words:** 43 unique German grammar terms (LARGE: DER, DIE, DAS, Nominativ, Akkusativ, Dativ,
  Genitiv; MEDIUM 18 incl. Konjunktiv, Perfekt, Plusquamperfekt, Präsens, Futur I/II, Imperativ,
  Passiv, Aktiv, Modalverben, Adjektive, Pronomen, Präpositionen, Artikel, Verb, Adverb,
  Substantiv, Plural; SMALL 18 incl. Nebensatz, Hauptsatz, Relativsatz, Komparativ, Superlativ,
  Kasus, Genus, Numerus, Konjunktion, Interjektion, Subjekt, Objekt, Prädikat, Possessiv,
  Reflexiv, Indefinit, Demonstrativ, Interrogativ). **2000 instances** (200 large / 1000 medium /
  800 small). Note: "Nomen" and "Adjektiv" (singular) are *not* in the list — user once named them;
  not added (no-new-words rule). **[OPEN: user never confirmed]**
- Sizes `TIER_SIZE` large 0.48 / medium 0.28 / small 0.18 (+12% vs earlier). Depth tiers: close
  (z 4.5–7.5, ~7%), mid (z −6..4), far (z −22..−30, ~32%).
- **Palette** (12, rich candy pastels): `#5c9cff #ff6079 #3fcf88 #ffbd2e #9a7dff #ff9d68 #ff7b4a
  #2fc7ba #ff70b4 #49aeff #ffa22c #8ccf4d`; per-word lightness jitter ±0.05 (`LIGHTNESS_JITTER`).
- **Layout** (`word-data.ts`): area-weighted angle sampling (fixed sparse corners), radius-scaled
  local jitter in `packRect` (attempt 0 = exact target), `EDGE_MARGIN_FACTOR 1.08`,
  `REFERENCE_ASPECT 1.78`, `UNDULATION_STRENGTH 0.2`. **Center clearance per tier:** far+mid
  `SAFE_NS 0.03×0.04` (fill everything, incl. behind the panel); close `0.40×0.30`, footprint 1
  (comes up to the panel outline, not behind it). **Pinned words:** footprint wholly inside
  `±PIN_NS_X 0.22 × ±PIN_NS_Y 0.17` → `pinned: true` → Rapier `fixed` body (rendered normally, no
  physics/mouse); 36 words today; sized to stay under the panel up to 2560px-wide viewports.
- **Geometry/material:** `TextGeometry` height 0.5, bevelThickness 0.11, bevelSize 0.07,
  bevelSegments 3, curveSegments 3; indexed via `mergeVertices`. `MeshStandardMaterial` roughness
  0.38, metalness 0.02, normalScale 0.2, aoMapIntensity 0.35, procedural normal/roughness/AO maps.
  **Depth shading in the shader** (`onBeforeCompile`, `DEPTH_SHADE` back 0.3, start 0.18) — *not*
  a vertex attribute (see §7).
- **Scene:** `dpr={1}`, NeutralToneMapping, ambient 0.35, key `[8,12,10]` 2.1 `#fff4e6`, fill
  `[-10,-6,6]` 0.55 `#dfe8ff`, rim `[-2,14,-12]` 1.1 `#ffffff`, `fog("#000", 30, 62)` (far tier
  only), Environment with 3 Lightformers (rect 1.8 `#fff8ef` @ [6,8,6]; rect 0.8 `#e4ecff` @
  [−8,1,4]; ring 0.5 @ [0,−3,−12]). Physics: gravity 0, `timeStep 1/60` (fixed, catch-up),
  6 solver iterations, 2 internal PGS iterations, interpolation on (default).
- **Interaction:** invisible kinematic "cursor rod" (3 tapered cuboid segments along the camera
  ray) pushes words; springs (`SPRING_STRENGTH 7`, rotation 5.5) pull back; **re-anchoring**:
  after step 90 (retry every 30) each still (<0.05) word not touching the cursor gets its anchor
  re-captured at its settled pose so resting bodies can sleep (`instanced-word-group.tsx`). The
  cursor body is exposed read-only as `mouseBodyHandle` for that check.

### 6.3 "Lern mal!" wordmark [CONFIRMED]
Files: `hero-wordmark.tsx` (wrapper), `hero-wordmark-scene.tsx` (R3F canvas, lazy),
`hero-wordmark-geometry.ts` (mesh builder), `hero-wordmark-font.ts` (URL constant),
`public/fonts/recursive-lern-mal.morph.json`.
- Accessible `<h1 className="sr-only">Lern mal!</h1>` + `aria-hidden` visual box sized by inline
  style `width: min(40vw, 31rem); aspectRatio: 4.6/1` (inline because of a dev Tailwind
  regeneration gotcha, §14). Fallback plain text after 2.5 s if WebGL/font fails. Outline JSON is
  preloaded via React `preload(…, {as: "fetch"})`.
- **Font:** Recursive (SIL OFL 1.1, © 2019 The Recursive Project Authors), 6 casual-family axis
  positions with **identical point structure** (CRSV=0, MONO=0):
  `casual-italic` (wght 850, CASL 1, slnt −12), `heavy-casual` (1000, 0.75, 0),
  `soft-italic` (820, 0.7, −8), `black-semicasual` (960, 0.45, −4), `casual-lean` (900, 1, −15),
  `round-heavy` (940, 0.55, −2). Generated offline with fontkit — tool preserved at
  `docs/tools/generate-wordmark-font.cjs.txt`.
- **Geometry:** one indexed mesh per glyph; topology from style 0; styles 1–5 are **morph targets**
  (position, normal, color; `morphTargetsRelative=false`). Inflation = quarter-round rim of offset
  rings (`RIM_RADIUS 0.048`, `RIM_HEIGHT 0.06`, `RIM_RINGS 7`, `DEPTH 0.1`), per-vertex rim radius
  capped at `0.42 ×` local thickness (ray cast), tangent from neighbors ≥ `0.004` apart, outline
  Laplacian smoothing (2 passes × 0.5, lines subdivided ×6) to round corners. Caps triangulated
  from the **average shape of all styles**, own vertices with explicit flat normals; overlapping
  glyph parts (Recursive builds e.g. L from stem+bar) share the same cap height (no z offsets).
  Colors: per-style warm palettes (honey `#ffbd2e` … coral `#ff6079` family) with lighter top,
  darker back (RGBA attributes — see §14). All styles normalized to identical width & center.
- **Material:** `MeshPhysicalMaterial` roughness 0.3, metalness 0.02, clearcoat 0.6,
  clearcoatRoughness 0.12, envMapIntensity 1.1, vertexColors, **DoubleSide with forced
  front-facing shading** (shader patch) so residual flipped slivers can't open holes.
- **Light rig mirrors the background** (same ambient/key/fill/rim/Lightformers, NeutralToneMapping).
  Camera fov 20 @ z14 (fit-to-width).
- **Animation:** own clock (advances only while animating — fixes jump after pauses); each
  letter holds a style then morphs to the next (`STYLE_PERIOD 4.2 s`, `HOLD_FRACTION 0.55`,
  smootherstep), left→right stagger `0.03` periods; breathing `BREATH_AMOUNT 0.018` @ 1.5;
  sway `SWAY_Y 0.05`, `SWAY_X 0.025`. Paused off-screen / hidden tab / reduced motion
  (`frameloop="demand"`, verified 0 draw calls). Footprint stable: width ±0.6%, centre ±5 CSS px.
- GPU resources disposed on unmount.

### 6.4 Shared glass (nav bar + hero panel) [CONFIRMED]
`src/components/layout/charcoal-glass.ts` → `CHARCOAL_GLASS` (used inline by the panel and by
`nav-bar.tsx` when over the hero, i.e. always on `/`):
```ts
background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0) 55%), rgba(35,40,50,0.52)"
backdropFilter: "blur(2px)"   // + WebkitBackdropFilter
border: "1px solid rgba(255,255,255,0.12)"
boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 36px -22px rgba(0,0,0,0.7)"
```
User asked for ~`rgba(35,40,50,0.45)` + `blur(2px)`; **0.52** chosen because at 0.45 the nav's
small muted labels lost contrast over bright words (user allowed "adjust slightly").
History: `rgba(24,24,27,0.6) blur(10px) saturate(80%)` → `rgba(38,38,41,0.53)` (one shade lighter)
→ current.

### 6.5 Start button [CONFIRMED current = "neutral liquid glass"]
In `hero.tsx` (same `Link` throughout all redesigns): `href="/lessons/grammar"`,
`draggable={false}`, `onKeyDown` handles Space → `click()` (Enter is native). Classes:
`h-11 rounded-full px-7 text-base font-semibold text-white`, layered shadows
(`inset 0 1px 0 rgb(255 255 255/.45)`, `inset 0 -1px 0 rgb(0 0 0/.25)`, `0 1px 1px`,
`0 6px 14px -6px`, `0 14px 28px -14px`), hover `-translate-y-0.5 brightness-110` + deeper shadow,
active `translate-y-px brightness-95` + smaller shadow + inset pressed overlay, focus
`outline-2 outline-offset-4 outline-white/80`. Static layers (local constants): `LIQUID_GLASS`
(white gradient 0.2→0.1→0.07, border `rgba(255,255,255,0.24)`, `blur(6px)`),
`LIQUID_GLASS_REFRACTION` (bottom radial glow), `LIQUID_GLASS_GLOSS` (curved top cap + upper-left
spot, opacity 0.8→1 on hover), `LIQUID_GLASS_PRESSED`. **No animation** (moving streak removed by
request). Size 120×44 px.
Start-button history (all superseded): glass+white arrow chip → (user: "looks like a slider")
solid conventional glass → solid honey-apricot satin key → translucent glass key → cyan pill
`#19B8E6→#0B78B8` with light sweep → cyan glass with sweep → liquid amber glass (brown label)
→ **neutral liquid glass, no sweep (current)** — user explicitly: "absolutely no gold/yellow/orange".

### 6.6 Navigation bar [CONFIRMED]
- Items: brand "Deutschlernen" → `/`; **Start** `/`; **Lernpfad** → `/lessons/grammar` (was
  `/#roadmap`); **Bibliothek** dropdown (Grammatik `/lessons/grammar`, Wortschatz `/vocabulary`,
  Wörterbuch `/dictionary`, Lesen/Hören/Gespräche `/lessons/reading|listening|speaking`);
  **Dashboard**; search (non-functional button), notifications bell, explanation-language globe,
  theme toggle, Anmelden, Registrieren.
- **Teacher/Lehrer item hidden** (desktop + mobile) [DECISION 2026-10-16] — its target `/#lehrer`
  no longer exists and no AI-teacher page exists ("KI fragen" floating button had no action).
  `teacher-nav-link.tsx` kept for later.
- Over the hero the header gets the `dark` class (tokens) and inline `CHARCOAL_GLASS`; elsewhere
  it keeps the themed glass (`bg-background/70 backdrop-blur-xl …` when scrolled).
- `NAV_ITEM_CLASS` shared style (hover tint, focus ring, `data-[popup-open]`).

## 7. Performance findings & measurement method
[CONFIRMED by measurement on 2026-10-16, AMD iGPU]
- Background draws **~49M vertices/frame** (24k verts × 2000 words, non-indexed originally) →
  **vertex-bound** (quartering pixels barely helps). Anything per-vertex is expensive; fragment
  additions (lights, fog) are cheap.
- Physics: fixed 1/60 step with catch-up → long frames cause more steps → longer frames (the
  "lag/sluggish" feel). GPU stall shows in CPU profiles as `bufferSubData` (instanceMatrix uploads).
- **Root cause of the 2026-10-16 "words follow with delay" regression:** (1) a baked per-vertex
  color attribute (~580 MB/frame) for depth shading, (2) resting overlaps keeping ~550 bodies awake
  (spring vs contact fight), (3) an adaptive DPR boost to 1.5×. Fixes: shader depth shading,
  `mergeVertices` (−35% vertex work), re-anchoring (bodies sleep), `dpr={1}`.
- Results (fps, interleaved headless real-GPU runs): committed idle 17.5/sweep 18.5 → regressed
  sweep 12.6 → fixed idle 27–34, sweep 17–21. Final homepage (filled centre + panels): idle ~30–32,
  sweep ~19.5–19.7, after-sweep ~20 — equal to the pre-change state within noise.
- **Filling the centre** with all tiers woke ~50% more bodies per sweep and halved after-sweep fps;
  solved by keeping the close tier out of the centre and pinning words wholly behind the panel.
- **Backdrop blur:** an early reading said "~6 fps cost"; later clean interleaved runs showed no
  measurable cost — the early reading was confounded by GPU contention from the user's own Chrome.
- **Method (use this):** (a) Node physics replica → compare **awake-body counts** (deterministic);
  (b) browser A/B with ≥3 **interleaved** rounds, discard rounds where both variants degrade
  together; first load after a file change is slow (dev compile) — don't count it.

## 8. Decision log
| Date | Decision | Why / source |
|---|---|---|
| 07-28 | Interface always German; Explanation Language separate (16 langs) | User global rule |
| 07-28 | Never translate quiz/exercise content | User correction |
| 07-28 | LocaleSwitcher deleted; one Globe control | User: "only one language control" |
| 07-28 | Nav 10 → 5 items, Bibliothek dropdown, "Lehrer" reactive label | User UX cleanup |
| 07-28/29 | 14-category curriculum, 48 topics, hybrid generator, small authoring batch | User answers (AskUserQuestion) |
| 07-29 | All A1 grammar topics unlocked even without content | User answer |
| 07-30 | ComingSoon for direct URLs to locked lessons; root/locale not-found pages | Routing audit |
| 10-16 | Homepage hero = only "Lern mal!" + Start; no invented stats | User prompt |
| 10-16 | Start → `/lessons/grammar` (sign-up is ComingSoon; don't invent routes) | Claude, accepted |
| 10-16 | Preserve all 2000 words / 43 terms; improve composition, not content | User (critical) |
| 10-16 | Morphing 3D Recursive wordmark (6 styles) replaces earlier title designs | User prompt + Claude design |
| 10-16 | Centre completely filled; words behind panel pinned for perf | User prompt + measurement |
| 10-16 | Single-screen homepage: remove below-hero sections from `/` (keep components), hide footer on `/` | **User answer** (AskUserQuestion) |
| 10-16 | Lernpfad → `/lessons/grammar`; hide Teacher until an AI-teacher page exists | **User answer** |
| 10-16 | Nav + panel share one glass style; current `rgba(35,40,50,0.52)` blur 2px | User prompts |
| 10-16 | Start = neutral liquid glass, no animation, no gold | User prompt |

## 9. Rejected / reverted approaches
- Per-character font-swap "Rubik's cube" headline (Geist/Instrument Serif/Fraunces/DM Serif
  Display/Space Grotesk) — replaced by user's later redesign request.
- Shrikhand inflated wordmark with pillow **normal maps** — replaced (user: "serif", "detached",
  wanted smaller + morphing); normal maps can't morph between shapes.
- Fraunces WONK italic (its "l" reads like "f"); Linear (CASL≈0) Recursive styles (triangulation
  folded → dark wedges).
- Background perf: per-vertex color attribute; far-tier low-detail LOD split (doubled group count,
  more CPU); `interpolate={false}` (no gain); `DynamicDrawUsage` hint (no gain); drei
  `PerformanceMonitor` DPR 1.5 boost (removed).
- Live backdrop blur ruled out once (confounded measurement) → re-enabled later at 2–4 px.
- Centre fill with all tiers (variant G/J) — too many awake bodies.
- "Keep sections but lock scroll" for the homepage — rejected by user (nav anchors would land
  users below the hero with no way back).
- Start: slider-like arrow chip; cyan; amber/gold (explicitly banned now); moving streak (removed).
- Reusing Three.js for the button (WebGL in a focusable link — heavy, bad a11y).

## 10. Research findings & references
### 10.1 Skills research (find-skills, 2026-10-16) — **nothing installed beyond what exists**
- `find-skills` exists at user level (`~/.claude/skills/find-skills`) and project level
  (`.claude/skills/find-skills/`, untracked) + `skills-lock.json` (source `vercel-labs/skills`).
- Already installed in repo: `banner-design, brand, design, design-system, slides, ui-styling,
  ui-ux-pro-max` (in `.claude/skills/`).
- Recommended (not installed): `vercel-labs/agent-skills@vercel-react-best-practices` (~807K
  installs; repo ~32.5K★), `vercel-labs/agent-skills@web-design-guidelines` (~743K),
  `anthropics/skills@frontend-design` (~993K; repo ~181K★). Runner-up:
  `addyosmani/web-quality-skills@accessibility` (~62K; ~2.9K★). No trustworthy language-learning
  skill (all <1K installs). Sources: https://skills.sh/ pages for each.
### 10.2 Site review — 5 recommended improvements (NOT implemented yet)
1. Mark German content with `lang="de"` (quiz/lesson regions set `lang={explanationCode}`, so
   German options inherit e.g. `fa` → wrong screen-reader voice); `GermanTerm` lacks `lang`.
2. Quiz feedback not announced (`QuizFeedback` lacks `aria-live`/`role="status"`); progress dots
   color-only; drag-drop blanks read as "underscore…".
3. `quiz-progress.tsx` dot row (`flex gap-2`, no wrap) overflows on phones for 20/40/100 questions;
   tap targets < 44px (e.g. 32px AudioButton).
4. `question-typing.tsx`: no `autoCorrect/autoCapitalize/spellCheck` off, no ä/ö/ü/ß helper,
   `normalize()` lowercases so "hund" is accepted (capitalisation of nouns is pedagogically key).
5. Four duplicated localStorage hooks (flash of empty state, no cross-tab sync) → one
   `useSyncExternalStore` hook; **no tests** exist (quiz-logic, loaders would benefit).
### 10.3 Font research
Compared Shrikhand, Fraunces (WONK/SOFT), Bagel Fat One, Lilita One, Young Serif, Recursive,
Fredoka, Nunito, Unbounded. Recursive chosen for a morphable *family* (wght/CASL/slnt).
### 10.4 Library facts discovered
- three r185: `vColor` is vec4; **RGB morph colors fail to compile** → use RGBA.
- three's `ShapeUtils.triangulateShape` needs real `Vector2` (calls `.equals`).
- clearcoat uses its own normals (`clearcoatNormalMap`).
- R3F sets tone mapping only on first configure → override in `onCreated`.
- R3F `useLoader(FileLoader)` works for JSON; meshes created via JSX need `updateMorphTargets()`.
- Rapier JS 0.12: no `contactSkin`.
- Base UI: `Menu.GroupLabel` needs `Menu.Group`; `Menu.Item` has no `onSelect`;
  `DropdownMenuItem render={<Link>}` doesn't navigate → use `onClick` + `router.push`.

## 11. Current status
- **Git [CONFIRMED]:** branch `main`; last commits `eaaa0ea feat: major Lernen platform update`,
  `d21c017 feat: interactive 3D hero with physics words`. **All 2026-10-16 work is uncommitted**
  (13 modified + several new files: hero-wordmark*, charcoal-glass.ts, hide-on-home.tsx,
  recursive-lern-mal.morph.json, docs/, .claude/skills/find-skills/, skills-lock.json).
- Checks at end of session: `tsc --noEmit` clean; `npm run build` passes; ESLint clean on changed
  files (4 pre-existing errors in untouched files: `camera-rig.tsx`, `use-prefers-reduced-motion.ts`,
  `theme-toggle.tsx`).
- Homepage verified at 1600×900, 1920×1080, 1366×768, iPhone 13, 360×640: no scroll, glass match,
  Start/Enter/Space → `/lessons/grammar`, mobile menu OK, no console errors.

## 12. Known bugs, issues & open questions
- **[OPEN]** 3 lessons without explanation-language content (§5.2).
- **[OPEN]** 5 non-grammar category titles in English (§5.1).
- **[OPEN]** Legacy multi-locale `next-intl` routing/messages still exist (UI-locale reachable by
  URL; pages like dashboard/dictionary still read `messages/*`). Migration deferred — ask first.
- **[OPEN]** Homepage → client navigation was occasionally slow (WebGL loop vs React transition,
  diagnosed 07-30); not re-tested after 10-16 perf fixes **[UNKNOWN current state]**.
- **[OPEN]** Mobile: wordmark is small (~156–160 px wide; `min(40vw, 31rem)`); user forbade title
  changes — offer, don't do.
- **[OPEN]** Start label contrast: current neutral glass is fine (white on dark glass); earlier
  cyan variant was 3.4:1 (noted for history).
- **[OPEN]** Search button, notifications bell, "Lehrer fragen"/AI teacher, auth — non-functional
  stubs; sign-in/up are ComingSoon.
- **[OPEN]** Unused homepage section components + unused hero-scene files (cleanup candidates —
  ask before deleting).
- **[OPEN]** home.json hero keys and other now-unused message keys left in all 7 locales.
- **[OPEN]** User once named "Nomen"/"Adjektiv" as background words; they don't exist (only
  "Substantiv"/"Adjektive"). Not added. Ask if wanted.
- **[UNKNOWN]** Whether Supabase/DB is planned for auth/progress (code exists, unused).

## 13. Pending tasks, next steps & priorities
Suggested order (confirm priorities with the user):
1. **Commit** the 2026-10-16 work (user hasn't asked yet — ask first).
2. Fill explanation content for the 3 untranslated lessons (15 languages, natural phrasing, two
   review passes) and run `npm run generate:explanations`.
3. Germanize the 5 English category titles.
4. Accessibility/UX items from §10.2 (lang="de", aria-live, mobile progress dots, typing input,
   storage hook + tests).
5. Decide fate of legacy locale routing (ask).
6. AI teacher feature (then re-enable the Lehrer nav item; extend translations/BidiText to it).
7. Author locked curriculum topics (41).

## 14. Developer gotchas & conventions
- **`cn()` is plain `twMerge`**: it drops custom `text-body-sm`/`text-caption`/… when combined
  with a text-color class → combine with template literals (see `NAV_ITEM_CLASS`).
- **Dev-server Tailwind:** arbitrary classes edited in place are sometimes not regenerated (computed
  width 0) → verify computed styles; use inline styles for critical static sizing. Prod build is fine.
- **Line endings:** many files are CRLF; string-replacement edits must normalize `\r\n`.
- **Both loaders** (`content-loader.ts`, `explanation-loader.ts`) must get new buckets together.
- **New per-vertex attributes on the background = performance regression.** Prefer shader math.
- **Background layout changes:** check awake counts in the physics replica before shipping.
- Never return a bare Fragment from components dropped into flex rows (BidiText bug).
- DropdownMenuItem navigation → `onClick` + `router.push`.
- New UI text: hardcode German. New explanation-language content: per-language files, natural
  phrasing, two review passes.

## 15. Verification & tooling
- `docs/tools/*.txt` (stored inert so `tsc`/ESLint/`next build` ignore them; copy out and drop
  `.txt` to use): `generate-wordmark-font.cjs` (regenerate the morph font),
  `perf-probe.cjs` (real-GPU frame timing idle/sweep/after), `physics-bench.ts` (Node Rapier
  replica, awake counts), `homepage-check.cjs` (5-viewport no-scroll/glass/Start/nav check).
- Headless real-GPU Chromium flags (Windows): `--use-angle=d3d11 --enable-gpu
  --ignore-gpu-blocklist` (SwiftShader is far too slow for the 3D scene).
- Standard checks: `npx tsc --noEmit -p tsconfig.json`, `npx eslint <files>`, `npm run build`.

## 16. User preferences & prompt history
**Preferences [CONFIRMED from repeated prompts]:** precise, minimal, targeted changes; inspect
first; preserve everything not mentioned; verify in browser; report files changed and real check
results; honest about trade-offs; premium/elegant/understated; no flashy neon, no excessive glow,
no gold on the CTA (latest); the background's colors and motion are sacred.

**Session 2026-10-16 prompt sequence (condensed, in order):**
1. Check find-skills; recommend 3 skills (no installs). 2. Review site; 5 improvements (no edits).
3. Premium landing redesign ("Lern mal!" + Start, vivid background, glass nav). 4. Refine (bigger
words, depth, corners, refined headline, glass Start). 5. Rubik's-cube per-letter font animation +
fix slider-like Start. 6. Fix "words lag the cursor" regression. 7. Shrikhand-style inflated 3D
title (reference image of glossy "Lern mal!" lettering). 8. Smaller, integrated, *morphing* title.
9. Fill centre + glass panel. 10. Fill centre completely + more transparent panel. 11. Charcoal
glass, matching nav, no scrolling, Start navigates (asked user re sections/nav). 12. Panel/nav
5–8% lighter. 13. Minimal blur `rgba(35,40,50,.45)` blur 2px. 14. Cyan `#19B8E6` CTA with sweep.
15. Cyan glass CTA. 16. Liquid amber glass CTA. 17. Neutral liquid glass CTA, no animation, no
gold. 18. This documentation task.
