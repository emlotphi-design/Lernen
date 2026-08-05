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

export const STATIC_NAV_LINKS: StaticNavItem[] = [
  { href: "/", label: "Start", icon: Home },
  { href: "/#roadmap", label: "Lernpfad", icon: Map },
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
