"use client";

import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EXPLANATION_LANGUAGES } from "@/lib/explanation-language";
import { useExplanationLanguage } from "@/components/providers/explanation-language-provider";

// This selector is new UI built under the standing "interface is always German" rule, so its
// copy is hardcoded German rather than routed through next-intl's (interface-language-driven)
// messages — see the project_german_only_ui memory note for why.
const LABEL = "Sprache";

// The ONE language control in the app. Its dropdown makes both language systems visible at
// once: the (fixed, non-interactive) UI language, and the actual, selectable Explanation
// Language list — see project memory for why these are two separate systems.
export function ExplanationLanguageSelector() {
  const { code, setLanguage } = useExplanationLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={LABEL}
            className="rounded-full border border-transparent bg-transparent backdrop-blur-none transition-colors hover:border-border/60 hover:bg-muted/50 hover:backdrop-blur-sm"
          >
            <Globe className="size-4" />
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="min-w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
            Deutsche Oberfläche
          </DropdownMenuLabel>
          <div className="px-2 py-1 text-body-sm text-muted-foreground">Immer Deutsch</div>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
            Erklärungssprache
          </DropdownMenuLabel>
          {EXPLANATION_LANGUAGES.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => setLanguage(language.code)}
              data-active={language.code === code}
              className="flex items-center justify-between gap-2 data-[active=true]:font-medium data-[active=true]:text-primary"
              dir={language.rtl ? "rtl" : "ltr"}
            >
              <span>{language.nativeName}</span>
              {language.code === code && <Check className="size-3.5 shrink-0" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
