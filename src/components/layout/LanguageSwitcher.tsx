"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname, routing, type Locale } from "@/i18n/routing";
import { LOCALE_LABELS } from "@/lib/constants";

type Props = {
  variant?: "light" | "dark";
  align?: "left" | "right";
};

const LOCALE_NAMES: Record<string, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
};

export function LanguageSwitcher({ variant = "dark", align = "right" }: Props) {
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onSelect = (next: Locale) => {
    setOpen(false);
    if (next === current) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  const tone =
    variant === "light"
      ? "text-cream/90 hover:text-cream"
      : "text-ink/75 hover:text-ink";

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] cursor-pointer transition-colors duration-200 ${tone}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{LOCALE_LABELS[current]}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className={`absolute top-full mt-3 z-50 min-w-[160px] bg-paper border border-ink/10 shadow-[0_8px_28px_rgba(0,0,0,0.08)] py-2 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {routing.locales.map((loc) => {
            const isActive = loc === current;
            return (
              <button
                key={loc}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => onSelect(loc)}
                className={`w-full px-4 py-2 flex items-center justify-between gap-4 text-left transition-colors ${
                  isActive
                    ? "text-teal-deep"
                    : "text-ink/80 hover:text-ink hover:bg-ink/5"
                }`}
              >
                <span className="text-[12px] tracking-wide font-body">
                  {LOCALE_NAMES[loc]}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-[0.22em] ${
                    isActive ? "text-gold-deep" : "text-ink/40"
                  }`}
                >
                  {LOCALE_LABELS[loc]}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
