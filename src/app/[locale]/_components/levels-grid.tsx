import { SpellCheck, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LevelBadge, cefrLevels, type CefrLevel } from "@/components/ui/level-badge";
import { FadeIn } from "@/components/motion/fade-in";

export function LevelsGrid({
  title,
  subtitle,
  alphabetName,
  alphabetDesc,
  pronunciationName,
  pronunciationDesc,
  levelDescs,
}: {
  title: string;
  subtitle: string;
  alphabetName: string;
  alphabetDesc: string;
  pronunciationName: string;
  pronunciationDesc: string;
  levelDescs: Record<CefrLevel, string>;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-3 text-body text-muted-foreground">{subtitle}</p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FadeIn>
          <Card interactive className="h-full gap-2 p-5 shadow-sm">
            <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <SpellCheck className="size-4.5" />
            </span>
            <p className="mt-1 text-body font-medium">{alphabetName}</p>
            <p className="text-body-sm text-muted-foreground">{alphabetDesc}</p>
          </Card>
        </FadeIn>
        <FadeIn delay={0.04}>
          <Card interactive className="h-full gap-2 p-5 shadow-sm">
            <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Volume2 className="size-4.5" />
            </span>
            <p className="mt-1 text-body font-medium">{pronunciationName}</p>
            <p className="text-body-sm text-muted-foreground">{pronunciationDesc}</p>
          </Card>
        </FadeIn>
        {cefrLevels.map((level, i) => (
          <FadeIn key={level} delay={(i + 2) * 0.04}>
            <Card interactive className="h-full gap-2 p-5 shadow-sm">
              <LevelBadge level={level} />
              <p className="mt-1 text-body font-medium">Level {level}</p>
              <p className="text-body-sm text-muted-foreground">{levelDescs[level]}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
