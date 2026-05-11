import type { AllergenCode } from "@/lib/menu-data";

type Props = {
  code: AllergenCode;
  label: string;
  size?: "sm" | "md";
};

const COLORS: Record<AllergenCode, string> = {
  gluten: "#C9A961",
  crustaceos: "#B45A3C",
  huevos: "#E8C547",
  pescado: "#5FA0B0",
  cacahuetes: "#8B5E3C",
  soja: "#6B7C2F",
  lacteos: "#E8DDC8",
  frutosCascara: "#7A4A1F",
  apio: "#6B7C2F",
  mostaza: "#D4A12C",
  sesamo: "#A98B5E",
  sulfitos: "#7A6FA0",
  altramuces: "#5C8A6E",
  moluscos: "#3F6878",
};

export function AllergenDot({ code, label, size = "sm" }: Props) {
  const dim = size === "sm" ? 8 : 10;
  return (
    <span
      title={label}
      aria-label={label}
      className="inline-block rounded-full ring-1 ring-ink/15 align-middle"
      style={{
        backgroundColor: COLORS[code],
        width: dim,
        height: dim,
      }}
    />
  );
}
