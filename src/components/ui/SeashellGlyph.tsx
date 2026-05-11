type Props = {
  className?: string;
  title?: string;
};

export function SeashellGlyph({ className, title }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-label={title}
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M32 6 C 18 14, 10 30, 12 46 C 14 56, 24 60, 32 60 C 40 60, 50 56, 52 46 C 54 30, 46 14, 32 6 Z" />
        <path d="M32 6 C 30 22, 28 38, 24 58" opacity="0.85" />
        <path d="M32 6 C 34 22, 36 38, 40 58" opacity="0.85" />
        <path d="M32 6 C 26 20, 20 36, 16 52" opacity="0.6" />
        <path d="M32 6 C 38 20, 44 36, 48 52" opacity="0.6" />
        <path d="M32 6 C 23 18, 16 30, 13 44" opacity="0.4" />
        <path d="M32 6 C 41 18, 48 30, 51 44" opacity="0.4" />
      </g>
    </svg>
  );
}
