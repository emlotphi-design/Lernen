import { getTranslations, setRequestLocale } from "next-intl/server";
import { LogIn } from "lucide-react";
import { ComingSoon } from "../../_components/coming-soon";

export default async function SignInPage({
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
      icon={LogIn}
      eyebrow={tCommon("comingSoon")}
      title={t("signInTitle")}
      description={tCommon("tagline")}
      backLabel={tCommon("back")}
    />
  );
}
