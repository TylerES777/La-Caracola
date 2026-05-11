import sharp from "sharp";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const src = resolve(process.cwd(), "..", "Logo-La-Caracola-en-dorado-para-mi.png.webp");
const iconDest = resolve(process.cwd(), "src", "app", "icon.png");
const faviconDest = resolve(process.cwd(), "src", "app", "favicon.ico");

const meta = await sharp(src).metadata();
const side = Math.min(meta.width, meta.height);

await sharp(src)
  .extract({ left: 0, top: 0, width: side, height: side })
  .resize(256, 256, { fit: "contain", background: { r: 245, g: 242, b: 235, alpha: 1 } })
  .png()
  .toFile(iconDest);

// Modern browsers accept a PNG payload at /favicon.ico — this clears the
// dev-overlay 404 toast that fires when no /favicon.ico endpoint exists.
await sharp(src)
  .extract({ left: 0, top: 0, width: side, height: side })
  .resize(64, 64, { fit: "contain", background: { r: 245, g: 242, b: 235, alpha: 1 } })
  .png()
  .toFile(faviconDest);

console.log(`Wrote ${iconDest}`);
console.log(`Wrote ${faviconDest}`);
