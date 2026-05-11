"use client";

import { useEffect } from "react";
import { X, MapPin, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { NAV_ITEMS, RESTAURANT } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  const tNav = useTranslations("nav");
  const tCta = useTranslations("cta");
  const tUtil = useTranslations("utility");

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-500 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-bg-deep/90 backdrop-blur-xl" onClick={onClose} />
      <div
        className={`absolute inset-y-0 right-0 w-full max-w-md bg-bg shadow-lift transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col overflow-hidden`}
        role="dialog"
        aria-modal="true"
      >
        {/* Ambient gold glow */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-25 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(219,184,142,0.6) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        <div className="relative flex items-center justify-between px-6 py-6 border-b border-paper/10">
          <span className="font-display italic text-2xl text-gold">La Caracola</span>
          <button
            type="button"
            onClick={onClose}
            aria-label={tNav("closeMenu")}
            className="-mr-2 p-2 text-paper/70 hover:text-paper"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="relative flex-1 px-6 py-10 overflow-y-auto">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 py-3 border-b border-paper/10"
                >
                  <span className="font-display italic text-gold text-base tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="font-display italic text-3xl text-paper group-hover:text-gold transition-colors">
                    {tNav(item.key)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3">
            <Link
              href="/reservas"
              onClick={onClose}
              className="block w-full text-center px-6 py-4 bg-gold text-bg text-[11px] uppercase tracking-[0.28em]"
            >
              {tCta("reservarMesa")}
            </Link>
            <Link
              href="/contacto#mapa"
              onClick={onClose}
              className="block w-full text-center px-6 py-4 border border-paper/30 text-paper text-[11px] uppercase tracking-[0.28em]"
            >
              {tCta("ubicacion")}
            </Link>
          </div>
        </nav>

        <div className="relative px-6 py-6 border-t border-paper/10 space-y-4 text-[12px] text-paper/65">
          <a href={RESTAURANT.phoneHref} className="flex items-start gap-3 hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold mt-0.5" strokeWidth={1.5} />
            <span>{tUtil("phone")}</span>
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="h-3.5 w-3.5 text-gold mt-0.5" strokeWidth={1.5} />
            <span>{tUtil("address")}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-3.5 w-3.5 text-gold mt-0.5" strokeWidth={1.5} />
            <span>{tUtil("hours")}</span>
          </div>
          <div className="pt-4 border-t border-paper/10">
            <LanguageSwitcher variant="light" />
          </div>
        </div>
      </div>
    </div>
  );
}
