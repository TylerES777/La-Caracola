type Props = {
  /** Numeral as Roman string ("I", "II", "III") or plain digit. */
  numeral: string;
  label?: string;
  /** Side-rail orientation. */
  side?: "left" | "right";
  tone?: "ink" | "cream";
  className?: string;
};

const TONE: Record<NonNullable<Props["tone"]>, { numeral: string; rule: string; label: string }> = {
  ink: { numeral: "text-gold-deep", rule: "bg-ink/15", label: "text-ink/55" },
  cream: { numeral: "text-gold", rule: "bg-cream/20", label: "text-cream/65" },
};

/**
 * Editorial chapter marker — large numeral, optional uppercase label, hairline rule.
 * Anchored to a side rail so each section feels like a magazine page header.
 */
export function Chapter({
  numeral,
  label,
  side = "left",
  tone = "ink",
  className = "",
}: Props) {
  const t = TONE[tone];
  const align = side === "left" ? "items-start text-left" : "items-end text-right";

  return (
    <div className={`flex flex-col gap-3 ${align} ${className}`}>
      <span
        className={`font-display italic text-[clamp(3.5rem,7vw,5.5rem)] leading-none ${t.numeral}`}
      >
        {numeral}
      </span>
      {label && (
        <div className="flex items-center gap-3 max-w-[14rem]">
          {side === "left" && <span className={`h-px w-8 ${t.rule}`} />}
          <span
            className={`text-[10px] uppercase tracking-[0.32em] ${t.label}`}
          >
            {label}
          </span>
          {side === "right" && <span className={`h-px w-8 ${t.rule}`} />}
        </div>
      )}
    </div>
  );
}
