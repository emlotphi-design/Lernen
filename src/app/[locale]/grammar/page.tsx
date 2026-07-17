import { getTranslations, setRequestLocale } from "next-intl/server";
import { BookOpenText } from "lucide-react";
import { ComingSoon } from "../_components/coming-soon";

export default async function GrammarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("grammar");
  const tCommon = await getTranslations("common");

  return (
    <ComingSoon
      icon={BookOpenText}
      eyebrow={tCommon("comingSoon")}
      title={t("title")}
      description={t("subtitle")}
      backLabel={tCommon("back")}
    />
  );
}
