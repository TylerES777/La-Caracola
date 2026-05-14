"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";
import { DISH_PHOTOS } from "@/lib/dish-photos";
import { PHOTOS, MEDIA } from "@/lib/photos";

type Filter = "all" | "platos" | "interior" | "mariscos" | "espetos" | "mar";

type Tile = {
  filter: Exclude<Filter, "all">;
  src?: string;
  mood: "dining" | "ceramic" | "espeto" | "sea" | "cellar" | "dusk";
  aspect: "3/4" | "4/5" | "1/1" | "16/9";
  label: string;
};

const TILES: Tile[] = [
  { filter: "platos", src: DISH_PHOTOS["tartar-de-salmon-con-aguacate"], mood: "ceramic", aspect: "4/5", label: "Tartar de salmón con aguacate" },
  { filter: "interior", src: PHOTOS.heroDiningRoom, mood: "dining", aspect: "16/9", label: "Salón con vista al mar" },
  { filter: "mar", src: PHOTOS.heroDiningRoom, mood: "sea", aspect: "3/4", label: "Vista al Mediterráneo" },
  { filter: "espetos", src: DISH_PHOTOS["espetos-de-sardinas"], mood: "espeto", aspect: "4/5", label: "Espeto de sardinas" },
  { filter: "interior", src: PHOTOS.facade, mood: "dining", aspect: "1/1", label: "Fachada exterior" },
  { filter: "platos", src: DISH_PHOTOS["paella-mixta"], mood: "ceramic", aspect: "1/1", label: "Paella mixta" },
  { filter: "mariscos", src: DISH_PHOTOS["coquinas"], mood: "ceramic", aspect: "3/4", label: "Coquinas" },
  { filter: "interior", src: PHOTOS.dishCorderoAzul, mood: "ceramic", aspect: "4/5", label: "Detalle sobre cerámica azul" },
  { filter: "platos", src: DISH_PHOTOS["arroz-negro"], mood: "espeto", aspect: "1/1", label: "Arroz negro" },
  { filter: "platos", src: DISH_PHOTOS["tentaculos-de-pulpo-sobre-tartufo-de-patatas"], mood: "ceramic", aspect: "4/5", label: "Tentáculos de pulpo" },
  { filter: "espetos", src: MEDIA.freshCigalas, mood: "espeto", aspect: "1/1", label: "Cigalas del día" },
  { filter: "platos", src: DISH_PHOTOS["pipirana-de-pulpo"], mood: "ceramic", aspect: "4/5", label: "Pipirana de pulpo" },
  { filter: "mariscos", src: DISH_PHOTOS["langostinos-al-pil-pil"], mood: "ceramic", aspect: "1/1", label: "Langostinos al pil-pil" },
  { filter: "platos", src: DISH_PHOTOS["arroz-a-banda"], mood: "ceramic", aspect: "16/9", label: "Arroz a banda" },
  { filter: "platos", src: DISH_PHOTOS["salmon-a-la-caracola"], mood: "dining", aspect: "4/5", label: "Salmón a La Caracola" },
  { filter: "platos", src: DISH_PHOTOS["calamares-fritos"], mood: "ceramic", aspect: "1/1", label: "Calamares fritos" },
  { filter: "mariscos", src: DISH_PHOTOS["vieira-con-langostinos"], mood: "ceramic", aspect: "4/5", label: "Vieira con langostinos" },
  { filter: "platos", src: DISH_PHOTOS["merluza-a-la-plancha"], mood: "dining", aspect: "3/4", label: "Merluza a la plancha" },
  { filter: "mariscos", src: DISH_PHOTOS["aguacate-con-langostinos"], mood: "ceramic", aspect: "1/1", label: "Aguacate con langostinos" },
  { filter: "platos", src: DISH_PHOTOS["tiramisu"], mood: "dining", aspect: "1/1", label: "Tiramisú" },
  { filter: "platos", src: DISH_PHOTOS["crema-catalana"], mood: "dining", aspect: "4/5", label: "Crema catalana" },
  { filter: "mar", src: DISH_PHOTOS["mojito-de-fresa"], mood: "dusk", aspect: "4/5", label: "Mojito de fresa" },
  { filter: "espetos", src: DISH_PHOTOS["pez-plata"], mood: "espeto", aspect: "3/4", label: "Pez plata" },
  { filter: "platos", src: DISH_PHOTOS["pate-de-mero"], mood: "ceramic", aspect: "1/1", label: "Paté de mero" },
  { filter: "platos", src: DISH_PHOTOS["salmonetitos-fritos"], mood: "ceramic", aspect: "4/5", label: "Salmonetitos fritos" },
  { filter: "mariscos", src: DISH_PHOTOS["busanos"], mood: "ceramic", aspect: "1/1", label: "Búsanos" },
  { filter: "platos", src: DISH_PHOTOS["milhoja-de-nata"], mood: "dining", aspect: "1/1", label: "Milhoja de nata" },
];

const FILTERS: Filter[] = ["all", "platos", "interior", "mariscos", "espetos", "mar"];

export default function GaleriaPage() {
  const t = useTranslations("galeria");
  const [filter, setFilter] = useState<Filter>("all");

  const visible = filter === "all" ? TILES : TILES.filter((tt) => tt.filter === filter);

  return (
    <div className="bg-paper">
      <header className="relative bg-teal-night text-cream py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[400px] opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(231,175,95,0.55) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-20 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
            ✦ Galería ✦
          </p>
          <h1 className="font-script text-[clamp(5rem,15vw,12rem)] text-gold leading-[0.85]">
            {t("hero.script")}
          </h1>
          <SeashellGlyph className="h-7 w-7 text-gold mx-auto mt-8" />
          <p className="mt-6 max-w-xl mx-auto text-[12px] uppercase tracking-[0.24em] text-cream/65">
            {t("hero.subline")}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-[1320px] px-6 md:px-10 py-16">
        <nav
          aria-label="Filtros de galería"
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 text-[10.5px] uppercase tracking-[0.28em] border transition-all duration-300 ${
                filter === f
                  ? "bg-teal-deep text-cream border-teal-deep"
                  : "border-ink/15 text-ink/60 hover:border-gold-deep hover:text-gold-deep"
              }`}
            >
              {t(`filters.${f}`)}
            </button>
          ))}
        </nav>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-5 [&>*]:mb-3 md:[&>*]:mb-5 pb-32">
          {visible.map((tile, i) => (
            <Reveal key={`${filter}-${i}`} className="break-inside-avoid" delayMs={(i % 6) * 60}>
              <figure className="group relative overflow-hidden">
                <div className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]">
                  <PhotoPlaceholder
                    mood={tile.mood}
                    aspect={tile.aspect}
                    src={tile.src}
                    label={tile.label}
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-cream/85">
                    {tile.label}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
