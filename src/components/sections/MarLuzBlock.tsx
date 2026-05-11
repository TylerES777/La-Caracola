import { useTranslations } from "next-intl";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";
import { Reveal } from "@/components/ui/Reveal";
import { Chapter } from "@/components/ui/Chapter";

export function MarLuzBlock() {
  const t = useTranslations("inicio.marLuz");

  return (
    <section className="relative py-28 md:py-36 bg-teal-deep text-cream overflow-hidden">
      {/* Gold sun bleed */}
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[820px] h-[400px] opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(231,175,95,0.45) 0%, rgba(45,123,140,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-6 md:px-20">
        <Reveal className="text-center">
          <Chapter numeral="VI" label="Familia · años 90" tone="cream" className="items-center" />
          <SeashellGlyph className="h-10 w-10 text-gold mx-auto mt-10 mb-8" />
          <h2 className="font-display italic text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.0] max-w-4xl mx-auto text-cream">
            Somos <span className="text-gold">mar,</span>{" "}
            somos <span className="text-gold">luz,</span>
            <br />
            somos sabor mediterráneo.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
          <Reveal delayMs={200}>
            <p className="text-cream/85 leading-relaxed text-[15.5px]">{t("bodyLeft")}</p>
          </Reveal>
          <Reveal delayMs={400}>
            <div className="space-y-6 text-cream/85 leading-relaxed text-[15.5px]">
              <p>{t("bodyRight1")}</p>
              <p className="text-gold font-display italic text-xl">{t("bodyRight2")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
