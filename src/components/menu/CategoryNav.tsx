"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { CartaCategory } from "@/lib/menu-data";

type Props = {
  categories: CartaCategory[];
};

export function CategoryNav({ categories }: Props) {
  const t = useTranslations("menu.carta.categories");
  const [active, setActive] = useState<CartaCategory>(categories[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    categories.forEach((cat) => {
      const el = document.getElementById(`cat-${cat}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(cat);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [categories]);

  const onClick = (cat: CartaCategory) => {
    const el = document.getElementById(`cat-${cat}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Categorías de la carta"
      className="sticky top-20 md:top-24 z-30 -mx-6 md:mx-0 bg-paper/95 backdrop-blur-sm border-b border-ink/35"
    >
      <div className="overflow-x-auto scrollbar-hide">
        <ul className="flex gap-1 md:gap-2 px-6 md:px-0 py-3 min-w-max md:flex-wrap">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => onClick(cat)}
                  className={`px-3.5 py-1.5 text-[10.5px] uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-teal-deep text-cream"
                      : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {t(cat)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
