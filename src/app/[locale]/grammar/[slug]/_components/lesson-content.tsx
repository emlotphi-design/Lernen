import type { ComponentType } from "react";
import {
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
} from "lucide-react";
import { LevelBadge } from "@/components/ui/level-badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion/fade-in";
import type { Lesson } from "../_lib/lessons";

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
  lesson,
  locale,
  progressLabel,
  lastUpdatedLabel,
  readingTimeLabel,
  simpleExplanationTitle,
  detailedExplanationTitle,
  grammarRulesTitle,
  importantNotesTitle,
  declensionTableTitle,
  examplesTitle,
  commonMistakesTitle,
  exceptionsTitle,
  tipsTitle,
  summaryTitle,
  caseLabel,
  genderMasculine,
  genderFeminine,
  genderNeuter,
  genderPlural,
  definiteArticleLabel,
  indefiniteArticleLabel,
  personalPronounLabel,
  incorrectLabel,
  correctLabel,
}: {
  lesson: Lesson;
  locale: string;
  progressLabel: string;
  lastUpdatedLabel: string;
  readingTimeLabel: string;
  simpleExplanationTitle: string;
  detailedExplanationTitle: string;
  grammarRulesTitle: string;
  importantNotesTitle: string;
  declensionTableTitle: string;
  examplesTitle: string;
  commonMistakesTitle: string;
  exceptionsTitle: string;
  tipsTitle: string;
  summaryTitle: string;
  caseLabel: string;
  genderMasculine: string;
  genderFeminine: string;
  genderNeuter: string;
  genderPlural: string;
  definiteArticleLabel: string;
  indefiniteArticleLabel: string;
  personalPronounLabel: string;
  incorrectLabel: string;
  correctLabel: string;
}) {
  const genderLabels = {
    masculine: genderMasculine,
    feminine: genderFeminine,
    neuter: genderNeuter,
    plural: genderPlural,
  } as const;

  const lastUpdatedFormatted = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(new Date(lesson.lastUpdated));

  return (
    <div>
      <FadeIn>
        <h1 className="text-h1">{lesson.titleDe}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-muted-foreground">
          <LevelBadge level={lesson.level} />
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {readingTimeLabel}
          </span>
          <span className="flex items-center gap-2">
            {progressLabel}
            <Progress value={lesson.progress} className="w-24" />
            <span className="tabular-nums">{lesson.progress}%</span>
          </span>
          <span className="flex items-center gap-1.5">
            <History className="size-3.5" />
            {lastUpdatedLabel}: {lastUpdatedFormatted}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="mt-8 space-y-10 rounded-2xl bg-card p-6 text-card-foreground ring-1 ring-foreground/10 sm:p-9">
          <section id="simple-explanation" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={Lightbulb}>{simpleExplanationTitle}</SectionHeading>
            <div className="space-y-3 text-body-lg text-foreground/90">
              {lesson.simple.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <Separator />

          <section id="detailed-explanation" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={BookOpenText}>{detailedExplanationTitle}</SectionHeading>
            <div className="space-y-3 text-body text-muted-foreground">
              {lesson.detailed.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <Separator />

          <section id="grammar-rules" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={ListChecks}>{grammarRulesTitle}</SectionHeading>
            <ul className="space-y-2.5">
              {lesson.rules.map((rule) => (
                <li key={rule} className="flex gap-2.5 text-body text-foreground/90">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {rule}
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <section id="important-notes" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={Info}>{importantNotesTitle}</SectionHeading>
            <div className="space-y-2.5">
              {lesson.notes.map((note) => (
                <div
                  key={note}
                  className="rounded-lg border-s-2 border-primary bg-primary/5 px-4 py-3 text-body-sm text-foreground/90"
                >
                  {note}
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section id="declension-table" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={Table2}>
              {declensionTableTitle} — {caseLabel}
            </SectionHeading>
            <div className="overflow-x-auto rounded-xl ring-1 ring-foreground/10">
              <table className="w-full min-w-[28rem] border-collapse text-start text-body-sm">
                <thead>
                  <tr className="bg-muted/60 text-caption font-medium tracking-wide text-muted-foreground uppercase">
                    <th className="px-4 py-2.5 text-start font-medium"> </th>
                    <th className="px-4 py-2.5 text-start font-medium">{definiteArticleLabel}</th>
                    <th className="px-4 py-2.5 text-start font-medium">{indefiniteArticleLabel}</th>
                    <th className="px-4 py-2.5 text-start font-medium">{personalPronounLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.table.map((row, i) => (
                    <tr key={row.gender} className={i % 2 === 1 ? "bg-muted/30" : undefined}>
                      <td className="px-4 py-2.5 font-medium text-foreground">{genderLabels[row.gender]}</td>
                      <td className="px-4 py-2.5 font-medium text-primary tabular-nums">{row.definite}</td>
                      <td className="px-4 py-2.5 tabular-nums">{row.indefinite}</td>
                      <td className="px-4 py-2.5 tabular-nums">{row.pronoun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Separator />

          <section id="examples" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={Quote}>{examplesTitle}</SectionHeading>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {lesson.examples.map((example) => (
                <div key={example.de} className="rounded-lg bg-muted/50 p-4">
                  <p className="font-medium text-foreground">{example.de}</p>
                  <p className="mt-1 text-body-sm text-muted-foreground">{example.en}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section id="common-mistakes" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={AlertTriangle}>{commonMistakesTitle}</SectionHeading>
            <div className="space-y-3">
              {lesson.mistakes.map((mistake) => (
                <div key={mistake.wrong} className="rounded-lg bg-warning/5 p-4">
                  <p className="flex items-center gap-2 text-body-sm text-destructive line-through decoration-destructive/50">
                    <X className="size-3.5 shrink-0" />
                    {mistake.wrong}
                    <span className="text-caption font-medium no-underline">({incorrectLabel})</span>
                  </p>
                  <p className="mt-1.5 flex items-center gap-2 text-body-sm font-medium text-success">
                    <Check className="size-3.5 shrink-0" />
                    {mistake.right}
                    <span className="text-caption font-medium">({correctLabel})</span>
                  </p>
                  <p className="mt-2 text-body-sm text-muted-foreground">{mistake.note}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section id="exceptions" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={Asterisk}>{exceptionsTitle}</SectionHeading>
            <ul className="space-y-2.5">
              {lesson.exceptions.map((exception) => (
                <li key={exception} className="flex gap-2.5 text-body-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  {exception}
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <section id="tips" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={Sparkles}>{tipsTitle}</SectionHeading>
            <div className="space-y-2.5">
              {lesson.tips.map((tip) => (
                <div
                  key={tip}
                  className="flex gap-2.5 rounded-lg bg-success/5 px-4 py-3 text-body-sm text-foreground/90"
                >
                  <Sparkles className="mt-0.5 size-3.5 shrink-0 text-success" />
                  {tip}
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section id="summary" className="scroll-mt-24 space-y-3">
            <SectionHeading icon={FileText}>{summaryTitle}</SectionHeading>
            <p className="text-body-lg text-foreground/90">{lesson.summary}</p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
