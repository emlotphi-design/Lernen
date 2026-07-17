import { CanvasTexture, NoColorSpace, RepeatWrapping } from "three";

const TEXTURE_SIZE = 256;
/** How many times the texture tiles across a word's surface — high enough that the grain reads as
 *  fine micro-detail rather than a single visible blotch per letter. */
const REPEAT = 8;

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Fine per-pixel grain (the dominant "painted plastic / powder-coat" texture) layered with a
 *  handful of large, low-contrast wear blotches and a few faint hairline scratches — a plain
 *  grayscale heightfield that the normal/roughness/AO maps below are all derived from, so the
 *  bump detail, roughness variation, and occlusion darkening line up with each other. */
function buildHeightfield(): Float32Array {
  const size = TEXTURE_SIZE;
  const height = new Float32Array(size * size).fill(128);
  const rand = seededRandom(1337);

  for (let i = 0; i < size * size; i++) {
    height[i] += (rand() - 0.5) * 22;
  }

  const blotchCount = 10;
  for (let b = 0; b < blotchCount; b++) {
    const cx = rand() * size;
    const cy = rand() * size;
    const radius = 24 + rand() * 46;
    const strength = (rand() - 0.5) * 16;
    const r2 = radius * radius;
    const minX = Math.max(0, Math.floor(cx - radius));
    const maxX = Math.min(size, Math.ceil(cx + radius));
    const minY = Math.max(0, Math.floor(cy - radius));
    const maxY = Math.min(size, Math.ceil(cy + radius));
    for (let y = minY; y < maxY; y++) {
      for (let x = minX; x < maxX; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const d2 = dx * dx + dy * dy;
        if (d2 > r2) continue;
        const falloff = 1 - d2 / r2;
        height[y * size + x] += strength * falloff * falloff;
      }
    }
  }

  const scratchCount = 14;
  for (let s = 0; s < scratchCount; s++) {
    const x0 = rand() * size;
    const y0 = rand() * size;
    const angle = rand() * Math.PI * 2;
    const len = 10 + rand() * 30;
    const x1 = x0 + Math.cos(angle) * len;
    const y1 = y0 + Math.sin(angle) * len;
    const steps = Math.ceil(len);
    const strength = (rand() < 0.5 ? -1 : 1) * (3 + rand() * 5);
    for (let t = 0; t <= steps; t++) {
      const px = Math.round(x0 + (x1 - x0) * (t / steps));
      const py = Math.round(y0 + (y1 - y0) * (t / steps));
      if (px < 0 || px >= size || py < 0 || py >= size) continue;
      height[py * size + px] += strength;
      if (px + 1 < size) height[py * size + px + 1] += strength * 0.4;
      if (py + 1 < size) height[(py + 1) * size + px] += strength * 0.4;
    }
  }

  return height;
}

export type SurfaceTextures = ReturnType<typeof buildSurfaceTextures>;

function buildSurfaceTextures() {
  const size = TEXTURE_SIZE;
  const height = buildHeightfield();

  // Normal map — central-difference gradient of the heightfield, encoded as tangent-space RGB.
  const normalCanvas = document.createElement("canvas");
  normalCanvas.width = size;
  normalCanvas.height = size;
  const nCtx = normalCanvas.getContext("2d")!;
  const nImg = nCtx.createImageData(size, size);
  const gradientStrength = 1.6;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const xL = height[y * size + ((x - 1 + size) % size)];
      const xR = height[y * size + ((x + 1) % size)];
      const yU = height[((y - 1 + size) % size) * size + x];
      const yD = height[((y + 1) % size) * size + x];
      const dx = ((xL - xR) / 255) * gradientStrength;
      const dy = ((yU - yD) / 255) * gradientStrength;
      const len = Math.sqrt(dx * dx + dy * dy + 1);
      const nx = dx / len;
      const ny = dy / len;
      const nz = 1 / len;
      const idx = (y * size + x) * 4;
      nImg.data[idx] = Math.round((nx * 0.5 + 0.5) * 255);
      nImg.data[idx + 1] = Math.round((ny * 0.5 + 0.5) * 255);
      nImg.data[idx + 2] = Math.round((nz * 0.5 + 0.5) * 255);
      nImg.data[idx + 3] = 255;
    }
  }
  nCtx.putImageData(nImg, 0, 0);

  // Roughness map — the heightfield directly, as fine grayscale variation around a mid value.
  const roughCanvas = document.createElement("canvas");
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext("2d")!;
  const rImg = rCtx.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    const v = Math.max(0, Math.min(255, height[i]));
    rImg.data[i * 4] = v;
    rImg.data[i * 4 + 1] = v;
    rImg.data[i * 4 + 2] = v;
    rImg.data[i * 4 + 3] = 255;
  }
  rCtx.putImageData(rImg, 0, 0);

  // AO map — a blurred, compressed-contrast variant of the same field: soft, low-frequency
  // darkening rather than fine grain, kept in a light range so it only ever subtly deepens
  // crevices instead of muddying the base color.
  const aoCanvas = document.createElement("canvas");
  aoCanvas.width = size;
  aoCanvas.height = size;
  const aoCtx = aoCanvas.getContext("2d")!;
  aoCtx.filter = "blur(8px)";
  aoCtx.drawImage(roughCanvas, 0, 0);
  aoCtx.filter = "none";
  const aoImg = aoCtx.getImageData(0, 0, size, size);
  for (let i = 0; i < size * size; i++) {
    const idx = i * 4;
    const v = 200 + (aoImg.data[idx] - 128) * 0.25;
    const clamped = Math.max(160, Math.min(255, v));
    aoImg.data[idx] = clamped;
    aoImg.data[idx + 1] = clamped;
    aoImg.data[idx + 2] = clamped;
  }
  aoCtx.putImageData(aoImg, 0, 0);

  const normalMap = new CanvasTexture(normalCanvas);
  const roughnessMap = new CanvasTexture(roughCanvas);
  const aoMap = new CanvasTexture(aoCanvas);

  for (const tex of [normalMap, roughnessMap, aoMap]) {
    tex.wrapS = tex.wrapT = RepeatWrapping;
    tex.repeat.set(REPEAT, REPEAT);
    // Data textures (normal/roughness/AO), not color — must stay linear, not sRGB-decoded.
    tex.colorSpace = NoColorSpace;
    tex.needsUpdate = true;
  }

  return { normalMap, roughnessMap, aoMap };
}

let cache: SurfaceTextures | null = null;

/** Lazily builds (once, cached) a matched set of small tiling normal/roughness/AO maps that give
 *  the shared word material a fine, matte, imperfect surface — micro-grain, soft wear, faint
 *  scratches — instead of a flat, glossy, toy-like PBR response. Entirely procedural (canvas
 *  generated at runtime); no image assets or network requests. */
export function getSurfaceTextures(): SurfaceTextures {
  if (!cache) cache = buildSurfaceTextures();
  return cache;
}
