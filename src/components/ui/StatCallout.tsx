type Props = {
  value: string;
  label: string;
  /** Render small caption above the value. */
  eyebrow?: string;
  tone?: "ink" | "cream";
  className?: string;
};

const TONE: Record<NonNullable<Props["tone"]>, { value: string; label: string; eyebrow: string }> = {
  ink: {
    value: "text-teal-deep",
    label: "text-ink/65",
    eyebrow: "text-gold-deep",
  },
  cream: {
    value: "text-cream",
    label: "text-cream/65",
    eyebrow: "text-gold",
  },
};

export function StatCallout({
  value,
  label,
  eyebrow,
  tone = "ink",
  className = "",
}: Props) {
  const t = TONE[tone];
  return (
    <div className={`flex flex-col ${className}`}>
      {eyebrow && (
        <span
          className={`text-[10px] uppercase tracking-[0.32em] mb-3 ${t.eyebrow}`}
        >
          {eyebrow}
        </span>
      )}
      <span
        className={`font-display italic font-light leading-[0.9] text-[clamp(3rem,7vw,5.5rem)] ${t.value}`}
      >
        {value}
      </span>
      <span
        className={`mt-3 text-[11px] uppercase tracking-[0.28em] max-w-[16rem] leading-relaxed ${t.label}`}
      >
        {label}
      </span>
    </div>
  );
}
