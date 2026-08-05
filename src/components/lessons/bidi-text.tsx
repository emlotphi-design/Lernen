"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useExplanationLanguage } from "@/components/providers/explanation-language-provider";

// Shared visual treatment for any German (LTR) term or phrase embedded inline within RTL prose.
// Isolation alone (bare <bdi>) is necessary but not sufficient for readability — a subtle
// highlighted chip makes the script switch visually unambiguous too, so the reader never has to
// parse where Persian ends and German begins by punctuation alone.
const GERMAN_TERM_CLASS =
  "rounded-md bg-muted px-1 py-0.5 text-[0.95em] font-medium text-foreground ring-1 ring-foreground/10";

/** Wraps a string that is entirely one German term or phrase (never itself mixed with other
 *  script) sitting inline next to other-language text — a case name, a single accepted answer,
 *  a short German phrase after an instruction. `<bdi>` isolates its direction from the
 *  surrounding RTL context; the chip styling keeps it visually distinct on top of that. */
export function GermanTerm({ text, className }: { text: string; className?: string }) {
  return <bdi className={cn(GERMAN_TERM_CLASS, className)}>{text}</bdi>;
}

// Matches a maximal run of Latin-script words: consecutive Latin tokens separated only by a
// single space are grouped into ONE run, so "der Junge" isolates as a single unit rather than
// "der" and "Junge" independently. Isolating multi-word German phrases word-by-word is the actual
// bug behind "German words break the RTL layout" — two separate <bdi> isolates connected only by
// a bare space in an RTL paragraph can be repositioned relative to each other by the bidi
// algorithm, since the space between them belongs to the surrounding (reorderable) context, not
// to either isolate. Grouping them into one isolate removes that gap entirely. The run still
// stops at the first non-Latin character (Persian text, Persian punctuation, em dash, brackets),
// so distinct list items — e.g. a comma-separated run of German verbs — stay separate isolates.
const LATIN_RUN =
  /[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ0-9'’.-]*(?:[ \t]+[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ0-9'’.-]*)*/g;

/** Splits mixed-language prose (Persian/Arabic sentences with embedded German technical terms or
 *  short phrases — "Nominativ", "der Mann", "sein", "werden", "bleiben") into text nodes,
 *  rendering each embedded Latin run as a GermanTerm chip. No-op (renders the string unchanged)
 *  for content with no Latin runs, so it's safe to use unconditionally regardless of explanation
 *  language.
 *
 *  Only for *mixed-within-one-string* prose. A field that is always entirely one script in its
 *  own right (a full German example sentence, a quiz option, a word-order token) should never be
 *  passed through here — it's already a single semantic unit and belongs in one GermanTerm/dir
 *  wrap of its own, not split into per-word chips.
 *
 *  No-ops (plain text, no chip-splitting) when the current explanation language is itself Latin
 *  script — e.g. English or Turkish prose containing a German term wouldn't need disambiguating
 *  from it, and the "Latin run" regex would otherwise match nearly the entire sentence, chip-
 *  wrapping ordinary prose into a wall of highlighted boxes. */
export function BidiText({ text }: { text: string }) {
  const { language } = useExplanationLanguage();
  if (language.latinScript) return <span>{text}</span>;

  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LATIN_RUN)) {
    const start = match.index;
    if (start > last) nodes.push(text.slice(last, start));
    nodes.push(<GermanTerm key={start} text={match[0]} />);
    last = start + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  // A single inline wrapper, not a bare fragment: callers frequently place BidiText inside a
  // `flex` row (a bullet marker + the text). A fragment's children become direct flex-item
  // siblings of that row, so every text segment and chip gets individually gapped and
  // stacked instead of flowing as one wrapped paragraph — this is what broke bullet-list
  // alignment. Wrapping in one <span> keeps it a single flex item; everything inside still
  // wraps as normal inline content.
  return <span>{nodes}</span>;
}
