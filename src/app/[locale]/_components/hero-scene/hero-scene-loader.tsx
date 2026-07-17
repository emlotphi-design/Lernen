"use client";

import dynamic from "next/dynamic";
import type { RefObject } from "react";

const HeroScene = dynamic(() => import("./hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div aria-hidden className="absolute inset-0 bg-black" />,
});

export function HeroSceneLoader({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  // Reserved for a later step (scroll-linked camera) — not used yet.
  void sectionRef;
  return <HeroScene />;
}
