"use client";

import { Sparkles } from "@react-three/drei";

export function ParticleField({ count }: { count: number }) {
  return (
    <Sparkles
      count={count}
      scale={[24, 16, 30]}
      position={[0, 0, -6]}
      size={2.2}
      speed={0.25}
      opacity={0.45}
      color="#fff6e6"
      noise={1}
    />
  );
}
