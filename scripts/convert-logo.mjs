import sharp from "sharp";
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const src = resolve(process.cwd(), "..", "Logo-La-Caracola-en-dorado-para-mi.png.webp");
const dest = resolve(process.cwd(), "public", "assets", "logo.png");

if (!existsSync(src)) {
  console.error(`Source logo not found at: ${src}`);
  process.exit(1);
}

mkdirSync(dirname(dest), { recursive: true });

await sharp(src)
  .png({ quality: 95, compressionLevel: 9 })
  .toFile(dest);

const meta = await sharp(dest).metadata();
console.log(
  `Converted logo → ${dest} (${meta.width}x${meta.height}, ${meta.format})`
);
