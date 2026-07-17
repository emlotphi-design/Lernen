import type { ReactNode } from "react";

export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-14 first:border-t-0 first:pt-0">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-h3">{title}</h2>
        {description && <p className="mt-2 text-body text-muted-foreground">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function SubLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-label uppercase tracking-wide text-muted-foreground">{children}</p>
  );
}
