import { setRequestLocale, getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { ContactForm } from "@/components/contacto/ContactForm";
import { SisterRestaurantBlock } from "@/components/sections/SisterRestaurantBlock";
import { Reveal } from "@/components/ui/Reveal";
import { SeashellGlyph } from "@/components/ui/SeashellGlyph";

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contacto");

  return (
    <div className="bg-paper">
      <header className="relative bg-teal-night text-cream py-24 md:py-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(231,175,95,0.55) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1100px] px-6 md:px-20 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
              ✦ Contacto ✦
            </p>
            <h1 className="font-script text-[clamp(5rem,14vw,11rem)] text-gold leading-[0.85]">
              {t("hero.script")}
            </h1>
            <SeashellGlyph className="h-7 w-7 text-gold mx-auto mt-8" />
            <p className="mt-6 max-w-2xl mx-auto text-[12px] uppercase tracking-[0.24em] text-cream/65">
              {t("hero.subline")}
            </p>
          </Reveal>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-5 space-y-10">
            <ContactRow
              Icon={Phone}
              label={t("info.phone.label")}
              value={t("info.phone.value")}
              href="tel:+34952584687"
              note={t("info.phone.note")}
            />
            <ContactRow
              Icon={Mail}
              label={t("info.email.label")}
              value={t("info.email.value")}
              href={`mailto:${t("info.email.value")}`}
            />
            <ContactRow
              Icon={MapPin}
              label={t("info.address.label")}
              value={t("info.address.value")}
            />
            <ContactRow
              Icon={Clock}
              label={t("info.hours.label")}
              value={t("info.hours.value")}
            />

            <div className="pt-4 border-t border-ink/10">
              <p className="text-[10.5px] uppercase tracking-[0.32em] text-gold-deep mb-4">
                {t("info.social.label")}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-ink/15 flex items-center justify-center text-ink/65 hover:border-gold-deep hover:text-gold-deep transition-colors"
                  aria-label={t("info.social.facebook")}
                >
                  <Facebook className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-ink/15 flex items-center justify-center text-ink/65 hover:border-gold-deep hover:text-gold-deep transition-colors"
                  aria-label={t("info.social.instagram")}
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delayMs={200}>
            <div id="mapa" />
            <p className="text-[10.5px] uppercase tracking-[0.32em] text-gold-deep mb-4">
              {t("map.label")}
            </p>
            <div className="aspect-[4/3] w-full overflow-hidden border border-ink/15 bg-cream shadow-editorial">
              <iframe
                title="La Caracola — Google Maps"
                src="https://www.google.com/maps?q=Paseo+Mar%C3%ADtimo+Rey+de+Espa%C3%B1a+Parc+9+Fuengirola+M%C3%A1laga&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-teal-night text-cream">
        <div className="mx-auto max-w-[820px] px-6 md:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold text-center mb-6">
              ✦ Sugerencias ✦
            </p>
            <h2 className="font-display italic text-[clamp(2rem,4.5vw,3.5rem)] text-cream leading-[1.05] text-center">
              {t("form.title")}
            </h2>
            <p className="mt-6 mb-12 text-cream/75 leading-relaxed text-center max-w-2xl mx-auto">
              {t("form.body")}
            </p>
            <div className="bg-paper text-ink p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <SisterRestaurantBlock />
    </div>
  );
}

function ContactRow({
  Icon,
  label,
  value,
  href,
  note,
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
  note?: string;
}) {
  const Body = (
    <div>
      <p className="text-[10.5px] uppercase tracking-[0.32em] text-gold-deep mb-2">
        {label}
      </p>
      <p className="font-display italic text-[22px] text-teal-deep leading-snug">
        {value}
      </p>
      {note && <p className="mt-1.5 text-[12.5px] italic text-ink/55">{note}</p>}
    </div>
  );
  return (
    <div className="flex items-start gap-5 border-l-2 border-gold-deep/30 pl-5">
      <Icon className="w-4 h-4 text-gold-deep mt-2 shrink-0" strokeWidth={1.5} />
      {href ? (
        <a href={href} className="hover:text-ink block">
          {Body}
        </a>
      ) : (
        Body
      )}
    </div>
  );
}
