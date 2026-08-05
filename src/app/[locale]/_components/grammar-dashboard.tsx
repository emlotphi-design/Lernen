import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type GrammarCategory = {
  key: string;
  label: string;
  icon: LucideIcon;
  lessons: number;
  completion: number;
  difficulty: Difficulty;
  href: string;
};

const difficultyClasses: Record<Difficulty, string> = {
  beginner: "bg-success/10 text-success",
  intermediate: "bg-warning/10 text-warning",
  advanced: "bg-accent text-accent-foreground",
};

export function GrammarDashboard({
  title,
  subtitle,
  categories,
  lessonsLabel,
  difficultyLabels,
  continueLabel,
}: {
  title: string;
  subtitle: string;
  categories: GrammarCategory[];
  lessonsLabel: string;
  difficultyLabels: Record<Difficulty, string>;
  continueLabel: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-3 text-body text-muted-foreground">{subtitle}</p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category, i) => (
          <FadeIn key={category.key} delay={i * 0.03}>
            <Card className="group h-full gap-3 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  <category.icon className="size-4.5" />
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-caption font-medium",
                    difficultyClasses[category.difficulty],
                  )}
                >
                  {difficultyLabels[category.difficulty]}
                </span>
              </div>

              <p className="text-body font-medium">{category.label}</p>
              <p className="flex items-center gap-1.5 text-caption text-muted-foreground">
                <BookOpen className="size-3.5" />
                {category.lessons} {lessonsLabel}
              </p>

              <div className="mt-1 flex items-center gap-2">
                <Progress value={category.completion} className="flex-1" />
                <span className="text-caption tabular-nums text-muted-foreground">
                  {category.completion}%
                </span>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="mt-1 w-full transition-colors group-hover:border-primary/40 group-hover:bg-accent group-hover:text-accent-foreground"
                nativeButton={false}
                render={
                  <Link href={category.href}>
                    {continueLabel}
                    <ArrowRight className="size-3.5" />
                  </Link>
                }
              />
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
