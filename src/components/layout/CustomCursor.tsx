"use client";

import { useEffect, useRef } from "react";

/**
 * Premium dual-element cursor: small filled dot + larger trailing ring.
 * The ring eases into position; the dot tracks 1:1. Interactive elements get
 * .cursor-grow scaling via a hover listener on a, button, [role=button].
 *
 * Disabled on touch / coarse-pointer devices via media queries in globals.css.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => document.body.classList.add("cursor-grow");
    const onLeave = () => document.body.classList.remove("cursor-grow");
    const onDocLeave = () => document.body.classList.add("cursor-hide");
    const onDocEnter = () => document.body.classList.remove("cursor-hide");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onDocLeave);
    document.addEventListener("mouseenter", onDocEnter);

    const interactive = "a, button, [role='button'], input, textarea, select, label";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Re-bind after route changes — rebind on body mutations
    const mo = new MutationObserver(() => {
      document.querySelectorAll(interactive).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.addEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onDocLeave);
      document.removeEventListener("mouseenter", onDocEnter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
    </>
  );
}
