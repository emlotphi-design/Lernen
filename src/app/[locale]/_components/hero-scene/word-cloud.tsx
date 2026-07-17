"use client";

import { useMemo } from "react";
import { useFont } from "@react-three/drei";
import { WORD_INSTANCES, type WordInstance } from "./word-data";
import { InstancedWordGroup } from "./instanced-word-group";

const FONT_URL = "/fonts/droid-sans-bold.typeface.json";

export function WordCloud() {
  const font = useFont(FONT_URL);

  const groups = useMemo(() => {
    const map = new Map<string, WordInstance[]>();
    for (const inst of WORD_INSTANCES) {
      const list = map.get(inst.text);
      if (list) list.push(inst);
      else map.set(inst.text, [inst]);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <>
      {groups.map(([text, instances]) => (
        <InstancedWordGroup key={text} text={text} instances={instances} font={font} />
      ))}
    </>
  );
}
