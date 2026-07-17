import { getTranslations, setRequestLocale } from "next-intl/server";
import { UserPlus } from "lucide-react";
import { ComingSoon } from "../../_components/coming-soon";

export default async function SignUpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("auth");
  const tCommon = await getTranslations("common");

  return (
    <ComingSoon
      icon={UserPlus}
      eyebrow={tCommon("comingSoon")}
      title={t("signUpTitle")}
      description={tCommon("tagline")}
      backLabel={tCommon("back")}
    />
  );
}
