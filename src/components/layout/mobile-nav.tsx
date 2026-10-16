"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { STATIC_NAV_LINKS, DASHBOARD_LINK, LIBRARY_LINKS, type StaticNavItem } from "@/components/layout/nav-links";

function NavTile({ item, onClick }: { item: StaticNavItem; onClick: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="flex flex-col items-start gap-2.5 rounded-xl border border-border/60 p-3.5 text-body-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-accent hover:text-accent-foreground"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <Icon className="size-4" />
      </span>
      {item.label}
    </Link>
  );
}

export function MobileNav({
  menuLabel,
  signInLabel,
  signUpLabel,
}: {
  menuLabel: string;
  signInLabel: string;
  signUpLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
        <nav className="overflow-y-auto px-4 pb-2">
          <div className="grid grid-cols-2 gap-2">
            {STATIC_NAV_LINKS.map((item) => (
              <NavTile key={item.href + item.label} item={item} onClick={close} />
            ))}
            <NavTile item={DASHBOARD_LINK} onClick={close} />
          </div>

          <p className="mt-5 mb-2 text-caption font-medium tracking-wide text-muted-foreground uppercase">
            Bibliothek
          </p>
          <div className="grid grid-cols-2 gap-2">
            {LIBRARY_LINKS.map((item) => (
              <NavTile key={item.href + item.label} item={item} onClick={close} />
            ))}
          </div>
        </nav>
        <div className="flex items-center gap-2.5 border-t border-border/60 px-4 pt-4">
          <Button
            variant="outline"
            className="flex-1"
            nativeButton={false}
            render={<Link href="/auth/sign-in" onClick={close}>{signInLabel}</Link>}
          />
          <Button
            className="flex-1"
            nativeButton={false}
            render={<Link href="/auth/sign-up" onClick={close}>{signUpLabel}</Link>}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
