"use client";

import { useEffect, useRef } from "react";

export function MouseLight() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (lightRef.current) {
        lightRef.current.style.setProperty("--x", `${e.clientX}px`);
        lightRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(100px circle at var(--x, 50%) var(--y, 50%), rgba(168, 85, 247, 0.15), transparent 80%)",
      }}
    />
  );
}