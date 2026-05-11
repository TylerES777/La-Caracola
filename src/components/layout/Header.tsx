"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const tNav = useTranslations("nav");
  const tCta = useTranslations("cta");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-xl border-b border-paper/10"
            : "bg-transparent"
        }`}
      >
        {/* Gold rail under header */}
        <span
          aria-hidden
          className={`absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-opacity duration-700 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="mx-auto max-w-[1480px] px-6 md:px-12 h-[72px] md:h-[88px] flex items-center justify-between gap-6">
          {/* Logo + wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="La Caracola — Inicio"
          >
            <Image
              src="/assets/logo.png"
              alt="La Caracola"
              width={140}
              height={48}
              priority
              className="h-9 md:h-10 w-auto"
            />
          </Link>

          {/* Center nav — small caps, individual letter spacing */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.key}
                href={item.href}
                className="group/link relative flex items-center gap-2 text-paper/75 hover:text-paper transition-colors duration-300"
              >
                <span className="font-display italic text-[10px] text-gold tabular-nums">
                  0{i + 1}
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em]">
                  {tNav(item.key)}
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold scale-x-0 origin-left group-hover/link:scale-x-100 transition-transform duration-500"
                />
              </Link>
            ))}
          </nav>

          {/* Right — single reserve CTA */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href="tel:+34952584687"
              className="text-[11px] uppercase tracking-[0.28em] text-paper/65 hover:text-gold transition-colors"
            >
              +34 952 584 687
            </a>
            <Link
              href="/reservas"
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 border border-gold/40 text-gold text-[11px] uppercase tracking-[0.28em] overflow-hidden hover:text-bg transition-colors duration-500"
            >
              <span className="relative z-10">{tCta("reservar")}</span>
              <span className="relative z-10 w-1 h-1 rounded-full bg-gold group-hover:bg-bg transition-colors" />
              <span
                aria-hidden
                className="absolute inset-0 bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"
              />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden -mr-2 p-2 text-paper"
            onClick={() => setMobileOpen(true)}
            aria-label={tNav("openMenu")}
          >
            <Menu className="h-6 w-6" strokeWidth={1.2} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
