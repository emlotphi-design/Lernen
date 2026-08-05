"use client";

import { useRef } from "react";
import { ArrowRight, BookOpenText, Layers, Library, ListChecks, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { HeroSceneLoader } from "./hero-scene/hero-scene-loader";

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  scrollHint,
  stats,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scrollHint: string;
  stats: {
    lessons: string;
    curriculum: string;
    vocabulary: string;
    quizzes: string;
    aiTeacher: string;
  };
}) {
  const statItems = [
    { icon: BookOpenText, value: "2,000+", label: stats.lessons },
    { icon: Layers, value: "A1–C2", label: stats.curriculum },
    { icon: Library, value: "50,000+", label: stats.vocabulary },
    { icon: ListChecks, value: null, label: stats.quizzes },
    { icon: Bot, value: null, label: stats.aiTeacher },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[92vh] flex-col overflow-hidden bg-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 55% 45% at 50% 28%, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 55% 45% at 50% 28%, black 35%, transparent 75%)",
        }}
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <HeroSceneLoader sectionRef={sectionRef} />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-1 flex-col justify-center px-4 pt-28 pb-8 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-caption font-medium text-white/75 shadow-xs backdrop-blur-sm">
            {eyebrow}
          </span>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="mt-7 text-balance text-display text-white">{title}</h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-body-lg text-white/65">
            {subtitle}
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              className="border border-primary-300/40 bg-primary/80 text-primary-foreground shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
              render={
                <Link href="/auth/sign-up">
                  {ctaPrimary}
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              className="border-white/20 bg-white/10 text-white shadow-md backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/20"
              render={<Link href="/lessons/grammar">{ctaSecondary}</Link>}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-5 sm:gap-x-4">
            {statItems.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5">
                <stat.icon className="size-4.5 text-white/60" />
                {stat.value ? (
                  <p className="text-h4 tabular-nums text-white">{stat.value}</p>
                ) : (
                  <p className="text-body-sm font-semibold text-white">{stat.label}</p>
                )}
                {stat.value && <p className="text-caption text-white/60">{stat.label}</p>}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="relative flex flex-col items-center gap-2 pb-8 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000 motion-safe:[animation-delay:900ms] motion-safe:fill-mode-both">
        <span className="text-caption text-white/60">{scrollHint}</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="size-1.5 rounded-full bg-white/60 motion-safe:animate-bounce" />
        </span>
      </div>
    </section>
  );
}
