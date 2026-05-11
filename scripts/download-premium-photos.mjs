// Downloads high-res premium photography from a curated set of Unsplash photo
// IDs. q=90, w=2400 — the prior pass used too-small files which compressed badly.
// Re-run anytime: node scripts/download-premium-photos.mjs

import { mkdirSync, createWriteStream, existsSync, writeFileSync, statSync, unlinkSync } from "node:fs";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";

const OUT_DIR = resolve(process.cwd(), "public", "assets", "photos", "premium");
mkdirSync(OUT_DIR, { recursive: true });

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";

// Each slot picks 2-3 candidate Unsplash photo IDs. We try them in order and keep
// the first that yields a file > 80KB. Hand-curated for Mediterranean / coastal
// fine-dining aesthetic.
const SLOTS = [
  {
    slug: "hero-restaurant",
    candidates: [
      "1552566626-52f8b828add9", // moody warm restaurant
      "1517248135467-4c7edcad34c4",
      "1414235077428-338989a2e8c0",
    ],
  },
  {
    slug: "hero-table",
    candidates: [
      "1414235077428-338989a2e8c0", // restaurant table
      "1565299624946-b28f40a0ae38",
      "1559339352-11d035aa65de",
    ],
  },
  {
    slug: "hero-beach",
    candidates: [
      "1505228395891-9a51e7e86bf6", // turquoise aerial
      "1507525428034-b723cf961d3e",
      "1519046904884-53103b34b206",
    ],
  },
  {
    slug: "dish-seafood",
    candidates: [
      "1559339352-11d035aa65de", // seafood plate
      "1546069901-ba9599a7e63c",
      "1565958011703-44f9829ba187",
    ],
  },
  {
    slug: "dish-paella",
    candidates: [
      "1534080564583-6be75777b70a", // moody paella
      "1551218808-94e220e084d2",
    ],
  },
  {
    slug: "dish-tartare",
    candidates: [
      "1546069901-ba9599a7e63c",
      "1567620905732-2d1ec7ab7445",
      "1572441710535-7da4b7e88e02",
    ],
  },
  {
    slug: "dish-oysters",
    candidates: [
      "1559339352-11d035aa65de",
      "1601050690597-df0568f70950",
    ],
  },
  {
    slug: "dish-grill",
    candidates: [
      "1559925393-8be0ec4767c8", // grilled fish
      "1485921325833-c519f76c4927",
    ],
  },
  {
    slug: "wine-pour",
    candidates: [
      "1510812431401-41d2bd2722f3", // glass at vineyard
      "1547595628-c61a29f496f0",
      "1506377247377-2a5b3b417ebb",
    ],
  },
  {
    slug: "wine-bottles",
    candidates: [
      "1506377247377-2a5b3b417ebb", // bottles rack
      "1547595628-c61a29f496f0",
    ],
  },
  {
    slug: "interior-warm",
    candidates: [
      "1552566626-52f8b828add9",
      "1517248135467-4c7edcad34c4",
    ],
  },
  {
    slug: "interior-glass",
    candidates: [
      "1517248135467-4c7edcad34c4",
      "1414235077428-338989a2e8c0",
    ],
  },
  {
    slug: "kitchen-chef",
    candidates: [
      "1556761175-5973dc0f32e7", // chef plating
      "1556761175-b413da4baf72",
    ],
  },
  {
    slug: "sea-horizon",
    candidates: [
      "1505228395891-9a51e7e86bf6",
      "1507525428034-b723cf961d3e",
    ],
  },
  {
    slug: "sea-waves",
    candidates: [
      "1507525428034-b723cf961d3e",
      "1519046904884-53103b34b206",
    ],
  },
  {
    slug: "olive-oil",
    candidates: [
      "1474979266404-7eaacbcd87c5",
      "1597362925123-77861d3fbac7",
    ],
  },
  {
    slug: "facade-evening",
    candidates: [
      "1414235077428-338989a2e8c0",
      "1517248135467-4c7edcad34c4",
    ],
  },
  {
    slug: "lemons-fresh",
    candidates: [
      "1474979266404-7eaacbcd87c5",
      "1597362925123-77861d3fbac7",
    ],
  },
];

async function fetchToFile(url, out) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Referer: "https://unsplash.com/" },
    redirect: "follow",
  });
  if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(out));
  return statSync(out).size;
}

async function tryCandidates(slot) {
  const out = resolve(OUT_DIR, `${slot.slug}.jpg`);

  for (const id of slot.candidates) {
    const url = `https://images.unsplash.com/photo-${id}?w=2400&q=90&fm=jpg&auto=format&fit=crop`;
    try {
      const size = await fetchToFile(url, out);
      if (size > 80000) return { slug: slot.slug, size, id, status: "ok" };
      try { unlinkSync(out); } catch { /* ignore */ }
    } catch {
      /* try next */
    }
  }
  return { slug: slot.slug, status: "fail" };
}

// Clean old (low-quality) downloads first so we start fresh.
for (const slot of SLOTS) {
  const p = resolve(OUT_DIR, `${slot.slug}.jpg`);
  try { unlinkSync(p); } catch { /* ignore */ }
}

console.log(`Downloading ${SLOTS.length} premium photos (high-res, 2400w @ q=90)...`);

const results = [];
for (let i = 0; i < SLOTS.length; i += 4) {
  const batch = await Promise.all(SLOTS.slice(i, i + 4).map(tryCandidates));
  batch.forEach((r) => {
    const sigil = r.status === "ok" ? "✓" : "✗";
    console.log(`  ${sigil} ${r.slug.padEnd(20)} ${r.size ? Math.round(r.size / 1024) + " KB" : ""}${r.id ? "  · " + r.id.slice(0, 12) : ""}`);
    results.push(r);
  });
}

const ok = results.filter((r) => r.status === "ok");

const manifest = `// AUTO-GENERATED by scripts/download-premium-photos.mjs.
export const PREMIUM = {
${ok.map((r) => `  "${r.slug}": "/assets/photos/premium/${r.slug}.jpg",`).join("\n")}
} as const;

export type PremiumKey = keyof typeof PREMIUM;
`;

writeFileSync(resolve(process.cwd(), "src", "lib", "premium-photos.ts"), manifest, "utf8");

console.log(`\nDone — ${ok.length} OK, ${results.length - ok.length} failed`);
