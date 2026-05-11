import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowDown } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

export function Hero() {
  const t = useTranslations("hero");
  const tCta = useTranslations("cta");

  return (
    <section
      aria-label={t("imageAlt")}
      className="relative -mt-[72px] md:-mt-[88px] min-h-[100svh] w-full overflow-hidden bg-bg-deep"
    >
      {/* Cinematic photo */}
      <div className="absolute inset-0 animate-ken-burns will-change-transform">
        <Image
          src={PHOTOS.heroDiningRoom}
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
      </div>

      {/* Heavy cinematic overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(10,26,32,0.85) 0%, rgba(10,26,32,0.55) 32%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 25%, rgba(219,184,142,0.18) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      {/* Bottom black-fade so the page hand-off is seamless */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(180deg, rgba(10,26,32,0) 0%, var(--color-bg) 100%)" }}
      />

      {/* Left vertical rail — coordinates */}
      <div className="absolute left-6 inset-y-0 hidden md:flex flex-col justify-between py-24 z-10 pointer-events-none">
        <span className="text-vertical caps-label text-paper/55">
          Fuengirola · Málaga · ESP
        </span>
        <div className="flex flex-col items-center gap-2 text-paper/45">
          <span className="font-display italic text-sm">36°32′N</span>
          <span className="h-12 w-px bg-paper/25" />
          <span className="font-display italic text-sm">04°37′W</span>
        </div>
      </div>

      {/* Right vertical rail — establishment */}
      <div className="absolute right-6 inset-y-0 hidden md:flex flex-col justify-between py-24 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-3 text-paper/55">
          <span className="font-display italic text-2xl text-gold">N°01</span>
          <span className="h-8 w-px bg-paper/25" />
        </div>
        <span className="text-vertical caps-label text-paper/55">
          Est. 1990 · Renovado MMXXI
        </span>
      </div>

      {/* Main content */}
      <div className="relative min-h-[100svh] mx-auto max-w-[1480px] px-6 md:px-24 pt-32 md:pt-40 pb-20 flex flex-col justify-end">
        <div className="animate-stagger">
          {/* Eyebrow with rule */}
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span className="block w-12 h-px bg-gold animate-draw-line" />
            <span className="caps-label text-gold">
              Restaurante La Caracola
            </span>
          </div>

          {/* Display headline — staircased */}
          <h1 className="heading-display font-display text-paper">
            <span className="block text-[clamp(3.25rem,12vw,11rem)]">Comer</span>
            <span className="block text-[clamp(3.25rem,12vw,11rem)] pl-[10vw] md:pl-[16vw]">
              frente
            </span>
            <span className="block text-[clamp(3.25rem,12vw,11rem)] pl-[3vw]">
              al <span className="text-gold">mar.</span>
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-12 max-w-[40ch] text-base md:text-lg text-paper/75 leading-relaxed font-light">
            {t("subhead")}
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="/reservas"
              className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gold text-bg text-[11px] uppercase tracking-[0.32em] overflow-hidden"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                {tCta("reservarMesa")}
              </span>
              <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-bg group-hover:translate-x-2 transition-transform duration-300" />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-transparent via-paper/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
              />
            </Link>
            <Link
              href="/el-menu/carta"
              className="group inline-flex items-center gap-3 px-9 py-4 border border-paper/30 text-paper text-[11px] uppercase tracking-[0.32em] hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {tCta("verCarta")}
              <span className="w-1 h-1 rounded-full bg-paper/60 group-hover:bg-gold transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll affordance */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-paper/60 z-10"
      >
        <span className="text-[9px] uppercase tracking-[0.45em] animate-pulse-soft">
          Scroll
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-gold animate-pulse-soft" strokeWidth={1.2} />
      </div>
    </section>
  );
}
