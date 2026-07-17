import { getTranslations } from "next-intl/server";
import { NavBar } from "@/components/layout/nav-bar";
import type { NavLink } from "@/components/layout/mobile-nav";

export async function Header() {
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");

  const links: NavLink[] = [
    { href: "/", label: tNav("home"), key: "home" },
    { href: "/#roadmap", label: tNav("roadmap"), key: "roadmap" },
    { href: "/grammar", label: tNav("grammar"), key: "grammar" },
    { href: "/vocabulary", label: tNav("vocabulary"), key: "vocabulary" },
    { href: "/dictionary", label: tNav("dictionary"), key: "dictionary" },
    { href: "/#skills", label: tNav("conversations"), key: "conversations" },
    { href: "/#skills", label: tNav("reading"), key: "reading" },
    { href: "/#skills", label: tNav("listening"), key: "listening" },
    { href: "/#ai-tutor", label: tNav("aiTutor"), key: "aiTutor" },
  ];

  return (
    <NavBar
      appName={tCommon("appName")}
      links={links}
      searchLabel={tCommon("search")}
      notificationsLabel={tNav("notifications")}
      signInLabel={tNav("signIn")}
      signUpLabel={tNav("signUp")}
      menuLabel={tNav("menu")}
    />
  );
}
