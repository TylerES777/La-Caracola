"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contacto.form");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [gdpr, setGdpr] = useState(false);

  const canSubmit = email && message && gdpr;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-cream p-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 text-gold-deep mb-4">
          <Check className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <p className="font-display italic text-2xl text-teal-deep">
          {t("success")}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-transparent border-b border-ink/20 px-0 py-3 text-[15px] text-ink placeholder:text-ink/35 focus:outline-none focus:border-gold-deep transition-colors";
  const labelCls =
    "text-[10.5px] uppercase tracking-[0.22em] text-ink/55 mb-1.5";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div className="flex flex-col">
          <label className={labelCls}>{t("name")}</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
          />
        </div>
        <div className="flex flex-col">
          <label className={labelCls}>{t("email")}*</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            required
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className={labelCls}>{t("phone")}</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className={labelCls}>{t("message")}*</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className={`${inputCls} resize-y`}
            required
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

      <button
        type="submit"
        disabled={!canSubmit}
        className="px-8 py-3.5 bg-gold text-ink text-[11px] uppercase tracking-[0.24em] hover:bg-gold-deep hover:text-cream transition-colors disabled:opacity-40 disabled:hover:bg-gold disabled:hover:text-ink"
      >
        {t("submit")}
      </button>
    </form>
  );
}
