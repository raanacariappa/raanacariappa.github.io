// One-off: optimize Raana's real trackside photos into web-ready WebP.
// Source: OneDrive Desktop "Experience Photos" (huge JPG/HEIC originals).
// Output: public/photos/<event>/<name>.webp  (+ a small blur placeholder per image).
//
// Run:  node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SRC = "C:/Users/raana/OneDrive/Desktop/Experience Photos";
const OUT = path.resolve("public/photos");

const MAX_W = 1700; // never ship wider than this
const QUALITY = 78;

const exts = new Set([".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp"]);

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await listImages(full)));
    else if (exts.has(path.extname(e.name).toLowerCase())) out.push(full);
  }
  return out;
}

function slug(s) {
  return s.replace(/\.[^.]+$/, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

const manifest = {};

const files = await listImages(SRC);
console.log(`Found ${files.length} source images.`);

for (const file of files) {
  const event = path.basename(path.dirname(file)); // Dubai / Estoril / F4 / Sepang
  const eventOut = path.join(OUT, event.toLowerCase());
  if (!existsSync(eventOut)) await mkdir(eventOut, { recursive: true });

  const name = slug(path.basename(file));
  const target = path.join(eventOut, `${name}.webp`);
  try {
    const img = sharp(file, { failOn: "none" }).rotate(); // respect EXIF orientation
    const meta = await img.metadata();
    const info = await img
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(target);

    const sizeKB = Math.round((await stat(target)).size / 1024);
    const webPath = `/photos/${event.toLowerCase()}/${name}.webp`;
    (manifest[event.toLowerCase()] ||= []).push({
      src: webPath,
      w: info.width,
      h: info.height,
      portrait: info.height > info.width,
    });
    console.log(`  ✓ ${event}/${name}.webp  ${info.width}x${info.height}  ${sizeKB}KB  (from ${meta.format})`);
  } catch (err) {
    console.log(`  ✗ SKIP ${event}/${path.basename(file)} — ${err.message.split("\n")[0]}`);
  }
}

console.log("\nMANIFEST:\n" + JSON.stringify(manifest, null, 2));
