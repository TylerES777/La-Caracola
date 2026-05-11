import { useTranslations } from "next-intl";
import { MenuRow } from "./MenuRow";
import type { CartaCategory, Dish } from "@/lib/menu-data";
import { CATEGORY_NOTES } from "@/lib/menu-data";

type Props = {
  category: CartaCategory;
  dishes: Dish[];
  showHalf?: boolean;
  perKg?: boolean;
};

const ROMAN: Record<CartaCategory, string> = {
  ensaladas: "I",
  entradas: "II",
  sopas: "III",
  arroces: "IV",
  pescaitos: "V",
  mariscos: "VI",
  mariscosPeso: "VII",
  especialidades: "VIII",
  pescados: "IX",
  carnes: "X",
  extras: "XI",
};

export function MenuSection({ category, dishes, showHalf, perKg }: Props) {
  const tCat = useTranslations("menu.carta.categories");
  const tNotes = useTranslations("menu.carta.notes");
  const noteKey = CATEGORY_NOTES[category];

  return (
    <section
      id={`cat-${category}`}
      className="scroll-mt-32 py-14 md:py-20 border-t border-ink/15 first:border-t-0 relative"
    >
      {/* Big roman numeral watermark */}
      <span
        aria-hidden
        className="absolute -top-2 right-0 font-display italic text-[clamp(6rem,12vw,9rem)] leading-none text-gold/10 select-none pointer-events-none"
      >
        {ROMAN[category]}
      </span>

      <header className="mb-10 md:mb-12 relative">
        <div className="flex items-baseline gap-5">
          <span className="font-display italic text-gold-deep text-3xl md:text-4xl leading-none">
            {ROMAN[category]}.
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-ink/45 mb-1.5">
              Capítulo {ROMAN[category]}
            </p>
            <h2 className="font-display italic text-[clamp(2rem,4vw,3rem)] text-teal-deep leading-none">
              {tCat(category)}
            </h2>
          </div>
        </div>
        {noteKey && (
          <p className="mt-4 text-[12.5px] italic text-ink/60 max-w-xl">
            {tNotes(noteKey as never)}
          </p>
        )}
        <span aria-hidden className="block h-px w-16 bg-gold-deep mt-6" />
      </header>

      <ul className="divide-y divide-ink/5">
        {dishes.map((dish) => (
          <MenuRow key={dish.id} dish={dish} showHalf={showHalf} perKg={perKg} />
        ))}
      </ul>
    </section>
  );
}
