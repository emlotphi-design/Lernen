import { cn } from "@/lib/utils";

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export type CefrLevel = (typeof LEVELS)[number];

const levelClasses: Record<CefrLevel, string> = {
  A1: "bg-level-a1/15 text-level-a1 dark:bg-level-a1/20",
  A2: "bg-level-a2/15 text-level-a2 dark:bg-level-a2/20",
  B1: "bg-level-b1/15 text-level-b1 dark:bg-level-b1/20",
  B2: "bg-level-b2/15 text-level-b2 dark:bg-level-b2/20",
  C1: "bg-level-c1/15 text-level-c1 dark:bg-level-c1/20",
  C2: "bg-level-c2/15 text-level-c2 dark:bg-level-c2/20",
};

export function LevelBadge({
  level,
  size = "md",
  className,
}: {
  level: CefrLevel;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center rounded-full font-semibold tabular-nums",
        size === "sm" ? "h-4.5 px-1.5 text-[0.6875rem]" : "h-5.5 px-2 text-xs",
        levelClasses[level],
        className,
      )}
    >
      {level}
    </span>
  );
}

export { LEVELS as cefrLevels };
