"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * WelcomeOverlay
 * - Shows once per browser session
 * - Pop-in animation (scale 0 -> 1, fade in), then fades out after 2.2s
 * - Click triggers a playful ripple + bounce animation
 * - Honors prefers-reduced-motion
 */
export default function WelcomeOverlay() {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // SSR guard
    if (typeof window === "undefined") return;

    // Only show once per session
    const seen = sessionStorage.getItem("welcomeSeen");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      // If reduced motion, or already seen, don't render overlay
      setVisible(false);
      return;
    }

    setVisible(true);

    let cleanup: (() => void) | undefined;
    (async () => {
      const gsapModule = await import("gsap");
      const gsap: any = (gsapModule as any).default ?? (gsapModule as any);

      // Prevent background scroll while overlay is up
      const prevOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      // Base states
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(cardRef.current, { scale: 0, autoAlpha: 0, transformOrigin: "50% 50%" });

      tl.to(overlayRef.current, { autoAlpha: 1, duration: 0.2 })
        .to(cardRef.current, { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(1.7)" }, "<")
        .to({}, { duration: 1.7 }) // hold ~1.7s (total ~2.2s)
        .to(overlayRef.current, { autoAlpha: 0, duration: 0.45, ease: "power1.inOut" })
        .add(() => {
          setVisible(false);
          sessionStorage.setItem("welcomeSeen", "1");
          document.documentElement.style.overflow = prevOverflow;
        });

      cleanup = () => {
        tl.kill();
        document.documentElement.style.overflow = prevOverflow;
      };
    })();

    return () => cleanup?.();
  }, []);

  // Click micro-interaction (ripple + bounce)
  const handleClick: React.MouseEventHandler<HTMLDivElement> = async (e) => {
    if (!overlayRef.current || !cardRef.current) return;
    const { left, top } = overlayRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const ripple = document.createElement("span");
    ripple.className = "pointer-events-none absolute block w-6 h-6 rounded-full bg-[var(--accent)]/30";
    ripple.style.left = `${x - 12}px`;
    ripple.style.top = `${y - 12}px`;
    overlayRef.current.appendChild(ripple);

    const gsapModule = await import("gsap");
    const gsap: any = (gsapModule as any).default ?? (gsapModule as any);

    // Ripple expansion and fade
    gsap.fromTo(
      ripple,
      { scale: 0, autoAlpha: 0.6 },
      {
        scale: 8,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      }
    );

    // Card playful bounce
    gsap.to(cardRef.current, {
      scale: 1.05,
      rotation: 1.5,
      duration: 0.18,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleClick}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-[1px]"
      aria-live="polite"
      role="dialog"
      aria-label="Welcome"
    >
      <div
        ref={cardRef}
        className="relative mx-4 w-full max-w-sm rounded-[var(--radius-lg)] bg-[var(--background)] text-[var(--text)] shadow-xl ring-1 ring-black/10 p-6 text-center select-none"
      >
        <h3 className="font-primary mb-2">Welcome</h3>
        <p className="body-text-r opacity-80">Thanks for visiting my portfolio.</p>
        <p className="small-text mt-2 opacity-70">Click anywhere for a fun ripple ✦</p>
      </div>
    </div>
  );
}
