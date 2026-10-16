import { TextGeometry, mergeVertices, type Font } from "three-stdlib";
import { Vector3, type BufferGeometry } from "three";

const TEXT_GEOMETRY_OPTS = {
  // Deeper extrusion (was 0.34) so each letter reads as a solid block, not a raised sticker.
  height: 0.5,
  bevelEnabled: true,
  bevelThickness: 0.11,
  bevelSize: 0.07,
  // Slightly smoother than before (2->3) so the bevel's normals curve gradually enough to catch
  // specular highlights as a soft roll of light rather than a few flat, faceted glints — paid
  // once per unique word geometry (shared across every instance), so still cheap.
  bevelSegments: 3,
  curveSegments: 3,
} as const;

export type WordGeometryEntry = {
  geometry: BufferGeometry;
  /** Half-extents of the geometry's own bounding box, in the geometry's local (size:1, centered)
   *  unit space — the basis for a per-word collider that actually matches each word's footprint,
   *  since a "DER" and a "Plusquamperfekt" have wildly different widths at the same font size. */
  halfExtents: Vector3;
};

const cache = new Map<string, WordGeometryEntry>();

/** Extrusion depth shading — a cheap stand-in for contact shadow / ambient occlusion: the front
 *  face and front bevel keep full brightness, the extruded walls darken toward the back. Applied in
 *  the shared material's shader (instanced-word-group.tsx) from each vertex's local z, multiplying
 *  the instance's palette color, so walls darken *in hue* rather than toward grey.
 *
 *  It was first baked as a per-vertex color attribute, but the pile draws ~49M vertices a frame:
 *  12 extra bytes each (~580MB/frame of memory traffic) was enough to make the GPU — and with it
 *  every frame, and the cursor interaction — noticeably slower. Every word shares the same
 *  extrusion depth, so the shader needs only these constants. */
export const DEPTH_SHADE = {
  /** Local z of the front face / back face after geometry.center(): ±(height + 2·bevel) / 2. */
  frontZ: (TEXT_GEOMETRY_OPTS.height + 2 * TEXT_GEOMETRY_OPTS.bevelThickness) / 2,
  backZ: -(TEXT_GEOMETRY_OPTS.height + 2 * TEXT_GEOMETRY_OPTS.bevelThickness) / 2,
  /** Brightness at the very back of the extrusion. */
  back: 0.3,
  /** Fraction of the depth (from the front) that stays fully lit — covers the front bevel. */
  start: 0.18,
} as const;

/** Builds (and caches) one real, bevelled ExtrudeGeometry per unique word string — shared across every
 *  InstancedMesh instance of that word, so geometry cost never scales with instance count. */
export function getWordGeometry(font: Font, text: string): WordGeometryEntry {
  const cached = cache.get(text);
  if (cached) return cached;

  const extruded = new TextGeometry(text, { font, size: 1, ...TEXT_GEOMETRY_OPTS });
  extruded.center();
  // aoMap requires a second UV channel — reuse the primary UVs since we only need *a* mapping
  // for the procedural AO texture, not a precise per-face bake.
  const uv = extruded.getAttribute("uv");
  if (uv) extruded.setAttribute("uv2", uv);
  // ExtrudeGeometry is non-indexed (3 vertices per triangle). Merging vertices whose attributes are
  // all identical renders exactly the same, but lets the GPU's vertex cache reuse shared corners —
  // ~35% fewer vertex-shader runs across the ~49M vertices the pile draws every frame.
  const geometry = mergeVertices(extruded);
  extruded.dispose();
  geometry.computeBoundingBox();
  const box = geometry.boundingBox!;
  const halfExtents = new Vector3().subVectors(box.max, box.min).multiplyScalar(0.5);

  const entry: WordGeometryEntry = { geometry, halfExtents };
  cache.set(text, entry);
  return entry;
}

export function clearWordGeometryCache(): void {
  cache.forEach((entry) => entry.geometry.dispose());
  cache.clear();
}
