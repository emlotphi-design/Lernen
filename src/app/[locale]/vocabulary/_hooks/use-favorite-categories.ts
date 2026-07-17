"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "vocabulary-favorite-categories";

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

export function useFavoriteCategories() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(readStorage());
  }, []);

  // Does not return whether the id was added or removed — a value mutated inside a setState
  // updater isn't guaranteed to be visible synchronously after the call. Callers that need to
  // know the direction should check `ids.includes(id)` themselves before calling toggle.
  const toggle = useCallback((id: string) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id];
      writeStorage(next);
      return next;
    });
  }, []);

  return { ids, toggle };
}
