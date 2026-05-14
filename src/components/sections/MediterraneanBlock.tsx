import { useTranslations } from "next-intl";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Chapter } from "@/components/ui/Chapter";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/photos";

export function MediterraneanBlock() {
  const t = useTranslations("inicio.section3");
  const tD = useTranslations("display");

  return (
    <section className="relative py-28 md:py-36 bg-teal-night text-cream overflow-hidden">
      {/* Decorative gold ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(231,175,95,0.55) 0%, rgba(231,175,95,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — large copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <Chapter numeral="II" label={t("eyebrow")} tone="cream" />
            </Reveal>
            <Reveal delayMs={200}>
              <h2 className="mt-10 font-display italic text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[0.95] text-cream">
                {tD("mediterranean.line1pre")}<span className="text-gold">{tD("mediterranean.line1accent")}</span>
                <br />
                <span className="pl-12 md:pl-24">{tD("mediterranean.line2")}</span>
              </h2>
            </Reveal>
            <Reveal delayMs={400}>
              <div className="mt-12 space-y-6 text-cream/80 leading-relaxed text-[15.5px] max-w-[46ch]">
                <p>{t("body1")}</p>
                <p>{t("body2")}</p>
              </div>
            </Reveal>
          </div>

          {/* Right — floating dish photo with offset */}
          <div className="lg:col-span-6 relative">
            <Reveal delayMs={300}>
              <div className="relative md:pl-12">
                <PhotoPlaceholder
                  mood="dining"
                  aspect="4/5"
                  src={PHOTOS.dishTartar}
                  label="Tartar de salmón con aguacate"
                  className="shadow-editorial"
                />
                {/* Gold-line frame offset behind */}
                <span
                  aria-hidden
                  className="absolute -inset-3 md:inset-6 md:-right-6 md:-bottom-6 border border-gold/40 -z-10"
                />
                {/* Numerical accent */}
                <div className="absolute -top-6 -left-2 md:-left-6 bg-gold text-ink px-4 py-2">
                  <p className="font-display italic text-2xl leading-none">N°08</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
