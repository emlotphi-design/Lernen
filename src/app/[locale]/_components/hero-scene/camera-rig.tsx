"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector3 } from "three";
import { mouseWorld } from "./mouse-world";

/** World-space Z of the plane the mouse ray is projected onto for repulsion — roughly the
 *  "surface" of the word mass, between the close and mid depth tiers. */
const REPULSION_PLANE_Z = 0;

const rayPoint = new Vector3();

/** Drives the camera from mouse position (parallax) and page scroll (added depth), both
 *  lerped toward their targets each frame for a smooth, non-jittery feel. Also projects the raw
 *  (unlerped) pointer position into world space each frame for physics mouse-repulsion — kept
 *  here since this component already owns the pointer listener. Lives inside the Canvas — it
 *  doesn't render anything itself. */
export function CameraRig({
  scrollProgressRef,
  reducedMotion,
}: {
  scrollProgressRef: RefObject<number>;
  reducedMotion: boolean;
}) {
  const { camera } = useThree();
  const pointer = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    if (reducedMotion) {
      mouseWorld.active = false;
      return;
    }
    function handlePointerMove(event: PointerEvent) {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseWorld.active = true;
    }
    function handlePointerLeave() {
      mouseWorld.active = false;
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      mouseWorld.active = false;
    };
  }, [reducedMotion]);

  useFrame(() => {
    if (reducedMotion) {
      camera.position.set(0, 0, 13);
      camera.lookAt(0, 0, 0);
      return;
    }
    const targetScroll = scrollProgressRef.current ?? 0;
    current.current.x = MathUtils.lerp(current.current.x, pointer.current.x, 0.04);
    current.current.y = MathUtils.lerp(current.current.y, pointer.current.y, 0.04);
    current.current.scroll = MathUtils.lerp(current.current.scroll, targetScroll, 0.06);

    camera.position.x = current.current.x * 0.9;
    camera.position.y = -current.current.y * 0.6;
    camera.position.z = 13 + current.current.scroll * 4.5;
    camera.lookAt(0, 0, 0);

    // Project the raw (unsmoothed) pointer onto the typography plane so repulsion reacts
    // immediately rather than trailing the lerped parallax camera.
    if (mouseWorld.active) {
      rayPoint.set(pointer.current.x, pointer.current.y, 0.5).unproject(camera);
      const dir = rayPoint.sub(camera.position).normalize();
      const dist = (REPULSION_PLANE_Z - camera.position.z) / dir.z;
      mouseWorld.x = camera.position.x + dir.x * dist;
      mouseWorld.y = camera.position.y + dir.y * dist;
      mouseWorld.z = REPULSION_PLANE_Z;
    }
  });

  return null;
}
