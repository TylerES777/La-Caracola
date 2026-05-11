import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/photos";
import { PREMIUM } from "@/lib/premium-photos";

type Event = {
  year: string;
  title: string;
  body: string;
  src: string;
  alt: string;
};

const EVENTS: Event[] = [
  {
    year: "1990",
    title: "La familia",
    body: "Una familia malagueña de larga tradición gastronómica abre las puertas frente al mar. La cocina se hereda — del fuego, de la lonja, de la sobremesa.",
    src: PHOTOS.vintagePesca,
    alt: "Pesca tradicional · Fuengirola",
  },
  {
    year: "2021",
    title: "La renovación",
    body: "Una nueva imagen para los espacios — más moderna, más elegante, inspirada en el azul del Mediterráneo. La carta evoluciona pero la receta no.",
    src: PHOTOS.heroDiningRoom,
    alt: "Comedor renovado · 2021",
  },
  {
    year: "Hoy",
    title: "Comer frente al mar",
    body: "Cocina ininterrumpida, terraza con acceso privado a la playa, una bodega visible. La misma idea — afinada.",
    src: PREMIUM["dish-paella"],
    alt: "La cocina hoy",
  },
];

export function Timeline() {
  return (
    <section className="relative py-32 md:py-44 bg-bg overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display italic text-gold text-base">03</span>
            <span className="h-px w-12 bg-paper/15" />
            <span className="caps-label text-paper/55">La historia</span>
          </div>
          <h2 className="heading-display font-display text-paper text-[clamp(2.5rem,5.5vw,4.5rem)] max-w-3xl mb-20">
            Tres momentos
            <br />
            <span className="text-gold">de una misma casa.</span>
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {/* Vertical rail behind cards (desktop) */}
          <div
            aria-hidden
            className="absolute hidden lg:block left-0 right-0 top-[120px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          />

          {EVENTS.map((ev, i) => (
            <Reveal key={ev.year} delayMs={i * 200}>
              <article className="relative">
                {/* Year + dot on rail */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display italic text-paper text-[clamp(3rem,6vw,5rem)] leading-none">
                    {ev.year}
                  </span>
                  <span
                    aria-hidden
                    className="hidden lg:block w-3 h-3 rounded-full bg-gold ring-4 ring-bg"
                  />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden mb-7">
                  <Image
                    src={ev.src}
                    alt={ev.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={
                      i === 0
                        ? "object-cover grayscale contrast-110"
                        : "object-cover"
                    }
                  />
                </div>

                <p className="caps-label text-gold mb-3">
                  Capítulo 0{i + 1}
                </p>
                <h3 className="font-display italic text-2xl md:text-3xl text-paper mb-4">
                  {ev.title}
                </h3>
                <p className="text-paper/70 leading-relaxed text-[14.5px]">{ev.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
