import { useTranslations } from "next-intl";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Chapter } from "@/components/ui/Chapter";
import { DISH_PHOTOS } from "@/lib/dish-photos";
import { PHOTOS } from "@/lib/photos";

const PILLARS = [
  { word: "Tradición", src: DISH_PHOTOS["espetos-de-sardinas"], aspect: "4/5" as const, big: true },
  { word: "Frescura", src: DISH_PHOTOS["coquinas"], aspect: "1/1" as const },
  { word: "Detalle", src: DISH_PHOTOS["tartar-de-salmon-con-aguacate"], aspect: "1/1" as const },
  { word: "Armonía", src: PHOTOS.heroDiningRoom, aspect: "4/5" as const, big: true },
  { word: "Perfección", src: DISH_PHOTOS["tentaculos-de-pulpo-sobre-tartufo-de-patatas"], aspect: "1/1" as const },
];

export function PillarsGallery() {
  const t = useTranslations("inicio.pillars");

  return (
    <section className="py-28 md:py-36 bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <Reveal className="lg:col-span-5">
            <Chapter numeral="VII" label="Tradición · Frescura · Detalle · Armonía · Perfección" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delayMs={200}>
            <h2 className="font-display italic text-[clamp(2.25rem,4.5vw,3.75rem)] text-ink leading-[1.0]">
              {t("title")}
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed max-w-prose">{t("body")}</p>
          </Reveal>
        </div>

        {/* Broken grid — large 1, then four squares */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {PILLARS.map((p, i) => {
            const colSpan = p.big ? "col-span-12 md:col-span-6" : "col-span-6 md:col-span-3";
            return (
              <Reveal key={p.word} className={colSpan} delayMs={i * 100}>
                <figure className="group relative overflow-hidden">
                  <div className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]">
                    <PhotoPlaceholder mood="ceramic" aspect={p.aspect} src={p.src} label={p.word} />
                  </div>
                  {/* Word overlay */}
                  <figcaption className="absolute inset-0 flex items-end p-5 md:p-7 bg-gradient-to-t from-ink/65 via-ink/0 to-transparent">
                    <span className="font-display italic text-cream text-2xl md:text-4xl leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                      {p.word}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
