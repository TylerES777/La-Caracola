import { useTranslations } from "next-intl";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Chapter } from "@/components/ui/Chapter";
import { Reveal } from "@/components/ui/Reveal";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { PHOTOS } from "@/lib/photos";

export function AboutBlock() {
  const t = useTranslations("inicio.section2");

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle paper-deep wash on the right two-thirds */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-2/3 bg-paper-deep/40"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 md:px-20">
        {/* Vertical rail */}
        <div className="absolute left-6 top-28 hidden md:block">
          <VerticalLabel>Capítulo I · Sobre la casa</VerticalLabel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          {/* Left — chapter + photo */}
          <div className="lg:col-span-7 lg:col-start-1">
            <Reveal>
              <Chapter numeral="I" label={t("eyebrow")} />
            </Reveal>
            <Reveal delayMs={200}>
              <div className="mt-10 relative">
                <PhotoPlaceholder
                  mood="ceramic"
                  aspect="4/5"
                  src={PHOTOS.dishCorderoAzul}
                  label="Chuletitas de cordero sobre cerámica azul"
                />
                {/* Floating caption tag */}
                <div className="absolute -bottom-4 -right-4 md:-right-6 bg-cream px-5 py-3 shadow-editorial">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold-deep">
                    Cerámica azul
                  </p>
                  <p className="text-[11px] text-ink/70 mt-0.5">Plato signature</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — copy column */}
          <div className="lg:col-span-5 lg:col-start-8 lg:pb-16">
            <Reveal delayMs={150}>
              <h2 className="font-display italic text-[clamp(2.5rem,5vw,4rem)] text-ink leading-[0.95]">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delayMs={300}>
              <div className="mt-10 space-y-6 text-ink/75 leading-relaxed text-[15px] max-w-[44ch]">
                <p className="drop-cap">{t("body1")}</p>
                <p>{t("body2")}</p>
              </div>
            </Reveal>
            <Reveal delayMs={450}>
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-gold-deep" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-ink/55">
                  La Caracola · MMXXI
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
