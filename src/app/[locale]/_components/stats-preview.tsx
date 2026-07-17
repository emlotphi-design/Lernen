import { Flame, Zap, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    { icon: Flame, iconClass: "text-warning", label: streakLabel, value: "12" },
    { icon: Zap, iconClass: "text-primary", label: xpLabel, value: "1,240" },
    { icon: Trophy, iconClass: "text-success", label: achievementsLabel, value: "8" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-5 shadow-sm">
          <span className="flex items-center gap-1.5 text-body-sm text-muted-foreground">
            <stat.icon className={`size-4 ${stat.iconClass}`} />
            {stat.label}
          </span>
          <p className="mt-1 text-h2 tabular-nums">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}
