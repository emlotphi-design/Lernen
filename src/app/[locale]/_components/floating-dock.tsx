"use client";

import { ArrowUp, Bot, BookOpenText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const dockIconClass =
  "rounded-full border-border/50 bg-card/70 shadow-md backdrop-blur-xl hover:bg-card/90";

export function FloatingDock({
  aiLabel,
  continueLabel,
  backToTopLabel,
}: {
  aiLabel: string;
  continueLabel: string;
  backToTopLabel: string;
}) {
  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end gap-3">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              aria-label={backToTopLabel}
              className={dockIconClass}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="size-4" />
            </Button>
          }
        />
        <TooltipContent side="inline-start">{backToTopLabel}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <Link
              href="/lessons/grammar"
              aria-label={continueLabel}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }), dockIconClass)}
            >
              <BookOpenText className="size-4" />
            </Link>
          }
        />
        <TooltipContent side="inline-start">{continueLabel}</TooltipContent>
      </Tooltip>

      <Button
        size="lg"
        aria-label={aiLabel}
        className="rounded-full border border-primary/30 bg-primary/90 shadow-lg backdrop-blur-xl hover:bg-primary"
      >
        <Bot className="size-4.5" />
        <span className="hidden sm:inline">{aiLabel}</span>
      </Button>
    </div>
  );
}
