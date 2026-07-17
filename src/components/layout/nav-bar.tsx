"use client";

import { useEffect, useState } from "react";
import { Bell, GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav, type NavLink } from "@/components/layout/mobile-nav";

export function NavBar({
  appName,
  links,
  searchLabel,
  notificationsLabel,
  signInLabel,
  signUpLabel,
  menuLabel,
}: {
  appName: string;
  links: NavLink[];
  searchLabel: string;
  notificationsLabel: string;
  signInLabel: string;
  signUpLabel: string;
  menuLabel: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-border/50 bg-background/70 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-transparent shadow-none backdrop-blur-none"
        }`}
      >
        <div className="flex min-w-0 items-center gap-4 2xl:gap-6">
          <MobileNav links={links} menuLabel={menuLabel} signInLabel={signInLabel} signUpLabel={signUpLabel} />
          <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="size-4" />
            </span>
            <span className="hidden sm:inline">{appName}</span>
          </Link>
          <nav className="hidden items-center xl:flex">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="whitespace-nowrap rounded-lg px-2 py-2 text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label={searchLabel}
            className="me-1 hidden items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1.5 text-body-sm text-muted-foreground shadow-xs backdrop-blur-sm transition-colors hover:bg-muted/80 2xl:flex"
          >
            <Search className="size-3.5" />
            {searchLabel}
            <Kbd className="bg-background/70">⌘K</Kbd>
          </button>
          <Button variant="ghost" size="icon" aria-label={searchLabel} className="2xl:hidden">
            <Search className="size-4" />
          </Button>

          <Button variant="ghost" size="icon" aria-label={notificationsLabel} className="relative hidden sm:inline-flex">
            <Bell className="size-4" />
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" />
          </Button>

          <LocaleSwitcher />
          <ThemeToggle />

          <Link
            href="/auth/sign-in"
            className="ms-2 hidden text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            {signInLabel}
          </Link>
          <Button
            size="sm"
            className="ms-2 transition-transform duration-200 hover:scale-[1.03]"
            nativeButton={false}
            render={<Link href="/auth/sign-up">{signUpLabel}</Link>}
          />
        </div>
      </div>
    </header>
  );
}
