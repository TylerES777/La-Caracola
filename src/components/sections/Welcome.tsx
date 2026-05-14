import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { PREMIUM } from "@/lib/premium-photos";

export function Welcome() {
  const t = useTranslations("inicio.section2");
  const tD = useTranslations("display");

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Soft gold ambient */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(219,184,142,0.7) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12">
        {/* Section header — chapter strip */}
        <Reveal>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-display italic text-gold text-base">01</span>
            <span className="h-px flex-1 bg-paper/15 max-w-[180px]" />
            <span className="caps-label text-paper/55">{tD("chapter.welcome")}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — big headline */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="heading-display font-display text-paper text-[clamp(2.75rem,7vw,5.5rem)]">
                {tD("welcome.line1")}
                <br />
                <span className="text-gold">{tD("welcome.accent")}</span>
                <br />
                {tD("welcome.line3")}
              </h2>
            </Reveal>
          </div>

          {/* Right — photo with caption */}
          <Reveal className="lg:col-span-5 lg:pt-8" delayMs={200}>
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={PREMIUM["dish-paella"]}
                  alt="Paella mediterránea"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-paper/10"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between">
                <span className="caps-label text-paper/55">{tD("welcome.figureLabel")}</span>
                <span className="font-display italic text-gold/80 text-sm">
                  {tD("welcome.figureCaption")}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Long-form body */}
        <Reveal className="mt-20 lg:mt-32" delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-[1200px]">
            <div className="lg:col-span-2 lg:col-start-2">
              <p className="caps-label text-gold">{t("eyebrow")}</p>
            </div>
            <div className="lg:col-span-8 space-y-6 text-paper/75 leading-relaxed text-[15.5px] max-w-[58ch]">
              <p className="drop-cap">{t("body1")}</p>
              <p>{t("body2")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
