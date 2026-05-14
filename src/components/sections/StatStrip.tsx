import { useTranslations } from "next-intl";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

type Stat = {
  value: number;
  labelKey: "founded" | "dishes" | "wines" | "metres";
  suffix?: string;
  isYear?: boolean;
};

// Verified against the underlying data (May 2026):
// - 127 platos: matches CARTA.length in src/lib/menu-data.ts
// - 100+ vinos: conservative (wine-data.ts has 183 references)
// - 0 m al mar: matches the real site's "acceso privado a la playa" claim
// - 1990: the real site doesn't quote a year, only "back in the 90s" —
//   surface this as a soft heritage claim.
const STATS: Stat[] = [
  { value: 1990, labelKey: "founded", isYear: true },
  { value: 127,  labelKey: "dishes",  suffix: "" },
  { value: 100,  labelKey: "wines",   suffix: "+" },
  { value: 0,    labelKey: "metres",  suffix: " m" },
];

export function StatStrip() {
  const t = useTranslations("stats");

  return (
    <section className="relative bg-bg-deep border-y border-paper/10">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-8 divide-x divide-paper/5 md:divide-x-0 md:[&>*:not(:last-child)]:border-r md:[&>*:not(:last-child)]:border-paper/10">
          {STATS.map((s, i) => (
            <Reveal key={s.labelKey} delayMs={i * 120}>
              <div className="px-4 md:px-8 text-center md:text-left">
                <p className="caps-label text-gold mb-4">
                  N°0{i + 1}
                </p>
                <p className="font-display italic font-light text-[clamp(2.5rem,5vw,4rem)] leading-none text-paper">
                  <Counter
                    to={s.value}
                    suffix={s.suffix}
                    durationMs={s.isYear ? 1400 : 1800}
                  />
                </p>
                <p className="mt-4 caps-label text-paper/55">{t(s.labelKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
