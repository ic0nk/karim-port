"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import { setupHomeAnimations } from "@/lib/scrollAnimations";

type PageAnimatorProps = {
  children: ReactNode;
  /**
   * When true, the GSAP animations are initialized for all matching elements inside this wrapper.
   * Leave true by default; set false only if a parent already initializes animations.
   */
  enable?: boolean;
};

export default function PageAnimator({ children, enable = true }: PageAnimatorProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!enable || !rootRef.current) return;
    let dispose: (() => void) | undefined;
    setupHomeAnimations(rootRef.current).then((fn) => (dispose = fn));
    return () => dispose?.();
  }, [enable]);

  return (
    <div ref={rootRef} className="overflow-x-hidden">
      {children}
    </div>
  );
}
