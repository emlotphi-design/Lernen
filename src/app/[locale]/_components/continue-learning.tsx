import type { LucideIcon } from "lucide-react";
import { ArrowRight, Clock, History } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LevelBadge, type CefrLevel } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";

export type ContinueLesson = {
  key: string;
  title: string;
  level: CefrLevel;
  category: string;
  progress: number;
  icon: LucideIcon;
  timeLeftLabel: string;
  lastOpenedLabel: string;
  href: string;
};

const levelIconClasses: Record<CefrLevel, string> = {
  A1: "bg-level-a1/15 text-level-a1",
  A2: "bg-level-a2/15 text-level-a2",
  B1: "bg-level-b1/15 text-level-b1",
  B2: "bg-level-b2/15 text-level-b2",
  C1: "bg-level-c1/15 text-level-c1",
  C2: "bg-level-c2/15 text-level-c2",
};

function LessonCard({ lesson, cta }: { lesson: ContinueLesson; cta: string }) {
  const Icon = lesson.icon;
  return (
    <Card className="h-full gap-4 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-xl",
            levelIconClasses[lesson.level],
          )}
        >
          <Icon className="size-5" />
        </span>
        <LevelBadge level={lesson.level} size="sm" />
      </div>

      <div>
        <p className="text-h4">{lesson.title}</p>
        <p className="text-caption text-muted-foreground">{lesson.category}</p>
      </div>

      <div className="flex items-center gap-2">
        <Progress value={lesson.progress} className="flex-1" />
        <span className="text-caption tabular-nums text-muted-foreground">
          {lesson.progress}%
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 text-caption text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5 shrink-0" />
          {lesson.timeLeftLabel}
        </span>
        <span className="flex items-center gap-1.5">
          <History className="size-3.5 shrink-0" />
          {lesson.lastOpenedLabel}
        </span>
      </div>

      <Button
        size="sm"
        className="mt-1 w-full border border-primary-300/30 bg-primary/75 text-primary-foreground backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90"
        nativeButton={false}
        render={
          <Link href={lesson.href}>
            {cta}
            <ArrowRight className="size-3.5" />
          </Link>
        }
      />
    </Card>
  );
}

export function ContinueLearning({
  title,
  subtitle,
  cta,
  lessons,
}: {
  title: string;
  subtitle: string;
  cta: string;
  lessons: ContinueLesson[];
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-h2">{title}</h2>
          <p className="mt-3 text-body text-muted-foreground">{subtitle}</p>
        </FadeIn>
      </div>

      {/* Mobile: vertical stack */}
      <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 px-4 sm:hidden">
        {lessons.map((lesson, i) => (
          <FadeIn key={lesson.key} delay={i * 0.05}>
            <LessonCard lesson={lesson} cta={cta} />
          </FadeIn>
        ))}
      </div>

      {/* Desktop / tablet: horizontal snap-scroll */}
      <FadeIn delay={0.1}>
        <div className="hidden sm:block">
          <div className="mx-auto max-w-6xl overflow-x-auto scroll-smooth px-4 pb-4 [scroll-padding-inline:1rem] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent">
            <div className="flex snap-x snap-mandatory gap-5">
              {lessons.map((lesson) => (
                <div key={lesson.key} className="w-72 shrink-0 snap-start lg:w-80">
                  <LessonCard lesson={lesson} cta={cta} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
