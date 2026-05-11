"use client";

import { useTranslations } from "next-intl";
import type { WineGroup } from "@/lib/wine-data";

type Props = {
  group: WineGroup;
};

function fmt(n?: number) {
  if (n === undefined) return "";
  return n.toFixed(2).replace(".", ",");
}

export function WineTable({ group }: Props) {
  const t = useTranslations("menu.vinos");

  // Determine which columns this group actually uses
  const showCopa = group.wines.some((w) => w.copa !== undefined);
  const showHalf = group.wines.some((w) => w.half !== undefined);
  const showBottle = group.wines.some((w) => w.bottle !== undefined);
  const showMagnum = group.wines.some((w) => w.magnum !== undefined);

  return (
    <section className="pt-12 md:pt-14">
      <header className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.32em] text-gold-deep">
          {group.doLabel}
        </p>
        {group.subLabel && (
          <p className="mt-1.5 font-display italic text-2xl text-teal-deep">
            {group.subLabel}
          </p>
        )}
      </header>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.22em] text-ink/45">
              <th className="text-left py-2 font-normal">{t("columns.name")}</th>
              {showCopa && (
                <th className="text-right py-2 font-normal w-20">
                  {t("columns.copa")}
                </th>
              )}
              {showHalf && (
                <th className="text-right py-2 font-normal w-20">
                  {t("columns.half")}
                </th>
              )}
              {showBottle && (
                <th className="text-right py-2 font-normal w-24">
                  {t("columns.bottle")}
                </th>
              )}
              {showMagnum && (
                <th className="text-right py-2 font-normal w-20">1,5L</th>
              )}
            </tr>
          </thead>
          <tbody>
            {group.wines.map((w, i) => (
              <tr
                key={w.name + i}
                className="border-t border-ink/5 align-top"
              >
                <td className="py-3.5 pr-4">
                  <p className="font-display text-[17px] text-ink leading-tight">
                    {w.name}
                    {w.isHouse && (
                      <span className="ml-2 align-middle text-[9.5px] uppercase tracking-[0.22em] text-gold-deep border border-gold-deep/40 px-1.5 py-0.5">
                        {t("houseTag")}
                      </span>
                    )}
                  </p>
                  {w.grapes && (
                    <p className="mt-0.5 text-[12px] italic text-ink/55">
                      {w.grapes}
                    </p>
                  )}
                </td>
                {showCopa && (
                  <td className="py-3.5 text-right font-display tabular-nums text-[14px] text-ink/85">
                    {fmt(w.copa) || <span className="text-ink/25">·</span>}
                  </td>
                )}
                {showHalf && (
                  <td className="py-3.5 text-right font-display tabular-nums text-[14px] text-ink/85">
                    {fmt(w.half) || <span className="text-ink/25">·</span>}
                  </td>
                )}
                {showBottle && (
                  <td className="py-3.5 text-right font-display tabular-nums text-[15px] text-ink">
                    {fmt(w.bottle) || <span className="text-ink/25">·</span>}
                  </td>
                )}
                {showMagnum && (
                  <td className="py-3.5 text-right font-display tabular-nums text-[14px] text-ink/85">
                    {fmt(w.magnum) || <span className="text-ink/25">·</span>}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
