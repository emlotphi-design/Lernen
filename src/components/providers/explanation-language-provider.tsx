"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import {
  getExplanationLanguageDefinition,
  readExplanationLanguageCookie,
  writeExplanationLanguageCookie,
  resolveExplanationText,
  type ExplanationDictionary,
  type ExplanationLanguageCode,
  type ExplanationLanguageDefinition,
} from "@/lib/explanation-language";
import { EXPLANATION_UI_LABELS, type ExplanationUiLabels } from "@/lib/explanation-language/ui-labels";

type ExplanationLanguageContextValue = {
  code: ExplanationLanguageCode;
  language: ExplanationLanguageDefinition;
  setLanguage: (code: ExplanationLanguageCode) => void;
};

const ExplanationLanguageContext = createContext<ExplanationLanguageContextValue | null>(null);

/** Seeded with `initialLanguage` computed server-side (see @/lib/explanation-language/server's
 *  getExplanationLanguage, called once in the root layout) so first paint is already correct.
 *  If the incoming request had no cookie yet, that server-detected value is persisted here on
 *  mount so it's stable across reloads — this is the only place this preference is written. */
export function ExplanationLanguageProvider({
  initialLanguage,
  children,
}: {
  initialLanguage: ExplanationLanguageCode;
  children: ReactNode;
}) {
  const [code, setCode] = useState<ExplanationLanguageCode>(initialLanguage);
  const persistedInitial = useRef(false);

  useEffect(() => {
    if (persistedInitial.current) return;
    persistedInitial.current = true;
    if (readExplanationLanguageCookie() === null) {
      writeExplanationLanguageCookie(initialLanguage);
    }
  }, [initialLanguage]);

  const setLanguage = useCallback((next: ExplanationLanguageCode) => {
    setCode(next);
    writeExplanationLanguageCookie(next);
  }, []);

  return (
    <ExplanationLanguageContext.Provider
      value={{ code, language: getExplanationLanguageDefinition(code), setLanguage }}
    >
      {children}
    </ExplanationLanguageContext.Provider>
  );
}

export function useExplanationLanguage(): ExplanationLanguageContextValue {
  const ctx = useContext(ExplanationLanguageContext);
  if (!ctx) {
    throw new Error("useExplanationLanguage must be used within an ExplanationLanguageProvider");
  }
  return ctx;
}

/** Convenience hook over resolveExplanationText — resolves a dictionary entry for the current
 *  explanation language. There's no real translated content wired up to this yet (see the
 *  Explanation Language architecture plan); this is the consumption pattern future lesson/AI
 *  tutor/dictionary content will use once it exists. */
export function useExplanationText<T = string>(
  dictionary: ExplanationDictionary<T>,
  fallback?: T,
): T | undefined {
  const { code } = useExplanationLanguage();
  return resolveExplanationText(dictionary, code, fallback);
}

/** The fixed set of in-lesson section/quiz labels (see ui-labels.ts), fully authored for all 16
 *  languages, resolved for the current explanation language. */
export function useExplanationUiLabels(): ExplanationUiLabels {
  const { code } = useExplanationLanguage();
  return EXPLANATION_UI_LABELS[code];
}
