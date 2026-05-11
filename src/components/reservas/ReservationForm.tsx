"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Phone } from "lucide-react";

const LUNCH_SLOTS = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
];
const DINNER_SLOTS = [
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
];

const PARTY_SIZES = [1, 2, 3, 4, 5, 6, 7, 8];

function todayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}
function plus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function ReservationForm() {
  const t = useTranslations("reservas.form");
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");
  const [shift, setShift] = useState<"lunch" | "dinner">("dinner");
  const [time, setTime] = useState("");
  const [personas, setPersonas] = useState<number>(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+34 ");
  const [comments, setComments] = useState("");
  const [gdpr, setGdpr] = useState(false);

  const slots = useMemo(
    () => (shift === "lunch" ? LUNCH_SLOTS : DINNER_SLOTS),
    [shift]
  );

  const canSubmit =
    date && time && personas > 0 && name && email && phone && gdpr;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    // No backend wired yet — this just shows the success state.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-cream p-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 text-gold-deep mb-4">
          <Check className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <h3 className="font-display italic text-3xl text-teal-deep">
          {t("successTitle")}
        </h3>
        <p className="mt-4 text-ink/75 leading-relaxed max-w-md mx-auto">
          {t("successBody")}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-transparent border-b border-ink/20 px-0 py-3 text-[15px] text-ink placeholder:text-ink/35 focus:outline-none focus:border-gold-deep transition-colors";
  const labelCls =
    "text-[10.5px] uppercase tracking-[0.22em] text-ink/55 mb-1.5";

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        <div className="flex flex-col">
          <label htmlFor="date" className={labelCls}>
            {t("date")}
          </label>
          <input
            id="date"
            type="date"
            min={todayISO()}
            max={plus(60)}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputCls}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className={labelCls}>{t("personas")}</label>
          <select
            value={personas}
            onChange={(e) => setPersonas(Number(e.target.value))}
            className={inputCls}
          >
            {PARTY_SIZES.map((n) => (
              <option key={n} value={n}>
                {n === 1 ? "1 persona" : `${n} personas`}
              </option>
            ))}
            <option disabled>{t("personasMore")}</option>
          </select>
        </div>

        <div className="flex flex-col md:col-span-2">
          <label className={labelCls}>{t("time")}</label>
          <div className="flex gap-3 mb-3">
            {(["lunch", "dinner"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setShift(s);
                  setTime("");
                }}
                className={`px-4 py-2 text-[10.5px] uppercase tracking-[0.22em] border transition-colors ${
                  shift === s
                    ? "border-teal-deep bg-teal-deep text-cream"
                    : "border-ink/20 text-ink/70 hover:border-ink/40"
                }`}
              >
                {t(s)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {slots.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setTime(s)}
                className={`py-2.5 text-[13px] tabular-nums font-display border transition-colors ${
                  time === s
                    ? "border-gold-deep bg-gold/15 text-ink"
                    : "border-ink/15 text-ink/70 hover:border-ink/35"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name" className={labelCls}>
            {t("name")}
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className={labelCls}>
            {t("email")}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            required
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="phone" className={labelCls}>
            {t("phone")}
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
            required
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="comments" className={labelCls}>
            {t("comments")}
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            rows={3}
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>

      <label className="flex items-start gap-3 text-[12.5px] text-ink/65 leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-gold-deep"
          required
        />
        <span>{t("gdpr")}</span>
      </label>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={!canSubmit}
          className="px-8 py-3.5 bg-gold text-ink text-[11px] uppercase tracking-[0.24em] hover:bg-gold-deep hover:text-cream transition-colors disabled:opacity-40 disabled:hover:bg-gold disabled:hover:text-ink disabled:cursor-not-allowed"
        >
          {t("submit")}
        </button>
        <a
          href="tel:+34952584687"
          className="text-[11px] uppercase tracking-[0.22em] text-teal-deep hover:text-gold-deep transition-colors inline-flex items-center gap-2"
        >
          <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
          +34 952 584 687
        </a>
      </div>
    </form>
  );
}
