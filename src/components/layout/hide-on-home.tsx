"use client";

import type { ReactNode } from "react";
import { usePathname } from "@/i18n/navigation";

/** Renders its children everywhere except the homepage, which is a single non-scrolling screen
 *  (used for the site footer). */
export function HideOnHome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return pathname === "/" ? null : children;
}
