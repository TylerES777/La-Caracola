import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { PREMIUM } from "@/lib/premium-photos";

const PICKS = [
  { name: "Vega Sicilia Único", origin: "Ribera del Duero", price: "500" },
  { name: "Belondrade y Lurtón", origin: "Rueda · Verdejo", price: "72" },
  { name: "Pingus", origin: "Ribera del Duero", price: "1700" },
  { name: "Whispering Angel", origin: "Provence · Rosado", price: "48" },
  { name: "Krug Grande Cuvée", origin: "Champagne", price: "450" },
];

export function CellarBlock() {
  const tD = useTranslations("display");
  return (
    <section className="relative py-32 md:py-44 bg-bg-deep overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <Reveal className="lg:col-span-6 lg:order-2">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={PREMIUM["wine-pour"]}
                  alt={tD("cellar.altCaption")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-4 -translate-y-4 border border-gold/40 -z-10"
              />
              <figcaption className="absolute -bottom-3 -right-3 bg-gold text-bg px-5 py-3">
                <span className="font-display italic text-2xl leading-none">100</span>
                <span className="caps-label ml-2">{tD("cellar.referencesLabel")}</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Wine list preview */}
          <div className="lg:col-span-6 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display italic text-gold text-base">04</span>
                <span className="h-px w-12 bg-paper/15" />
                <span className="caps-label text-paper/55">{tD("chapter.cellar")}</span>
              </div>
              <h2 className="heading-display font-display text-paper text-[clamp(2.5rem,5.5vw,4.5rem)]">
                {tD("cellar.title")}
                <br />
                <span className="text-gold">{tD("cellar.accent")}</span>
              </h2>
              <p className="mt-8 text-paper/70 leading-relaxed max-w-prose">
                {tD("cellar.subline")}
              </p>
            </Reveal>

            <Reveal delayMs={300}>
              <ul className="mt-10 space-y-1">
                {PICKS.map((w, i) => (
                  <li
                    key={w.name}
                    className="group flex items-baseline gap-4 py-3.5 border-b border-paper/10"
                  >
                    <span className="font-display italic text-gold/65 text-sm tabular-nums w-7 shrink-0">
                      0{i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-display italic text-paper text-lg md:text-xl leading-snug">
                        {w.name}
                      </p>
                      <p className="caps-label text-paper/45 mt-0.5">{w.origin}</p>
                    </div>
                    <span className="font-display tabular-nums text-paper text-base">
                      {w.price}
                      <span className="text-paper/45 ml-0.5">€</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={500}>
              <Link
                href="/el-menu/vinos"
                className="group mt-10 inline-flex items-center gap-3 text-gold text-[11px] uppercase tracking-[0.32em]"
              >
                {tD("cellar.viewAll")}
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
