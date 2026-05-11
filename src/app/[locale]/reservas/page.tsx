import { setRequestLocale, getTranslations } from "next-intl/server";
import { ReservationForm } from "@/components/reservas/ReservationForm";
import { Phone, Clock, CalendarCheck, Users, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Reveal } from "@/components/ui/Reveal";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";

export default async function ReservasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("reservas");

  const infoItems = [
    { key: "confirm", Icon: CalendarCheck },
    { key: "puntualidad", Icon: Clock },
    { key: "antelacion", Icon: CalendarCheck },
    { key: "grupos", Icon: Users },
    { key: "cancel", Icon: X },
  ];

  return (
    <div className="bg-paper">
      <header className="relative bg-teal-night text-cream py-24 md:py-32 overflow-hidden border-b border-cream/10">
        <div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[400px] opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(231,175,95,0.55) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-20 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
              ✦ Reservas ✦
            </p>
            <h1 className="font-script text-[clamp(5rem,14vw,11rem)] text-gold leading-[0.85]">
              {t("hero.script")}
            </h1>
            <SeashellGlyph className="h-7 w-7 text-gold mx-auto mt-10" />
            <p className="mt-8 max-w-2xl mx-auto text-[12px] uppercase tracking-[0.24em] text-cream/65 leading-relaxed">
              {t("hero.subline")}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <ReservationForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9 space-y-12">
            <Reveal delayMs={200}>
              <div>
                <p className="text-[10.5px] uppercase tracking-[0.32em] text-gold-deep mb-6">
                  {t("info.title")}
                </p>
                <ul className="space-y-5 text-[13.5px] text-ink/75 leading-relaxed">
                  {infoItems.map(({ key, Icon }) => (
                    <li key={key} className="flex items-start gap-3.5">
                      <Icon
                        className="w-3.5 h-3.5 text-gold-deep mt-1 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>{t(`info.items.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delayMs={400}>
              <div className="bg-teal-night text-cream p-7">
                <p className="text-[10.5px] uppercase tracking-[0.32em] text-gold mb-3">
                  {t("phoneCard.title")}
                </p>
                <p className="text-[13.5px] text-cream/80 leading-relaxed">
                  {t("phoneCard.body")}
                </p>
                <a
                  href="tel:+34952584687"
                  className="mt-6 inline-flex items-center gap-2.5 px-5 py-3 bg-gold text-ink text-[11px] uppercase tracking-[0.28em] hover:bg-gold-deep hover:text-cream transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {t("phoneCard.cta")}
                </a>
                <Link
                  href="/contacto"
                  className="block mt-5 text-[11px] uppercase tracking-[0.28em] text-gold hover:text-cream transition-colors"
                >
                  {t("phoneCard.secondary")} →
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}
