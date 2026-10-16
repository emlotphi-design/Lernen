"use client";

import { useEffect, useMemo, useRef } from "react";
import {
  RoundCuboidCollider,
  InstancedRigidBodies,
  useBeforePhysicsStep,
  type InstancedRigidBodyProps,
  type RapierRigidBody,
} from "@react-three/rapier";
import { Color, MeshStandardMaterial, Quaternion, Euler, Vector2, type InstancedMesh } from "three";
import type { Font } from "three-stdlib";
import type { WordInstance } from "./word-data";
import { DEPTH_SHADE, getWordGeometry } from "./word-geometry-cache";
import { getSurfaceTextures } from "./surface-texture";
import { mouseBodyHandle } from "./mouse-rigid-body";

type World = Parameters<Parameters<typeof useBeforePhysicsStep>[0]>[0];
type Anchor = { position: number[]; rotation: number[]; settled: boolean };

/** Lazily-created, shared across every word group — instance color (not material.color) carries the
 *  per-word tint, so one shared material is enough for the whole cloud.
 *
 *  Tuned for a premium injection-molded-plastic feel rather than glossy toy plastic: moderate base
 *  roughness (matte, not shiny) with fine tiling normal/roughness/AO maps layered on top for
 *  micro-imperfections, soft wear, and crevice darkening, and near-zero metalness so it never
 *  reads as metallic. Real image-based lighting (see hero-scene.tsx's <Environment>) does most of
 *  the work of making that response look real instead of flat — a matte PBR material with no
 *  environment to reflect still looks like plastic-y "toy" shading no matter how good the maps are. */
let sharedMaterial: MeshStandardMaterial | null = null;
function getSharedMaterial(): MeshStandardMaterial {
  if (!sharedMaterial) {
    const { normalMap, roughnessMap, aoMap } = getSurfaceTextures();
    sharedMaterial = new MeshStandardMaterial({
      // Softer satin sheen and lighter grain/crevice darkening than the original matte tuning —
      // the surface maps still add micro-detail but no longer grey out the candy base colors.
      roughness: 0.38,
      metalness: 0.02,
      normalMap,
      normalScale: new Vector2(0.2, 0.2),
      roughnessMap,
      aoMap,
      aoMapIntensity: 0.35,
    });
    sharedMaterial.onBeforeCompile = injectDepthShading;
  }
  return sharedMaterial;
}

const glslFloat = (n: number) => n.toFixed(5);

/** Extrusion depth shading (see DEPTH_SHADE in word-geometry-cache.ts), computed per vertex from
 *  its local z and multiplied into the diffuse color — the same ramp that was briefly baked as a
 *  per-vertex color attribute, without the per-vertex memory traffic. */
function injectDepthShading(shader: { vertexShader: string; fragmentShader: string }) {
  const { frontZ, backZ, back, start } = DEPTH_SHADE;
  shader.vertexShader = shader.vertexShader
    .replace("#include <common>", "#include <common>\nvarying float vWordDepthShade;")
    .replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
      {
        float fromFront = clamp((${glslFloat(frontZ)} - position.z) / ${glslFloat(frontZ - backZ)}, 0.0, 1.0);
        float t = clamp((fromFront - ${glslFloat(start)}) / ${glslFloat(1 - start)}, 0.0, 1.0);
        vWordDepthShade = 1.0 - ${glslFloat(1 - back)} * (t * t * (3.0 - 2.0 * t));
      }`,
    );
  shader.fragmentShader = shader.fragmentShader
    .replace("#include <common>", "#include <common>\nvarying float vWordDepthShade;")
    .replace("#include <color_fragment>", "#include <color_fragment>\ndiffuseColor.rgb *= vWordDepthShade;");
}

/** Instance color carries each word's palette color (see word-data.ts), undimmed — plus a small,
 *  deterministic per-word lightness offset so two touching words of the same palette slot still
 *  read as separate pieces instead of merging into one shape. */
const LIGHTNESS_JITTER = 0.05;
const scratchColor = new Color();
function instanceColor(inst: WordInstance): Color {
  return scratchColor.set(inst.color).offsetHSL(0, 0, Math.sin(inst.phase) * LIGHTNESS_JITTER);
}

/** Shrinks the collider slightly inside the rendered glyph body — a small skin gap between touching
 *  "plastic" pieces reads better than exact edge-to-edge contact and gives the solver some breathing
 *  room in a scene where hundreds of bodies are resting against each other at once. */
const COLLIDER_SHRINK = 0.92;
const COLLIDER_BORDER_RADIUS = 0.055;

/** Position/rotation spring back toward each word's original packed pose — the "slowly return"
 *  half of the interaction. The push itself comes from real Rapier collision against the
 *  invisible kinematic mouse body (see mouse-rigid-body.tsx), not from anything here. */
const SPRING_STRENGTH = 7;
const ROTATION_SPRING_STRENGTH = 5.5;
/** Below this combined speed, a body counts as "at rest" and is left alone so Rapier can put it
 *  to sleep — an undisturbed pile stays completely still. */
const REST_LINVEL_EPSILON = 0.01;
const REST_ANGVEL_EPSILON = 0.01;

/** Settled-pose re-anchoring (see recaptureAnchors): first attempt ~1.5s after load, then every
 *  ~0.5s for any word that wasn't still yet, until every word has been captured once. */
const REANCHOR_FIRST_STEP = 90;
const REANCHOR_RETRY_STEPS = 30;
const REANCHOR_MAX_SPEED = 0.05;

function angleDiff(target: number, current: number): number {
  let d = (target - current) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

const scratchQuat = new Quaternion();
const scratchEuler = new Euler();

/** Step 3: adds the spring-back-to-rest half of mouse interaction. The push itself is handled
 *  entirely by Rapier's own collision solver against the kinematic mouse body — this component
 *  only pulls each word back toward its original packed position and orientation once disturbed. */
export function InstancedWordGroup({
  text,
  instances,
  font,
}: {
  text: string;
  instances: WordInstance[];
  font: Font;
}) {
  const meshRef = useRef<InstancedMesh>(null);
  const rigidBodies = useRef<(RapierRigidBody | null)[]>(null);
  const { geometry, halfExtents } = useMemo(() => getWordGeometry(font, text), [font, text]);
  const material = useMemo(() => getSharedMaterial(), []);

  const colliderArgs = useMemo((): [number, number, number, number] => {
    const hw = Math.max(halfExtents.x * COLLIDER_SHRINK, 0.02);
    const hh = Math.max(halfExtents.y * COLLIDER_SHRINK, 0.02);
    const hd = Math.max(halfExtents.z * COLLIDER_SHRINK, 0.02);
    const borderRadius = Math.min(COLLIDER_BORDER_RADIUS, hw, hh, hd) * 0.9;
    return [hw, hh, hd, borderRadius];
  }, [halfExtents]);

  const rigidBodyInstances = useMemo<InstancedRigidBodyProps[]>(
    () =>
      instances.map((inst) => ({
        key: inst.id,
        position: inst.position,
        rotation: inst.rotation,
        scale: [inst.scale, inst.scale, inst.scale],
        // Words hidden behind the hero panel are fixed scenery (see WordInstance.pinned).
        type: inst.pinned ? "fixed" : "dynamic",
        canSleep: true,
        linearDamping: 4,
        angularDamping: 4,
      })),
    [instances],
  );

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    instances.forEach((inst, i) => mesh.setColorAt(i, instanceColor(inst)));
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [instances]);

  // Spring targets — start as the packed layout, then each is re-captured once at its settled pose
  // (see recaptureAnchors). Mutable physics-loop state, so it lives in refs, not render state.
  const anchorsRef = useRef<Anchor[] | null>(null);
  const stepCount = useRef(0);
  const pendingAnchors = useRef(0);
  useEffect(() => {
    anchorsRef.current = instances.map((inst) => ({
      position: [...inst.position],
      rotation: [...inst.rotation],
      settled: false,
    }));
    pendingAnchors.current = instances.length;
    stepCount.current = 0;
  }, [instances]);

  /** The packed layout deliberately lets neighbors overlap a little, so on load the solver pushes
   *  overlapping words apart while the spring pulls them back into each other — forever. Those
   *  bodies never sleep, and every one of them is re-solved on every physics step, which is what
   *  made the pile slow to follow the cursor once the words grew larger and denser (measured:
   *  ~550 of 2,000 bodies permanently awake, ~5.4 ms per step at rest). Once a word has settled,
   *  its spring target becomes the pose physics already settled it into — visually identical
   *  (it's where the word already sits), but spring and contacts now agree, so it sleeps.
   *  Only captures words that are nearly still and not touching the cursor, so a cursor resting on
   *  the pile (or a word still springing back) never gets frozen in as a dent; those are retried. */
  function recaptureAnchors(anchors: Anchor[], bodies: (RapierRigidBody | null)[], world: World) {
    const touchingCursor = new Set<number>();
    const cursor = mouseBodyHandle.current;
    if (cursor) {
      for (let c = 0; c < cursor.numColliders(); c++) {
        world.contactPairsWith(cursor.collider(c), (other) => touchingCursor.add(other.handle));
      }
    }
    for (let i = 0; i < anchors.length; i++) {
      const body = bodies[i];
      const anchor = anchors[i];
      if (!body || anchor.settled) continue;
      if (body.numColliders() > 0 && touchingCursor.has(body.collider(0).handle)) continue;
      if (!body.isSleeping()) {
        const v = body.linvel();
        const w = body.angvel();
        if (Math.hypot(v.x, v.y, v.z) > REANCHOR_MAX_SPEED || Math.hypot(w.x, w.y, w.z) > REANCHOR_MAX_SPEED * 4) {
          continue;
        }
      }
      const p = body.translation();
      const q = body.rotation();
      scratchEuler.setFromQuaternion(scratchQuat.set(q.x, q.y, q.z, q.w));
      anchor.position = [p.x, p.y, p.z];
      anchor.rotation = [scratchEuler.x, scratchEuler.y, scratchEuler.z];
      anchor.settled = true;
      pendingAnchors.current--;
    }
  }

  useBeforePhysicsStep((world) => {
    const bodies = rigidBodies.current;
    const anchors = anchorsRef.current;
    if (!bodies || !anchors) return;

    const step = ++stepCount.current;
    if (
      pendingAnchors.current > 0 &&
      step >= REANCHOR_FIRST_STEP &&
      (step - REANCHOR_FIRST_STEP) % REANCHOR_RETRY_STEPS === 0
    ) {
      recaptureAnchors(anchors, bodies, world);
    }

    for (let i = 0; i < instances.length; i++) {
      const body = bodies[i];
      if (!body) continue;
      // Undisturbed and settled: leave it alone so it can actually sleep. The kinematic mouse
      // body's collider wakes it automatically (real Rapier collision) the moment it's touched.
      if (body.isSleeping() || !body.isDynamic()) continue;

      const target = anchors[i];
      const pos = body.translation();
      const anchor = target.position;

      const targetVelX = (anchor[0] - pos.x) * SPRING_STRENGTH;
      const targetVelY = (anchor[1] - pos.y) * SPRING_STRENGTH;
      const targetVelZ = (anchor[2] - pos.z) * SPRING_STRENGTH;

      const vel = body.linvel();
      const newVelX = vel.x + (targetVelX - vel.x) * 0.25;
      const newVelY = vel.y + (targetVelY - vel.y) * 0.25;
      const newVelZ = vel.z + (targetVelZ - vel.z) * 0.25;

      // Rotational spring back to the word's original orientation — per-axis Euler control
      // rather than a full quaternion delta, exact enough since rotations stay modest (see
      // word-data.ts) and never approach gimbal-lock territory.
      const q = body.rotation();
      scratchQuat.set(q.x, q.y, q.z, q.w);
      scratchEuler.setFromQuaternion(scratchQuat);
      const targetRot = target.rotation;
      const angVel = body.angvel();
      const targetAngX = angleDiff(targetRot[0], scratchEuler.x) * ROTATION_SPRING_STRENGTH;
      const targetAngY = angleDiff(targetRot[1], scratchEuler.y) * ROTATION_SPRING_STRENGTH;
      const targetAngZ = angleDiff(targetRot[2], scratchEuler.z) * ROTATION_SPRING_STRENGTH;

      const newAngX = angVel.x + (targetAngX - angVel.x) * 0.25;
      const newAngY = angVel.y + (targetAngY - angVel.y) * 0.25;
      const newAngZ = angVel.z + (targetAngZ - angVel.z) * 0.25;

      const settled =
        newVelX * newVelX + newVelY * newVelY + newVelZ * newVelZ <
          REST_LINVEL_EPSILON * REST_LINVEL_EPSILON &&
        newAngX * newAngX + newAngY * newAngY + newAngZ * newAngZ <
          REST_ANGVEL_EPSILON * REST_ANGVEL_EPSILON;

      if (settled) {
        body.setLinvel({ x: 0, y: 0, z: 0 }, false);
        body.setAngvel({ x: 0, y: 0, z: 0 }, false);
        continue;
      }

      body.setLinvel({ x: newVelX, y: newVelY, z: newVelZ }, true);
      body.setAngvel({ x: newAngX, y: newAngY, z: newAngZ }, true);
    }
  });

  return (
    <InstancedRigidBodies
      ref={rigidBodies}
      instances={rigidBodyInstances}
      colliders={false}
      colliderNodes={[
        <RoundCuboidCollider
          key="collider"
          args={colliderArgs}
          friction={0.95}
          restitution={0}
          contactSkin={0.015}
        />,
      ]}
      gravityScale={0}
    >
      <instancedMesh
        ref={meshRef}
        args={[geometry, material, instances.length]}
        count={instances.length}
        frustumCulled={false}
      />
    </InstancedRigidBodies>
  );
}
