import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SISTER } from "@/lib/sister-restaurant";
import { ArrowUpRight } from "lucide-react";

export function SisterRestaurantBlock() {
  const t = useTranslations("inicio.sister");

  return (
    <section className="relative py-24 md:py-32 bg-bg-deep border-y border-paper/10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="caps-label text-gold mb-4">{t("eyebrow")}</p>
              <p className="font-display italic text-paper text-3xl md:text-4xl lg:text-5xl leading-tight">
                Restaurante Marisquería
                <br />
                <span className="text-gold">La Carihuela Chica.</span>
              </p>
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-[12.5px] text-paper/65 max-w-xl">
                <p>{t("openLine")}</p>
                <a href={SISTER.phoneHref} className="hover:text-gold transition-colors">
                  {SISTER.phone}
                </a>
                <p className="sm:col-span-2">{t("address")}</p>
              </div>
            </div>
            <div className="md:col-span-5 md:text-right">
              <a
                href={SISTER.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-gold text-[11px] uppercase tracking-[0.32em] hover:bg-gold hover:text-bg transition-colors duration-500"
              >
                {t("visit")}
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
