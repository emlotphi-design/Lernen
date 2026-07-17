"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Tracks 0→1 scroll progress through `sectionRef` via GSAP ScrollTrigger, exposed as a plain
 *  mutable ref rather than React state — consumers read `.current` inside `useFrame` so scroll
 *  never triggers a React re-render. */
export function useScrollProgress(sectionRef: RefObject<HTMLElement | null>): RefObject<number> {
  const progressRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, [sectionRef]);

  return progressRef;
}
