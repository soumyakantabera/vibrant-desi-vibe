/**
 * Generates WebP and AVIF siblings for every JPEG in src/assets.
 *
 * Usage — after adding or replacing a photo, then commit the output:
 *
 *     bun add -d sharp
 *     node scripts/optimize-images.mjs
 *     bun remove sharp
 *
 * `sharp` is deliberately NOT a declared devDependency. It is ~30 MB of
 * platform-specific native binaries, the deploy workflow installs
 * devDependencies on every push to main, and this script runs perhaps twice a
 * year — the generated .webp/.avif files are committed, so CI never needs to
 * produce them. Paying that install cost on every deploy to recompress sixteen
 * images into identical bytes is a poor trade.
 *
 * The JPEGs stay. `<picture>` in src/components/SmartImage.tsx offers AVIF
 * first, then WebP, then falls back to the original — so a browser that
 * understands neither still gets a photo, and the `width`/`height` that give
 * this site its zero CLS come from the same metadata either way.
 *
 * Note og/default.jpg and the other Open Graph images are NOT touched. WhatsApp's
 * link-preview scraper does not reliably render WebP, and WhatsApp is this
 * site's primary acquisition channel — every CTA on every page opens it. A
 * preview that fails to render there costs more than the bytes save.
 */
import fs from "node:fs";
import path from "node:path";

// Imported dynamically so a missing sharp produces the install instruction
// rather than an ERR_MODULE_NOT_FOUND stack trace — see the note above for why
// it is not a declared dependency.
let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error(
    "optimize-images: sharp is not installed.\n" +
      "  It is intentionally not a devDependency (see the comment at the top of\n" +
      "  this file). Install it just for this run:\n\n" +
      "    bun add -d sharp && node scripts/optimize-images.mjs && bun remove sharp\n",
  );
  process.exit(1);
}

const DIR = "src/assets";

/** Quality settings: visually lossless on photographs at these sizes. */
const WEBP_QUALITY = 82;
const AVIF_QUALITY = 50;

const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".jpg"));

let before = 0;
let webpTotal = 0;
let avifTotal = 0;

for (const file of files) {
  const src = path.join(DIR, file);
  const base = src.replace(/\.jpg$/, "");
  const jpegBytes = fs.statSync(src).size;

  await sharp(src).webp({ quality: WEBP_QUALITY, effort: 6 }).toFile(`${base}.webp`);
  await sharp(src).avif({ quality: AVIF_QUALITY, effort: 6 }).toFile(`${base}.avif`);

  const webpBytes = fs.statSync(`${base}.webp`).size;
  const avifBytes = fs.statSync(`${base}.avif`).size;

  before += jpegBytes;
  webpTotal += webpBytes;
  avifTotal += avifBytes;

  const kb = (n) => `${(n / 1024).toFixed(0)} kB`.padStart(7);
  console.log(
    `  ${file.padEnd(28)} jpg ${kb(jpegBytes)} → webp ${kb(webpBytes)} → avif ${kb(avifBytes)}`,
  );
}

const kb = (n) => `${(n / 1024).toFixed(0)} kB`;
const pct = (n) => `${(100 - (n / before) * 100).toFixed(0)}%`;
console.log(
  `\n  ${files.length} images. jpg ${kb(before)} · webp ${kb(webpTotal)} (${pct(webpTotal)} smaller)` +
    ` · avif ${kb(avifTotal)} (${pct(avifTotal)} smaller)`,
);
