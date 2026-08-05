import { Mail } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "../_components/coming-soon";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ComingSoon
      icon={Mail}
      eyebrow="Demnächst"
      title="Kontakt"
      description="Diese Seite wird gerade vorbereitet und ist bald verfügbar."
      backLabel="Zurück"
    />
  );
}
