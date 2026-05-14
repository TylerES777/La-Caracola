import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { MEDIA } from "@/lib/photos";

type Event = {
  yearKey: "year1990" | "year2021" | "yearToday";
  titleKey: string;
  bodyKey: string;
  altKey: string;
  src: string;
};

const EVENTS: Event[] = [
  { yearKey: "year1990",  titleKey: "ev1Title", bodyKey: "ev1Body", altKey: "ev1Alt", src: MEDIA.facade },
  { yearKey: "year2021",  titleKey: "ev2Title", bodyKey: "ev2Body", altKey: "ev2Alt", src: MEDIA.diningRoomHero },
  { yearKey: "yearToday", titleKey: "ev3Title", bodyKey: "ev3Body", altKey: "ev3Alt", src: MEDIA.terrace },
];

export function Timeline() {
  const tD = useTranslations("display");
  const tTL = useTranslations("display.timeline");
  return (
    <section className="relative py-32 md:py-44 bg-bg overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-display italic text-gold text-base">03</span>
            <span className="h-px w-12 bg-paper/15" />
            <span className="caps-label text-paper/55">{tD("chapter.history")}</span>
          </div>
          <h2 className="heading-display font-display text-paper text-[clamp(2.5rem,5.5vw,4.5rem)] max-w-3xl mb-20">
            {tTL("title")}
            <br />
            <span className="text-gold">{tTL("accent")}</span>
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {/* Vertical rail behind cards (desktop) */}
          <div
            aria-hidden
            className="absolute hidden lg:block left-0 right-0 top-[120px] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          />

          {EVENTS.map((ev, i) => (
            <Reveal key={ev.yearKey} delayMs={i * 200}>
              <article className="relative">
                {/* Year + dot on rail */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display italic text-paper text-[clamp(3rem,6vw,5rem)] leading-none">
                    {tTL(ev.yearKey)}
                  </span>
                  <span
                    aria-hidden
                    className="hidden lg:block w-3 h-3 rounded-full bg-gold ring-4 ring-bg"
                  />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden mb-7">
                  <Image
                    src={ev.src}
                    alt={tTL(ev.altKey)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <p className="caps-label text-gold mb-3">
                  {tD("chapterNum")} 0{i + 1}
                </p>
                <h3 className="font-display italic text-2xl md:text-3xl text-paper mb-4">
                  {tTL(ev.titleKey)}
                </h3>
                <p className="text-paper/70 leading-relaxed text-[14.5px]">{tTL(ev.bodyKey)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
