import { setRequestLocale, getTranslations } from "next-intl/server";
import { CARTA, CARTA_CATEGORY_ORDER, type CartaCategory } from "@/lib/menu-data";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { MenuSection } from "@/components/menu/MenuSection";
import { AllergenLegend } from "@/components/menu/AllergenLegend";
import { Reveal } from "@/components/ui/Reveal";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";

export default async function CartaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("menu.carta");
  const tNotes = await getTranslations("menu.carta.notes");

  const grouped = CARTA_CATEGORY_ORDER.reduce(
    (acc, cat) => {
      acc[cat] = CARTA.filter((d) => d.category === cat);
      return acc;
    },
    {} as Record<CartaCategory, typeof CARTA>
  );

  const halfCategories: CartaCategory[] = ["entradas"];
  const perKgCategories: CartaCategory[] = ["mariscosPeso", "especialidades"];

  return (
    <div className="bg-paper">
      {/* Editorial title — dark band */}
      <header className="relative bg-teal-night text-cream py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(231,175,95,0.55) 0%, rgba(231,175,95,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-20 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
              ✦ {t("eyebrow")} ✦
            </p>
            <h1 className="font-display italic text-[clamp(4rem,11vw,9rem)] leading-[0.88] text-cream">
              La <span className="text-gold">Carta</span>
            </h1>
            <div className="mt-8 flex items-center justify-center gap-5">
              <span className="h-px w-16 bg-cream/30" />
              <SeashellGlyph className="h-6 w-6 text-gold" />
              <span className="h-px w-16 bg-cream/30" />
            </div>
            <p className="mt-8 max-w-xl mx-auto text-[12px] uppercase tracking-[0.22em] text-cream/65">
              {t("subhead")}
            </p>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-[960px] px-6 md:px-10 pb-32">
        <CategoryNav categories={CARTA_CATEGORY_ORDER} />

        <div className="mt-6">
          {CARTA_CATEGORY_ORDER.map((cat) => {
            if (cat === "extras") return null;
            return (
              <MenuSection
                key={cat}
                category={cat}
                dishes={grouped[cat]}
                showHalf={halfCategories.includes(cat)}
                perKg={perKgCategories.includes(cat)}
              />
            );
          })}

          <section className="py-12 border-t border-ink/35">
            <p className="text-[12.5px] italic text-ink/80 leading-relaxed text-center">
              {tNotes("saucesLine")}
            </p>
            <ul className="mt-8 max-w-xl mx-auto divide-y divide-ink/5">
              {grouped.extras.map((dish) => (
                <li
                  key={dish.id}
                  className="flex items-baseline justify-between py-3.5 text-[15px]"
                >
                  <span className="font-display text-ink">
                    <span className="text-gold-deep text-[11px] mr-3 tabular-nums">
                      {String(dish.id).padStart(2, "0")}
                    </span>
                    {dish.name}
                  </span>
                  <span className="font-display tabular-nums text-ink">
                    {dish.price?.toFixed(2).replace(".", ",")}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-16">
            <AllergenLegend />
          </div>
        </div>
      </div>
    </div>
  );
}
