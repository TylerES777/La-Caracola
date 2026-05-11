"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
};

/**
 * Lightweight count-up that triggers when it enters the viewport.
 */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  durationMs = 1800,
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("es-ES")}
      {suffix}
    </span>
  );
}
