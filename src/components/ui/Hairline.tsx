import { SeashellGlyph } from "./SeashellGlyph";

type Props = {
  className?: string;
  /** Tone of the rule + glyph. */
  tone?: "gold" | "ink" | "cream";
  /** Hide the seashell ornament for a plain hairline. */
  plain?: boolean;
};

const TONE: Record<NonNullable<Props["tone"]>, string> = {
  gold: "text-gold-deep",
  ink: "text-ink/30",
  cream: "text-cream/60",
};

export function Hairline({ className = "", tone = "gold", plain = false }: Props) {
  if (plain) {
    return <div className={`h-px w-full bg-current opacity-30 ${TONE[tone]} ${className}`} />;
  }
  return (
    <div className={`flex items-center gap-5 ${TONE[tone]} ${className}`}>
      <span className="flex-1 h-px bg-current opacity-30" />
      <SeashellGlyph className="h-5 w-5 shrink-0" />
      <span className="flex-1 h-px bg-current opacity-30" />
    </div>
  );
}
