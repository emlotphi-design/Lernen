import { Clock, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LevelBadge, type CefrLevel } from "@/components/ui/level-badge";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";

export function RecommendedLessons({
  title,
  subtitle,
  unitMinutes,
  lessons,
}: {
  title: string;
  subtitle: string;
  unitMinutes: string;
  lessons: { title: string; level: CefrLevel; minutes: number; href: string }[];
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
        {lessons.map((lesson, i) => (
          <FadeIn key={lesson.title} delay={i * 0.05}>
            <Link href={lesson.href}>
              <Card interactive className="group h-full gap-3 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <LevelBadge level={lesson.level} size="sm" />
                  <ChevronRight className="size-4 text-muted-foreground transition-all duration-300 ease-(--ease-premium) group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="text-body font-medium">{lesson.title}</p>
                <p className="flex items-center gap-1.5 text-caption text-muted-foreground">
                  <Clock className="size-3.5" />
                  {lesson.minutes} {unitMinutes}
                </p>
              </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
