// Node's ESM loader requires explicit extensions, but this codebase's TS source (matching
// Next.js/webpack convention) imports relatively without them. This hook retries a failed
// resolution with ".ts" appended, so scripts/generate-lesson-explanations.ts can import the real
// src/lib/lessons module tree unmodified — no separate script-only copy of the import style.
export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    const isRelative = specifier.startsWith(".") || specifier.startsWith("/");
    if (isRelative && err?.code === "ERR_MODULE_NOT_FOUND") {
      return await nextResolve(`${specifier}.ts`, context);
    }
    throw err;
  }
}
