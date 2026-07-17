import type { LucideIcon } from "lucide-react";
import { CheckCircle2, Lock, BookOpen, Clock, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export type RoadmapStatus = "completed" | "current" | "locked";

export type RoadmapLevel = {
  key: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  lessons: number;
  hours: number;
  progress: number;
  status: RoadmapStatus;
};

function StatusBadge({
  status,
  completedLabel,
  currentLabel,
  lockedLabel,
}: {
  status: RoadmapStatus;
  completedLabel: string;
  currentLabel: string;
  lockedLabel: string;
}) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-caption font-medium text-success">
        <CheckCircle2 className="size-3" />
        {completedLabel}
      </span>
    );
  }
  if (status === "current") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-caption font-medium text-accent-foreground">
        <Sparkles className="size-3" />
        {currentLabel}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-caption font-medium text-muted-foreground">
      <Lock className="size-3" />
      {lockedLabel}
    </span>
  );
}

function LevelIcon({ level }: { level: RoadmapLevel }) {
  const Icon = level.icon;
  return (
    <span
      className={cn(
        "flex size-14 shrink-0 items-center justify-center rounded-2xl shadow-sm",
        level.status === "completed" && "bg-success text-success-foreground",
        level.status === "current" && "bg-primary text-primary-foreground ring-4 ring-primary/20",
        level.status === "locked" && "bg-muted text-muted-foreground shadow-none",
      )}
    >
      <Icon className="size-6" />
    </span>
  );
}

function LevelCard({
  level,
  lessonsLabel,
  hoursLabel,
  completedLabel,
  currentLabel,
  lockedLabel,
}: {
  level: RoadmapLevel;
  lessonsLabel: string;
  hoursLabel: string;
  completedLabel: string;
  currentLabel: string;
  lockedLabel: string;
}) {
  const locked = level.status === "locked";
  return (
    <Card
      interactive={!locked}
      className={cn(
        "h-full gap-3 p-5",
        level.status === "current" && "border-primary/30 ring-1 ring-primary/20",
        locked && "shadow-none opacity-70",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-h4">{level.title}</p>
        <StatusBadge
          status={level.status}
          completedLabel={completedLabel}
          currentLabel={currentLabel}
          lockedLabel={lockedLabel}
        />
      </div>
      <p className="text-body-sm text-muted-foreground">{level.desc}</p>

      {locked ? (
        <div className="mt-1 h-1 w-full rounded-full bg-muted" />
      ) : (
        <div className="mt-1 flex items-center gap-2">
          <Progress value={level.progress} className="flex-1" />
          <span className="text-caption tabular-nums text-muted-foreground">
            {level.progress}%
          </span>
        </div>
      )}

      <div className="mt-1 flex items-center gap-4 text-caption text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <BookOpen className="size-3.5" />
          {level.lessons} {lessonsLabel}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="size-3.5" />
          {level.hours} {hoursLabel}
        </span>
      </div>
    </Card>
  );
}

export function Roadmap({
  title,
  subtitle,
  levels,
  lessonsLabel,
  hoursLabel,
  completedLabel,
  currentLabel,
  lockedLabel,
}: {
  title: string;
  subtitle: string;
  levels: RoadmapLevel[];
  lessonsLabel: string;
  hoursLabel: string;
  completedLabel: string;
  currentLabel: string;
  lockedLabel: string;
}) {
  const completedUnits = levels.reduce(
    (sum, level) =>
      sum + (level.status === "completed" ? 1 : level.status === "current" ? level.progress / 100 : 0),
    0,
  );
  const totalGaps = Math.max(1, levels.length - 1);
  const fillPercent = Math.min(100, (completedUnits / totalGaps) * 100);

  return (
    <section id="roadmap" className="mx-auto max-w-4xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-3 text-body text-muted-foreground">{subtitle}</p>
        </div>
      </FadeIn>

      {/* Desktop: vertical timeline */}
      <div className="relative mt-14 hidden lg:block">
        <div className="absolute start-7 top-7 bottom-7 w-0.5 bg-border" aria-hidden />
        <div
          className="absolute start-7 top-7 w-0.5 bg-primary transition-[height] duration-700"
          style={{ height: `${fillPercent}%` }}
          aria-hidden
        />
        <div className="space-y-5">
          {levels.map((level, i) => (
            <FadeIn key={level.key} delay={i * 0.06}>
              <div className="relative flex items-stretch gap-5">
                <LevelIcon level={level} />
                <div className="flex-1">
                  <LevelCard
                    level={level}
                    lessonsLabel={lessonsLabel}
                    hoursLabel={hoursLabel}
                    completedLabel={completedLabel}
                    currentLabel={currentLabel}
                    lockedLabel={lockedLabel}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: horizontal scroll */}
      <div className="mt-10 -mx-4 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-2 lg:hidden">
        {levels.map((level, i) => (
          <FadeIn key={level.key} delay={i * 0.05} className="w-64 shrink-0 snap-start">
            <div className="mb-3 flex justify-center">
              <LevelIcon level={level} />
            </div>
            <LevelCard
              level={level}
              lessonsLabel={lessonsLabel}
              hoursLabel={hoursLabel}
              completedLabel={completedLabel}
              currentLabel={currentLabel}
              lockedLabel={lockedLabel}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
