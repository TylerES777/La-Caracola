import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { ArrowRight } from "lucide-react";
import { DISH_PHOTOS } from "@/lib/dish-photos";
import { PHOTOS } from "@/lib/photos";

const CATEGORIES = [
  { key: "carta",    href: "/el-menu/carta",    src: DISH_PHOTOS["tartar-de-salmon-con-aguacate"], numeral: "I" },
  { key: "postres",  href: "/el-menu/postres",  src: DISH_PHOTOS["tiramisu"],                       numeral: "II" },
  { key: "cocteles", href: "/el-menu/cocteles", src: DISH_PHOTOS["mojito-de-fresa"],                numeral: "III" },
  { key: "vinos",    href: "/el-menu/vinos",    src: PHOTOS.heroDiningRoom,                         numeral: "IV" },
] as const;

export default async function MenuHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("menu.hub");

  return (
    <>
      {/* Hero — dramatic dark with dish vista */}
      <section className="relative h-[80svh] min-h-[560px] bg-teal-night overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={DISH_PHOTOS["paella-mixta"]}
            alt="Paella mixta"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 50%" }}
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,42,51,0.55) 0%, rgba(15,42,51,0.35) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="relative h-full mx-auto max-w-[1320px] px-6 md:px-20 flex flex-col justify-end pb-20 animate-stagger">
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
            ✦ {t("marqueeLabel")} ✦
          </span>
          <h1 className="font-script text-[clamp(5rem,16vw,12rem)] text-gold leading-[0.8] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {t("scriptDisplay")}
          </h1>
          <p className="mt-8 max-w-xl text-cream/85 text-lg italic font-display">
            {t("subhead")}
          </p>
        </div>
      </section>

      <Marquee
        items={t("marqueeItems").split(" · ")}
        tone="ink"
        separator="·"
      />

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-[10.5px] uppercase tracking-[0.32em] text-gold-deep mb-8">
              {t("introEyebrow")}
            </p>
            <h2 className="font-display italic text-[clamp(2rem,4vw,3.25rem)] text-teal-deep leading-[1.05]">
              {t("title")}
            </h2>
            <p className="mt-8 text-lg text-ink/85 leading-relaxed">{t("body")}</p>
          </Reveal>
        </div>
      </section>

      {/* Four categories — alternating sides, magazine style */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20 space-y-20 md:space-y-28">
          {CATEGORIES.map((cat, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={cat.key}>
                <Link
                  href={cat.href}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div
                    className={`lg:col-span-7 relative ${
                      flipped ? "lg:order-2 lg:col-start-6" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]">
                        <PhotoPlaceholder
                          mood="ceramic"
                          aspect="16/9"
                          src={cat.src}
                          label={cat.key}
                        />
                      </div>
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors duration-500"
                      />
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 ${
                      flipped ? "lg:order-1 lg:col-start-1 lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <span className="font-display italic text-gold-deep text-7xl md:text-8xl leading-none">
                      {cat.numeral}
                    </span>
                    <h3 className="mt-4 font-display italic text-4xl md:text-5xl text-teal-deep leading-tight">
                      {t(`categories.${cat.key}` as never)}
                    </h3>
                    <p className="mt-6 text-ink/85 leading-relaxed max-w-prose">
                      {t(`categoryBlurbs.${cat.key}` as never)}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] font-semibold text-ink group-hover:text-gold-deep transition-colors">
                      {t("verCarta")}
                      <ArrowRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-1.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Mucho Gusto preview grid — broken layout */}
      <section className="py-24 md:py-32 bg-teal-night text-cream">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
              <div className="lg:col-span-5">
                <p className="text-[10.5px] uppercase tracking-[0.32em] text-gold mb-5">
                  {t("muchoGustoEyebrow")}
                </p>
                <h3 className="font-display italic text-[clamp(2.25rem,4.5vw,3.5rem)] text-cream leading-[1.05]">
                  {t("muchoGustoTitle")}
                </h3>
              </div>
              <p className="lg:col-span-6 lg:col-start-7 text-cream/75 leading-relaxed max-w-prose">
                {t("muchoGustoBody")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <Reveal className="col-span-12 md:col-span-6 md:row-span-2">
              <PhotoPlaceholder
                mood="ceramic"
                aspect="4/5"
                src={DISH_PHOTOS["paella-mixta"]}
                label="Paella mixta"
              />
            </Reveal>
            <Reveal className="col-span-6 md:col-span-3" delayMs={100}>
              <PhotoPlaceholder
                mood="espeto"
                aspect="1/1"
                src={DISH_PHOTOS["espetos-de-sardinas"]}
                label="Espeto de sardinas"
              />
            </Reveal>
            <Reveal className="col-span-6 md:col-span-3" delayMs={200}>
              <PhotoPlaceholder
                mood="ceramic"
                aspect="1/1"
                src={DISH_PHOTOS["tentaculos-de-pulpo-sobre-tartufo-de-patatas"]}
                label="Tentáculos de pulpo"
              />
            </Reveal>
            <Reveal className="col-span-6 md:col-span-3" delayMs={300}>
              <PhotoPlaceholder
                mood="espeto"
                aspect="1/1"
                src={DISH_PHOTOS["arroz-negro"]}
                label="Arroz negro"
              />
            </Reveal>
            <Reveal className="col-span-6 md:col-span-3" delayMs={400}>
              <PhotoPlaceholder
                mood="ceramic"
                aspect="1/1"
                src={DISH_PHOTOS["coquinas"]}
                label="Coquinas"
              />
            </Reveal>
          </div>

          <Reveal className="mt-16 text-center" delayMs={200}>
            <Link
              href="/el-menu/carta"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-ink text-[11px] uppercase tracking-[0.3em] hover:bg-gold-deep hover:text-cream transition-colors"
            >
              {t("verCartaCompleta")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
