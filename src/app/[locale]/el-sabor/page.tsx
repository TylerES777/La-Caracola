import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Chapter } from "@/components/ui/Chapter";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";
import { Link } from "@/i18n/routing";
import { PHOTOS, MEDIA } from "@/lib/photos";
import { DISH_PHOTOS } from "@/lib/dish-photos";
import { ArrowRight } from "lucide-react";

const PILLAR_KEYS = ["tradicion", "frescura", "detalle", "armonia", "perfeccion"] as const;

const GALLERY = [
  { src: PHOTOS.heroDiningRoom, mood: "dining" as const, aspect: "4/5" as const, label: "Salón con vista al mar" },
  { src: DISH_PHOTOS["tartar-de-salmon-con-aguacate"], mood: "ceramic" as const, aspect: "1/1" as const, label: "Tartar de salmón" },
  { src: PHOTOS.facade, mood: "dusk" as const, aspect: "16/9" as const, label: "Fachada" },
  { src: DISH_PHOTOS["espetos-de-sardinas"], mood: "espeto" as const, aspect: "4/5" as const, label: "Espetos" },
  { src: DISH_PHOTOS["paella-mixta"], mood: "ceramic" as const, aspect: "1/1" as const, label: "Paella mixta" },
  { src: DISH_PHOTOS["tentaculos-de-pulpo-sobre-tartufo-de-patatas"], mood: "ceramic" as const, aspect: "3/4" as const, label: "Pulpo" },
];

export default async function ElSaborPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("elSabor");

  return (
    <>
      {/* Hero — full-bleed dining room with overlay */}
      <section className="relative -mt-20 md:-mt-[88px] h-[88svh] min-h-[600px] bg-teal-night overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src={PHOTOS.heroDiningRoom}
            alt={t("hero.subhead")}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 38%" }}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,42,51,0.55) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="relative h-full mx-auto max-w-[1320px] px-6 md:px-20 flex flex-col justify-end pb-20 animate-stagger">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
            ✦ El Sabor · La Esencia ✦
          </p>
          <h1 className="font-script text-[clamp(5rem,16vw,12rem)] text-gold leading-[0.82]">
            {t("hero.script")}
          </h1>
          <p className="mt-10 max-w-xl text-cream/85 text-lg italic font-display leading-relaxed">
            {t("hero.subhead")}
          </p>
        </div>
      </section>

      {/* Welcome — drop cap */}
      <section className="py-28 md:py-36 bg-paper text-ink">
        <div className="mx-auto max-w-[1100px] px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4">
            <Chapter numeral="I" label={t("experience.eyebrow")} />
          </Reveal>
          <Reveal className="lg:col-span-8" delayMs={200}>
            <h2 className="font-display italic text-[clamp(2.25rem,4.5vw,3.5rem)] text-teal-deep leading-[1.0]">
              {t("experience.title")}
            </h2>
            <p className="mt-10 text-lg text-ink/85 leading-relaxed drop-cap">
              {t("experience.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Heritage — dark panel */}
      <section className="relative py-28 md:py-36 bg-teal-night text-cream overflow-hidden">
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(231,175,95,0.6) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <PhotoPlaceholder
                mood="espeto"
                aspect="4/5"
                src={MEDIA.facade}
                label="Restaurante La Caracola · Fuengirola"
              />
              <span
                aria-hidden
                className="absolute -inset-3 md:inset-4 md:-right-4 md:-bottom-4 border border-gold/40 -z-10"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal delayMs={200}>
              <Chapter numeral="II" label={t("heritage.eyebrow")} tone="cream" />
            </Reveal>
            <Reveal delayMs={400}>
              <h2 className="mt-10 font-display italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.0]">
                {t("heritage.title")}
              </h2>
              <p className="mt-8 text-cream/80 leading-relaxed text-[15.5px] max-w-prose">
                {t("heritage.body")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Renovation full-bleed */}
      <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <PhotoPlaceholder
            mood="dining"
            fill
            hideLabel
            src={PHOTOS.heroDiningRoom}
            objectPosition="center 50%"
            label="2021 — comedor renovado"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <div className="relative h-full mx-auto max-w-[1320px] px-6 md:px-20 flex">
          <Reveal className="mt-auto mb-16 max-w-2xl text-cream">
            <Chapter numeral="III" label={t("renovation.eyebrow")} tone="cream" />
            <h2 className="mt-10 font-display italic text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              Una nueva mirada
              <br />
              <span className="text-gold">en 2021.</span>
            </h2>
            <p className="mt-8 max-w-[52ch] text-cream/85 leading-relaxed">
              {t("renovation.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-28 md:py-36 bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20">
          <Reveal className="text-center mb-16">
            <SeashellGlyph className="h-7 w-7 text-gold-deep mx-auto mb-8" />
            <Chapter numeral="IV" label="Cinco palabras" className="items-center" />
            <h2 className="mt-10 font-display italic text-[clamp(2.25rem,4.5vw,3.75rem)] text-teal-deep">
              {t("pillars.title")}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
            {PILLAR_KEYS.map((k, i) => (
              <Reveal key={k} delayMs={i * 100}>
                <div className="text-center md:text-left border-t border-gold-deep/40 pt-6">
                  <p className="font-script text-5xl text-gold leading-none mb-3">
                    {t(`pillars.items.${k}.title`)}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-ink/45 mb-3">
                    N°0{i + 1}
                  </p>
                  <p className="text-[13.5px] text-ink/70 leading-relaxed">
                    {t(`pillars.items.${k}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — light surface so the dark editorial copy reads */}
      <section className="py-28 md:py-36 bg-paper text-ink">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
              <Chapter numeral="V" label={t("gallery.title")} className="lg:col-span-4" />
              <p className="lg:col-span-7 lg:col-start-6 font-display italic text-2xl md:text-3xl text-ink/85 leading-snug">
                {t("gallery.intro")}
              </p>
            </div>
          </Reveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
            {GALLERY.map((tile, i) => (
              <Reveal key={i} className="break-inside-avoid" delayMs={(i % 3) * 100}>
                <PhotoPlaceholder
                  mood={tile.mood}
                  aspect={tile.aspect}
                  src={tile.src}
                  label={tile.label}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-teal-night text-cream overflow-hidden">
        <div className="relative mx-auto max-w-[1100px] px-6 text-center">
          <Reveal>
            <SeashellGlyph className="h-8 w-8 text-gold mx-auto mb-6" />
            <h2 className="font-display italic text-[clamp(2.5rem,5vw,4rem)] text-cream leading-[1.0]">
              {t("cta.title")}
            </h2>
            <Link
              href="/reservas"
              className="group mt-10 inline-flex items-center gap-3 px-10 py-4 bg-gold text-ink text-[11px] uppercase tracking-[0.3em] hover:bg-gold-deep hover:text-cream transition-colors"
            >
              {t("cta.button")}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1.5"
                strokeWidth={1.5}
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
