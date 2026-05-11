import Image from "next/image";

type Mood =
  | "dusk" // sea at dusk — hero default (gold sun upper-right, deep teal water, cream haze low)
  | "cellar" // wine cellar — warm amber + deep brown
  | "dining" // dining room — soft cream + teal tint
  | "ceramic" // dish on blue ceramic — teal + cream
  | "espeto" // fire/charcoal — warm dark + ember glow
  | "sea" // sea view — teal blues
  | "neutral"; // muted paper

type Aspect = "16/9" | "3/4" | "4/5" | "1/1" | "21/9";

type Props = {
  mood?: Mood;
  aspect?: Aspect;
  label?: string;
  className?: string;
  /** When true the placeholder fills its parent (use with `relative`/sized container) */
  fill?: boolean;
  /** Hide the small corner sentinel label (still readable for reviewers via aria-label) */
  hideLabel?: boolean;
  rounded?: boolean;
  /**
   * Real photo path under /public — when provided, renders Next/Image with the
   * mood gradient as a graceful fallback. The mood-only mode stays in place
   * for slots that haven't been wired yet.
   */
  src?: string;
  /** object-position override for awkward source crops. */
  objectPosition?: string;
  /** Set true on the hero/above-the-fold photo. */
  priority?: boolean;
  /** Greyscale + slight contrast — for vintage heritage tiles. */
  vintage?: boolean;
};

const ASPECT_CLASS: Record<Aspect, string> = {
  "16/9": "aspect-[16/9]",
  "3/4": "aspect-[3/4]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
};

function moodLayers(mood: Mood) {
  switch (mood) {
    case "dusk":
      return (
        <>
          <div className="absolute inset-0 bg-[#1a4855]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 78% 18%, rgba(255,220,150,0.85) 0%, rgba(231,175,95,0.55) 14%, rgba(45,123,140,0) 48%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 80% 16%, rgba(255,243,210,0.55) 0%, rgba(255,220,140,0) 9%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(245,242,235,0.20) 88%, rgba(245,242,235,0.32) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.32) 100%)",
            }}
          />
        </>
      );
    case "cellar":
      return (
        <>
          <div className="absolute inset-0 bg-[#2a1a14]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 40% 60%, rgba(201,169,97,0.55) 0%, rgba(168,133,63,0.25) 35%, rgba(42,26,20,0) 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
            }}
          />
        </>
      );
    case "dining":
      return (
        <>
          <div className="absolute inset-0 bg-[#e8e3d7]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.7) 0%, rgba(245,242,235,0) 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(45,123,140,0.06) 0%, rgba(45,123,140,0) 60%)",
            }}
          />
        </>
      );
    case "ceramic":
      return (
        <>
          <div className="absolute inset-0 bg-[#1f5566]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(245,242,235,0.78) 0%, rgba(245,242,235,0.4) 18%, rgba(31,85,102,0) 55%)",
            }}
          />
        </>
      );
    case "espeto":
      return (
        <>
          <div className="absolute inset-0 bg-[#1a1410]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 70%, rgba(255,140,40,0.6) 0%, rgba(180,70,20,0.3) 30%, rgba(26,20,16,0) 65%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 75%, rgba(255,210,140,0.4) 0%, rgba(255,180,80,0) 18%)",
            }}
          />
        </>
      );
    case "sea":
      return (
        <>
          <div className="absolute inset-0 bg-[#1f5566]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #5fa0b0 0%, #2d7b8c 35%, #1f5566 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 55%)",
            }}
          />
        </>
      );
    default:
      return (
        <>
          <div className="absolute inset-0 bg-[#ece8df]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,169,97,0.10) 0%, rgba(45,123,140,0.06) 100%)",
            }}
          />
        </>
      );
  }
}

const NOISE_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>`;

export function PhotoPlaceholder({
  mood = "neutral",
  aspect,
  label,
  className = "",
  fill = false,
  hideLabel = false,
  rounded = false,
  src,
  objectPosition,
  priority = false,
  vintage = false,
}: Props) {
  const layers = moodLayers(mood);
  const sentinel = label ?? `${mood} placeholder`;
  const aspectCls = !fill && aspect ? ASPECT_CLASS[aspect] : "";
  const sizing = fill ? "absolute inset-0" : `relative w-full ${aspectCls}`;

  return (
    <div
      role="img"
      aria-label={sentinel}
      className={`${sizing} overflow-hidden ${rounded ? "rounded-full" : ""} ${className}`}
    >
      {/* Mood gradient under the photo — also serves as graceful fallback while images load. */}
      {layers}

      {src && (
        <Image
          src={src}
          alt={sentinel}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1280px"
          style={objectPosition ? { objectFit: "cover", objectPosition } : { objectFit: "cover" }}
          className={vintage ? "grayscale contrast-[1.08]" : ""}
        />
      )}

      {/* Grain — applied over photo for editorial texture; under-noise when no photo */}
      <div
        aria-hidden
        className={`absolute inset-0 pointer-events-none ${
          src ? "opacity-[0.08] mix-blend-overlay" : "opacity-[0.18] mix-blend-overlay"
        }`}
        style={{ backgroundImage: `url("${NOISE_SVG}")` }}
      />

      {!hideLabel && !src && (
        <div className="absolute top-3 right-3 text-[9.5px] uppercase tracking-[0.22em] text-cream/55 border border-cream/25 px-2 py-1 backdrop-blur-[2px] pointer-events-none">
          {aspect ?? "photo"} · {sentinel}
        </div>
      )}
    </div>
  );
}
