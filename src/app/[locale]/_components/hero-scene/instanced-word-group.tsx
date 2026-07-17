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
import { getWordGeometry } from "./word-geometry-cache";
import { getSurfaceTextures } from "./surface-texture";

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
      roughness: 0.62,
      metalness: 0.02,
      normalMap,
      normalScale: new Vector2(0.35, 0.35),
      roughnessMap,
      aoMap,
      aoMapIntensity: 0.65,
    });
  }
  return sharedMaterial;
}

/** Slightly desaturates each word's color at render time — keeps the palette's actual hues (see
 *  word-data.ts) untouched but reads as more elegant/less cartoonish once lit. */
const DESATURATE_FACTOR = 0.82;
const scratchColor = new Color();
const scratchHsl = { h: 0, s: 0, l: 0 };
function desaturatedColor(hex: string): Color {
  scratchColor.set(hex);
  scratchColor.getHSL(scratchHsl);
  scratchColor.setHSL(scratchHsl.h, scratchHsl.s * DESATURATE_FACTOR, scratchHsl.l);
  return scratchColor;
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
        type: "dynamic",
        canSleep: true,
        linearDamping: 4,
        angularDamping: 4,
      })),
    [instances],
  );

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    instances.forEach((inst, i) => mesh.setColorAt(i, desaturatedColor(inst.color)));
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [instances]);

  useBeforePhysicsStep(() => {
    const bodies = rigidBodies.current;
    if (!bodies) return;

    for (let i = 0; i < instances.length; i++) {
      const body = bodies[i];
      if (!body) continue;
      // Undisturbed and settled: leave it alone so it can actually sleep. The kinematic mouse
      // body's collider wakes it automatically (real Rapier collision) the moment it's touched.
      if (body.isSleeping()) continue;

      const inst = instances[i];
      const pos = body.translation();
      const anchor = inst.position;

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
      const targetRot = inst.rotation;
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
