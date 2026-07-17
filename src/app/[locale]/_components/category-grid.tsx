import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

export function CategoryGrid({
  title,
  subtitle,
  items,
  columns = 3,
}: {
  title: string;
  subtitle: string;
  items: { icon: LucideIcon; label: string }[];
  columns?: 3 | 6;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-3 text-body text-muted-foreground">{subtitle}</p>
        </div>
      </FadeIn>

      <div
        className={`mt-10 grid gap-4 sm:grid-cols-3 ${
          columns === 6 ? "lg:grid-cols-6" : "lg:grid-cols-3"
        }`}
      >
        {items.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.04}>
            <Card
              interactive
              className="h-full flex-row items-center gap-3 p-4 shadow-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <item.icon className="size-4.5" />
              </span>
              <span className="text-body font-medium">{item.label}</span>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
