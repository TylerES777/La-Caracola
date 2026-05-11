import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { StatCallout } from "@/components/ui/StatCallout";

export function EditorialQuote() {
  const t = useTranslations("inicio.editorial");

  return (
    <section className="py-28 md:py-36 bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold-deep mb-8">
              IV · La filosofía
            </p>
            <blockquote className="font-display italic text-[clamp(2rem,4vw,3.25rem)] text-teal-deep leading-[1.15]">
              <span className="font-script text-5xl text-gold mr-1 align-[-0.2em]">“</span>
              {t("body")}
              <span className="font-script text-5xl text-gold ml-1 align-[-0.2em]">”</span>
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-ink/30" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-ink/55">
                {t("title")}
              </span>
            </div>
          </Reveal>

          <div className="lg:col-span-5 lg:pl-12 flex flex-col gap-12 lg:border-l lg:border-ink/10">
            <Reveal delayMs={150}>
              <StatCallout
                eyebrow="Cocina ininterrumpida"
                value="12-23:30h"
                label="Servicio continuo todos los días"
              />
            </Reveal>
            <Reveal delayMs={300}>
              <StatCallout
                eyebrow="La carta"
                value="127"
                label="Platos · 100+ referencias en bodega"
              />
            </Reveal>
            <Reveal delayMs={450}>
              <StatCallout
                eyebrow="Frente al mar"
                value="0m"
                label="De la mesa a la orilla — acceso privado"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
