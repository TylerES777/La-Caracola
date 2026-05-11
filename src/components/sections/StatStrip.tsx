import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: 1990, label: "Año de fundación", isYear: true },
  { value: 127, label: "Platos en carta", suffix: "" },
  { value: 100, label: "Vinos en bodega", suffix: "+" },
  { value: 0, label: "Metros al mar", suffix: " m" },
];

export function StatStrip() {
  return (
    <section className="relative bg-bg-deep border-y border-paper/10">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-8 divide-x divide-paper/5 md:divide-x-0 md:[&>*:not(:last-child)]:border-r md:[&>*:not(:last-child)]:border-paper/10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delayMs={i * 120}>
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
                <p className="mt-4 caps-label text-paper/55">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
