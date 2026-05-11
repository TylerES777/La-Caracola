import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { DISH_PHOTOS } from "@/lib/dish-photos";

export function EssenceBanner() {
  const t = useTranslations("inicio.essence");

  return (
    <section className="relative h-[92svh] min-h-[600px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={DISH_PHOTOS["tentaculos-de-pulpo-sobre-tartufo-de-patatas"]}
          alt="Tentáculos de pulpo sobre crema de patatas trufadas"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 55%" }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,42,51,0.3) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative h-full flex items-center justify-center px-6 text-center">
        <Reveal>
          <div className="max-w-3xl">
            <span className="block text-[11px] uppercase tracking-[0.4em] text-gold mb-8">
              ✦ Capítulo III ✦
            </span>
            <h2 className="font-script text-[clamp(5rem,16vw,12rem)] text-gold leading-[0.85] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              {t("display")}
            </h2>
            <div className="mt-10 flex items-center justify-center gap-5">
              <span className="h-px w-16 bg-cream/40" />
              <p className="font-display italic text-xl md:text-2xl text-cream/95">
                {t("subhead")}
              </p>
              <span className="h-px w-16 bg-cream/40" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
