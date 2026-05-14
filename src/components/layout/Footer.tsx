import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { RESTAURANT } from "@/lib/constants";
import { EU_LOGOS } from "@/lib/photos";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tCta = useTranslations("cta");
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-deep text-paper overflow-hidden">
      {/* Ambient gold */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-12 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(219,184,142,0.7) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative">
        {/* Big closing wordmark */}
        <div className="border-b border-paper/10">
          <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-20 md:py-28 text-center">
            <Link href="/" className="inline-block group">
              <Image
                src="/assets/logo.png"
                alt="La Caracola"
                width={220}
                height={64}
                className="h-14 md:h-16 w-auto mx-auto mb-8"
              />
            </Link>
            <p className="heading-display font-display text-paper text-[clamp(2.5rem,6vw,5rem)]">
              <span className="text-gold">«</span>{t("tagline").replace(/\.$/, "")}<span className="text-gold">.»</span>
            </p>
            <Link
              href="/reservas"
              className="group mt-12 inline-flex items-center gap-3 px-10 py-4 bg-gold text-bg text-[11px] uppercase tracking-[0.32em] hover:bg-gold-pale transition-colors"
            >
              {tCta("reservarMesa")}
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Contact */}
            <div className="md:col-span-4 space-y-3 text-[13.5px] text-paper/70">
              <p className="caps-label text-gold mb-5">Visite</p>
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span className="leading-relaxed">{t("address")}</span>
              </div>
              <a href={RESTAURANT.phoneHref} className="flex items-center gap-3 hover:text-gold">
                <Phone className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                <span>{t("phone")}</span>
              </a>
              <a href={`mailto:${RESTAURANT.email}`} className="flex items-center gap-3 hover:text-gold">
                <Mail className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                <span>{t("email")}</span>
              </a>
              <p className="text-paper/55 pt-3 caps-label">{t("hours")}</p>
            </div>

            {/* Nav */}
            <div className="md:col-span-3">
              <p className="caps-label text-gold mb-5">Navegación</p>
              <ul className="space-y-2.5 text-[13.5px] text-paper/70">
                {(["inicio","elSabor","elMenu","reservas","galeria","contacto"] as const).map((k) => (
                  <li key={k}>
                    <Link
                      href={k === "inicio" ? "/" : `/${k === "elSabor" ? "el-sabor" : k === "elMenu" ? "el-menu" : k}`}
                      className="hover:text-gold transition-colors inline-flex items-center gap-2 group"
                    >
                      {tNav(k)}
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social + sister */}
            <div className="md:col-span-5 space-y-8">
              <div>
                <p className="caps-label text-gold mb-5">{t("social.label")}</p>
                <div className="flex gap-3">
                  <a
                    href={RESTAURANT.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.facebook")}
                    className="w-11 h-11 border border-paper/20 flex items-center justify-center text-paper/65 hover:border-gold hover:text-gold transition-colors"
                  >
                    <Facebook className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                  <a
                    href={RESTAURANT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("social.instagram")}
                    className="w-11 h-11 border border-paper/20 flex items-center justify-center text-paper/65 hover:border-gold hover:text-gold transition-colors"
                  >
                    <Instagram className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>
              </div>

              <div className="border-t border-paper/10 pt-8">
                <p className="caps-label text-gold mb-3">{t("sister.eyebrow")}</p>
                <p className="font-display italic text-xl md:text-2xl text-paper leading-tight">
                  {t("sister.name")}
                </p>
                <p className="mt-1 text-[12.5px] text-paper/55">{t("sister.subline")}</p>
              </div>
            </div>
          </div>

          {/* EU compliance */}
          <div className="mt-16 pt-10 border-t border-paper/10 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3 bg-paper/5 p-5">
              <div className="flex items-center gap-3 flex-wrap">
                <Image src={EU_LOGOS.andalucia} alt="Andalucía se mueve con Europa" width={120} height={48} className="h-9 w-auto object-contain brightness-110" />
                <Image src={EU_LOGOS.junta} alt="Junta de Andalucía" width={120} height={48} className="h-9 w-auto object-contain brightness-110" />
                <Image src={EU_LOGOS.feder} alt="Unión Europea — FEDER" width={120} height={48} className="h-9 w-auto object-contain brightness-110" />
              </div>
              <p className="mt-4 text-[9px] uppercase tracking-[0.22em] text-paper/45 leading-relaxed">
                {t("euLogosNote")}
              </p>
            </div>
            <p className="md:col-span-9 text-[10.5px] leading-relaxed text-paper/45">
              {t("euCompliance")}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-paper/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[10.5px] uppercase tracking-[0.28em] text-paper/40">
            <p>{t("copyright", { year })}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><Link href="/aviso-legal" className="hover:text-gold transition-colors">{t("legal.aviso")}</Link></li>
              <li><Link href="/privacidad" className="hover:text-gold transition-colors">{t("legal.privacidad")}</Link></li>
              <li><Link href="/cookies" className="hover:text-gold transition-colors">{t("legal.cookies")}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
