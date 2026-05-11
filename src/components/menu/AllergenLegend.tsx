import { useTranslations } from "next-intl";
import { ALLERGEN_ORDER } from "@/lib/menu-data";
import { AllergenDot } from "./AllergenDot";

export function AllergenLegend() {
  const t = useTranslations("menu.carta.allergens");

  return (
    <div className="border border-ink/10 bg-cream p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.22em] text-teal-deep">
        {t("title")}
      </p>
      <p className="mt-3 text-[12.5px] text-ink/65 italic leading-relaxed">
        {t("intro")}
      </p>
      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2.5 text-[12.5px] text-ink/75">
        {ALLERGEN_ORDER.map((code) => (
          <li key={code} className="flex items-center gap-2.5">
            <AllergenDot code={code} label={t(`labels.${code}` as never)} />
            <span>{t(`labels.${code}` as never)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
