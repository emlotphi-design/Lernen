"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { NeutralToneMapping } from "three";
import { WordCloud } from "./word-cloud";
import { MouseRigidBody } from "./mouse-rigid-body";

/** The interactive vocabulary pile behind the hero — tuned for sustained 60fps. */
export function HeroScene({ active }: { active: boolean }) {
  return (
    <Canvas
      // Stops R3F's internal render loop entirely once the Hero scrolls out of view — this also
      // stops @react-three/rapier's physics step, since it's driven by useFrame (see
      // hero-scene-loader.tsx). The last rendered frame just stays put on the (invisible) canvas;
      // resuming "always" continues the simulation exactly where it left off.
      frameloop={active ? "always" : "never"}
      // Fixed at native resolution. An adaptive 1.5x boost (drei PerformanceMonitor) was tried and
      // removed: with ~2,000 bevelled words it multiplied fragment work by up to 2.25x, and its
      // default bounds on a 60Hz display only step back down below ~40fps — so it could sit at
      // the higher resolution while frames ran long, and every long frame makes the fixed-step
      // physics catch up with extra steps, which is what reads as words lagging the cursor.
      dpr={1}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      // R3F defaults to ACES Filmic, which pushes saturated base colors toward grey/brown and
      // crushes mid-tones — the main reason the candy palette read as muddy. Khronos PBR Neutral
      // keeps base-color hue and saturation intact while still rolling off highlights. Set once
      // here; R3F only applies its own default on first configure, so this sticks.
      onCreated={({ gl }) => {
        gl.toneMapping = NeutralToneMapping;
      }}
      // Pulled back slightly from 13 to 15 to reveal more of the pile — word-data.ts's
      // CAMERA_REFERENCE_Z and mouse-rigid-body.tsx's CAMERA_Z both match this exactly so the
      // pile's screen coverage and the interaction reach's depth taper stay correctly calibrated.
      camera={{ position: [0, 0, 15], fov: 45, near: 1.2, far: 72 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {/* Sculpting light rather than flat fill: a strong warm key from the upper right lights each
          word's face while its extruded sides fall into real shade (that light/shade split is what
          makes the letters read as solid 3D pieces); a cool low fill keeps the shade side colored
          instead of black; and a rim light from above-behind skims the bevels, putting a fine
          highlight on top edges that separates overlapping words from each other. No shadow maps
          — a shadow pass over 2,000 bevelled text instances would roughly double vertex work. */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 12, 10]} intensity={2.1} color="#fff4e6" />
      <directionalLight position={[-10, -6, 6]} intensity={0.55} color="#dfe8ff" />
      <directionalLight position={[-2, 14, -12]} intensity={1.1} color="#ffffff" />

      {/* Atmospheric depth: fades only the far tier (≈37–45 units from the camera) toward the
          black background, so the vivid foreground separates from the pile behind it. Close and
          mid tiers (≤21 units) sit in front of the fog's start and keep their full color. */}
      <fog attach="fog" args={["#000000", 30, 62]} />

      {/* Procedurally-generated image-based lighting (no external HDR file/network fetch) — a
          few soft light panels baked into an environment map so the material gets soft, gently
          varying reflections instead of only flat direct-light shading. */}
      <Environment resolution={128} background={false}>
        <Lightformer form="rect" intensity={1.8} color="#fff8ef" scale={[9, 5, 1]} position={[6, 8, 6]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={0.8} color="#e4ecff" scale={[7, 4, 1]} position={[-8, 1, 4]} target={[0, 0, 0]} />
        <Lightformer form="ring" intensity={0.5} color="#ffffff" scale={9} position={[0, -3, -12]} target={[0, 0, 0]} />
      </Environment>

      <Suspense fallback={null}>
        <Physics
          gravity={[0, 0, 0]}
          timeStep={1 / 60}
          numSolverIterations={6}
          numInternalPgsIterations={2}
        >
          <WordCloud />
          <MouseRigidBody />
        </Physics>
      </Suspense>
    </Canvas>
  );
}
