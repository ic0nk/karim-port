"use client";

import { useState, useEffect } from "react";
import DarkVeil from "@/components/DarkVeil";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Hero = () => {
  const [backgroundColor, setBackgroundColor] = useState<[number, number, number]>([0.88, 0.87, 0.86]);

  useEffect(() => {
    // Function to convert color string to RGB array
    const colorToRGBArray = (colorStr: string): [number, number, number] => {
      if (colorStr.startsWith("oklch")) {
        // For oklch(1 0 0) which is white
        if (colorStr.includes("1 0 0")) return [1, 1, 1];
        // For oklch(0.145 0 0) which is near-black
        if (colorStr.includes("0.145 0 0")) return [0.145, 0.145, 0.145];
      }
      
      const match = colorStr.match(/rgb\((\d+), (\d+), (\d+)\)/);
      if (match) {
        const [, r, g, b] = match.map(Number);
        return [r / 255, g / 255, b / 255];
      }
      // Default to a light gray if parsing fails
      return [0.88, 0.87, 0.86];
    };

    const bgValue = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
    setBackgroundColor(colorToRGBArray(bgValue));
  }, []);

  return (
    <section className="relative flex flex-col justify-center h-lvh">
      <div className="absolute inset-0 -z-10">
        <DarkVeil
          hueShift={32}
          noiseIntensity={0.02}
          scanlineIntensity={0}
          scanlineFrequency={0}
          warpAmount={0.5}
          speed={1.5}
          backgroundColor={backgroundColor}
        />
      </div>
      <div className="text-center z-10">
        <h1>PORTFOLIO</h1>
        <h4 className="portfolio-subtitle">KARIM MASSAOUD</h4>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <MdOutlineKeyboardArrowDown
          fontSize={45}
          className="animate-bounce text-[var(--accent)]"
        />
      </div>
    </section>
  );
};

export default Hero;

