import { Compass } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/motion/fade-in";

// Catches every notFound()/unmatched-route case within the [locale] segment — replaces Next's
// bare default 404 with something on-brand. Next.js doesn't thread dynamic route params into
// not-found.tsx, so this stays fixed German like the rest of the app's chrome (see the
// German-UI-vs-explanation-language split in project memory) rather than depending on a locale
// param it can't reliably receive.
export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <FadeIn>
        <Card className="w-full items-center p-10 shadow-sm">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
            <Compass className="size-6" />
          </span>
          <span className="mt-5 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-caption font-medium text-muted-foreground">
            404
          </span>
          <h1 className="mt-4 text-h3">Seite nicht gefunden</h1>
          <p className="mt-2 text-body text-muted-foreground">
            Diese Seite existiert nicht oder wurde verschoben. Prüfe den Link oder kehre zur
            Startseite zurück.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button render={<Link href="/">Zur Startseite</Link>} nativeButton={false} />
            <Button
              variant="outline"
              render={<Link href="/lessons/grammar">Zur Grammatik</Link>}
              nativeButton={false}
            />
          </div>
        </Card>
      </FadeIn>
    </div>
  );
}
