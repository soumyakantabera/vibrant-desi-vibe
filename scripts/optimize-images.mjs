/**
 * Generates WebP and AVIF siblings for every JPEG in src/assets.
 *
 * Run manually (`node scripts/optimize-images.mjs`) after adding or replacing a
 * photo, and commit the output. Deliberately not part of the build: sharp is a
 * native dependency, the source photos change perhaps twice a year, and making
 * every CI build recompress sixteen images to produce identical bytes is a poor
 * trade.
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

import sharp from "sharp";

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
