import { Flame, Zap, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

export function StatsPreview({
  streakLabel,
  xpLabel,
  achievementsLabel,
}: {
  streakLabel: string;
  xpLabel: string;
  achievementsLabel: string;
}) {
  const stats = [
    {
      icon: Flame,
      iconClass: "bg-warning/10 text-warning",
      label: streakLabel,
      value: "12",
    },
    {
      icon: Zap,
      iconClass: "bg-primary/10 text-primary",
      label: xpLabel,
      value: "1,240",
    },
    {
      icon: Trophy,
      iconClass: "bg-success/10 text-success",
      label: achievementsLabel,
      value: "8",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat, i) => (
        <FadeIn key={stat.label} delay={i * 0.05}>
          <Card
            interactive
            className="group gap-3 p-5 shadow-sm"
          >
            <span
              className={`flex size-10 items-center justify-center rounded-xl transition-transform duration-300 ease-(--ease-premium) group-hover:scale-110 ${stat.iconClass}`}
            >
              <stat.icon className="size-4.5" />
            </span>
            <p className="text-h2 tabular-nums">{stat.value}</p>
            <p className="text-body-sm text-muted-foreground">{stat.label}</p>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
