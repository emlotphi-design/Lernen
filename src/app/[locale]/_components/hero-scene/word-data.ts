export type WordTier = "large" | "medium" | "small";
export type DepthTier = "close" | "mid" | "far";

export type WordInstance = {
  id: string;
  text: string;
  tier: WordTier;
  depthTier: DepthTier;
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  /** Deterministic per-instance animation offset — kept only so identical words can still be told
   *  apart by downstream effects (e.g. staggering a reactive wobble), not for idle motion. */
  phase: number;
};

/** Saturated, candy-glossy but still premium palette — reads as "colorful plastic," not neon. */
const PALETTE = [
  "#5b7fa6", // dusty blue
  "#c25850", // coral maroon
  "#6a9159", // sage green
  "#c99a3f", // olive gold
  "#8d78b8", // soft violet
  "#a89a7e", // warm sand
  "#c97a52", // terracotta
  "#4a8783", // deep teal
  "#d4677a", // rose
  "#5f9bb0", // sky teal
  "#b8894a", // amber
  "#7d8f5c", // moss
];

// Another ~38% smaller on top of the previous pass (within the requested 35-40% reduction),
// combined with another 2x instance count below and the camera pulling back slightly (see
// CAMERA_REFERENCE_Z) — a much larger, denser "dumped from a truck" pile.
const TIER_SIZE: Record<WordTier, number> = {
  large: 0.43,
  medium: 0.25,
  small: 0.16,
};

export const WORD_SIZE = TIER_SIZE;

/** Deterministic hash-based PRNG substitute — pure function of (seed, channel), stable across reloads/SSR. */
function rand(seed: number, channel: number): number {
  const x = Math.sin(seed * 12.9898 + channel * 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

// Unique word count directly drives draw-call count (one InstancedMesh per unique word), which
// dominates frame cost far more than instance count does — kept deliberately smaller than the
// instance total, with repeats filling out the density instead.
const LARGE_WORDS = ["DER", "DIE", "DAS", "Nominativ", "Akkusativ", "Dativ", "Genitiv"];

const MEDIUM_WORDS = [
  "Konjunktiv", "Perfekt", "Plusquamperfekt", "Präsens", "Futur I", "Futur II",
  "Imperativ", "Passiv", "Aktiv", "Modalverben", "Adjektive", "Pronomen",
  "Präpositionen", "Artikel", "Verb", "Adverb", "Substantiv", "Plural",
];

const SMALL_WORDS = [
  "Nebensatz", "Hauptsatz", "Relativsatz", "Komparativ", "Superlativ", "Kasus",
  "Genus", "Numerus", "Konjunktion", "Interjektion", "Subjekt", "Objekt",
  "Prädikat", "Possessiv", "Reflexiv", "Indefinit", "Demonstrativ", "Interrogativ",
];

/** How many instances to place per tier — 2000 words total. Bumped up from the previous 1200 to
 *  keep density high now that the redistribution below (see EDGE_MARGIN_FACTOR) spreads words
 *  uniformly across the full viewport instead of concentrating them near the center — the same
 *  word count spread over a bigger effective area would otherwise read as thinner, not richer. */
const TIER_INSTANCE_COUNT: Record<WordTier, number> = {
  large: 200,
  medium: 1000,
  small: 800,
};

function pickWord(list: string[], i: number): string {
  return list[(i * 13 + 7) % list.length];
}

/** Camera sits at roughly z=15 looking at the origin (pulled back slightly from the previous 13 to
 *  reveal more of the pile), fov=45deg vertical — matches hero-scene.tsx exactly; mouse-rigid-body.tsx
 *  has its own matching CAMERA_Z used for the interaction reach's depth taper. Placement is computed
 *  in normalized screen space (fractions of the visible frustum at a given depth) and only converted
 *  to world XY at the end, so the safe zone around the title reads correctly on screen regardless of
 *  how close or far an instance sits, and regardless of the camera's exact distance. */
const CAMERA_REFERENCE_Z = 15;
const HALF_FOV_RAD = ((45 * Math.PI) / 180) / 2;
const REFERENCE_ASPECT = 1.6;

/** Normalized-screen-space half-extents of the "always clear" ellipse around the title/CTA block —
 *  slightly wider than before for a cleaner opening now that the pile is much denser. */
const SAFE_NS_X = 0.42;
const SAFE_NS_Y = 0.68;

function ellipseRadius(theta: number, rx: number, ry: number): number {
  const c = Math.cos(theta);
  const s = Math.sin(theta);
  return 1 / Math.sqrt((c * c) / (rx * rx) + (s * s) / (ry * ry));
}

/** NS-space radius of the rectangular viewport boundary in a given direction — 1.0 when pointing
 *  straight at a side, growing to sqrt(2)≈1.41 at the corners, since nsx/nsy are independently
 *  normalized to the screen's width/height (see buildTier). A single fixed-radius outer boundary
 *  either clips words off the sides early or never reaches the corners at all; this shape actually
 *  matches the viewport, so words spawn evenly across the full visible area including all four
 *  corners instead of concentrating in a ring hugging the center. */
function edgeRadiusForTheta(theta: number): number {
  const c = Math.abs(Math.cos(theta));
  const s = Math.abs(Math.sin(theta));
  return 1 / Math.max(c, s, 1e-6);
}
/** How far past the literal screen edge the outer spawn boundary extends — a bit of natural
 *  overflow so the pile's outer fringe reads as continuing past the frame instead of stopping in a
 *  hard visible ring right at the edge. */
const EDGE_MARGIN_FACTOR = 1.18;

/** Irregular, non-circular undulation via a few summed sinusoids at different frequencies/phases —
 *  cheap deterministic "noise" so the mass boundary emerges organically instead of a perfect ellipse. */
function blobUndulation(theta: number, seedOffset: number): number {
  const n1 = Math.sin(theta * 3 + seedOffset) * 0.22;
  const n2 = Math.cos(theta * 5 - seedOffset * 1.7) * 0.13;
  const n3 = Math.sin(theta * 8 + seedOffset * 2.3) * 0.08;
  return n1 + n2 + n3;
}

function pickDepthTier(
  i: number,
  tier: WordTier,
): { depthTier: DepthTier; z: number; scaleMul: number } {
  const r = rand(i, 5);
  if (r < 0.07) {
    // Extremely close — almost brushing the camera. Large-tier words stay a little more modest here
    // so a single close-up word can't balloon to dominate the whole frame.
    const base = tier === "large" ? 0.55 : 0.7;
    return { depthTier: "close", z: 4.5 + rand(i, 5.2) * 3, scaleMul: base + rand(i, 5.3) * 0.25 };
  }
  if (r > 0.68) {
    // Deep background — recedes into haze/fog. Still sized to contribute real visual mass (not
    // just faint specks) so the pile reads as dense all the way to its edges, not just up front.
    return { depthTier: "far", z: -22 + rand(i, 5.2) * -8, scaleMul: 0.72 + rand(i, 5.3) * 0.25 };
  }
  return { depthTier: "mid", z: -6 + rand(i, 5.2) * 10, scaleMul: 0.85 + rand(i, 5.3) * 0.35 };
}

/** Axis-aligned footprint in normalized screen space, used only for the packing pass below. */
type PackedRect = { cx: number; cy: number; hw: number; hh: number };

const GOLDEN_ANGLE = 2.399963229728653;
const PACK_CELL_SIZE = 0.09;
const PACK_MAX_ATTEMPTS = 420;
/** Shrinks both rects before testing overlap — <1 lets neighbors sit snug/overlapping instead of
 *  demanding a full gap, which is what makes the rest pose read as "packed" instead of "scattered". */
const PACK_OVERLAP_TOLERANCE = 0.78;
/** How far a word's actual packed spot may be nudged, in normalized-screen units, away from its
 *  precomputed uniform-density target while resolving local collisions with already-placed
 *  neighbors — kept small and fixed regardless of how many attempts it takes, so high local
 *  density degrades into "these words overlap a bit" (fine — see PACK_OVERLAP_TOLERANCE) rather
 *  than the search drifting back toward the inner boundary. That drift was the actual bug behind
 *  the pile concentrating near the center: the old approach searched *outward from the safe zone*
 *  on every attempt, so with room to spare near the middle, most words simply never needed to
 *  travel far before finding free space — the outer viewport (and especially the corners) was
 *  reachable but rarely actually used. */
const LOCAL_ANGLE_RANGE = 0.7;
const LOCAL_RADIUS_RANGE = 0.42;

/** Uniform-grid spatial hash so an overlap test only has to check nearby rects, not every rect
 *  placed so far — keeps packing hundreds of words at build time effectively linear instead of
 *  quadratic. */
class SpatialHash {
  private cells = new Map<string, PackedRect[]>();

  private key(cx: number, cy: number): string {
    return `${Math.floor(cx / PACK_CELL_SIZE)}:${Math.floor(cy / PACK_CELL_SIZE)}`;
  }

  insert(rect: PackedRect): void {
    const minCx = Math.floor((rect.cx - rect.hw) / PACK_CELL_SIZE);
    const maxCx = Math.floor((rect.cx + rect.hw) / PACK_CELL_SIZE);
    const minCy = Math.floor((rect.cy - rect.hh) / PACK_CELL_SIZE);
    const maxCy = Math.floor((rect.cy + rect.hh) / PACK_CELL_SIZE);
    for (let gx = minCx; gx <= maxCx; gx++) {
      for (let gy = minCy; gy <= maxCy; gy++) {
        const k = `${gx}:${gy}`;
        const bucket = this.cells.get(k);
        if (bucket) bucket.push(rect);
        else this.cells.set(k, [rect]);
      }
    }
  }

  overlapsAny(rect: PackedRect): boolean {
    const minCx = Math.floor((rect.cx - rect.hw) / PACK_CELL_SIZE);
    const maxCx = Math.floor((rect.cx + rect.hw) / PACK_CELL_SIZE);
    const minCy = Math.floor((rect.cy - rect.hh) / PACK_CELL_SIZE);
    const maxCy = Math.floor((rect.cy + rect.hh) / PACK_CELL_SIZE);
    const seen = new Set<PackedRect>();
    for (let gx = minCx; gx <= maxCx; gx++) {
      for (let gy = minCy; gy <= maxCy; gy++) {
        const bucket = this.cells.get(`${gx}:${gy}`);
        if (!bucket) continue;
        for (const other of bucket) {
          if (seen.has(other)) continue;
          seen.add(other);
          const ahw = rect.hw * PACK_OVERLAP_TOLERANCE;
          const ahh = rect.hh * PACK_OVERLAP_TOLERANCE;
          const bhw = other.hw * PACK_OVERLAP_TOLERANCE;
          const bhh = other.hh * PACK_OVERLAP_TOLERANCE;
          if (Math.abs(rect.cx - other.cx) < ahw + bhw && Math.abs(rect.cy - other.cy) < ahh + bhh) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

/** Finds a non-overlapping (or best-effort) spot for one word close to its precomputed
 *  uniform-density target (targetTheta, targetR) — biggest words are packed first by the caller,
 *  so they claim their target spot with the least competition and smaller words squeeze into the
 *  local gaps around them. Unlike an outward search from the inner boundary, this stays within a
 *  small fixed neighborhood of the target (see LOCAL_ANGLE_RANGE/LOCAL_RADIUS_RANGE) so the
 *  *population* ends up distributed the way the caller intended — uniformly across the whole
 *  viewport, corners included — rather than collapsing back toward the center under light-to-
 *  moderate local density. Both offsets use golden-ratio low-discrepancy sequences so the ~400
 *  attempts thoroughly cover the local neighborhood instead of clustering. */
function packRect(
  halfW: number,
  halfH: number,
  targetTheta: number,
  targetR: number,
  rMin: number,
  rMax: number,
  hash: SpatialHash,
): { x: number; y: number } {
  let fallback: { x: number; y: number } | null = null;

  for (let i = 0; i < PACK_MAX_ATTEMPTS; i++) {
    const angleFrac = ((i * GOLDEN_ANGLE) / (Math.PI * 2)) % 1;
    const radiusFrac = (i * 0.6180339887498949) % 1;
    const theta = targetTheta + (angleFrac * 2 - 1) * LOCAL_ANGLE_RANGE;
    const r = Math.min(Math.max(targetR + (radiusFrac * 2 - 1) * LOCAL_RADIUS_RANGE, rMin), rMax);
    const x = Math.cos(theta) * r;
    const y = Math.sin(theta) * r;
    const rect: PackedRect = { cx: x, cy: y, hw: halfW, hh: halfH };
    if (!fallback) fallback = { x, y };
    if (!hash.overlapsAny(rect)) {
      hash.insert(rect);
      return { x, y };
    }
  }

  // Every local attempt collided — rare, only under extreme density. Accept the original target
  // anyway (rather than escaping to some distant free spot) so the aggregate distribution stays
  // uniform; physics will gently resolve the residual overlap on load.
  const accepted = fallback ?? { x: Math.cos(targetTheta) * targetR, y: Math.sin(targetTheta) * targetR };
  hash.insert({ cx: accepted.x, cy: accepted.y, hw: halfW, hh: halfH });
  return accepted;
}

type PendingWord = {
  seed: number;
  tier: WordTier;
  text: string;
  depthTier: DepthTier;
  z: number;
  scale: number;
  worldHalfWidth: number;
  worldHalfHeight: number;
  nsHalfWidth: number;
  nsHalfHeight: number;
  /** This word's fixed placement angle — chosen once here (not in packLayer) since the target
   *  radius below depends on it. */
  theta0: number;
  /** Inner clearance (the safe-zone boundary, inflated by this word's own footprint) and outer
   *  boundary (the viewport edge, plus margin) at this word's theta0. */
  rMin: number;
  rMax: number;
  /** Sampled so that, in aggregate across every word in a layer, position density is uniform per
   *  unit *area* from rMin to rMax — i.e. sqrt of a uniformly-random fraction of the annulus's
   *  area, not a uniformly-random radius (which would bias toward the inner edge, since area
   *  shrinks faster than radius as you approach the center). This is what actually distributes
   *  words evenly across the viewport, corners included; packRect's local search only nudges this
   *  target slightly to resolve exact overlaps with neighbors. */
  targetR: number;
};

function buildTier(tier: WordTier, words: string[], count: number, seedBase: number): PendingWord[] {
  const out: PendingWord[] = [];
  for (let i = 0; i < count; i++) {
    const seed = seedBase + i;
    const text = pickWord(words, i);
    const { depthTier, z, scaleMul } = pickDepthTier(seed, tier);
    const distFromCamera = CAMERA_REFERENCE_Z - z;
    const worldHalfHeight = distFromCamera * Math.tan(HALF_FOV_RAD);
    const worldHalfWidth = worldHalfHeight * REFERENCE_ASPECT;

    const scale = TIER_SIZE[tier] * scaleMul;
    // How big this instance's own glyph body reads as a fraction of the screen at its depth — used
    // both to keep it clear of the title and as its packing footprint.
    const nsHalfWidth = (text.length * 0.58 * scale * 0.5) / worldHalfWidth;
    const nsHalfHeight = (scale * 0.55) / worldHalfHeight;

    const effRx = SAFE_NS_X + nsHalfWidth * 2.4;
    const effRy = SAFE_NS_Y + nsHalfHeight * 2.4;

    const theta0 = rand(seed, 1) * Math.PI * 2;
    const safeR = ellipseRadius(theta0, effRx, effRy);
    const undulation = Math.max(blobUndulation(theta0, seedBase * 0.37 + 1.1), 0);
    const rMin = safeR * (1 + undulation * 0.6);
    const rMax = Math.max(edgeRadiusForTheta(theta0) * EDGE_MARGIN_FACTOR, rMin + 0.05);
    const areaFrac = rand(seed, 11);
    const targetR = Math.sqrt(rMin * rMin + (rMax * rMax - rMin * rMin) * areaFrac);

    out.push({
      seed, tier, text, depthTier, z, scale, worldHalfWidth, worldHalfHeight,
      nsHalfWidth, nsHalfHeight, theta0, rMin, rMax, targetR,
    });
  }
  return out;
}

function packLayer(words: PendingWord[]): WordInstance[] {
  // Biggest footprint first — see packRect's doc comment for why this ordering matters.
  const ordered = [...words].sort(
    (a, b) => b.nsHalfWidth * b.nsHalfHeight - a.nsHalfWidth * a.nsHalfHeight,
  );
  const hash = new SpatialHash();
  const result: WordInstance[] = [];

  for (const w of ordered) {
    const { x: nsx, y: nsy } = packRect(w.nsHalfWidth, w.nsHalfHeight, w.theta0, w.targetR, w.rMin, w.rMax, hash);

    const x = nsx * w.worldHalfWidth;
    const y = nsy * w.worldHalfHeight;

    // Pitch/yaw stay modest so words don't foreshorten edge-on into unreadable blocks; roll can swing
    // further since a tilted word is still legible, just diagonal — that's the "tumbled sculpture" look.
    const rx = (rand(w.seed, 6) - 0.5) * 0.5;
    const ry = (rand(w.seed, 7) - 0.5) * 0.7;
    const rz = (rand(w.seed, 8) - 0.5) * 1.0;

    result.push({
      id: `${w.tier}-${w.seed}-${w.text}`,
      text: w.text,
      tier: w.tier,
      depthTier: w.depthTier,
      color: PALETTE[Math.floor(rand(w.seed, 9) * PALETTE.length) % PALETTE.length],
      position: [x, y, w.z],
      rotation: [rx, ry, rz],
      scale: w.scale,
      phase: rand(w.seed, 10) * Math.PI * 2,
    });
  }

  return result;
}

function buildAllInstances(): WordInstance[] {
  const pending = [
    ...buildTier("large", LARGE_WORDS, TIER_INSTANCE_COUNT.large, 1000),
    ...buildTier("medium", MEDIUM_WORDS, TIER_INSTANCE_COUNT.medium, 3000),
    ...buildTier("small", SMALL_WORDS, TIER_INSTANCE_COUNT.small, 7000),
  ];

  // Packed independently per depth band: close/mid/far sit in well-separated z ranges (see
  // pickDepthTier), so words in different bands never actually touch — packing them as one shared
  // 2D layer would only waste time avoiding collisions that physics would never need to resolve.
  const byDepth: Record<DepthTier, PendingWord[]> = { close: [], mid: [], far: [] };
  for (const w of pending) byDepth[w.depthTier].push(w);

  return [...packLayer(byDepth.close), ...packLayer(byDepth.mid), ...packLayer(byDepth.far)];
}

export const WORD_INSTANCES: WordInstance[] = buildAllInstances();

export const UNIQUE_WORD_TEXTS: string[] = Array.from(new Set(WORD_INSTANCES.map((w) => w.text)));
