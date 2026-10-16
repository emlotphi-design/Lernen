"use client";

import { Suspense, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import {
  Color,
  DoubleSide,
  FileLoader,
  MeshPhysicalMaterial,
  NeutralToneMapping,
  type Group,
  type Mesh,
  type PerspectiveCamera,
} from "three";
import { buildWordmark, type MorphFont, type StylePalette } from "./hero-wordmark-geometry";
import { WORDMARK_FONT_URL } from "./hero-wordmark-font";


/** Warm palettes drawn from the background pile's own colors (honey #ffbd2e, marigold #ffa22c,
 *  apricot #ff9d68, tangerine #ff7b4a, coral #ff6079), one per style, left → right. Morphing
 *  between styles also drifts gently between these. */
const hex = (...c: string[]) => c.map((v) => new Color(v));
const PALETTES: StylePalette[] = [
  { stops: hex("#ffbd2e", "#ffa22c", "#ff9d68", "#ff6f6a"), top: new Color("#ffe3a0"), backShade: 0.42 },
  { stops: hex("#ffa22c", "#ff9d68", "#ff7b4a", "#ff6079"), top: new Color("#ffd9a8"), backShade: 0.4 },
  { stops: hex("#ffc244", "#ffad5a", "#ff9d68", "#ff7b4a"), top: new Color("#ffe8b8"), backShade: 0.45 },
  { stops: hex("#ffbd2e", "#ffa22c", "#ff7b4a", "#ff6079"), top: new Color("#ffe0a0"), backShade: 0.4 },
  { stops: hex("#ffb13a", "#ff9d68", "#ff8656", "#ff6a70"), top: new Color("#ffdcb0"), backShade: 0.42 },
  { stops: hex("#ffc83d", "#ffa22c", "#ff9d68", "#ff7b4a"), top: new Color("#ffe6a8"), backShade: 0.44 },
];

/** The background words' material family (satin molded plastic, see instanced-word-group.tsx),
 *  finished a step glossier with a light clearcoat so the title reads as the hero piece of the
 *  same set rather than a different object. */
function useWordmarkMaterial() {
  const material = useMemo(() => {
    const m = new MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.3,
      metalness: 0.02,
      clearcoat: 0.6,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.1,
      // Both sides, always shaded as front-facing: the letters share one triangulation across all
      // six styles, and a sliver that flips mid-morph would otherwise be culled and open a dark
      // hole. Drawn this way it just covers its area with the same color and normal as its
      // neighbors. (The mesh is closed, so true back faces stay hidden by depth.)
      side: DoubleSide,
    });
    m.onBeforeCompile = (shader) => {
      // normal_fragment_begin flips `normal` by faceDirection (and copies it into
      // nonPerturbedNormal); undo that for back-facing fragments so they shade as front faces.
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <normal_fragment_begin>",
        [
          "#include <normal_fragment_begin>",
          "if ( faceDirection < 0.0 ) { normal = - normal; nonPerturbedNormal = - nonPerturbedNormal; }",
        ].join("\n"),
      );
    };
    return m;
  }, []);
  useEffect(() => () => material.dispose(), [material]);
  return material;
}

function useWordmark(text: string) {
  const raw = useLoader(FileLoader, WORDMARK_FONT_URL) as string;
  const built = useMemo(() => buildWordmark(JSON.parse(raw) as MorphFont, text, PALETTES), [raw, text]);
  // Release GPU buffers if the hero unmounts (e.g. navigating away and back).
  useEffect(() => () => built.glyphs.forEach((g) => g.geometry.dispose()), [built]);
  return built;
}

/** Frames the word to the canvas on every resize. */
function FitCamera({ width, capTop }: { width: number; capTop: number }) {
  const camera = useThree((s) => s.camera) as PerspectiveCamera;
  const aspect = useThree((s) => s.size.width / s.size.height);
  useLayoutEffect(() => {
    const halfFov = ((camera.fov * Math.PI) / 180) / 2;
    const fitWidth = (width * 1.1) / 2 / (Math.tan(halfFov) * aspect);
    const fitHeight = (capTop * 1.7) / 2 / Math.tan(halfFov);
    camera.position.set(0, capTop / 2, Math.max(fitWidth, fitHeight));
    camera.lookAt(0, capTop / 2, 0);
    camera.updateProjectionMatrix();
  }, [camera, aspect, width, capTop]);
  return null;
}

/** One style cycle: hold, then morph into the next style. Letters follow each other left → right. */
const STYLE_PERIOD = 4.2;
const HOLD_FRACTION = 0.55;
const LETTER_STAGGER = 0.03; // in style periods (~0.13s per letter)
/** Gentle staggered compression/expansion, and a slow three-quarter sway. */
const BREATH_SPEED = 1.5;
const BREATH_AMOUNT = 0.018;
const SWAY_Y = 0.05;
const SWAY_X = 0.025;

const smootherstep = (x: number) => x * x * x * (x * (x * 6 - 15) + 10);

function Word({ text, animate, onReady }: { text: string; animate: boolean; onReady: () => void }) {
  const { glyphs, width, capTop, styleCount } = useWordmark(text);
  const material = useWordmarkMaterial();
  useEffect(() => onReady(), [onReady]);
  const group = useRef<Group>(null);
  const meshes = useRef<(Mesh | null)[]>([]);
  // Own animation clock: advances only while animating, so pausing (off-screen, hidden tab) and
  // resuming continue exactly where they left off instead of jumping to a new phase.
  const time = useRef(0);

  useFrame((_, delta) => {
    if (animate) time.current += Math.min(delta, 1 / 20);
    const t = time.current;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.26) * SWAY_Y;
      group.current.rotation.x = -0.04 + Math.sin(t * 0.19 + 1.1) * SWAY_X;
    }
    meshes.current.forEach((mesh, i) => {
      const influences = mesh?.morphTargetInfluences;
      if (!mesh || !influences) return;
      // Which two styles this letter is between, and how far (held, then eased across).
      const phase = Math.max(0, t / STYLE_PERIOD - i * LETTER_STAGGER);
      const cycle = Math.floor(phase);
      const blend = smootherstep(Math.min(Math.max((phase - cycle - HOLD_FRACTION) / (1 - HOLD_FRACTION), 0), 1));
      const from = cycle % styleCount;
      const to = (cycle + 1) % styleCount;
      influences.fill(0);
      // Style 0 is the base shape; styles 1..n-1 are morph targets 0..n-2.
      if (from > 0) influences[from - 1] += 1 - blend;
      if (to > 0) influences[to - 1] += blend;
      const a = Math.sin(t * BREATH_SPEED - i * 0.5) * BREATH_AMOUNT;
      mesh.scale.set(1 + a, 1 - a * 0.6, 1 + a);
    });
  });

  return (
    <>
      <FitCamera width={width} capTop={capTop} />
      <group ref={group}>
        {glyphs.map((g, i) => (
          <mesh
            key={i}
            ref={(m) => {
              // R3F assigns the geometry after construction, so morph influences need setting up.
              if (m && !m.morphTargetInfluences?.length) m.updateMorphTargets();
              meshes.current[i] = m;
            }}
            geometry={g.geometry}
            material={material}
            position={[g.pivotX, 0, 0]}
          />
        ))}
      </group>
    </>
  );
}

export function HeroWordmarkScene({
  text,
  animate,
  onReady,
}: {
  text: string;
  /** False when off-screen, tab hidden, or reduced motion: the loop stops and the word holds. */
  animate: boolean;
  onReady: () => void;
}) {
  return (
    <Canvas
      // Renders continuously only while animating; otherwise only on resize/prop changes.
      frameloop={animate ? "always" : "demand"}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ fov: 20, near: 0.1, far: 80, position: [0, 0, 14] }}
      onCreated={({ gl }) => {
        gl.toneMapping = NeutralToneMapping;
      }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {/* The background scene's light rig (hero-scene/hero-scene.tsx), mirrored here so the title
          is lit by the same key, fill, rim and studio panels as the vocabulary pile around it —
          its highlights and shadows fall the same way as theirs. */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 12, 10]} intensity={2.1} color="#fff4e6" />
      <directionalLight position={[-10, -6, 6]} intensity={0.55} color="#dfe8ff" />
      <directionalLight position={[-2, 14, -12]} intensity={1.1} color="#ffffff" />
      <Environment resolution={128} background={false} frames={1}>
        <Lightformer form="rect" intensity={1.8} color="#fff8ef" scale={[9, 5, 1]} position={[6, 8, 6]} target={[0, 0, 0]} />
        <Lightformer form="rect" intensity={0.8} color="#e4ecff" scale={[7, 4, 1]} position={[-8, 1, 4]} target={[0, 0, 0]} />
        <Lightformer form="ring" intensity={0.5} color="#ffffff" scale={9} position={[0, -3, -12]} target={[0, 0, 0]} />
      </Environment>

      <Suspense fallback={null}>
        <Word text={text} animate={animate} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
