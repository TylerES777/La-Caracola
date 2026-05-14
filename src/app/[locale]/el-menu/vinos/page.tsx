"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { WINES, type WineCategory } from "@/lib/wine-data";
import { BAR_SECTIONS } from "@/lib/bar-data";
import { WineTable } from "@/components/menu/WineTable";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";

type Tab = WineCategory | "bebidas";

const TABS: Tab[] = ["tintos", "blancos", "rosados", "cavas", "champagnes", "bebidas"];

function fmt(n: number) {
  return n.toFixed(2).replace(".", ",");
}

export default function VinosPage() {
  const t = useTranslations("menu.vinos");
  const [tab, setTab] = useState<Tab>("tintos");

  const wineSection = WINES.find((s) => s.category === tab);

  return (
    <div className="bg-paper">
      {/* Cellar hero */}
      <section className="relative h-[68svh] min-h-[480px] bg-ink overflow-hidden">
        <div className="absolute inset-0">
          <PhotoPlaceholder mood="cellar" fill hideLabel label="Bodega" />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div className="relative h-full mx-auto max-w-[1320px] px-6 md:px-20 flex flex-col justify-end pb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5">
            ✦ Capítulo IV · {t("eyebrow")} ✦
          </p>
          <h1 className="font-script text-[clamp(5rem,15vw,12rem)] text-gold leading-[0.85]">
            {t("scriptTitle")}
          </h1>
          <p className="mt-8 max-w-xl text-cream/85 leading-relaxed text-lg font-light">
            {t("intro")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6 md:px-20 py-16 md:py-20">
        <div className="flex items-center justify-center mb-10">
          <SeashellGlyph className="h-6 w-6 text-gold-deep" />
        </div>

        <nav className="flex gap-1 md:gap-4 overflow-x-auto justify-center border-b border-ink/35 mb-8 scrollbar-hide">
          {TABS.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              className={`px-3 md:px-5 py-4 text-[11px] uppercase tracking-[0.28em] whitespace-nowrap border-b-2 -mb-px transition-colors ${
                tab === k
                  ? "border-gold-deep text-teal-deep"
                  : "border-transparent text-ink/72 hover:text-ink"
              }`}
            >
              {t(`tabs.${k}`)}
            </button>
          ))}
        </nav>

        {tab !== "bebidas" && wineSection && (
          <div>
            {wineSection.groups.map((g, i) => (
              <WineTable key={g.doLabel + (g.subLabel ?? "") + i} group={g} />
            ))}
          </div>
        )}

        {tab === "bebidas" && (
          <div className="pt-8 space-y-14">
            {BAR_SECTIONS.map((sec) => (
              <section key={sec.key}>
                <header className="mb-5 flex items-baseline gap-4">
                  <span className="font-display italic text-gold-deep text-2xl">
                    ·
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.32em] text-gold-deep">
                    {sec.title}
                  </p>
                  <span className="flex-1 h-px bg-ink/10" />
                </header>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                  {sec.items.map((it, i) => (
                    <li
                      key={it.name + i}
                      className="flex items-baseline gap-3 py-2.5 border-t border-ink/5 first:border-t-0 md:[&:nth-child(2)]:border-t-0"
                    >
                      <span className="flex-1 text-[13.5px] text-ink/80 leading-snug">
                        {it.name}
                      </span>
                      <span
                        aria-hidden
                        className="hidden sm:block flex-1 border-b border-dotted border-ink/35 translate-y-[-4px] min-w-[20px]"
                      />
                      <span className="font-display tabular-nums text-[14px] text-ink shrink-0">
                        {fmt(it.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
