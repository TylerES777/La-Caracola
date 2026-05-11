type Props = {
  items: string[];
  tone?: "ink" | "cream" | "gold";
  separator?: string;
  className?: string;
};

const TONE: Record<NonNullable<Props["tone"]>, string> = {
  ink: "bg-ink text-cream",
  cream: "bg-paper text-ink",
  gold: "bg-gold text-ink",
};

/**
 * Slow horizontal marquee strip. Renders the items twice so the loop is seamless.
 */
export function Marquee({
  items,
  tone = "ink",
  separator = "✦",
  className = "",
}: Props) {
  // Double the list so translateX(-50%) lands on a clean repeat.
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-current/10 ${TONE[tone]} ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee py-4 md:py-5">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 text-[12px] md:text-[13px] uppercase tracking-[0.32em] whitespace-nowrap"
          >
            <span>{item}</span>
            <span className="text-current/40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
