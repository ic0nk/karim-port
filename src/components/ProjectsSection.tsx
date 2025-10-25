'use client';

import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    name: 'Desert Explorer Quads',
    description: 'Developed a geolocation and telemetry tracking system for off-road vehicles in harsh desert environments, featuring real-time diagnostics and emergency beacon integration.',
    image: '/assets/frame 129.png',
    liveLink: '#',
    detailsLink: '/project-details',
  },
  {
    name: 'Mountain Trek Analytics',
    description: 'This project focused on data visualization of high-altitude trek performance, biometric readings, and dynamic gear recommendations based on changing weather patterns.',
    image: '/assets/frame 129.png',
    liveLink: '#',
    detailsLink: '/project-details',
  },
  {
    name: 'Urban Transit Planner',
    description: 'A responsive web application designed to optimize public transportation routes using real-time data feeds, predictive congestion modeling, and personalized user alerts.',
    image: '/assets/frame 129.png',
    liveLink: '#',
    detailsLink: '/project-details',
  },
];

const ProjectCard = ({ project }) => {
  const { name, description, image, liveLink, detailsLink } = project;

  return (
    <div className="w-full max-w-[500px] h-[600px] bg-[var(--Secondary-Background)] shadow-xl rounded-xl overflow-hidden relative group cursor-pointer mx-auto">
      
      {/* 1. Project Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Dark Overlay */}
      <div
        className="absolute inset-0 z-10 transition-colors duration-500 ease-in-out bg-black/0 group-hover:bg-black/60"
      />
      
      {/* 3. Non-Hover Content */}
      <a
        href={detailsLink}
        className="absolute bottom-5 right-5 z-20 text-white font-medium text-sm transition-opacity duration-300 group-hover:opacity-0"
      >
        SEE MORE <ArrowRight className="inline w-4 h-4 ml-1 -translate-y-[1px]" />
      </a>

      {/* 4. Hover Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 text-white">
        
        {/* VIEW LIVE Link */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 border border-white px-4 py-2 rounded-full backdrop-blur-sm w-fit
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
          <a
            href={detailsLink}
            className="text-white font-semibold text-xs tracking-widest block w-fit font-[var(--font-secondary)]"
          >
            MORE DETAILS <ArrowRight className="inline w-4 h-4 ml-1 -translate-y-[1px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-10 bg-[var(--background)] font-[var(--font-secondary)] min-h-screen relative overflow-hidden">
      <div className="text-number absolute top-10 right-4 text-[var(--secondary-text)] text-6xl transform -rotate-270 origin-top-left pointer-events-none select-none" aria-hidden>
        04
      </div>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header mimicking the provided image */}
        <div className="flex justify-between items-end mb-16 ">
          <div>
            {/* My Projects */}
            <h4 className="mb-2 text-right body-text-b">My Projects</h4>
            <div className="w-155 h-px bg-[var(--secondary-text)] opacity-50 mb-2" />
            {/* BRINGING IDEAS TO LIFE */}
            <h3 className="font-primary">
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
