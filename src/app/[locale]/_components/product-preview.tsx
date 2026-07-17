import { Check, Heart, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LevelBadge } from "@/components/ui/level-badge";

export function ProductPreview({
  grammarLabel,
  quizLabel,
  dictionaryLabel,
}: {
  grammarLabel: string;
  quizLabel: string;
  dictionaryLabel: string;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,var(--color-primary-100),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklch,var(--color-primary-500),transparent_85%),transparent_60%)]"
      />
      <div className="grid gap-4 rounded-3xl border border-border/60 bg-surface/60 p-4 sm:grid-cols-3 sm:p-8">
        {/* Grammar lesson card */}
        <Card className="p-5 shadow-lg sm:translate-y-2">
          <div className="flex items-center justify-between">
            <span className="text-label uppercase tracking-wide text-muted-foreground">
              {grammarLabel}
            </span>
            <LevelBadge level="A1" size="sm" />
          </div>
          <p className="mt-3 text-h4">Der, die, das</p>
          <p className="mt-1 text-body-sm text-muted-foreground">
            <span className="font-medium text-foreground">die</span> Bibliothek · feminine
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Progress value={65} className="flex-1" />
            <span className="text-caption tabular-nums text-muted-foreground">65%</span>
          </div>
        </Card>

        {/* Quiz card */}
        <Card className="p-5 shadow-xl sm:-translate-y-2">
          <span className="text-label uppercase tracking-wide text-muted-foreground">
            {quizLabel}
          </span>
          <p className="mt-3 text-body font-medium">
            <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-body-sm">___</span>{" "}
            Buch ist neu.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between rounded-lg border border-success/40 bg-success/10 px-3 py-2 text-body-sm font-medium text-success">
              Das
              <Check className="size-4" />
            </div>
            <div className="rounded-lg border border-border px-3 py-2 text-body-sm text-muted-foreground">
              Der
            </div>
            <div className="rounded-lg border border-border px-3 py-2 text-body-sm text-muted-foreground">
              Die
            </div>
          </div>
        </Card>

        {/* Dictionary card */}
        <Card className="p-5 shadow-lg sm:translate-y-2">
          <div className="flex items-center justify-between">
            <span className="text-label uppercase tracking-wide text-muted-foreground">
              {dictionaryLabel}
            </span>
            <Heart className="size-4 text-muted-foreground" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <p className="text-h4">die Bibliothek</p>
            <LevelBadge level="B1" size="sm" />
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-body-sm text-muted-foreground">
            <Volume2 className="size-3.5" />
            /biblioˈteːk/
          </p>
          <p className="mt-3 text-body-sm">library</p>
        </Card>
      </div>
    </div>
  );
}
