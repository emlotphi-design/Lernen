"use client";

import { useCallback, useEffect, useState } from "react";

function readStorage(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(key: string, value: string[]) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable (private browsing, quota) — state still works in-memory for this session.
  }
}

/** Most-recently-used list of word ids, capped at `max`, persisted to localStorage. */
export function useRecentSearches(storageKey: string, max = 8) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(readStorage(storageKey));
  }, [storageKey]);

  const addRecent = useCallback(
    (id: string) => {
      setIds((prev) => {
        const next = [id, ...prev.filter((existing) => existing !== id)].slice(0, max);
        writeStorage(storageKey, next);
        return next;
      });
    },
    [storageKey, max],
  );

  const clearRecent = useCallback(() => {
    setIds([]);
    writeStorage(storageKey, []);
  }, [storageKey]);

  return { ids, addRecent, clearRecent };
}

/** An unordered set of word ids (e.g. favorites, study-later) with toggle semantics, persisted to localStorage. */
export function useToggleWordSet(storageKey: string) {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(readStorage(storageKey));
  }, [storageKey]);

  const toggle = useCallback(
    (id: string) => {
      let didAdd = false;
      setIds((prev) => {
        const exists = prev.includes(id);
        didAdd = !exists;
        const next = exists ? prev.filter((existing) => existing !== id) : [...prev, id];
        writeStorage(storageKey, next);
        return next;
      });
      return didAdd;
    },
    [storageKey],
  );

  return { ids, toggle };
}
