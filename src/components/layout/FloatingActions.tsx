"use client";

import { useEffect, useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function FloatingActions() {
  const t = useTranslations("floatingActions");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile — full-width fixed bottom bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 transition-transform duration-500 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Link
          href="/reservas"
          className="bg-gold text-ink py-3.5 text-[11px] uppercase tracking-[0.22em] flex items-center justify-center gap-2"
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
          {t("reservar")}
        </Link>
        <Link
          href="/contacto#mapa"
          className="bg-teal text-cream py-3.5 text-[11px] uppercase tracking-[0.22em] flex items-center justify-center gap-2"
        >
          <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
          {t("ubicacion")}
        </Link>
      </div>

      {/* Desktop — single subtle pill bottom-right */}
      <Link
        href="/reservas"
        className={`hidden md:inline-flex fixed bottom-8 right-8 z-40 items-center gap-2.5 px-6 py-3.5 bg-gold text-ink text-[11px] uppercase tracking-[0.22em] shadow-[0_8px_30px_rgba(168,133,63,0.35)] hover:bg-gold-deep hover:text-cream transition-all duration-300 ${
          show
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
        {t("reservar")}
      </Link>
    </>
  );
}
