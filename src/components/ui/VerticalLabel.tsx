type Props = {
  children: React.ReactNode;
  tone?: "ink" | "cream" | "gold";
  className?: string;
};

const TONE: Record<NonNullable<Props["tone"]>, string> = {
  ink: "text-ink/55",
  cream: "text-cream/65",
  gold: "text-gold-deep",
};

/**
 * Bottom-up vertical label used in side rails for a magazine-binding feel.
 */
export function VerticalLabel({ children, tone = "ink", className = "" }: Props) {
  return (
    <span
      className={`text-vertical text-[10px] uppercase tracking-[0.32em] ${TONE[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
