import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { PREMIUM } from "@/lib/premium-photos";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function ClosingCta() {
  const tD = useTranslations("display");
  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden bg-bg-deep">
      <div className="absolute inset-0">
        <Image
          src={PREMIUM["hero-restaurant"]}
          alt="La Caracola — comedor"
          fill
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
            "linear-gradient(115deg, rgba(10,26,32,0.92) 0%, rgba(10,26,32,0.55) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 py-32 w-full">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-display italic text-gold text-base">07</span>
            <span className="h-px w-12 bg-paper/30" />
            <span className="caps-label text-gold">{tD("chapter.reservas")}</span>
          </div>
          <h2 className="heading-display font-display text-paper text-[clamp(3rem,9vw,8.5rem)] max-w-5xl">
            {tD("closing.line1")}
            <br />
            <span className="text-gold">{tD("closing.accent")}</span>
          </h2>
          <p className="mt-10 max-w-xl text-paper/80 text-lg leading-relaxed">
            {tD("closing.subline")}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/reservas"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-bg text-[11px] uppercase tracking-[0.32em] hover:bg-gold-pale transition-colors duration-300"
            >
              {tD("closing.reservar")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
            <a
              href="tel:+34952584687"
              className="px-10 py-4 border border-paper/40 text-paper text-[11px] uppercase tracking-[0.32em] hover:bg-paper hover:text-bg transition-colors duration-300"
            >
              +34 952 584 687
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
