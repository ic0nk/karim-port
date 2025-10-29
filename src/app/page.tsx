'use client';
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import DarkVeil from "@/components/DarkVeil";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown, MdLocalPhone } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactSection from '@/components/ContactSection';
import { setupHomeAnimations } from "@/lib/scrollAnimations";

export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<[number, number, number]>([0.88, 0.87, 0.86]);
  const [openId, setOpenId] = useState<number | null>(4);

  useEffect(() => {
    const colorToRGBArray = (colorStr: string): [number, number, number] => {
      if (colorStr.startsWith("oklch")) {
        if (colorStr.includes("1 0 0")) return [1, 1, 1];
        if (colorStr.includes("0.145 0 0")) return [0.145, 0.145, 0.145];
      }
      const match = colorStr.match(/rgb\((\d+), (\d+), (\d+)\)/);
      if (match) {
        const [, r, g, b] = match.map(Number);
        return [r / 255, g / 255, b / 255];
      }
      return [0.88, 0.87, 0.86];
    };
    const bgValue = getComputedStyle(document.documentElement).getPropertyValue('--background').trim();
    setBackgroundColor(colorToRGBArray(bgValue));
  }, []);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    let dispose: (() => void) | undefined;
    setupHomeAnimations(rootRef.current).then((fn) => (dispose = fn));
    return () => dispose?.();
  }, []);

  // No GSAP hover/scroll animations on hero per request

  const experienceData = [
    {
      id: 1,
      title: 'Understanding Users',
      description: 'Discover what truly matters to users through empathy and observation.',
      fullDescription: 'Plan and conduct interviews, gather meaningful insights, and synthesize findings to uncover real user needs. By understanding motivations and pain points, we guide design decisions that result in intuitive and impactful digital experiences.',
    },
    {
      id: 2,
      title: 'User research & interviews',
      description: 'Turn raw data into actionable design insights.',
      fullDescription: 'Analyze user feedback, patterns, and behaviors to identify opportunities for improvement. Research findings become the foundation for design choices that enhance usability, clarity, and engagement.',
    },
    {
      id: 3,
      title: 'Prototyping & Testing',
      description: 'Transform ideas into tangible experiences.',
      fullDescription: 'Build interactive prototypes to visualize concepts and gather user feedback early. Testing and iteration ensure designs are functional, accessible, and aligned with user expectations.',
    },
    {
      id: 4,
      title: 'Delivering Meaningful Design',
      description: 'Create designs that connect with people.',
      fullDescription: 'Apply human-centered principles to craft experiences that not only look good but also solve real problems. Every design decision is driven by empathy, usability, and measurable value..',
    },
  ];

  return (
    <main ref={rootRef}>
      {/* HERO SECTION */}
      <section id="hero" className="relative flex flex-col justify-center h-lvh">
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
          <h1 className="hero-fade">PORTFOLIO</h1>
          <h4 className="portfolio-subtitle hero-fade hero-fade-delay">KARIM MASSAOUD</h4>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-arrow">
          <MdOutlineKeyboardArrowDown
            fontSize={45}
            className="animate-bounce text-[var(--accent)]"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
  <section id="about" className="reveal-section relative py-20 px-4 sm:px-6 lg:px-8 h-lvh flex items-center overflow-hidden">
        <div
          className="text-number absolute top-1/3 right-0 hidden lg:block text-[var(--secondary-text)] transform -translate-y-1/2 rotate-90 origin-center pointer-events-none select-none"
          aria-hidden
        >
          02
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div>
              <h4 className="mb-2 text-right body-text-b reveal-el">About</h4>
              <div className="w-153 h-px bg-[var(--secondary-text)] opacity-50 mb-2" />
              <h3 className="font-primary mb-6 pop-on-scroll">CREATIVE DEVELOPMENT</h3>
            </div>
            <div className="min-h-[150px]">
              <p className="text-base text-gray-700 mb-4 align-middle pop-on-scroll">
                I'm Karim Massaoud, a media and design student with a strong focus on front-end development. I enjoy creating clean, responsive, and visually engaging digital experiences that combine creativity with functionality. <br />
                My goal is to grow into a professional front-end developer, turning ideas into impactful designs that connect with people. <br />
              </p>
            </div>
            <div className="flex items-center space-x-6 justify-between">
              <div className="flex gap-6">
                <a href="tel:0616537940" className="text-[var(--accent)] hover:text-btn-primary icon-link" aria-label="Call me">
                  <MdLocalPhone size={24} />
                </a>
                <a href="mailto:karimmassoud668@gmail.com" className="text-[var(--accent)] hover:text-btn-primary icon-link" aria-label="Email me">
                  <IoMdMail size={24} />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-btn-primary icon-link" aria-label="My LinkedIn profile">
                  <FaLinkedin size={24} />
                </a>
              </div>
              <div>
                {/* Use a single anchor styled as button to avoid invalid nesting and hydration mismatches */}
                <a href="#contact" className="btn btn-primary pop-on-scroll" role="button">CONTACT ME</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-[var(--Secondary-Background)] p-4 rounded-lg shadow-lg pop-on-scroll">
              <Image
                src="/assets/image 4.png"
                alt="Karim Massoud"
                width={350}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USER EXPERIENCE SECTION */}
  <section id="user-experience" className="reveal-section bg-[var(--Secondary-Background)] text-[var(--text)] py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-number absolute top-9 left-0 -mt-0 -ml-0 text-[var(--secondary-text)] transform -rotate-270 text-6xl">
          03
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="text-right mb-6">
            <h4 className='body-text-b'>User Experience</h4>
            <div className="h-px bg-[var(--secondary-text)] ml-auto max-w-[700px]" />
            <h3 className="text-4xl text-left font-primary mb-12 max-w-[700px] w-full ml-auto reveal-el">THE HUMAN SIDE OF DIGITAL DESIGN</h3>
          </div>
          <div>
            {experienceData.map((item) => (
              <div key={item.id} className="ux-item pop-on-scroll border-b border-[var(--secondary-text)] py-4 transition-all duration-300 ease-in-out">
                <div className="flex justify-between items-start cursor-pointer" onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                  <div className="flex items-start">
                    <span className="text-[var(--secondary-text)] mr-4 min-w-[20px]">{`0${item.id}`}</span>
                    <div>
                      <h3 className="text-lg text-[var(--text)] body-text-b">{item.title}</h3>
                      <p className="text-[var(--secondary-text)] text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  <span className="text-[var(--text)] text-2xl transition-transform duration-300">
                    {openId === item.id ? '−' : '+'}
                  </span>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-[500px] opacity-100 mt-4 pl-8' : 'max-h-0 opacity-0 mt-0 pl-8 overflow-hidden'}`}>
                  <p className="text-[var(--secondary-text)] text-sm">{item.fullDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION placeholder removed to avoid duplicate corner number */}

      {/* CONTACT SECTION */}
      <ContactSection />
    </main>
  );
}


