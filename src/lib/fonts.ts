import { Geist, Geist_Mono, Noto_Sans_Arabic, Vazirmatn } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-latin",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

export const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const vazirmatn = Vazirmatn({
  variable: "--font-fa",
  subsets: ["arabic"],
});

export const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-ar",
  subsets: ["arabic"],
});

export const fontVariables = [
  geistSans.variable,
  geistMono.variable,
  vazirmatn.variable,
  notoSansArabic.variable,
].join(" ");
