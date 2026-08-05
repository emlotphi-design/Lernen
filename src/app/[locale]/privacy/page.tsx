import { ShieldCheck } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "../_components/coming-soon";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ComingSoon
      icon={ShieldCheck}
      eyebrow="Demnächst"
      title="Datenschutz"
      description="Diese Seite wird gerade vorbereitet und ist bald verfügbar."
      backLabel="Zurück"
    />
  );
}
