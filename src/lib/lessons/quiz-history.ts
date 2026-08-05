"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "lessons-quiz-history";

type History = Record<string, string[]>;

function readStorage(): History {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as History) : {};
  } catch {
    return {};
  }
}

function writeStorage(value: History) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage unavailable (private browsing, quota) — state still works in-memory for this session.
  }
}

/** Tracks recently-seen question ids (pool-based lessons) or content signatures like
 *  "akkusativ:hund:fill-blank" (generated lessons, whose per-instance ids are fresh random every
 *  run and can't be used for exclusion directly) per lesson, so a fresh quiz or retake can bias
 *  sampling away from what the learner just saw. `windowSize` bounds how many recent entries are
 *  kept — callers size it to their pool so small pools don't lock themselves out (see
 *  quiz-section.tsx). Same localStorage try/catch pattern as
 *  vocabulary/_hooks/use-favorite-categories.ts. */
export function useQuizHistory(lessonKey: string, windowSize: number) {
  const [history, setHistory] = useState<History>({});

  useEffect(() => {
    setHistory(readStorage());
  }, []);

  const recentIds = new Set(history[lessonKey] ?? []);

  const markSeen = useCallback(
    (ids: string[]) => {
      setHistory((prev) => {
        const existing = prev[lessonKey] ?? [];
        const next = [...existing, ...ids].slice(-windowSize);
        const updated = { ...prev, [lessonKey]: next };
        writeStorage(updated);
        return updated;
      });
    },
    [lessonKey, windowSize],
  );

  return { recentIds, markSeen };
}
