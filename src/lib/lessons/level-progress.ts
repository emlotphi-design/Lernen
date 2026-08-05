"use client";

import { useCallback, useEffect, useState } from "react";
import type { LessonStatus } from "./types";

const STORAGE_KEY = "lessons-completed";

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(value: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage unavailable (private browsing, quota) — state still works in-memory for this session.
  }
}

/** Real, persisted lesson completion — same localStorage try/catch pattern as
 *  `use-favorite-categories.ts`/`quiz-history.ts`. This is what "mark complete" actually writes
 *  to now (previously pure local component state that reset on every page load), and what the
 *  level-unlock gate below reads. */
export function useLessonCompletion() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(readStorage());
  }, []);

  const isCompleted = useCallback((key: string) => completed.includes(key), [completed]);

  const setCompletion = useCallback((key: string, value: boolean) => {
    setCompleted((prev) => {
      const next = value ? (prev.includes(key) ? prev : [...prev, key]) : prev.filter((k) => k !== key);
      writeStorage(next);
      return next;
    });
  }, []);

  return { completedKeys: completed, isCompleted, setCompletion };
}

/** `requiredKeys` are the content-bearing lesson keys at the previous CEFR level (computed
 *  server-side, see `getRequiredKeysByLevel` in index.ts) — empty when this is the first level
 *  with any real content, or when the previous level has none yet. Progression can never be
 *  blocked on lessons that don't exist. */
export function isGateSatisfied(requiredKeys: string[], completedKeys: string[]): boolean {
  return requiredKeys.every((k) => completedKeys.includes(k));
}

/** Combines a lesson's static status (content-availability, decided at author time — still
 *  "locked" for the 41 not-yet-written topics outside A1) with the dynamic level-progression
 *  gate (decided per-learner, at runtime, from real completion) into the one effective
 *  locked/unlocked value used consistently everywhere a lesson is rendered as clickable or not. */
export function isEffectivelyLocked(
  staticStatus: LessonStatus,
  requiredKeys: string[],
  completedKeys: string[],
): boolean {
  if (staticStatus === "locked") return true;
  return !isGateSatisfied(requiredKeys, completedKeys);
}
