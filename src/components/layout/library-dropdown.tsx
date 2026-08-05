"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "@/i18n/navigation";
import { LIBRARY_LINKS } from "./nav-links";

export function LibraryDropdown() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Bibliothek
            <ChevronDown className="size-3.5" />
          </button>
        }
      />
      <DropdownMenuContent align="start" className="min-w-44">
        {/* A rendered <Link> as the item's `render` target never navigates here — the menu's
         *  own close-on-select unmounts it before the browser can follow the href (see project
         *  memory). onClick + imperative router.push sidesteps that entirely, matching the
         *  pattern the language selector already uses successfully. */}
        {LIBRARY_LINKS.map((item) => (
          <DropdownMenuItem key={item.label} onClick={() => router.push(item.href)}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
