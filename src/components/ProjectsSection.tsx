'use client';

import React, { useLayoutEffect } from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- Types ---
type Project = {
  name: string;
  description: string;
  image: string;
  liveLink?: string;
  detailsLink?: string;
};

const projects = [
  {
    name: 'Travel World',
    description: 'A simple, friendly travel website that makes exploring destinations feel fun and effortless.',
  image: '/assets/Travel World Project Background .png', 
    liveLink: 'https://travel-website-complete-w0th.onrender.com/index.html',
    detailsLink: '/project-details',
  },
  {
    name: 'Triple WAVE',
    description: 'A friendly guide for international students in Eindhoven find housing, get around, manage finances, and discover local events.',
  // file in public/assets is named with spaces and .jpg extension
  image: '/assets/Eindhoven Project Background 2.jpg',
    liveLink: 'https://triple-wave.netlify.app/',
    detailsLink: '/project-triple-wave',
  },
  {
    name: 'Owen Bryce',
    description: ' A comprehensive promotional campaign for an emerging folk/indie artist, creating a cohesive brand identity across multiple platforms',
  image: '/assets/Owen Bryce Project Background .png',
    liveLink: 'https://karimmassaoudd-portfolio-lastversion.netlify.app/html%20files/branding',
    detailsLink: '/project-Owen-Bryce',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { name, description, image, liveLink, detailsLink } = project;
  const detailsHref = detailsLink ?? '#';

  return (
    <div className="relative [perspective:1000px]">
      <div
        className="tilt-card pop-on-scroll w-full max-w-[500px] h-[600px] bg-[var(--Secondary-Background)] shadow-xl rounded-xl overflow-hidden relative group cursor-pointer mx-auto"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
      
      {/* 1. Project Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
          loading="lazy"
        />
      </div>

      {/* 2. Dark Overlay */}
      <div
        className="absolute inset-0 z-10 transition-colors duration-500 ease-in-out bg-black/0 group-hover:bg-black/60"
      />
      
      {/* 3. Non-Hover Content */}
      <Link
        href={detailsHref}
        className="absolute bottom-5 right-5 z-20 text-white font-medium text-sm transition-opacity duration-300 group-hover:opacity-0"
      >
        SEE MORE <ArrowRight className="inline w-4 h-4 ml-1 -translate-y-[1px]" />
      </Link>

      {/* 4. Hover Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 text-white">
        
        {/* VIEW LIVE Link */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 border border-white px-4 py-2 rounded-full w-fit
                     opacity-0 invisible transition-all duration-300 delay-100 ease-out 
                     group-hover:opacity-100 group-hover:visible hover:bg-white/10"
        >
          <Eye className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wider">VIEW LIVE</span>
        </a>

        {/* Bottom Content */}
        <div className="
          opacity-0 invisible transition-all duration-300 delay-150 ease-out 
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          transform translate-y-4"
        >
          {/* Project Name */}
          <h3 className="text-3xl font-[var(--font-primary)] font-bold mb-2 tracking-tight text-[var(--accent)]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {name.toUpperCase()}
          </h3>
          
          {/* Description */}
          <p className="text-sm font-[var(--font-secondary)] font-light leading-relaxed mb-4">
            {description}
          </p>

          {/* More Details Button */}
          <Link
            href={detailsHref}
            className="text-white font-semibold text-xs tracking-widest block w-fit font-[var(--font-secondary)]"
          >
            MORE DETAILS <ArrowRight className="inline w-4 h-4 ml-1 -translate-y-[1px]" />
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  // Scroll-based 3D tilt
  useLayoutEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const gsapModule = await import('gsap');
      const stModule = await import('gsap/ScrollTrigger');
      const gsap = (gsapModule as any).default ?? (gsapModule as any);
      const ScrollTrigger = (stModule as any).ScrollTrigger ?? (stModule as any).default;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        (gsap.utils.toArray('.tilt-card') as HTMLElement[]).forEach((el: HTMLElement) => {
          // set initial slight depth
          gsap.set(el, { z: -60, rotateX: 8 });
          gsap.to(el, {
            z: 0,
            rotateX: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 0.5,
            },
          });
        });
      });
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section id="projects" className="reveal-section py-20 md:py-10 bg-[var(--background)] font-[var(--font-secondary)] min-h-screen relative overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header mimicking the provided image */}
        <div className="flex justify-between items-end mb-16 ">
          <div>
            {/* My Projects */}
            <h4 className="mb-2 text-right body-text-b reveal-el">My Projects</h4>
            <div className="w-155 h-px bg-[var(--secondary-text)] opacity-50 mb-2 reveal-el" />
            {/* BRINGING IDEAS TO LIFE */}
            <h3 className="font-primary reveal-el">
              BRINGING IDEAS TO LIFE
            </h3>
          </div>
          
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectsSection;
