'use client';

import React from 'react';
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
    <footer id="site-footer" className="reveal-section bg-[var(--accent)] pt-16 pb-2 font-[var(--font-secondary)]">
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
