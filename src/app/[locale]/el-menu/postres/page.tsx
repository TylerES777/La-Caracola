import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { POSTRES } from "@/lib/desserts-data";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";
import { Reveal } from "@/components/ui/Reveal";
import { DISH_PHOTOS } from "@/lib/dish-photos";

function fmt(n: number) {
  return n.toFixed(2).replace(".", ",");
}

export default async function PostresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("menu.postres");

  return (
    <div className="bg-paper">
      <header className="relative bg-teal-night text-cream py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(231,175,95,0.6) 0%, rgba(0,0,0,0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-20 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
              ✦ Capítulo II ✦
            </p>
            <h1 className="font-script text-[clamp(5rem,15vw,12rem)] text-gold leading-[0.85]">
              {t("scriptTitle")}
            </h1>
            <p className="mt-2 text-[12px] uppercase tracking-[0.32em] text-cream/70">
              {t("subtitle")}
            </p>
            <p className="mt-10 max-w-md mx-auto text-cream/85 italic font-display text-xl leading-relaxed">
              {t("intro")}
            </p>
            <SeashellGlyph className="h-7 w-7 text-gold mx-auto mt-10" />
          </Reveal>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <ul className="mx-auto max-w-[1100px] px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-4">
          {POSTRES.map((d, i) => {
            const photo = d.slug ? DISH_PHOTOS[d.slug] : undefined;
            return (
              <Reveal key={d.id} delayMs={(i % 2) * 100}>
                <li className="flex items-center gap-5 py-5 border-b border-ink/35">
                  {photo ? (
                    <div className="w-16 h-16 shrink-0 overflow-hidden ring-1 ring-gold/30">
                      <Image
                        src={photo}
                        alt={d.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 shrink-0 hidden sm:flex items-center justify-center text-gold/30 font-script text-3xl">
                      ✦
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] tabular-nums text-gold-deep">
                        N°{String(d.id).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="font-display text-[19px] text-ink leading-snug mt-0.5">
                      {d.name}
                    </p>
                    {d.note && (
                      <p className="text-[12px] italic text-ink/72 mt-1">{d.note}</p>
                    )}
                  </div>
                  <span className="font-display italic tabular-nums text-[20px] text-teal-deep shrink-0">
                    {fmt(d.price)}
                    <span className="text-[10px] text-ink/78 ml-0.5">€</span>
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
