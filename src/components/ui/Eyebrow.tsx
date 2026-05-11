type Props = {
  children: React.ReactNode;
  tone?: "gold" | "teal" | "ink" | "cream";
  className?: string;
  as?: "p" | "span" | "div";
};

const TONE: Record<NonNullable<Props["tone"]>, string> = {
  gold: "text-gold-deep",
  teal: "text-teal-deep",
  ink: "text-ink/65",
  cream: "text-cream/85",
};

export function Eyebrow({ children, tone = "teal", className = "", as: Tag = "p" }: Props) {
  return (
    <Tag
      className={`text-[11px] uppercase tracking-[0.24em] ${TONE[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}
