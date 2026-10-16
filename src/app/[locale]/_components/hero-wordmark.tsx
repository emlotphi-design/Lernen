"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import { useReducedMotion } from "framer-motion";
import { WORDMARK_FONT_URL } from "./hero-wordmark-font";

const HeroWordmarkScene = dynamic(() => import("./hero-wordmark-scene").then((m) => m.HeroWordmarkScene), {
  ssr: false,
});

/** If WebGL or the font never comes up, show the plain text rather than an empty center. */
const FALLBACK_AFTER_MS = 2500;

/** The "Lern mal!" wordmark: 3D lettering that continuously morphs through a family of styles,
 *  rendered in its own small canvas (see hero-wordmark-scene.tsx), separate from the vocabulary
 *  scene behind it — which it never touches. The real <h1> carries the
 *  text for screen readers and search (visually hidden); the visual box is aria-hidden and has a
 *  fixed aspect ratio, so the canvas loading in never shifts the layout. */
export function HeroWordmark({ text }: { text: string }) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  // Start fetching the outline data right away, in parallel with the lazily-loaded 3D chunk.
  preload(WORDMARK_FONT_URL, { as: "fetch", crossOrigin: "anonymous" });

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(box);
    const onVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (ready) return;
    const id = setTimeout(() => setShowFallback(true), FALLBACK_AFTER_MS);
    return () => clearTimeout(id);
  }, [ready]);

  return (
    <>
      <h1 className="sr-only">{text}</h1>
      <div
        ref={boxRef}
        aria-hidden
        className="relative mx-auto"
        style={{ width: "min(40vw, 31rem)", aspectRatio: "4.6 / 1" }}
      >
        <span className={`absolute inset-0 block transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
          <HeroWordmarkScene text={text} animate={inView && pageVisible && !reducedMotion} onReady={onReady} />
        </span>

        {showFallback && !ready && (
          <span className="absolute inset-0 flex items-center justify-center text-[clamp(2.5rem,4.6vw,4.5rem)] font-extrabold italic tracking-[-0.03em] text-[#ffb13a]">
            {text}
          </span>
        )}
      </div>
    </>
  );
}
