import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";

export function ComingSoon({
  icon: Icon,
  eyebrow,
  title,
  description,
  backLabel,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  backLabel: string;
}) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <FadeIn>
        <Card className="w-full items-center p-10 shadow-sm">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <Icon className="size-6" />
          </span>
          <span className="mt-5 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-caption font-medium text-muted-foreground">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-h3">{title}</h1>
          <p className="mt-2 text-body text-muted-foreground">{description}</p>
          <Button className="mt-6" render={<Link href="/">{backLabel}</Link>} nativeButton={false} />
        </Card>
      </FadeIn>
    </div>
  );
}
