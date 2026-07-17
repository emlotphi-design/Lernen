import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { routing, isRtlLocale } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });
  return {
    title: { default: t("appName"), template: `%s · ${t("appName")}` },
    description: t("tagline"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={isRtlLocale(locale) ? "rtl" : "ltr"}
      className={fontVariables}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <MotionProvider>
              <TooltipProvider delay={150}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <Toaster />
              </TooltipProvider>
            </MotionProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
