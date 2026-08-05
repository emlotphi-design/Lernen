import { getTranslations } from "next-intl/server";
import { NavBar } from "@/components/layout/nav-bar";

export async function Header() {
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");

  return (
    <NavBar
      appName={tCommon("appName")}
      searchLabel={tCommon("search")}
      notificationsLabel={tNav("notifications")}
      signInLabel={tNav("signIn")}
      signUpLabel={tNav("signUp")}
      menuLabel={tNav("menu")}
    />
  );
}
