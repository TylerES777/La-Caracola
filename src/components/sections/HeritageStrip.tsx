import { useTranslations } from "next-intl";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Chapter } from "@/components/ui/Chapter";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/photos";

const HERITAGE = [
  { src: PHOTOS.vintageFaena, label: "De faena en la orilla", caption: "Faena · jornal" },
  { src: PHOTOS.vintagePesca, label: "Pesca en Fuengirola", caption: "Pesca · barca" },
  { src: PHOTOS.vintagePlaya, label: "Pescando en la playa", caption: "Orilla · espeto" },
];

export function HeritageStrip() {
  const t = useTranslations("inicio.heritage");

  return (
    <section className="relative py-28 md:py-36 bg-paper-deep/60 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <Reveal className="lg:col-span-5">
            <Chapter numeral="V" label={t("eyebrow")} />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delayMs={200}>
            <p className="font-display italic text-2xl md:text-3xl text-ink/70 leading-snug max-w-prose">
              Antes del paseo marítimo, antes del comedor — la orilla, las barcas, el espeto.
              Esta casa empezó <span className="text-teal-deep">ahí.</span>
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {HERITAGE.map((item, i) => (
            <Reveal key={item.label} delayMs={i * 160}>
              <figure className="group">
                <div className="relative">
                  <PhotoPlaceholder
                    mood="espeto"
                    aspect="3/4"
                    src={item.src}
                    vintage
                    label={item.label}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 ring-1 ring-ink/15 pointer-events-none"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline gap-3">
                  <span className="font-display italic text-gold-deep text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-ink/60">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
