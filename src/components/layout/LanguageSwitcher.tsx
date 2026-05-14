"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname, routing, type Locale } from "@/i18n/routing";

type Props = {
  /**
   * `dark` = dark pills on light surfaces (top utility bar)
   * `light` = light pills on dark surfaces (over the hero / floating header)
   */
  variant?: "light" | "dark";
};

const LOCALE_LABEL: Record<string, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
};

export function LanguageSwitcher({ variant = "dark" }: Props) {
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const onSelect = (next: Locale) => {
    if (next === current) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  const base =
    variant === "light"
      ? "border-paper/30 text-paper/75"
      : "border-ink/15 text-ink/65";
  const inactiveHover =
    variant === "light"
      ? "hover:text-paper hover:border-paper/55"
      : "hover:text-ink hover:border-ink/35";
  const activeStyle =
    variant === "light"
      ? "bg-gold text-bg border-gold"
      : "bg-gold text-bg border-gold";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border ${
        variant === "light" ? "border-paper/25" : "border-ink/15"
      } p-0.5 bg-transparent`}
    >
      {routing.locales.map((loc) => {
        const isActive = loc === current;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => onSelect(loc)}
            aria-pressed={isActive}
            aria-label={LOCALE_LABEL[loc]}
            className={`px-2.5 md:px-3 py-1 text-[10.5px] font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-200 cursor-pointer border ${
              isActive
                ? activeStyle
                : `border-transparent ${base} ${inactiveHover}`
            }`}
          >
            {LOCALE_LABEL[loc]}
          </button>
        );
      })}
    </div>
  );
}
