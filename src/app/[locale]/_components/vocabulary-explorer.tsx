import type { LucideIcon } from "lucide-react";
import { ArrowRight, Hash } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LevelBadge, type CefrLevel } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";

export type VocabCategory = {
  key: string;
  label: string;
  icon: LucideIcon;
  wordCount: number;
  level: CefrLevel;
};

export function VocabularyExplorer({
  title,
  subtitle,
  categories,
  wordsLabel,
  continueLabel,
}: {
  title: string;
  subtitle: string;
  categories: VocabCategory[];
  wordsLabel: string;
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
                <LevelBadge level={category.level} size="sm" />
              </div>

              <p className="text-body font-medium">{category.label}</p>
              <p className="flex items-center gap-1.5 text-caption text-muted-foreground">
                <Hash className="size-3.5" />
                {category.wordCount} {wordsLabel}
              </p>

              <Button
                size="sm"
                variant="outline"
                className="mt-2 w-full transition-colors group-hover:border-primary/40 group-hover:bg-accent group-hover:text-accent-foreground"
                nativeButton={false}
                render={
                  <Link href="/vocabulary">
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
