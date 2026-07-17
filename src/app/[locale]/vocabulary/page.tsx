import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/motion/fade-in";
import { VocabularyLibrary } from "./_components/vocabulary-library";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "vocabulary" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function VocabularyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("vocabulary");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-h1">{t("title")}</h1>
          <p className="mt-3 text-body text-muted-foreground">{t("subtitle")}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mt-10">
          <VocabularyLibrary />
        </div>
      </FadeIn>
    </section>
  );
}
