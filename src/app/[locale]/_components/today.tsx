import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function Today({
  title,
  dailyProgressLabel,
  unitMinutes,
  dailyGoalTitle,
  dailyGoalDesc,
}: {
  title: string;
  dailyProgressLabel: string;
  unitMinutes: string;
  dailyGoalTitle: string;
  dailyGoalDesc: string;
}) {
  const done = 18;
  const goal = 20;
  const progress = done / goal;
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="text-center text-h2">{title}</h2>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <FadeIn>
          <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 text-center shadow-md backdrop-blur-xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_0%,var(--color-primary-100),transparent_55%)] dark:bg-[radial-gradient(circle_at_80%_0%,color-mix(in_oklch,var(--color-primary-500),transparent_88%),transparent_55%)]"
            />
            <p className="text-label uppercase tracking-wide text-muted-foreground">
              {dailyProgressLabel}
            </p>
            <div className="relative mt-4 flex size-32 items-center justify-center">
              <svg viewBox="0 0 96 96" className="size-32 -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r={RADIUS}
                  fill="none"
                  strokeWidth="8"
                  className="stroke-border"
                />
                <circle
                  cx="48"
                  cy="48"
                  r={RADIUS}
                  fill="none"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="stroke-primary"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={offset}
                />
              </svg>
              <span className="absolute text-h3 tabular-nums">
                {done}
                <span className="text-body-sm text-muted-foreground">/{goal}</span>
              </span>
            </div>
            <p className="mt-2 text-body-sm text-muted-foreground">
              {done} {unitMinutes} · {goal} {unitMinutes}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="h-full justify-center gap-3 p-8">
            <p className="text-body font-medium">{dailyGoalTitle}</p>
            <p className="text-body-sm text-muted-foreground">{dailyGoalDesc}</p>
            <div className="mt-2 flex gap-2">
              {[5, 15, 30].map((minutes) => (
                <span
                  key={minutes}
                  className={`flex-1 rounded-xl border px-3 py-3 text-center text-body-sm font-medium ${
                    minutes === 15
                      ? "border-primary/30 bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {minutes} {unitMinutes}
                </span>
              ))}
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
