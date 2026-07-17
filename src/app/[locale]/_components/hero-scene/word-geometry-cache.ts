import { TextGeometry, type Font } from "three-stdlib";
import { Vector3, type BufferGeometry } from "three";

const TEXT_GEOMETRY_OPTS = {
  height: 0.34,
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

/** Builds (and caches) one real, bevelled ExtrudeGeometry per unique word string — shared across every
 *  InstancedMesh instance of that word, so geometry cost never scales with instance count. */
export function getWordGeometry(font: Font, text: string): WordGeometryEntry {
  const cached = cache.get(text);
  if (cached) return cached;

  const geometry = new TextGeometry(text, { font, size: 1, ...TEXT_GEOMETRY_OPTS });
  geometry.center();
  // aoMap requires a second UV channel — reuse the primary UVs since we only need *a* mapping
  // for the procedural AO texture, not a precise per-face bake.
  const uv = geometry.getAttribute("uv");
  if (uv) geometry.setAttribute("uv2", uv);
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
