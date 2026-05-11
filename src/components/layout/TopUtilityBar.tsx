import { MapPin, Phone, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { RESTAURANT } from "@/lib/constants";

export function TopUtilityBar() {
  const t = useTranslations("utility");

  return (
    <div className="hidden md:block border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1280px] px-8 py-2.5 flex items-center justify-between text-[11px] tracking-[0.08em] text-ink/70">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.5} />
          <span>{t("address")}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={RESTAURANT.phoneHref}
            className="flex items-center gap-2 hover:text-ink transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.5} />
            <span>{t("phone")}</span>
          </a>

          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.5} />
            <span>{t("hours")}</span>
          </div>

          <div className="pl-6 border-l border-ink/10">
            <LanguageSwitcher variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
