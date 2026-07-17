import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "fa", "tr", "ru", "uk", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const rtlLocales: readonly Locale[] = ["fa", "ar"];

export function isRtlLocale(locale: string): boolean {
  return (rtlLocales as readonly string[]).includes(locale);
}

export const localeLabels: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fa: "فارسی",
  tr: "Türkçe",
  ru: "Русский",
  uk: "Українська",
  ar: "العربية",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
