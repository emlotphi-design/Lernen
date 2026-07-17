"use client";

import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AudioButton({
  text,
  label,
  className,
}: {
  text: string;
  label: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  // Feature-detected after mount only, so the server-rendered and first client
  // render stay identical (avoids a hydration mismatch from `typeof window`).
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
  }, []);

  function handlePlay() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.9;
    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <button
      type="button"
      onClick={handlePlay}
      disabled={!supported}
      aria-label={label}
      title={label}
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground outline-none transition-colors hover:bg-accent/70 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    >
      <Volume2 className={cn("size-4", playing && "animate-pulse")} />
    </button>
  );
}
