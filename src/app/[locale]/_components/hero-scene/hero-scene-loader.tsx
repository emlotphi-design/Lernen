"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type RefObject } from "react";

const HeroScene = dynamic(() => import("./hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div aria-hidden className="absolute inset-0 bg-black" />,
});

export function HeroSceneLoader({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  // Starts true so the scene renders immediately on first paint (the common case: Hero is at the
  // top of the page) — the observer only ever has to correct this if the page loads scrolled past
  // the Hero (e.g. a deep-link anchor).
  const [active, setActive] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Physics + WebGL rendering for ~2,000 word bodies has no reason to run once the Hero has
    // scrolled off-screen — without this, it keeps stepping and rendering every frame forever,
    // which is heavy enough to stall the main thread and make wheel/trackpad scrolling feel like
    // it's dropping input. The rootMargin keeps it warm slightly before the section is actually
    // visible so there's no pop when scrolling back up.
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "35% 0px 35% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef]);

  return <HeroScene active={active} />;
}
