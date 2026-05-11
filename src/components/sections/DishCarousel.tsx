"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DISH_PHOTOS } from "@/lib/dish-photos";
import { PREMIUM } from "@/lib/premium-photos";
import { Reveal } from "@/components/ui/Reveal";

type FeaturedDish = {
  num: string;
  name: string;
  category: string;
  src: string;
  price?: string;
};

const DISHES: FeaturedDish[] = [
  { num: "08", name: "Tartar de salmón con aguacate", category: "Entradas", src: DISH_PHOTOS["tartar-de-salmon-con-aguacate"], price: "21,00 €" },
  { num: "33", name: "Paella mixta", category: "Arroces", src: PREMIUM["dish-paella"], price: "16,50 €" },
  { num: "21", name: "Tentáculos de pulpo · crema de patatas trufadas", category: "Entradas", src: DISH_PHOTOS["tentaculos-de-pulpo-sobre-tartufo-de-patatas"], price: "24,50 €" },
  { num: "38", name: "Arroz negro", category: "Arroces", src: DISH_PHOTOS["arroz-negro"], price: "18,50 €" },
  { num: "18", name: "Espeto de sardinas", category: "Especialidades", src: DISH_PHOTOS["espetos-de-sardinas"], price: "8,20 €" },
  { num: "58", name: "Coquinas", category: "Mariscos", src: DISH_PHOTOS["coquinas"], price: "24,00 €" },
  { num: "20", name: "Pulpo a la gallega", category: "Entradas", src: DISH_PHOTOS["pipirana-de-pulpo"], price: "22,00 €" },
  { num: "104", name: "Salmón a La Caracola", category: "Pescados", src: DISH_PHOTOS["salmon-a-la-caracola"], price: "21,00 €" },
  { num: "65", name: "Langostinos al pil-pil", category: "Mariscos", src: DISH_PHOTOS["langostinos-al-pil-pil"], price: "15,00 €" },
];

export function DishCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="relative py-28 md:py-36 bg-bg-soft overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display italic text-gold text-base">02</span>
              <span className="h-px w-12 bg-paper/15" />
              <span className="caps-label text-paper/55">La carta · Selección</span>
            </div>
            <h2 className="heading-display font-display text-paper text-[clamp(2.5rem,5.5vw,4.5rem)]">
              Hoy en la carta.
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-5 flex flex-col items-start lg:items-end" delayMs={200}>
            <p className="text-paper/65 leading-relaxed max-w-md lg:text-right mb-6">
              Una selección breve de lo que se está sirviendo esta semana — del mar a la
              brasa, con la calma de la sobremesa.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Anterior"
                className="w-11 h-11 border border-paper/30 text-paper/70 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Siguiente"
                className="w-11 h-11 border border-paper/30 text-paper/70 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll rail — bleeds left edge */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-5 md:gap-7 px-6 md:px-12 pb-4">
          {DISHES.map((d, i) => (
            <Reveal
              key={d.num}
              delayMs={(i % 4) * 80}
              className="shrink-0 w-[78vw] sm:w-[42vw] lg:w-[26vw] max-w-[420px]"
            >
              <article className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-bg-deep">
                  <Image
                    src={d.src}
                    alt={d.name}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-bg/65 via-bg/0 to-transparent"
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="font-display italic text-gold text-sm">
                      N°{d.num}
                    </span>
                    {d.price && (
                      <span className="font-display tabular-nums text-paper text-sm bg-bg/55 backdrop-blur-sm px-2.5 py-1">
                        {d.price}
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-x-4 bottom-4">
                    <span className="caps-label text-gold/80 text-[9.5px]">
                      {d.category}
                    </span>
                    <p className="mt-2 font-display italic text-paper text-xl md:text-2xl leading-tight">
                      {d.name}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
