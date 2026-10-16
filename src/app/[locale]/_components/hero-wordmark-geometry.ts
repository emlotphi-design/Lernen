import { BufferGeometry, Color, Float32BufferAttribute, ShapeUtils, Uint32BufferAttribute, Vector2 } from "three";

/** Morph-ready 3D lettering for the hero wordmark.
 *
 *  Input is one glyph outline per *style* — the same variable font (Recursive) sampled at several
 *  axis positions. A variable font's instances share an identical point structure per glyph, so
 *  every style yields the same command sequence; each glyph is therefore built ONCE as a single
 *  indexed mesh (topology from style 0), and every other style is a morph target (positions,
 *  normals, colors) on that same mesh. Blending morph influences on the GPU morphs the letterforms
 *  smoothly — no remounting, no re-triangulation, no per-frame geometry work.
 *
 *  Shape: a shallow extruded body whose front edge rolls over in a quarter-round "inflated" rim
 *  (offset rings stepping inward and up), topped by a cap. */

export type MorphFont = {
  styles: string[];
  glyphs: Record<string, { types: string; advances: number[]; coords: number[][] }>;
};

/** Curve sampling — fixed per command type, so every style samples to the same point count. */
const QUAD_STEPS = 5;
const CUBIC_STEPS = 6;
/** Straight segments are subdivided too, so corner smoothing (smoothContour) has points to work with. */
const LINE_STEPS = 6;
/** Light outline smoothing: rounds sharp corners into small radii (the rounded look the title
 *  wants, and no pinched rim rings at corner tips) while leaving curves essentially unchanged. */
const SMOOTH_PASSES = 2;
const SMOOTH_FACTOR = 0.5;
/** Inflated rim: quarter-round profile reaching RIM_HEIGHT over RIM_RADIUS inward from the outline.
 *  RIM_RADIUS stays below half the thinnest stroke of the chosen (heavy) styles so the inward
 *  rings never cross. */
const RIM_RADIUS = 0.048;
const RIM_HEIGHT = 0.06;
const RIM_RINGS = 7;
/** Body depth behind the rim — kept shallow: dimensional, not a heavy block. */
const DEPTH = 0.1;

type Pt = [number, number];
type Contour = Pt[];

/** Splits a glyph's command stream into sampled contours (one per "M"). */
function sampleContours(types: string, coords: number[]): Contour[] {
  const contours: Contour[] = [];
  let cur: Contour = [];
  let c = 0;
  let pen: Pt = [0, 0];
  for (const t of types) {
    if (t === "M") {
      if (cur.length) contours.push(cur);
      pen = [coords[c++], coords[c++]];
      cur = [pen];
    } else if (t === "L") {
      const [x, y] = [coords[c++], coords[c++]];
      for (let i = 1; i <= LINE_STEPS; i++) {
        const s = i / LINE_STEPS;
        cur.push([pen[0] + (x - pen[0]) * s, pen[1] + (y - pen[1]) * s]);
      }
      pen = [x, y];
    } else if (t === "Q") {
      const [cx, cy, x, y] = [coords[c++], coords[c++], coords[c++], coords[c++]];
      for (let i = 1; i <= QUAD_STEPS; i++) {
        const s = i / QUAD_STEPS, u = 1 - s;
        cur.push([u * u * pen[0] + 2 * u * s * cx + s * s * x, u * u * pen[1] + 2 * u * s * cy + s * s * y]);
      }
      pen = [x, y];
    } else if (t === "C") {
      const [c1x, c1y, c2x, c2y, x, y] = [coords[c++], coords[c++], coords[c++], coords[c++], coords[c++], coords[c++]];
      for (let i = 1; i <= CUBIC_STEPS; i++) {
        const s = i / CUBIC_STEPS, u = 1 - s;
        cur.push([
          u * u * u * pen[0] + 3 * u * u * s * c1x + 3 * u * s * s * c2x + s * s * s * x,
          u * u * u * pen[1] + 3 * u * u * s * c1y + 3 * u * s * s * c2y + s * s * s * y,
        ]);
      }
      pen = [x, y];
    }
  }
  if (cur.length) contours.push(cur);
  return contours.map(smoothContour);
}

/** Laplacian smoothing that keeps the point count (so every style keeps the same topology). */
function smoothContour(contour: Contour): Contour {
  let pts = contour;
  for (let pass = 0; pass < SMOOTH_PASSES; pass++) {
    const n = pts.length;
    pts = pts.map((p, i) => {
      const a = pts[(i - 1 + n) % n], b = pts[(i + 1) % n];
      return [p[0] + SMOOTH_FACTOR * ((a[0] + b[0]) / 2 - p[0]), p[1] + SMOOTH_FACTOR * ((a[1] + b[1]) / 2 - p[1])] as Pt;
    });
  }
  return pts;
}

function signedArea(c: Contour): number {
  let a = 0;
  for (let i = 0, j = c.length - 1; i < c.length; j = i++) a += c[j][0] * c[i][1] - c[i][0] * c[j][1];
  return a / 2;
}

function pointInPolygon([x, y]: Pt, poly: Contour): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Topology decisions made once from style 0 and applied to every style: which sampled points to
 *  drop (closing duplicates), which contours are outers vs. holes, and which way each runs. */
type Plan = {
  keep: number[][]; // per contour, indices of sampled points kept
  parts: { outer: number; holes: number[] }[];
  reverse: boolean[]; // per contour: reverse so outers run CCW and holes CW
};

function planTopology(contours: Contour[]): Plan {
  const keep = contours.map((c) => {
    const idx: number[] = [];
    for (let i = 0; i < c.length; i++) {
      const prev = idx.length ? c[idx[idx.length - 1]] : null;
      if (prev && Math.hypot(c[i][0] - prev[0], c[i][1] - prev[1]) < 1e-6) continue;
      idx.push(i);
    }
    if (idx.length > 2) {
      const a = c[idx[0]], b = c[idx[idx.length - 1]];
      if (Math.hypot(a[0] - b[0], a[1] - b[1]) < 1e-6) idx.pop();
    }
    return idx;
  });
  const kept = contours.map((c, i) => keep[i].map((k) => c[k]));
  const areas = kept.map(signedArea);
  // TrueType: outers share the winding of the largest contour, holes run the other way.
  const outerSign = Math.sign(areas.reduce((best, a) => (Math.abs(a) > Math.abs(best) ? a : best), 0));
  const outers = areas.map((a, i) => (Math.sign(a) === outerSign ? i : -1)).filter((i) => i >= 0);
  const parts = outers.map((outer) => ({ outer, holes: [] as number[] }));
  areas.forEach((a, i) => {
    if (Math.sign(a) === outerSign) return;
    const owner = parts
      .filter((p) => pointInPolygon(kept[i][0], kept[p.outer]))
      .sort((p, q) => Math.abs(areas[p.outer]) - Math.abs(areas[q.outer]))[0];
    (owner ?? parts[0]).holes.push(i);
  });
  const reverse = areas.map((a) => (Math.sign(a) === outerSign ? a < 0 : a > 0));
  return { keep, parts, reverse };
}

/** Per part: where its cap and back-cap vertices start, and the 2D loops they lie on. */
type PartLayout = { capStart: number; backStart: number; capRings: Pt[][]; backLoops: Pt[][] };
type Built = { positions: Float32Array; index: number[]; parts: PartLayout[] };

/** Points closer than this are treated as one when estimating a contour's direction — the stored
 *  outlines are rounded to 1e-4, which leaves micro-segments whose own direction is noise. */
const TANGENT_EPS = 0.004;
/** A vertex's rim never reaches further inward than this fraction of the local stroke thickness,
 *  so narrow features (the tapered stem of "!", sharp corners) never fold over themselves. */
const MAX_RIM_FRACTION = 0.42;

/** Inward (towards the material) unit direction at each loop vertex: the left normal of the
 *  tangent through the nearest sufficiently-distant neighbors on either side. Left of travel is the
 *  material side for CCW outers and CW holes alike. */
function inwardDirections(loop: Contour): Pt[] {
  const n = loop.length;
  return loop.map((p, i) => {
    let prev = loop[(i - 1 + n) % n], next = loop[(i + 1) % n];
    for (let s = 1; s < Math.min(n, 12) && Math.hypot(prev[0] - p[0], prev[1] - p[1]) < TANGENT_EPS; s++) prev = loop[(i - s - 1 + 2 * n) % n];
    for (let s = 1; s < Math.min(n, 12) && Math.hypot(next[0] - p[0], next[1] - p[1]) < TANGENT_EPS; s++) next = loop[(i + s + 1) % n];
    const tx = next[0] - prev[0], ty = next[1] - prev[1], len = Math.hypot(tx, ty) || 1;
    return [-ty / len, tx / len] as Pt;
  });
}

/** One light pass of neighbor averaging on the inward directions: tight corners then fan their
 *  rim rings out gradually instead of in one abrupt turn, which is where rings would otherwise fold. */
function smoothDirections(dirs: Pt[]): Pt[] {
  const n = dirs.length;
  return dirs.map((d, i) => {
    const a = dirs[(i - 1 + n) % n], b = dirs[(i + 1) % n];
    const x = a[0] + 2 * d[0] + b[0], y = a[1] + 2 * d[1] + b[1], len = Math.hypot(x, y) || 1;
    return [x / len, y / len] as Pt;
  });
}

/** Distance along the ray (p, dir) to the nearest segment of the part, ignoring segments that touch p. */
function rayHit(p: Pt, dir: Pt, segments: [Pt, Pt][]): number {
  let best = Infinity;
  for (const [a, b] of segments) {
    if ((a[0] === p[0] && a[1] === p[1]) || (b[0] === p[0] && b[1] === p[1])) continue;
    const ex = b[0] - a[0], ey = b[1] - a[1];
    const den = dir[0] * ey - dir[1] * ex;
    if (Math.abs(den) < 1e-12) continue;
    const ax = a[0] - p[0], ay = a[1] - p[1];
    const t = (ax * ey - ay * ex) / den;
    const u = (ax * dir[1] - ay * dir[0]) / den;
    if (t > 1e-5 && u >= 0 && u <= 1 && t < best) best = t;
  }
  return best;
}

/** Builds one style's vertex positions in a fixed order (identical across styles), plus the index
 *  buffer (only used from style 0 — the topology every style shares). */
function buildStyle(contours: Contour[], plan: Plan, withIndex: boolean): Built {
  const pos: number[] = [];
  const index: number[] = [];
  const layouts: PartLayout[] = [];
  const loopsOf = (i: number): Contour => {
    const pts = plan.keep[i].map((k) => contours[i][k]);
    return plan.reverse[i] ? pts.reverse() : pts;
  };
  const capZ = DEPTH / 2 + RIM_HEIGHT;

  // Overlapping parts (e.g. the stem and bar of "L") share the exact cap height: inside an
  // overlap each part's rim sits below the other's cap and is hidden, so the union reads as one
  // smooth letter. Caps get their own vertices (exactly flat normals), so coincident caps shade
  // identically and their overlap is invisible.
  plan.parts.forEach((part) => {
    const loops = [part.outer, ...part.holes].map(loopsOf);
    const segments: [Pt, Pt][] = loops.flatMap((l) => l.map((p, i) => [p, l[(i + 1) % l.length]] as [Pt, Pt]));
    const ringStart: number[][] = []; // [loop][ring] → first vertex index of that ring
    const innerRings: Pt[][] = [];

    for (const loop of loops) {
      const n = loop.length;
      const inward = smoothDirections(smoothDirections(smoothDirections(inwardDirections(loop))));
      const radius = loop.map((p, i) => Math.min(RIM_RADIUS, rayHit(p, inward[i], segments) * MAX_RIM_FRACTION));

      const starts: number[] = [];
      for (let k = 0; k <= RIM_RINGS; k++) {
        const theta = (k / RIM_RINGS) * (Math.PI / 2);
        const z = DEPTH / 2 + RIM_HEIGHT * Math.sin(theta);
        starts.push(pos.length / 3);
        for (let i = 0; i < n; i++) {
          const d = radius[i] * (1 - Math.cos(theta));
          pos.push(loop[i][0] + inward[i][0] * d, loop[i][1] + inward[i][1] * d, z);
        }
      }
      // Bottom of the side wall.
      starts.push(pos.length / 3);
      for (let i = 0; i < n; i++) pos.push(loop[i][0], loop[i][1], -DEPTH / 2);
      ringStart.push(starts);
      innerRings.push(loop.map((p, i) => [p[0] + inward[i][0] * radius[i], p[1] + inward[i][1] * radius[i]] as Pt));

      if (withIndex) {
        // Rim bands, ring k → k+1 (inward and up); then the wall, rim edge → bottom.
        for (let k = 0; k < RIM_RINGS; k++) {
          for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            const a = starts[k] + i, b = starts[k] + j, c = starts[k + 1] + j, d = starts[k + 1] + i;
            index.push(a, b, c, a, c, d);
          }
        }
        const top = starts[0], bottom = starts[RIM_RINGS + 1];
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          index.push(top + i, bottom + j, top + j, top + i, bottom + i, bottom + j);
        }
      }
    }

    // Front cap on the innermost rim ring, and back cap — both with their own vertices.
    const capStart = pos.length / 3;
    for (const ring of innerRings) for (const p of ring) pos.push(p[0], p[1], capZ);
    const backStart = pos.length / 3;
    for (const loop of loops) for (const p of loop) pos.push(p[0], p[1], -DEPTH / 2);

    layouts.push({ capStart, backStart, capRings: innerRings, backLoops: loops });
  });
  return { positions: new Float32Array(pos), index, parts: layouts };
}

const toV2 = ([x, y]: Pt) => new Vector2(x, y);

/** Average of the same loops across all styles (identical point counts by construction). */
function averageLoops(perStyle: Pt[][][]): Pt[][] {
  return perStyle[0].map((loop, li) =>
    loop.map((_, pi) => {
      let x = 0, y = 0;
      for (const style of perStyle) { x += style[li][pi][0]; y += style[li][pi][1]; }
      return [x / perStyle.length, y / perStyle.length] as Pt;
    }),
  );
}

/** Triangulates a flat cap (first loop = outer, rest = holes) and appends it to the index, facing
 *  +z (front) or -z (back). Done on the *average* shape of all styles: every style then deviates as
 *  little as possible from the shape its triangles were built for. Any residual sliver that still
 *  flips mid-morph is drawn anyway (the material renders both sides with front-facing shading,
 *  see hero-wordmark-scene.tsx) and has an explicit flat normal (see capNormals), so it can't
 *  punch a hole or a dark patch into the cap. */
function appendCap(index: number[], loops: Pt[][], start: number, front: boolean) {
  const [outer, ...holes] = loops;
  const all = loops.flat();
  for (const [a, b, c] of ShapeUtils.triangulateShape(outer.map(toV2), holes.map((h) => h.map(toV2)))) {
    const [pa, pb, pc] = [all[a], all[b], all[c]];
    const ccw = (pb[0] - pa[0]) * (pc[1] - pa[1]) - (pb[1] - pa[1]) * (pc[0] - pa[0]) > 0;
    if (ccw === front) index.push(start + a, start + b, start + c);
    else index.push(start + a, start + c, start + b);
  }
}

/** Smooth vertex normals for one style's positions over the shared index. */
function normalsFor(positions: Float32Array, index: number[]): Float32Array {
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(positions, 3));
  g.setIndex(index);
  g.computeVertexNormals();
  const normals = (g.getAttribute("normal").array as Float32Array).slice();
  g.dispose();
  return normals;
}

export type WordmarkGlyph = { geometry: BufferGeometry; pivotX: number };

/** Colors a style: left→right gradient across the word, a lighter upper band, and walls that
 *  deepen toward the back (the same depth cue the background words use). */
export type StylePalette = { stops: Color[]; top: Color; backShade: number };

/** RGBA (alpha always 1): three r185 declares the color varying as vec4 but its morph-color chunk
 *  only adds a vec3 for RGB colors, which fails to compile — the RGBA path is correct. */
function colorsFor(positions: Float32Array, wordMinX: number, wordWidth: number, palette: StylePalette, capTop: number) {
  const out = new Float32Array((positions.length / 3) * 4);
  const col = new Color();
  const top = new Color();
  for (let i = 0; i < positions.length; i += 3) {
    const xT = Math.min(Math.max((positions[i] - wordMinX) / wordWidth, 0), 1);
    const scaled = xT * (palette.stops.length - 1);
    const s = Math.min(Math.floor(scaled), palette.stops.length - 2);
    col.copy(palette.stops[s]).lerp(palette.stops[s + 1], scaled - s);
    const yT = Math.min(Math.max(positions[i + 1] / capTop, 0), 1);
    top.copy(col).lerp(palette.top, 0.5);
    col.lerp(top, Math.max(0, (yT - 0.5) / 0.5) ** 1.5);
    const zT = Math.min(Math.max((DEPTH / 2 - positions[i + 2]) / DEPTH, 0), 1);
    col.multiplyScalar(1 - (1 - palette.backShade) * zT);
    const o = (i / 3) * 4;
    out[o] = col.r; out[o + 1] = col.g; out[o + 2] = col.b; out[o + 3] = 1;
  }
  return out;
}

/** Builds every glyph of `text` as one morphing mesh each. All styles are normalized to the same
 *  overall word width and centered on the same point, so morphing never changes the title's
 *  footprint or position. */
export function buildWordmark(font: MorphFont, text: string, palettes: StylePalette[]) {
  const styleCount = font.styles.length;
  const chars = Array.from(text);

  // Per style: sampled contours of every glyph, laid out with that style's advances.
  const perStyle = Array.from({ length: styleCount }, (_, s) => {
    let pen = 0;
    const glyphs = chars.map((ch) => {
      const g = font.glyphs[ch];
      const contours = g.types ? sampleContours(g.types, g.coords[s]).map((c) => c.map(([x, y]) => [x + pen, y] as Pt)) : [];
      pen += g.advances[s];
      return contours;
    });
    let minX = Infinity, maxX = -Infinity, maxY = 0;
    for (const cs of glyphs) for (const c of cs) for (const [x, y] of c) { minX = Math.min(minX, x); maxX = Math.max(maxX, x); maxY = Math.max(maxY, y); }
    return { glyphs, minX, maxX, maxY };
  });

  // Normalize each style to style 0's width and center (dimensions stay fixed while morphing).
  const ref = perStyle[0];
  const refWidth = ref.maxX - ref.minX;
  for (const st of perStyle) {
    const sx = refWidth / (st.maxX - st.minX);
    const cx = (st.minX + st.maxX) / 2;
    for (const cs of st.glyphs) for (const c of cs) for (const p of c) p[0] = (p[0] - cx) * sx;
  }
  const capTop = Math.max(...perStyle.map((st) => st.maxY));

  const result: WordmarkGlyph[] = [];
  chars.forEach((ch, gi) => {
    if (!font.glyphs[ch].types) return;
    const plan = planTopology(perStyle[0].glyphs[gi]);
    const builds = perStyle.map((st, s) => buildStyle(st.glyphs[gi], plan, s === 0));
    const index = builds[0].index;
    builds[0].parts.forEach((part, pi) => {
      appendCap(index, averageLoops(builds.map((b) => b.parts[pi].capRings)), part.capStart, true);
      appendCap(index, averageLoops(builds.map((b) => b.parts[pi].backLoops)), part.backStart, false);
    });
    // Pivot at the glyph's style-0 center (baseline y=0) so per-letter motion anchors on the letter.
    let minX = Infinity, maxX = -Infinity;
    for (let i = 0; i < builds[0].positions.length; i += 3) { minX = Math.min(minX, builds[0].positions[i]); maxX = Math.max(maxX, builds[0].positions[i]); }
    const pivotX = (minX + maxX) / 2;

    const geometry = new BufferGeometry();
    const local = builds.map((b) => {
      const p = b.positions.slice();
      for (let i = 0; i < p.length; i += 3) p[i] -= pivotX;
      return p;
    });
    const colors = builds.map((b, s) => colorsFor(b.positions, -refWidth / 2, refWidth, palettes[s % palettes.length], capTop));
    const normals = builds.map((b) => {
      const n = normalsFor(b.positions, index);
      // Flat caps get exact normals: averaged face normals there could be skewed by a flipped sliver.
      for (const part of b.parts) {
        const capCount = part.capRings.reduce((acc, r) => acc + r.length, 0);
        const backCount = part.backLoops.reduce((acc, r) => acc + r.length, 0);
        for (let v = part.capStart; v < part.capStart + capCount; v++) n.set([0, 0, 1], v * 3);
        for (let v = part.backStart; v < part.backStart + backCount; v++) n.set([0, 0, -1], v * 3);
      }
      return n;
    });
    geometry.setIndex(new Uint32BufferAttribute(index, 1));
    geometry.setAttribute("position", new Float32BufferAttribute(local[0], 3));
    geometry.setAttribute("normal", new Float32BufferAttribute(normals[0], 3));
    geometry.setAttribute("color", new Float32BufferAttribute(colors[0], 4));
    geometry.morphAttributes.position = local.slice(1).map((p) => new Float32BufferAttribute(p, 3));
    geometry.morphAttributes.normal = normals.slice(1).map((n) => new Float32BufferAttribute(n, 3));
    geometry.morphAttributes.color = colors.slice(1).map((c) => new Float32BufferAttribute(c, 4));
    geometry.morphTargetsRelative = false;
    geometry.computeBoundingSphere();
    result.push({ geometry, pivotX });
  });

  return { glyphs: result, width: refWidth, capTop, styleCount };
}
