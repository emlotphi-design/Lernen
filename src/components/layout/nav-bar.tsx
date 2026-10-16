"use client";

import { useEffect, useState } from "react";
import { Bell, GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ExplanationLanguageSelector } from "@/components/language/explanation-language-selector";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LibraryDropdown } from "@/components/layout/library-dropdown";
import { STATIC_NAV_LINKS, DASHBOARD_LINK, NAV_ITEM_CLASS } from "@/components/layout/nav-links";
import { CHARCOAL_GLASS } from "@/components/layout/charcoal-glass";

export function NavBar({
  appName,
  searchLabel,
  notificationsLabel,
  signInLabel,
  signUpLabel,
  menuLabel,
}: {
  appName: string;
  searchLabel: string;
  notificationsLabel: string;
  signInLabel: string;
  signUpLabel: string;
  menuLabel: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  // While the bar floats over the landing hero (always black, in both themes) it switches to the
  // dark token set so the glass and text read correctly against it; past the hero it follows the
  // page theme again. Starts true on the home page so the first paint already matches.
  const [overHero, setOverHero] = useState(isHome);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setOverHero(isHome && y < window.innerHeight - 72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const glassVisible = scrolled || overHero;

  return (
    <header className={cn("sticky top-0 z-40 px-3 pt-3 sm:px-4", overHero && "dark")}>
      <div
        className={cn(
          "mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border px-4 text-foreground transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-premium sm:px-5",
          overHero
            ? // Homepage: the same smoky charcoal glass as the hero panel (CHARCOAL_GLASS, inline).
              ""
            : glassVisible
            ? // Frosted glass: translucent tint + blur/saturate of whatever is behind, a hairline
              // border, and a 1px inner top highlight for the "edge of glass" catch-light.
              "border-foreground/10 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_color-mix(in_oklch,var(--foreground)_9%,transparent),0_10px_30px_-18px_rgb(0_0_0/0.45)]"
            : "border-transparent bg-transparent shadow-none backdrop-blur-none",
          glassVisible && !overHero && "bg-background/70",
        )}
        style={overHero ? CHARCOAL_GLASS : undefined}
      >
        <div className="flex min-w-0 items-center gap-4 2xl:gap-6">
          <MobileNav menuLabel={menuLabel} signInLabel={signInLabel} signUpLabel={signUpLabel} />
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 rounded-lg font-semibold tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="size-4" />
            </span>
            <span className="hidden sm:inline">{appName}</span>
          </Link>
          <nav className="hidden items-center gap-0.5 xl:flex">
            {STATIC_NAV_LINKS.map((link) => (
              <Link key={link.href + link.label} href={link.href} className={NAV_ITEM_CLASS}>
                {link.label}
              </Link>
            ))}
            <LibraryDropdown />
            <Link href={DASHBOARD_LINK.href} className={NAV_ITEM_CLASS}>
              {DASHBOARD_LINK.label}
            </Link>
          </nav>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label={searchLabel}
            className="me-1 hidden items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1.5 text-body-sm text-muted-foreground outline-none transition-colors duration-200 hover:bg-foreground/[0.08] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/70 2xl:flex"
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

          <ExplanationLanguageSelector />
          <ThemeToggle />

          <Link
            href="/auth/sign-in"
            className={`ms-1 hidden sm:inline ${NAV_ITEM_CLASS}`}
          >
            {signInLabel}
          </Link>
          <Button
            size="sm"
            className="ms-2"
            nativeButton={false}
            render={<Link href="/auth/sign-up">{signUpLabel}</Link>}
          />
        </div>
      </div>
    </header>
  );
}
