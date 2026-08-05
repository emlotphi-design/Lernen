import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

export function Features({
  title,
  items,
}: {
  title: string;
  items: { icon: LucideIcon; title: string; desc: string }[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="text-center text-h2">{title}</h2>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.05}>
            <Card className="h-full gap-3 p-6 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <item.icon className="size-5" />
              </span>
              <p className="text-body font-medium">{item.title}</p>
              <p className="text-body-sm text-muted-foreground">{item.desc}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
