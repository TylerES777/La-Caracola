import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { ReactNode } from "react";

type Mood = "dusk" | "cellar" | "dining" | "ceramic" | "espeto" | "sea" | "neutral";

type Props = {
  /** Eyebrow above the script display */
  eyebrow?: string;
  /** Optional Pinyon-script heading */
  script?: string;
  /** Display title (Cormorant italic) */
  title?: string;
  /** Subhead one-liner */
  subline?: string;
  mood?: Mood;
  label?: string;
  /** Override default 60svh height when more breathing room is needed */
  height?: "compact" | "tall";
  /** Optional children rendered below the subline */
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  script,
  title,
  subline,
  mood = "dusk",
  label,
  height = "compact",
  children,
}: Props) {
  const h = height === "tall" ? "h-[78svh] min-h-[520px]" : "h-[58svh] min-h-[420px]";
  return (
    <section className={`relative -mt-20 md:-mt-24 ${h} w-full overflow-hidden`}>
      <div className="absolute inset-0 -z-10">
        <PhotoPlaceholder mood={mood} fill hideLabel label={label ?? title ?? "hero"} />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div className="relative h-full mx-auto max-w-[1280px] px-6 md:px-10 flex">
        <div className="mt-auto mb-12 md:mb-16 max-w-2xl text-cream animate-fade-up">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.24em] text-cream/85 mb-4">
              {eyebrow}
            </p>
          )}
          {script && (
            <p className="font-script text-6xl md:text-8xl text-gold leading-none drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)] mb-3">
              {script}
            </p>
          )}
          {title && (
            <h1 className="font-display italic text-5xl md:text-7xl leading-[0.95] text-cream">
              {title}
            </h1>
          )}
          {subline && (
            <p className="mt-5 max-w-[44ch] text-base md:text-lg text-cream/85 leading-relaxed font-light">
              {subline}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
