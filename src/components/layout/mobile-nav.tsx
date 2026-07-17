"use client";

import { useState } from "react";
import {
  Menu,
  Home,
  Map,
  BookOpenText,
  Layers,
  Library,
  MessageCircle,
  BookOpen,
  Headphones,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";

export type NavLinkKey =
  | "home"
  | "roadmap"
  | "grammar"
  | "vocabulary"
  | "dictionary"
  | "conversations"
  | "reading"
  | "listening"
  | "aiTutor";

export type NavLink = { href: string; label: string; key: NavLinkKey };

const navIcons: Record<NavLinkKey, LucideIcon> = {
  home: Home,
  roadmap: Map,
  grammar: BookOpenText,
  vocabulary: Layers,
  dictionary: Library,
  conversations: MessageCircle,
  reading: BookOpen,
  listening: Headphones,
  aiTutor: Bot,
};

export function MobileNav({
  links,
  menuLabel,
  signInLabel,
  signUpLabel,
}: {
  links: NavLink[];
  menuLabel: string;
  signInLabel: string;
  signUpLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label={menuLabel} className="xl:hidden">
            <Menu className="size-5" />
          </Button>
        }
      />
      <SheetContent
        side="bottom"
        className="max-h-[85vh] rounded-t-3xl border-t-0 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl sm:mx-auto sm:max-w-md"
      >
        <div className="mx-auto mt-1 h-1.5 w-10 shrink-0 rounded-full bg-muted" aria-hidden />
        <SheetHeader className="pb-1 text-start">
          <SheetTitle>{menuLabel}</SheetTitle>
        </SheetHeader>
        <nav className="grid grid-cols-2 gap-2 overflow-y-auto px-4 pb-2">
          {links.map((link) => {
            const Icon = navIcons[link.key];
            return (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex flex-col items-start gap-2.5 rounded-xl border border-border/60 p-3.5 text-body-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-accent hover:text-accent-foreground"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="size-4" />
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2.5 border-t border-border/60 px-4 pt-4">
          <Button
            variant="outline"
            className="flex-1"
            nativeButton={false}
            render={<Link href="/auth/sign-in" onClick={() => setOpen(false)}>{signInLabel}</Link>}
          />
          <Button
            className="flex-1"
            nativeButton={false}
            render={<Link href="/auth/sign-up" onClick={() => setOpen(false)}>{signUpLabel}</Link>}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
