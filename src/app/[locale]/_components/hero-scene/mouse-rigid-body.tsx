"use client";

import { useEffect, useMemo, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { RigidBody, CuboidCollider, useBeforePhysicsStep, type RapierRigidBody } from "@react-three/rapier";
import { Quaternion, Raycaster, Vector2, Vector3 } from "three";

/** Matches hero-scene.tsx's Canvas camera exactly — used to convert a world depth into the same
 *  "how much world-space does one screen-space unit cover at this distance" scale that
 *  word-data.ts uses to place words (its worldHalfWidth/worldHalfHeight), so the pusher's reach
 *  tapers the same way the pile itself does. */
const CAMERA_Z = 15;
const HALF_FOV_RAD = ((45 * Math.PI) / 180) / 2;
/** Z depth the pusher's kinematic body is centered on — the midpoint of the word pile's full
 *  depth range (close-tier tops out at z≈7.5, far-tier bottoms out at z≈-30). */
const CENTER_Z = -11;
/** Scales the reach at every depth (see xyRadiusAt) so the collider stays roughly proportional to
 *  a word's own size at that depth — a "real contact" pusher, not an oversized invisible zone that
 *  grabs words well before the cursor visually reaches them. (A much larger factor was tried
 *  earlier to make far-tier words easier to hit in a coarse test sweep, but at the pile's current
 *  scale that made the collider up to ~15-30x a word's own size — technically still real Rapier
 *  collision, not a force field, but perceptually indistinguishable from magnetic repulsion since
 *  contact happened far outside where the cursor appeared to be. Reachability instead comes from
 *  the collider legitimately following the camera ray at every depth — see the ray-alignment logic
 *  below — not from inflating its size.) */
const XY_RADIUS_FACTOR = 0.08;

function xyRadiusAt(worldZ: number): number {
  return XY_RADIUS_FACTOR * (CAMERA_Z - worldZ) * Math.tan(HALF_FOV_RAD);
}

/** One tapered segment per depth tier in word-data.ts (close/mid/far), each sized to that tier's
 *  own world-space scale — a uniform-radius rod reaches close-tier words fine but is far too
 *  narrow for far-tier words, which (being much farther from the camera) are spread across a much
 *  larger world-space area for the same on-screen position, exactly the way word-data.ts's own
 *  worldHalfWidth/worldHalfHeight grow with distance. Segments are centered on each tier's own
 *  range with a margin, and positioned along the collider's local Z axis (which tracks the actual
 *  camera ray direction each frame, not just world Z — see the rotation logic below). */
const DEPTH_SEGMENTS = [
  { minZ: -32, maxZ: -20 }, // far tier (-30..-22) + margin
  { minZ: -8, maxZ: 6 }, // mid tier (-6..4) + margin
  { minZ: 4, maxZ: 9 }, // close tier (4.5..7.5) + margin
].map(({ minZ, maxZ }) => {
  const centerWorldZ = (minZ + maxZ) / 2;
  return {
    // Local +Z is rotated to align with the ray direction, which points away from the camera
    // (negative world Z) — so reaching a more-negative world Z requires a *positive* local
    // offset, the opposite of the naive world-space subtraction. See the block comment above.
    localZ: CENTER_Z - centerWorldZ,
    halfLengthZ: (maxZ - minZ) / 2,
    xyRadius: xyRadiusAt(centerWorldZ),
  };
});

/** Parked far outside the scene while the cursor is inactive, so it can't keep blocking whatever
 *  spot it was last at. */
const INACTIVE_POSITION: [number, number, number] = [0, 0, -9999];

const UNIT_Z = new Vector3(0, 0, 1);

/** The cursor as a real, invisible kinematic Rapier rigid body — its collider physically pushes
 *  through the dynamic word bodies via Rapier's own contact solver rather than a hand-rolled
 *  force field, so neighbor-to-neighbor collision propagation "just happens".
 *
 *  Built from tapered segments oriented along the camera ray through the cursor — not just
 *  extended along world Z at a fixed XY. The camera ray fans out in XY as depth increases (a
 *  far-tier word at z≈-25 sits roughly 3x farther out in XY, for the same screen position, than a
 *  mid-tier word at z≈0), so a straight rod at a fixed XY and fixed radius would drift away from —
 *  and be far too narrow for — where the cursor is actually pointing at greater depths. Following
 *  the true ray, with a radius that tapers per depth tier, keeps every word "under the cursor"
 *  reachable regardless of which depth tier it's in. Lives inside the Canvas/Physics tree; renders
 *  no visible mesh. */
export function MouseRigidBody() {
  const { camera } = useThree();
  const bodyRef = useRef<RapierRigidBody>(null);
  const pointerNdc = useRef(new Vector2());
  const active = useRef(false);
  // A kinematic body simply holds its last position/rotation if setNextKinematic* isn't called
  // again — so the raycast + WASM calls only need to run when the pointer actually moved or the
  // active/inactive state just flipped, not on every physics step regardless of change.
  const dirty = useRef(false);

  const raycaster = useRef(new Raycaster());
  const midpoint = useRef(new Vector3());
  const quat = useRef(new Quaternion());

  const segments = useMemo(() => DEPTH_SEGMENTS, []);

  useEffect(() => {
    // Listen on window, not the canvas — the Canvas has pointerEvents:"none" so it never
    // receives DOM pointer events itself (it must stay click-through for the Hero UI above it).
    function handlePointerMove(event: PointerEvent) {
      pointerNdc.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1,
      );
      active.current = true;
      dirty.current = true;
    }
    function handlePointerLeave() {
      if (active.current) dirty.current = true;
      active.current = false;
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  useBeforePhysicsStep(() => {
    const body = bodyRef.current;
    if (!body || !dirty.current) return;
    dirty.current = false;

    if (!active.current) {
      body.setNextKinematicTranslation({ x: INACTIVE_POSITION[0], y: INACTIVE_POSITION[1], z: INACTIVE_POSITION[2] });
      return;
    }

    raycaster.current.setFromCamera(pointerNdc.current, camera);
    const { origin, direction } = raycaster.current.ray;
    if (Math.abs(direction.z) < 1e-6) return;

    // Point along the ray at the pile's mid-depth — the rod's center — found by solving the ray
    // parametrically for where it crosses CENTER_Z, exactly matching how the cursor's sightline
    // actually threads through the pile rather than assuming a fixed XY at every depth.
    const t = (CENTER_Z - origin.z) / direction.z;
    midpoint.current.copy(origin).addScaledVector(direction, t);
    quat.current.setFromUnitVectors(UNIT_Z, direction);

    body.setNextKinematicTranslation(midpoint.current);
    body.setNextKinematicRotation(quat.current);
  });

  return (
    <RigidBody
      ref={bodyRef}
      type="kinematicPosition"
      position={INACTIVE_POSITION}
      colliders={false}
      gravityScale={0}
    >
      {segments.map((seg, i) => (
        <CuboidCollider
          key={i}
          args={[seg.xyRadius, seg.xyRadius, seg.halfLengthZ]}
          position={[0, 0, seg.localZ]}
        />
      ))}
    </RigidBody>
  );
}
