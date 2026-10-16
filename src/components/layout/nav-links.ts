import {
  Home,
  Map,
  LayoutDashboard,
  BookOpenText,
  Layers,
  Library,
  BookOpen,
  Headphones,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

// German UI, fixed — see the German-UI-vs-explanation-language split in project memory. Single
// source of truth shared by the desktop nav (NavBar + LibraryDropdown) and the mobile sheet
// (MobileNav), so both stay in sync automatically.
export type StaticNavItem = { href: string; label: string; icon: LucideIcon };

/** Shared styling for every desktop top-level nav item (plain links, the Bibliothek trigger, the
 *  Lehrer link) so hover, open and keyboard-focus states stay identical across all of them.
 *  Combine it with a template string, not cn(): plain tailwind-merge doesn't know the custom
 *  `text-body-sm` size and drops it as a conflicting text *color* next to `text-muted-foreground`. */
export const NAV_ITEM_CLASS =
  "whitespace-nowrap rounded-lg px-2.5 py-1.5 text-body-sm font-medium text-muted-foreground outline-none transition-colors duration-200 hover:bg-foreground/[0.07] hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring/70 data-[popup-open]:bg-foreground/[0.07] data-[popup-open]:text-foreground";

export const STATIC_NAV_LINKS: StaticNavItem[] = [
  { href: "/", label: "Start", icon: Home },
  // The learning path lives on the grammar overview (categories + unlock progression); the
  // homepage is a single screen now, so the old /#roadmap anchor no longer exists.
  { href: "/lessons/grammar", label: "Lernpfad", icon: Map },
];

export const DASHBOARD_LINK: StaticNavItem = { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard };

export const LIBRARY_LINKS: StaticNavItem[] = [
  { href: "/lessons/grammar", label: "Grammatik", icon: BookOpenText },
  { href: "/vocabulary", label: "Wortschatz", icon: Layers },
  { href: "/dictionary", label: "Wörterbuch", icon: Library },
  { href: "/lessons/reading", label: "Lesen", icon: BookOpen },
  { href: "/lessons/listening", label: "Hören", icon: Headphones },
  { href: "/lessons/speaking", label: "Gespräche", icon: MessageCircle },
];
