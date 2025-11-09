"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

type MantisLoaderProps = {
  /**
   * Primary wordmark rendered on the loader.
   * Defaults to the portfolio owner name.
   */
  text?: string;
  /** Optional supporting line under the wordmark. */
  tagline?: string;
  /** Accent color used for progress and glow. */
  accentColor?: string;
};

const isBrowser = typeof window !== "undefined";
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default function MantisLoader({
  text = "Karim Massaoud",
  tagline = "Portfolio experience is booting up",
  accentColor = "#1f78ac",
}: MantisLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const beamsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const lettersRef = useRef<Array<HTMLSpanElement | null>>([]);

  // Ensure the letters reference array matches the current text length.
  useEffect(() => {
    lettersRef.current = lettersRef.current.slice(0, text.length);
  }, [text]);

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser || !isVisible) return;

    const loaderElement = loaderRef.current;
    if (!loaderElement) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const originalOverflow = document.body.style.overflow;
    const originalPointerEvents = document.body.style.pointerEvents;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    if (prefersReducedMotion) {
      setProgress(100);
      const cleanupTimer = window.setTimeout(() => {
        document.body.style.overflow = originalOverflow;
        document.body.style.pointerEvents = originalPointerEvents;
        document.body.style.paddingRight = originalPaddingRight;
        setIsVisible(false);
      }, 300);

      return () => {
        window.clearTimeout(cleanupTimer);
        document.body.style.overflow = originalOverflow;
        document.body.style.pointerEvents = originalPointerEvents;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }

    const ctx = gsap.context(() => {
      const letterElements = lettersRef.current.filter((el): el is HTMLSpanElement => Boolean(el));

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline.set(loaderElement, { autoAlpha: 1 });
      timeline.set(glowRef.current, { autoAlpha: 0, scale: 0.9 });
      timeline.set(beamsRef.current, { autoAlpha: 0, scale: 0.92 });
      timeline.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
      timeline.set(letterElements, {
        autoAlpha: 0,
        yPercent: 120,
        rotateX: -60,
        transformOrigin: "center top",
      });

      timeline.to(glowRef.current, { autoAlpha: 0.55, scale: 1, duration: 0.8, ease: "power2.out" });
      timeline.to(beamsRef.current, { autoAlpha: 1, scale: 1, duration: 1, ease: "power2.out" }, "-=0.6");
      timeline.to(
        letterElements,
        {
          autoAlpha: 1,
          yPercent: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.06,
        },
        "-=0.6",
      );

      timeline.to(
        progressRef.current,
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power1.inOut",
        },
        "-=0.5",
      );

      timeline.to(
        { value: 0 },
        {
          value: 100,
          duration: 1.4,
          ease: "power1.inOut",
          onUpdate: function onProgressUpdate() {
            const currentValue = Math.round((this.targets()[0] as { value: number }).value);
            setProgress(currentValue);
            if (percentageRef.current) {
              percentageRef.current.style.left = `${currentValue}%`;
            }
          },
        },
        "-=1.4",
      );

      timeline.to(loaderElement, { autoAlpha: 0, duration: 0.6, ease: "power2.inOut", delay: 0.2 });
      timeline.call(() => {
        document.body.style.overflow = originalOverflow;
        document.body.style.pointerEvents = originalPointerEvents;
        document.body.style.paddingRight = originalPaddingRight;
        setIsVisible(false);
      });
    }, loaderElement);

    return () => {
      ctx.revert();
      document.body.style.overflow = originalOverflow;
      document.body.style.pointerEvents = originalPointerEvents;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isVisible, text.length]);

  const letters = Array.from(text);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05070c] text-white"
      aria-live="assertive"
      role="status"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={glowRef}
          className="absolute -inset-[15%] opacity-50 blur-3xl"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${accentColor} 0%, rgba(5, 7, 12, 0) 55%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
        <div
          ref={beamsRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            backgroundImage:
              "conic-gradient(from 90deg at 50% 50%, rgba(255,255,255,0.16), rgba(255,255,255,0) 22%, rgba(255,255,255,0.14) 36%, rgba(255,255,255,0) 52%, rgba(255,255,255,0.18) 68%, rgba(255,255,255,0) 84%, rgba(255,255,255,0.16))",
            maskImage: "radial-gradient(circle at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(60% 70% at 50% 35%, rgba(255,255,255,0.2), rgba(255,255,255,0)), radial-gradient(30% 30% at 15% 20%, rgba(31,120,172,0.26), rgba(31,120,172,0)), radial-gradient(35% 35% at 85% 75%, rgba(79,70,229,0.2), rgba(79,70,229,0))",
          }}
        />
      </div>

      <div className="relative z-10 w-[min(520px,90vw)] rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
        <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.6em] text-white/60">
          <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: accentColor }} />
          <span>Preparing Experience</span>
        </div>

        <div className="mb-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-wrap gap-2 text-[clamp(2.4rem,6vw,4.4rem)] font-semibold leading-none">
              {letters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  ref={(el) => {
                    lettersRef.current[index] = el;
                  }}
                  className="loader-letter inline-block origin-bottom text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="flex-1 border-t border-white/20" />
          </div>
          <p className="max-w-[32ch] text-sm text-white/70 sm:text-base">{tagline}</p>
        </div>

        <div className="relative mt-10 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
          <div
            ref={progressRef}
            className="loader-progress absolute inset-y-0 left-0 origin-left rounded-full"
            style={{
              background: `linear-gradient(90deg, ${accentColor}, rgba(255,255,255,0.35))`,
              boxShadow: `0 0 18px ${accentColor}55`,
            }}
          />
          <span
            ref={percentageRef}
            className="loader-percentage absolute -top-8 translate-x-[-70%] text-[10px] font-semibold uppercase tracking-[0.5em] text-white/60"
          >
            {progress}%
          </span>
        </div>

        <div className="mt-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.45em] text-white/45">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: accentColor }} />
            <span>Design</span>
          </div>
          <span className="h-[1px] flex-1 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full delay-150" style={{ backgroundColor: accentColor }} />
            <span>Engineering</span>
          </div>
          <span className="h-[1px] flex-1 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full delay-300" style={{ backgroundColor: accentColor }} />
            <span>Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}