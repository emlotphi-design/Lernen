"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { WordCloud } from "./word-cloud";
import { MouseRigidBody } from "./mouse-rigid-body";

/** Step 4: same scene as Step 3, tuned for sustained 60fps — no visual changes. */
export function HeroScene({ active }: { active: boolean }) {
  return (
    <Canvas
      // Stops R3F's internal render loop entirely once the Hero scrolls out of view — this also
      // stops @react-three/rapier's physics step, since it's driven by useFrame (see
      // hero-scene-loader.tsx). The last rendered frame just stays put on the (invisible) canvas;
      // resuming "always" continues the simulation exactly where it left off.
      frameloop={active ? "always" : "never"}
      // Capped at native (no supersampling) rather than the previous 1.2x ceiling — the word
      // count doubling below meaningfully raises per-frame vertex/fragment work, and this trims
      // fragment cost directly without touching physics, interaction, or word count at all.
      dpr={[1, 1]}
      // Adaptive resolution floor: if sustained frame times exceed budget, R3F temporarily
      // regresses device pixel ratio (down to 0.5x of the dpr range above) rather than dropping
      // frames, then restores it once performance recovers — a safety net for the 60fps target
      // that doesn't touch the steady-state visual design.
      performance={{ min: 0.5 }}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      // Pulled back slightly from 13 to 15 to reveal more of the pile — word-data.ts's
      // CAMERA_REFERENCE_Z and mouse-rigid-body.tsx's CAMERA_Z both match this exactly so the
      // pile's screen coverage and the interaction reach's depth taper stay correctly calibrated.
      camera={{ position: [0, 0, 15], fov: 45, near: 1.2, far: 72 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {/* Modest direct lights — image-based lighting from Environment below now carries most of
          the premium-PBR look (soft reflections, realistic roughness response), so the flat
          ambient term is toned down from before to avoid washing out the new surface detail. */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[8, 12, 10]} intensity={1.3} color="#fff2df" />
      <directionalLight position={[-10, -6, 6]} intensity={0.35} color="#dce8ff" />

      {/* Procedurally-generated image-based lighting (no external HDR file/network fetch) — a
          few soft light panels baked into an environment map so the matte plastic material gets
          realistic, gently varying reflections instead of only flat direct-light shading, which
          is what reads as "toy-like" no matter how good the material's own maps are. */}
      <Environment resolution={128} background={false}>
        <Lightformer form="rect" intensity={1.4} color="#fff8ef" scale={[9, 5, 1]} position={[6, 8, 6]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={0.5} color="#dce8ff" scale={[7, 4, 1]} position={[-8, 1, 4]} target={[0, 0, 0]} />
        <Lightformer form="ring" intensity={0.4} color="#ffffff" scale={9} position={[0, -3, -12]} target={[0, 0, 0]} />
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
