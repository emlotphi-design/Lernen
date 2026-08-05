"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function AnimatedNumber({
  value,
  className,
  suffix = "",
}: {
  value: number;
  className?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}
