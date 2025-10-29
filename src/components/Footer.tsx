'use client';

import React, { useEffect, useRef } from 'react';
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";

/**
 * Footer Component
 * Displays social links, navigation, monogram, and copyright.
 * Uses the accent color from the global CSS for the background.
 */
export const Footer: React.FC = () => {
const footerRef = useRef<HTMLElement | null>(null);
useEffect(() => {
    let tween: any | undefined;
    let gsapRef: any; let ScrollTriggerRef: any;
    let isCancelled = false;

    const run = async () => {
        const gsapModule = await import('gsap');
        const stModule = await import('gsap/ScrollTrigger');
        const gsap: any = (gsapModule as any).default ?? (gsapModule as any);
        const ScrollTrigger: any = (stModule as any).ScrollTrigger ?? (stModule as any).default;
        gsap.registerPlugin(ScrollTrigger);
        gsapRef = gsap; ScrollTriggerRef = ScrollTrigger;
        if (!footerRef.current || isCancelled) return;

        // Respect reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Simple, elegant reveal: fade + slide up, once only
        tween = gsap.from(footerRef.current, {
            y: 50,
            autoAlpha: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
                once: true,
            },
        });
    };

    run();
    return () => {
        isCancelled = true;
        if (tween?.scrollTrigger) tween.scrollTrigger.kill();
        if (tween) tween.kill();
        // No global cleanup required
    };
}, []);
const currentYear = new Date().getFullYear();

const navLinks = [
    { name: 'User Experience', href: '#ux' },
    { name: 'My Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const IconLink = ({ href, icon: IconComponent }: { href: string; icon: React.ElementType }) => (
    <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Use a custom hover effect to match the subtle transition feel
    className="text-white mx-3 transition-transform duration-300 hover:scale-110"
    >
    <IconComponent className="w-6 h-6" />
    </a>
);

const NavItem: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a
    href={href}
    // Use the secondary font for the navigation links
    className="text-white text-sm uppercase tracking-wider font-[var(--font-secondary)] hover:text-gray-300 transition-colors duration-200 block mb-2"
    >
    {children}
    </a>
);

return (
    // Outer container uses a dark accent color for the background
    <footer ref={footerRef} id="site-footer" className="reveal-section bg-[var(--accent)] pt-16 pb-2 font-[var(--font-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Main Content Grid (Social | Nav | Logo) */}
            <div className="grid grid-cols-3 items-center justify-between mb-8">
            
                {/* Left: Social Icons */}
                <div className="flex justify-start col-span-1 reveal-el">
                    <IconLink href="#" icon={FaLinkedin} />
                    <IconLink href="#" icon={MdLocalPhone} />
                    <IconLink href="#" icon={FaGithub} />
                    <IconLink href="#" icon={IoMdMail} />
                </div>

                {/* Center: Navigation Links */}
                <div className="flex flex-col items-center col-span-1 reveal-el">
                    {navLinks.map((link) => (
                    <NavItem key={link.name} href={link.href}>
                        {link.name}
                    </NavItem>
                    ))}
                </div>

                {/* Right: Monogram Logo */}
                <div className="flex justify-end col-span-1 reveal-el">
                    {/* Logo/Monogram: Uses the primary font, is large, and bright white */}
                    <Image className="footer-logo" src="/assets/K (W).svg" alt="Logo" width={80} height={80} />
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="text-center reveal-el">
                <p className="text-white text-xs opacity-60">
                    © {currentYear} Karimmasaad. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
);
};

export default Footer;
