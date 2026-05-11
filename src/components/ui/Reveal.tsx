"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  /** When true (default) reveal runs once; set false to re-trigger on scroll-out. */
  once?: boolean;
};

/**
 * Wraps children in an Intersection-Observer reveal. Pairs with `.reveal`
 * utility classes in globals.css.
 */
export function Reveal({ children, delayMs = 0, className = "", once = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
