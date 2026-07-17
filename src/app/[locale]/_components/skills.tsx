import { MessageCircle, BookOpen, Headphones, PenLine, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";

export function Skills({
  title,
  subtitle,
  conversationsTitle,
  conversationsDesc,
  readingTitle,
  readingDesc,
  listeningTitle,
  listeningDesc,
  writingTitle,
  writingDesc,
}: {
  title: string;
  subtitle: string;
  conversationsTitle: string;
  conversationsDesc: string;
  readingTitle: string;
  readingDesc: string;
  listeningTitle: string;
  listeningDesc: string;
  writingTitle: string;
  writingDesc: string;
}) {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="mt-3 text-body text-muted-foreground">{subtitle}</p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <FadeIn>
          <Card className="h-full gap-3 p-6 shadow-sm">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <MessageCircle className="size-5" />
            </span>
            <p className="text-body font-medium">{conversationsTitle}</p>
            <p className="text-body-sm text-muted-foreground">{conversationsDesc}</p>
            <div className="mt-2 space-y-2">
              <div className="w-fit max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-3 py-1.5 text-body-sm">
                Wie geht&apos;s dir?
              </div>
              <div className="ms-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3 py-1.5 text-body-sm text-primary-foreground">
                Mir geht&apos;s gut, danke!
              </div>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.05}>
          <Card className="h-full gap-3 p-6 shadow-sm">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <BookOpen className="size-5" />
            </span>
            <p className="text-body font-medium">{readingTitle}</p>
            <p className="text-body-sm text-muted-foreground">{readingDesc}</p>
            <p className="mt-2 rounded-xl bg-muted p-3 text-body-sm text-muted-foreground">
              &bdquo;Berlin ist die Hauptstadt von Deutschland und liegt im Nordosten des
              Landes…&ldquo;
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card className="h-full gap-3 p-6 shadow-sm">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Headphones className="size-5" />
            </span>
            <p className="text-body font-medium">{listeningTitle}</p>
            <p className="text-body-sm text-muted-foreground">{listeningDesc}</p>
            <div className="mt-2 flex items-center gap-3 rounded-xl bg-muted p-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="size-3.5 fill-current" />
              </span>
              <div className="flex flex-1 items-center gap-0.5">
                {[6, 10, 14, 8, 16, 10, 6, 12, 8, 5].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-primary/40"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
              <span className="text-caption tabular-nums text-muted-foreground">3:12</span>
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Card className="h-full gap-3 p-6 shadow-sm">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <PenLine className="size-5" />
            </span>
            <p className="text-body font-medium">{writingTitle}</p>
            <p className="text-body-sm text-muted-foreground">{writingDesc}</p>
            <div className="mt-2 rounded-xl border border-dashed border-border p-3 text-body-sm text-muted-foreground">
              Beschreibe deinen Tag…
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
