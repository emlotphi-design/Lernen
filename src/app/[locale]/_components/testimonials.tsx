import { User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

export function Testimonials({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: { quote: string; name: string; role: string }[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-3 text-body text-muted-foreground">{subtitle}</p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {items.map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.06}>
            <Card className="h-full gap-4 p-6 shadow-sm">
              <p className="text-body-sm text-foreground">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <User className="size-4" />
                </span>
                <div>
                  <p className="text-body-sm font-medium">{item.name}</p>
                  <p className="text-caption text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
