import Image from "next/image";
import type { Dish } from "@/lib/menu-data";
import { useTranslations } from "next-intl";
import { AllergenDot } from "./AllergenDot";
import { DISH_PHOTOS } from "@/lib/dish-photos";

type Props = {
  dish: Dish;
  /** Show a half-portion column. */
  showHalf?: boolean;
  /** Use €/Kg formatting. */
  perKg?: boolean;
};

function fmt(n?: number) {
  if (n === undefined) return "";
  return n.toFixed(2).replace(".", ",");
}

export function MenuRow({ dish, showHalf = false, perKg = false }: Props) {
  const tA = useTranslations("menu.carta.allergens.labels");
  const photo = dish.slug ? DISH_PHOTOS[dish.slug] : undefined;

  const priceDisplay = perKg ? fmt(dish.perKg) : fmt(dish.price);

  return (
    <li className="group flex items-center gap-3 py-3.5">
      {/* Optional editorial thumbnail — only for dishes with real photos. Stays
          small (44px) so it reads as accent, not card. */}
      {photo ? (
        <div className="w-11 h-11 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/30">
          <Image
            src={photo}
            alt={dish.name}
            width={88}
            height={88}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-11 h-11 shrink-0 hidden md:block" aria-hidden />
      )}

      <span className="font-display text-[11px] tabular-nums text-gold-deep w-7 shrink-0 self-start pt-3">
        {String(dish.id).padStart(2, "0")}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-[18px] md:text-[19px] text-ink leading-snug">
            {dish.name}
          </span>
          {dish.allergens && dish.allergens.length > 0 && (
            <span className="hidden md:inline-flex items-center gap-1 pl-1">
              {dish.allergens.map((code) => (
                <AllergenDot key={code} code={code} label={tA(code as never)} />
              ))}
            </span>
          )}
        </div>
        {dish.note && (
          <p className="text-[12px] italic text-ink/55 mt-0.5">{dish.note}</p>
        )}
        {dish.allergens && dish.allergens.length > 0 && (
          <div className="md:hidden mt-1.5 flex items-center gap-1">
            {dish.allergens.map((code) => (
              <AllergenDot key={code} code={code} label={tA(code as never)} />
            ))}
          </div>
        )}
      </div>

      <span
        aria-hidden
        className="hidden sm:block flex-1 mx-3 border-b border-dotted border-ink/25 self-center min-w-[40px]"
      />

      {showHalf && (
        <span className="font-display tabular-nums text-[15px] text-ink/70 w-16 text-right shrink-0 self-center">
          {dish.half !== undefined ? fmt(dish.half) : ""}
        </span>
      )}

      <span className="font-display tabular-nums text-[15px] md:text-[16px] text-ink w-20 text-right shrink-0 self-center">
        {priceDisplay}
        {perKg && <span className="text-[10px] text-ink/55 ml-1">€/Kg</span>}
      </span>
    </li>
  );
}
