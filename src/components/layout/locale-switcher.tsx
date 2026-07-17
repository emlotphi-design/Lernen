"use client";

import { useLocale } from "next-intl";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { locales, localeLabels } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelect(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={localeLabels[locale as keyof typeof localeLabels]}
            className="rounded-full border border-transparent bg-transparent backdrop-blur-none transition-colors hover:border-border/60 hover:bg-muted/50 hover:backdrop-blur-sm"
          >
            <Languages className="size-4" />
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="min-w-40">
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => onSelect(code)}
            data-active={code === locale}
            className="data-[active=true]:font-medium data-[active=true]:text-primary"
          >
            {localeLabels[code]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
