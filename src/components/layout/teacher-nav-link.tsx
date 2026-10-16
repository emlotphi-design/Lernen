"use client";

import { Bot } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useExplanationUiLabels } from "@/components/providers/explanation-language-provider";
import { NAV_ITEM_CLASS } from "./nav-links";

// The one deliberately reactive nav item — its label follows the learner's explanation
// language (a teacher addressing them in their own language), unlike every other nav item,
// which stays fixed German. See project memory for why.

export function TeacherNavLink() {
  const labels = useExplanationUiLabels();

  return (
    <Link href="/#lehrer" className={NAV_ITEM_CLASS}>
      {labels.teacherLabel}
    </Link>
  );
}

/** Mobile-sheet tile variant, visually matching NavTile in mobile-nav.tsx. */
export function TeacherNavTile({ onClick }: { onClick: () => void }) {
  const labels = useExplanationUiLabels();

  return (
    <Link
      href="/#lehrer"
      onClick={onClick}
      className="flex flex-col items-start gap-2.5 rounded-xl border border-border/60 p-3.5 text-body-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-accent hover:text-accent-foreground"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <Bot className="size-4" />
      </span>
      {labels.teacherLabel}
    </Link>
  );
}
