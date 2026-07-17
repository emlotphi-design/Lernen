import { getTranslations } from "next-intl/server";
import { GraduationCap } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { locales, localeLabels } from "@/i18n/routing";
import { cefrLevels } from "@/components/ui/level-badge";

export async function Footer() {
  const tCommon = await getTranslations("common");
  const tHome = await getTranslations("home");
  const tNav = await getTranslations("nav");
  const year = new Date().getFullYear();

  const productLinks = [
    { href: "/grammar", label: tNav("grammar") },
    { href: "/dictionary", label: tNav("dictionary") },
    { href: "/vocabulary", label: tNav("vocabulary") },
  ];

  const companyLinks = [
    { href: "#", label: tHome("footerAbout") },
    { href: "#", label: tHome("footerContact") },
    { href: "#", label: tHome("footerPrivacy") },
    { href: "#", label: tHome("footerTerms") },
  ];

  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm space-y-3">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-4" />
              </span>
              {tCommon("appName")}
            </Link>
            <p className="text-body-sm text-muted-foreground">{tCommon("tagline")}</p>
          </div>

          <div>
            <p className="text-label uppercase tracking-wide text-muted-foreground">
              {tHome("footerProductTitle")}
            </p>
            <ul className="mt-3 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label uppercase tracking-wide text-muted-foreground">
              {tHome("footerLevelsTitle")}
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {cefrLevels.map((level) => (
                <li key={level}>
                  <Link
                    href="/grammar"
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {level}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label uppercase tracking-wide text-muted-foreground">
              {tHome("footerCompanyTitle")}
            </p>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-muted-foreground">
            © {year} {tCommon("appName")}. {tHome("footerRights")}
          </p>
          <p className="text-caption text-muted-foreground">
            {locales.map((code) => localeLabels[code]).join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
