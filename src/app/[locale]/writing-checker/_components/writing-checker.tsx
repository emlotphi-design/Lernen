"use client";

import { useRef, useState, type ComponentType } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { PenLine, Sparkles, Wand2, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { analyzeSentence, countWords, EXAMPLE_SENTENCES, type WritingAnalysis } from "../_lib/analyzer";
import { AnalysisResult } from "./analysis-result";

const MAX_CHARS = 300;

function PanelHeader({
  icon: Icon,
  children,
  id,
}: {
  icon: ComponentType<{ className?: string }>;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2 id={id} className="flex items-center gap-2.5 text-h4">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <Icon className="size-4" />
      </span>
      {children}
    </h2>
  );
}

export function WritingChecker() {
  const t = useTranslations("writingChecker");
  const [text, setText] = useState("");
  const [checkedText, setCheckedText] = useState("");
  const [phase, setPhase] = useState<"idle" | "checking" | "result">("idle");
  const [analysis, setAnalysis] = useState<WritingAnalysis | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = countWords(text);
  const canCheck = text.trim().length > 0 && text.length <= MAX_CHARS && phase !== "checking";

  function handleTextChange(value: string) {
    setText(value);
    // The sentence no longer matches what was analyzed — drop the stale result
    // rather than leaving feedback on screen for text that has since changed.
    if (phase === "result") {
      setPhase("idle");
      setAnalysis(null);
    }
  }

  function handleCheck() {
    if (!canCheck) return;
    setPhase("checking");
    window.setTimeout(() => {
      setAnalysis(analyzeSentence(text));
      setCheckedText(text.trim());
      setPhase("result");
    }, 700);
  }

  function handleClear() {
    setText("");
    setAnalysis(null);
    setPhase("idle");
    textareaRef.current?.focus();
  }

  function handleExample(example: string) {
    setText(example);
    setAnalysis(null);
    setPhase("idle");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-8">
      <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-7">
        <PanelHeader icon={PenLine} id="writing-checker-editor-label">
          {t("editorLabel")}
        </PanelHeader>

        <Textarea
          ref={textareaRef}
          value={text}
          onChange={(event) => handleTextChange(event.target.value)}
          placeholder={t("placeholder")}
          maxLength={MAX_CHARS}
          disabled={phase === "checking"}
          aria-labelledby="writing-checker-editor-label"
          className="mt-4 min-h-56 resize-none text-body-lg leading-relaxed"
        />

        <div className="mt-2 flex items-center justify-between text-caption text-muted-foreground">
          <span>{t("wordCountLabel", { count: wordCount })}</span>
          <span className="tabular-nums">{t("charCount", { count: text.length, max: MAX_CHARS })}</span>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
            {t("tryExamplesLabel")}
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_SENTENCES.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => handleExample(example)}
                className="rounded-full border border-border px-3 py-1.5 text-body-sm transition-colors outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2.5">
          <Button
            onClick={handleCheck}
            disabled={!canCheck}
            aria-busy={phase === "checking"}
            size="lg"
            className="flex-1 sm:flex-none"
          >
            {phase === "checking" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                {t("checkingLabel")}
              </>
            ) : (
              <>
                <Sparkles className="size-4" />
                {t("checkButton")}
              </>
            )}
          </Button>
          <Button variant="outline" size="lg" onClick={handleClear} disabled={text.length === 0 && phase === "idle"}>
            <Trash2 className="size-4" />
            {t("clearButton")}
          </Button>
        </div>
      </div>

      <div className="min-h-80 rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-7 lg:min-h-[26rem]">
        <PanelHeader icon={Wand2}>{t("analysisTitle")}</PanelHeader>

        <div className="mt-5" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            {phase === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center gap-3 py-16 text-center"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Sparkles className="size-5" />
                </span>
                <p className="font-medium">{t("emptyStateTitle")}</p>
                <p className="max-w-xs text-body-sm text-muted-foreground">{t("emptyStateDesc")}</p>
              </motion.div>
            )}

            {phase === "checking" && (
              <motion.div
                key="checking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <span className="sr-only">{t("checkingLabel")}</span>
                <div className="space-y-4" aria-hidden="true">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-7 w-24 rounded-full" />
                    <Skeleton className="h-7 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-14 w-full rounded-lg" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-10 w-2/3 rounded-lg" />
                </div>
              </motion.div>
            )}

            {phase === "result" && analysis && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <AnalysisResult analysis={analysis} original={checkedText} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
