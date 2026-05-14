import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/photos";
import { PREMIUM } from "@/lib/premium-photos";
import { ArrowUpRight } from "lucide-react";

const PLACES = [
  { num: "01", titleKey: "p1Title", bodyKey: "p1Body", altKey: "p1Alt", src: PHOTOS.heroDiningRoom },
  { num: "02", titleKey: "p2Title", bodyKey: "p2Body", altKey: "p2Alt", src: PREMIUM["hero-beach"] },
  { num: "03", titleKey: "p3Title", bodyKey: "p3Body", altKey: "p3Alt", src: PREMIUM["wine-pour"] },
];

export function PlaceSplit() {
  const tD = useTranslations("display");
  const tP = useTranslations("display.place");
  return (
    <section className="relative py-32 md:py-44 bg-bg-deep overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display italic text-gold text-base">05</span>
            <span className="h-px w-12 bg-paper/15" />
            <span className="caps-label text-paper/55">{tD("chapter.place")}</span>
          </div>
          <h2 className="heading-display font-display text-paper text-[clamp(2.5rem,5.5vw,4.5rem)] max-w-3xl mb-20">
            {tP("title")}
            <br />
            <span className="text-gold">{tP("accent")}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PLACES.map((p, i) => (
            <Reveal key={p.num} delayMs={i * 160}>
              <article className="group relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-bg">
                  <Image
                    src={p.src}
                    alt={tP(p.altKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/0 to-transparent"
                  />
                  <div className="absolute inset-x-6 bottom-6">
                    <p className="font-display italic text-gold text-sm mb-2">
                      N°{p.num}
                    </p>
                    <h3 className="font-display italic text-paper text-3xl md:text-4xl leading-tight mb-3">
                      {tP(p.titleKey)}
                    </h3>
                    <p className="text-paper/75 text-[13.5px] leading-relaxed">
                      {tP(p.bodyKey)}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={300}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/galeria"
              className="group inline-flex items-center gap-3 text-paper/75 text-[11px] uppercase tracking-[0.32em] hover:text-gold transition-colors"
            >
              Ver la galería completa
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
