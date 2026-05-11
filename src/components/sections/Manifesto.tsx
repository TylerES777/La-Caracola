import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  const t = useTranslations("inicio.marLuz");

  return (
    <section className="relative py-32 md:py-48 bg-bg overflow-hidden">
      {/* Ambient gold blob */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[400px] opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(219,184,142,0.7) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-16 justify-center">
            <span className="font-display italic text-gold text-base">06</span>
            <span className="h-px w-12 bg-paper/15" />
            <span className="caps-label text-paper/55">Manifiesto</span>
          </div>
        </Reveal>

        <Reveal>
          <blockquote className="text-center">
            <p className="heading-display font-display text-paper text-[clamp(2.25rem,5vw,4.25rem)] max-w-5xl mx-auto">
              <span className="text-gold">«</span>
              Somos mar, somos luz,
              <br />
              somos sabor mediterráneo.
              <span className="text-gold">»</span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delayMs={300}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto text-paper/75 leading-relaxed text-[15.5px]">
            <p>{t("bodyLeft")}</p>
            <div className="space-y-5">
              <p>{t("bodyRight1")}</p>
              <p className="font-display italic text-gold text-xl leading-snug">
                {t("bodyRight2")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
