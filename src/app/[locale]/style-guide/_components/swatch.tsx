export function Swatch({
  name,
  varName,
  className,
}: {
  name: string;
  varName: string;
  className: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      <div className={`h-16 w-full ${className}`} />
      <div className="space-y-0.5 bg-card px-3 py-2.5">
        <p className="text-body-sm font-medium">{name}</p>
        <p className="font-mono text-caption text-muted-foreground">{varName}</p>
      </div>
    </div>
  );
}

export function RampSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5">
      <div className={`h-12 w-full rounded-lg ring-1 ring-foreground/10 ${className}`} />
      <span className="font-mono text-caption text-muted-foreground">{name}</span>
    </div>
  );
}
