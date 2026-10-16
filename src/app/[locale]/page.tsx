import { setRequestLocale } from "next-intl/server";
import { Hero } from "./_components/hero";

/** The homepage is a single, non-scrolling screen: just the hero. The former below-the-fold
 *  sections (Features, Roadmap, ProductPreview, Skills, AiTeacherPreview, Testimonials,
 *  FloatingDock) live on in ./_components for reuse elsewhere; the nav's "Lernpfad" now points at
 *  the grammar learning path instead of the old /#roadmap anchor. */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    // Fixed German, like the nav (see nav-links.ts). Start leads into the grammar library — the
    // implemented learning entry point; the old primary CTA pointed at /auth/sign-up, which is
    // still a "coming soon" page.
    <Hero title="Lern mal!" ctaLabel="Start" ctaHref="/lessons/grammar" />
  );
}
