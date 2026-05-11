"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  COCKTAILS,
  ALCOHOL_FREE,
  SMOOTHIES,
  COCKTAIL_PRICE,
  ALCOHOL_FREE_PRICE,
  SMOOTHIE_PRICE,
  type Drink,
} from "@/lib/cocktails-data";
import { DISH_PHOTOS } from "@/lib/dish-photos";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";

type Tab = "classics" | "alcoholFree" | "smoothies";

export default function CoctelesPage() {
  const t = useTranslations("menu.cocteles");
  const [tab, setTab] = useState<Tab>("classics");

  const list: Drink[] =
    tab === "classics" ? COCKTAILS : tab === "alcoholFree" ? ALCOHOL_FREE : SMOOTHIES;
  const price =
    tab === "classics"
      ? COCKTAIL_PRICE
      : tab === "alcoholFree"
      ? ALCOHOL_FREE_PRICE
      : SMOOTHIE_PRICE;

  return (
    <div className="bg-teal-night text-cream min-h-screen">
      <header className="relative py-24 md:py-32 overflow-hidden border-b border-cream/10">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[820px] h-[400px] opacity-40 blur-[110px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(231,175,95,0.5) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
            ✦ Capítulo III · Bar ✦
          </p>
          <h1 className="font-script text-[clamp(5rem,15vw,12rem)] text-gold leading-[0.85]">
            {t("scriptTitle")}
          </h1>
          <p className="mt-3 text-[12px] uppercase tracking-[0.32em] text-cream/65">
            {t("subtitle")}
          </p>
          <p className="mt-10 max-w-md mx-auto italic font-display text-xl text-cream/85">
            {t("intro")}
          </p>
          <SeashellGlyph className="h-6 w-6 text-gold mx-auto mt-10" />
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-6 md:px-20 py-16">
        {/* Tabs */}
        <nav
          aria-label="Tipo de bebida"
          className="flex flex-wrap gap-3 md:gap-6 justify-center mb-12 border-b border-cream/10"
        >
          {(["classics", "alcoholFree", "smoothies"] as Tab[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              className={`px-4 py-4 text-[11px] uppercase tracking-[0.28em] border-b-2 -mb-px transition-colors ${
                tab === k
                  ? "border-gold text-gold"
                  : "border-transparent text-cream/55 hover:text-cream"
              }`}
            >
              {t(`tabs.${k}`)}
            </button>
          ))}
        </nav>

        <div className="flex items-baseline justify-between mb-8">
          <span className="text-[10px] uppercase tracking-[0.32em] text-cream/45">
            {list.length} referencias
          </span>
          <span className="font-display italic text-2xl text-gold">
            €{price.toFixed(2).replace(".", ",")}
            <span className="text-[10px] uppercase tracking-[0.28em] text-cream/55 ml-3">
              por copa
            </span>
          </span>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-2">
          {list.map((d, i) => {
            const photo = d.slug ? DISH_PHOTOS[d.slug] : undefined;
            return (
              <li
                key={d.name + i}
                className="flex items-center gap-5 py-5 border-b border-cream/10 group"
              >
                {photo ? (
                  <div className="w-16 h-16 shrink-0 overflow-hidden ring-1 ring-gold/30">
                    <Image
                      src={photo}
                      alt={d.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 shrink-0 hidden sm:flex items-center justify-center text-gold/25 font-script text-3xl">
                    ✦
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-display text-[20px] text-cream leading-snug">
                    {d.name}
                  </p>
                  {d.ingredients && (
                    <p className="text-[12.5px] italic text-cream/55 leading-relaxed mt-1">
                      {d.ingredients}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
