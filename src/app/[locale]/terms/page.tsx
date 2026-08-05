import { FileText } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { ComingSoon } from "../_components/coming-soon";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ComingSoon
      icon={FileText}
      eyebrow="Demnächst"
      title="AGB"
      description="Diese Seite wird gerade vorbereitet und ist bald verfügbar."
      backLabel="Zurück"
    />
  );
}
