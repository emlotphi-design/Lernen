"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { CHARCOAL_GLASS } from "@/components/layout/charcoal-glass";
import { HeroSceneLoader } from "./hero-scene/hero-scene-loader";
import { HeroWordmark } from "./hero-wordmark";

/** Height of the sticky header (pt-3 + h-14) — the hero pulls up underneath it by exactly this
 *  much so the glass nav floats over the vocabulary scene instead of sitting on a separate strip. */
const HEADER_OFFSET = "4.25rem";

/** Start button — neutral liquid glass. Static layers live here (inline styles); elevation shadows
 *  and the hover / press states are classes on the button. Read bottom-up like the object itself: */
const LIQUID_GLASS: React.CSSProperties = {
  // A clear pane a few steps lighter than the charcoal card it sits on, so it reads as a separate,
  // raised piece of glass; the blur bends what's behind it like thick glass would.
  background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.07) 100%)",
  border: "1px solid rgba(255,255,255,0.24)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
};
/** Light refracted through the lower body, gathering faintly along the bottom edge. */
const LIQUID_GLASS_REFRACTION: React.CSSProperties = {
  background: "radial-gradient(75% 90% at 50% 118%, rgba(255,255,255,0.16), rgba(255,255,255,0) 70%)",
};
/** Static specular: a soft curved cap along the upper edge, with a faint brighter spot upper-left. */
const LIQUID_GLASS_GLOSS: React.CSSProperties = {
  background: [
    "radial-gradient(16% 70% at 20% 30%, rgba(255,255,255,0.28), rgba(255,255,255,0) 100%)",
    "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0) 100%)",
  ].join(", "),
};
/** Pressed: shading floods in from the top edge as the surface is pushed in (shown while active). */
const LIQUID_GLASS_PRESSED: React.CSSProperties = {
  boxShadow: "inset 0 2px 6px rgba(0,0,0,0.35)",
};

export function Hero({
  title,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);

  // The homepage is exactly one screen. Its height is fixed to the small viewport (100svh), but the
  // page shell around it uses min-height: 100vh — which on mobile is taller than the visible area
  // (the large viewport, browser bars hidden) — so the document itself is locked while the hero is
  // mounted, and restored on navigation away.
  useEffect(() => {
    const html = document.documentElement;
    const previous = { overflow: html.style.overflow, overscroll: html.style.overscrollBehavior };
    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    return () => {
      html.style.overflow = previous.overflow;
      html.style.overscrollBehavior = previous.overscroll;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-svh flex-col overflow-hidden bg-black"
      style={{ marginTop: `-${HEADER_OFFSET}` }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <HeroSceneLoader sectionRef={sectionRef} />
      </div>

      {/* A light, soft darkening toward the center — the glass panel carries the title's contrast
          now, so this only calms the pile around it rather than blacking out the middle. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 38% 34% at 50% 50%, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div
        className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-16 text-center"
        style={{ paddingTop: HEADER_OFFSET }}
      >
        <FadeIn>
          {/* Compact smoky charcoal glass panel — the exact same material as the top navigation bar
              (CHARCOAL_GLASS), with the vocabulary pile showing through it as calm color. */}
          <div className="relative rounded-[1.75rem] px-8 pb-8 pt-5 sm:px-12" style={CHARCOAL_GLASS}>
            <HeroWordmark text={title} />
            {/* Primary CTA — a raised capsule of neutral liquid glass (see LIQUID_GLASS): a clear pane a few
                steps lighter than the card, a fine bright rim, a soft curved gloss cap, faint refracted
                light along the bottom edge and layered elevation shadows — static reflections only.
                Hover lifts it (deeper shadow, brighter gloss); press settles it in. It's a link (it
                navigates), so Enter activates it natively; Space is handled too because it looks and
                behaves like a button. draggable={false} stops the browser's link-drag ghost. */}
            <Link
              href={ctaHref}
              draggable={false}
              onKeyDown={(event) => {
                if (event.key === " ") {
                  event.preventDefault();
                  event.currentTarget.click();
                }
              }}
              style={LIQUID_GLASS}
              className="group relative mt-4 inline-flex h-11 select-none items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-base font-semibold tracking-[-0.01em] text-white outline-none shadow-[inset_0_1px_0_0_rgb(255_255_255/0.45),inset_0_-1px_0_0_rgb(0_0_0/0.25),0_1px_1px_0_rgb(0_0_0/0.3),0_6px_14px_-6px_rgb(0_0_0/0.55),0_14px_28px_-14px_rgb(0_0_0/0.5)] transition-[translate,box-shadow,filter] duration-200 ease-premium hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.55),inset_0_-1px_0_0_rgb(0_0_0/0.25),0_2px_2px_0_rgb(0_0_0/0.28),0_10px_20px_-8px_rgb(0_0_0/0.6),0_20px_36px_-16px_rgb(0_0_0/0.5)] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 active:translate-y-px active:brightness-95 active:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.3),0_1px_1px_0_rgb(0_0_0/0.3),0_3px_8px_-6px_rgb(0_0_0/0.5)]"
            >
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit]" style={LIQUID_GLASS_REFRACTION} />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-[6%] top-[2px] h-[46%] rounded-full opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                style={LIQUID_GLASS_GLOSS}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-100 group-active:opacity-100"
                style={LIQUID_GLASS_PRESSED}
              />
              <span className="relative [text-shadow:0_1px_1px_rgb(0_0_0/0.35)]">{ctaLabel}</span>
              <ArrowRight
                aria-hidden
                strokeWidth={2.4}
                className="relative size-4 drop-shadow-[0_1px_1px_rgb(0_0_0/0.35)] transition-transform duration-200 ease-premium group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
