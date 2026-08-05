"use client";

import type { ComponentType } from "react";
import {
  Target,
  Lightbulb,
  BookOpenText,
  ListChecks,
  Info,
  Table2,
  Quote,
  AlertTriangle,
  Asterisk,
  Sparkles,
  FileText,
  Clock,
  History,
  X,
  Check,
  Layers,
  Headphones,
  Mic,
} from "lucide-react";
import { LevelBadge } from "@/components/ui/level-badge";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion/fade-in";
import { BidiText, GermanTerm } from "@/components/lessons/bidi-text";
import type { Lesson } from "@/lib/lessons/types";
import type { LessonExplanationCache } from "@/lib/lessons/explanation-types";
import { useResolvedLesson } from "@/lib/lessons/resolve-explanation";
import {
  useExplanationLanguage,
  useExplanationUiLabels,
} from "@/components/providers/explanation-language-provider";

// German grammar case names — these are the language being taught, not explanatory content, so
// they're fixed German regardless of explanation language (see the German-UI-vs-explanation-
// language split in project memory).
const GERMAN_CASE_NAMES: Record<string, string> = {
  nominativ: "Nominativ",
  akkusativ: "Akkusativ",
  dativ: "Dativ",
  genitiv: "Genitiv",
};

function SectionHeading({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2.5 text-h4">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <Icon className="size-4" />
      </span>
      {children}
    </h2>
  );
}

export function LessonMainContent({
  lesson: canonicalLesson,
  explanationCache,
  locale,
}: {
  lesson: Lesson;
  explanationCache: LessonExplanationCache | null;
  locale: string;
}) {
  const lesson = useResolvedLesson(canonicalLesson, explanationCache);
  const labels = useExplanationUiLabels();
  const { code, language } = useExplanationLanguage();
  const dir = language.rtl ? "rtl" : "ltr";

  const genderLabels = {
    masculine: labels.genderMasculine,
    feminine: labels.genderFeminine,
    neuter: labels.genderNeuter,
    plural: labels.genderPlural,
  } as const;

  const lastUpdatedFormatted = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(new Date(lesson.lastUpdated));

  const hasExplanation = lesson.explanation.simple.length > 0 || lesson.explanation.detailed.length > 0;
  const caseName = GERMAN_CASE_NAMES[lesson.slug];

  return (
    <div dir={dir} lang={code}>
      <FadeIn>
        <h1 className="text-h1" dir="ltr">
          {lesson.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-muted-foreground" dir="ltr">
          <LevelBadge level={lesson.level} />
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {lesson.durationMinutes} Min.
          </span>
          <span className="flex items-center gap-1.5">
            <History className="size-3.5" />
            Zuletzt aktualisiert: {lastUpdatedFormatted}
          </span>
        </div>

        {lesson.objectives.length > 0 && (
          <div className="mt-6 rounded-xl border border-dashed border-border bg-muted/30 p-4">
            <p className="flex items-center gap-2 text-body-sm font-medium text-foreground">
              <Target className="size-4 text-primary" />
              {labels.objectivesTitle}
            </p>
            <ul className="mt-2 space-y-1.5">
              {lesson.objectives.map((objective) => (
                <li key={objective} className="flex gap-2 text-body-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                  <bdi>{objective}</bdi>
                </li>
              ))}
            </ul>
          </div>
        )}
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-8 space-y-10 rounded-2xl bg-card p-6 text-card-foreground ring-1 ring-foreground/10 sm:p-9">
          {hasExplanation && (
            <>
              {lesson.explanation.simple.length > 0 && (
                <section id="simple-explanation" className="scroll-mt-24 space-y-3">
                  <SectionHeading icon={Lightbulb}>{labels.simpleExplanationTitle}</SectionHeading>
                  <div className="space-y-3 text-body-lg text-foreground/90">
                    {lesson.explanation.simple.map((paragraph) => (
                      <p key={paragraph}>
                        <BidiText text={paragraph} />
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {lesson.explanation.detailed.length > 0 && (
                <>
                  <Separator />
                  <section id="detailed-explanation" className="scroll-mt-24 space-y-3">
                    <SectionHeading icon={BookOpenText}>{labels.detailedExplanationTitle}</SectionHeading>
                    <div className="space-y-3 text-body text-muted-foreground">
                      {lesson.explanation.detailed.map((paragraph) => (
                        <p key={paragraph}>
                          <BidiText text={paragraph} />
                        </p>
                      ))}
                    </div>
                  </section>
                </>
              )}
            </>
          )}

          {lesson.type === "grammar" && (
            <>
              <Separator />
              <section id="grammar-rules" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={ListChecks}>{labels.grammarRulesTitle}</SectionHeading>
                <ul className="space-y-2.5">
                  {lesson.details.rules.map((rule) => (
                    <li key={rule} className="flex gap-2.5 text-body text-foreground/90">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <BidiText text={rule} />
                    </li>
                  ))}
                </ul>
              </section>

              <Separator />
              <section id="important-notes" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={Info}>{labels.importantNotesTitle}</SectionHeading>
                <div className="space-y-2.5">
                  {lesson.details.notes.map((note) => (
                    <div
                      key={note}
                      className="rounded-lg border-s-2 border-primary bg-primary/5 px-4 py-3 text-body-sm text-foreground/90"
                    >
                      <BidiText text={note} />
                    </div>
                  ))}
                </div>
              </section>

              {lesson.details.table && (
                <>
                  <Separator />
                  <section id="declension-table" className="scroll-mt-24 space-y-3">
                    <SectionHeading icon={Table2}>
                      {labels.declensionTableTitle}
                      {caseName ? (
                        <>
                          {" — "}
                          <GermanTerm text={caseName} />
                        </>
                      ) : (
                        ""
                      )}
                    </SectionHeading>
                    <div className="overflow-x-auto rounded-xl ring-1 ring-foreground/10">
                      <table className="w-full min-w-[28rem] border-collapse text-start text-body-sm">
                        <thead>
                          <tr className="bg-muted/60 text-caption font-medium tracking-wide text-muted-foreground uppercase">
                            <th className="px-4 py-2.5 text-start font-medium"> </th>
                            <th className="px-4 py-2.5 text-start font-medium">{labels.definiteArticleLabel}</th>
                            <th className="px-4 py-2.5 text-start font-medium">{labels.indefiniteArticleLabel}</th>
                            <th className="px-4 py-2.5 text-start font-medium">{labels.personalPronounLabel}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {lesson.details.table.map((row, i) => (
                            <tr key={row.gender} className={i % 2 === 1 ? "bg-muted/30" : undefined}>
                              <td className="px-4 py-2.5 font-medium text-foreground">{genderLabels[row.gender]}</td>
                              <td className="px-4 py-2.5 font-medium text-primary tabular-nums" dir="ltr">
                                {row.definite}
                              </td>
                              <td className="px-4 py-2.5 tabular-nums" dir="ltr">
                                {row.indefinite}
                              </td>
                              <td className="px-4 py-2.5 tabular-nums" dir="ltr">
                                {row.pronoun}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </>
              )}
            </>
          )}

          {lesson.type === "vocabulary" && (
            <>
              <Separator />
              <section id="vocabulary-words" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={Layers}>{labels.vocabularyWordsTitle}</SectionHeading>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {lesson.details.words.map((word) => (
                    <div key={word.de} className="rounded-lg bg-muted/50 p-4">
                      <p className="font-medium text-foreground" dir="ltr">
                        {word.de}
                      </p>
                      <p className="mt-1 text-body-sm text-muted-foreground">{word.en}</p>
                      {word.example && (
                        <p className="mt-1.5 text-body-sm text-foreground/80" dir="ltr">
                          {word.example}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {lesson.type === "reading" && (
            <>
              <Separator />
              <section id="passage" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={BookOpenText}>{labels.readingPassageTitle}</SectionHeading>
                <p className="text-body-lg leading-relaxed text-foreground/90" dir="ltr">
                  {lesson.details.passage}
                </p>
              </section>
            </>
          )}

          {lesson.type === "listening" && (
            <>
              <Separator />
              <section id="transcript" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={Headphones}>{labels.listeningTranscriptTitle}</SectionHeading>
                {lesson.details.audioUrl && (
                  <audio controls src={lesson.details.audioUrl} className="w-full" />
                )}
                <p className="text-body-lg leading-relaxed text-foreground/90" dir="ltr">
                  {lesson.details.transcript}
                </p>
              </section>
            </>
          )}

          {lesson.type === "speaking" && (
            <>
              <Separator />
              <section id="prompts" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={Mic}>{labels.speakingPromptsTitle}</SectionHeading>
                <ol className="space-y-2.5">
                  {lesson.details.prompts.map((prompt, i) => (
                    <li key={prompt.instruction} className="flex gap-3 text-body text-foreground/90">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-caption font-medium text-accent-foreground">
                        {i + 1}
                      </span>
                      <span>
                        <BidiText text={prompt.instruction} />
                        {prompt.germanPhrase && (
                          <GermanTerm text={prompt.germanPhrase} className="ms-1.5" />
                        )}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            </>
          )}

          {lesson.examples.length > 0 && (
            <>
              <Separator />
              <section id="examples" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={Quote}>{labels.examplesTitle}</SectionHeading>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {lesson.examples.map((example) => (
                    <div key={example.de} className="rounded-lg bg-muted/50 p-4">
                      <p className="font-medium text-foreground" dir="ltr">
                        {example.de}
                      </p>
                      <p className="mt-1 text-body-sm text-muted-foreground">
                        <span className="text-caption text-muted-foreground/70">{labels.meaningLabel}</span>{" "}
                        {example.en}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {lesson.type === "grammar" && (
            <>
              <Separator />
              <section id="common-mistakes" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={AlertTriangle}>{labels.commonMistakesTitle}</SectionHeading>
                <div className="space-y-3">
                  {lesson.details.mistakes.map((mistake) => (
                    <div key={mistake.wrong} className="space-y-2.5 rounded-lg bg-warning/5 p-4">
                      <div>
                        <Badge variant="destructive" className="gap-1">
                          <X />
                          {labels.incorrectLabel}
                        </Badge>
                        <p
                          className="mt-1.5 text-body-sm text-destructive line-through decoration-destructive/50"
                          dir="ltr"
                        >
                          {mistake.wrong}
                        </p>
                      </div>
                      <div>
                        <Badge className="gap-1 border-transparent bg-success/15 text-success">
                          <Check />
                          {labels.correctLabel}
                        </Badge>
                        <p className="mt-1.5 text-body-sm font-medium text-success" dir="ltr">
                          {mistake.right}
                        </p>
                      </div>
                      <p className="text-body-sm text-muted-foreground">
                        <BidiText text={mistake.note} />
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />
              <section id="exceptions" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={Asterisk}>{labels.exceptionsTitle}</SectionHeading>
                <ul className="space-y-2.5">
                  {lesson.details.exceptions.map((exception) => (
                    <li key={exception} className="flex gap-2.5 text-body-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                      <BidiText text={exception} />
                    </li>
                  ))}
                </ul>
              </section>

              <Separator />
              <section id="tips" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={Sparkles}>{labels.tipsTitle}</SectionHeading>
                <div className="space-y-2.5">
                  {lesson.details.tips.map((tip) => (
                    <div
                      key={tip}
                      className="flex gap-2.5 rounded-lg bg-success/5 px-4 py-3 text-body-sm text-foreground/90"
                    >
                      <Sparkles className="mt-0.5 size-3.5 shrink-0 text-success" />
                      <BidiText text={tip} />
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {lesson.conclusion && (
            <>
              <Separator />
              <section id="summary" className="scroll-mt-24 space-y-3">
                <SectionHeading icon={FileText}>{labels.summaryTitle}</SectionHeading>
                <p className="text-body-lg text-foreground/90">
                  <BidiText text={lesson.conclusion} />
                </p>
              </section>
            </>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
