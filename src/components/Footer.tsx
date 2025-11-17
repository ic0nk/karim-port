'use client';

import React, { type ElementType, type FC, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
import { HiOutlineMapPin } from 'react-icons/hi2';
import PageAnimator from '@/components/PageAnimator';

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: 'User Experience', href: '/#user-experience' },
        { label: 'My Projects', href: '/#projects' },
        { label: 'About', href: '/#about' },
        { label: 'Contact', href: '/#contact' },
    ];

    const socialLinks = [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/karim-massaoud', icon: FaLinkedin },
        { label: 'GitHub', href: 'https://github.com/ic0nk', icon: FaGithub },
        { label: 'Phone', href: 'tel:0616537940', icon: MdLocalPhone },
        { label: 'Email', href: 'mailto:karimmassoud668@gmail.com', icon: IoMdMail },
    ];

        const contactMethods = [
            { label: 'Email', value: 'karimmassoud668@gmail.com', href: 'mailto:karimmassoud668@gmail.com', icon: IoMdMail },
            { label: 'Phone', value: '+31 6 1653 7940', href: 'tel:0616537940', icon: MdLocalPhone },
            { label: 'Location', value: 'Netherlands · Remote friendly', icon: HiOutlineMapPin },
        ];

    const IconLink = ({ href, icon: IconComponent, label }: { href: string; icon: ElementType; label: string }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
                className="pop-on-scroll group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[var(--text)] transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
            aria-label={label}
            title={label}
        >
            <IconComponent className="h-5 w-5" />
        </a>
    );

    const NavItem: FC<{ href: string; children: ReactNode }> = ({ href, children }) => (
        <Link
                href={href}
                className="reveal-el block text-sm uppercase tracking-[0.18em] text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]"
            scroll
        >
            {children}
        </Link>
    );

    return (
        <PageAnimator>
            <footer
                id="site-footer"
                className="relative overflow-hidden bg-gradient-to-b from-[var(--Secondary-Background)]/95 via-[var(--footer-secondary)]/90 to-[var(--background)] py-16 text-[var(--text)] font-secondary"
            >
                    <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-10 top-[-6rem] h-64 w-64 rounded-full bg-[var(--accent)]/25 blur-3xl" />
                    <div className="absolute bottom-[-8rem] left-[-6rem] h-72 w-72 rounded-full bg-white/10 blur-[140px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>

                <section className="reveal-section relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 sm:px-8">
                    <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
                        <div className="space-y-6">
                            <div className="reveal-el flex items-center gap-4">
                            <Image src="/assets/K.svg" alt="Karim Massaoud logo" width={72} height={72} className="drop-shadow-[0_10px_30px_rgba(21,91,134,0.35)] dark:drop-shadow-[0_10px_30px_rgba(31,120,172,0.5)]" />
                                            <div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[var(--secondary-text)]">Portfolio of</p>
                                                <p className="text-2xl font-semibold tracking-wide text-[var(--text)]">Karim Massaoud</p>
                                            </div>
                        </div>
                                    <p className="reveal-el max-w-lg text-sm leading-relaxed text-[var(--text)]">
                            Digital product designer and front-end developer crafting immersive user experiences, thoughtful brand systems, and interactive moments that convert.
                        </p>
                                    <div className="glow-bleed glow-static flex flex-wrap gap-3">
                            {socialLinks.map((link) => (
                                <IconLink key={link.label} {...link} />
                            ))}
                        </div>
                    </div>

                        <div className="space-y-5">
                                    <p className="reveal-el text-xs uppercase tracking-[0.3em] text-[var(--secondary-text)]">Navigate</p>
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <NavItem key={link.label} href={link.href}>
                                    {link.label}
                                </NavItem>
                            ))}
                        </div>
                                    <div className="reveal-el mt-8 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-xs uppercase tracking-[0.25em] text-[var(--secondary-text)]">
                            Available for select collaborations from {currentYear} onwards.
                        </div>
                    </div>

                        <div className="space-y-5">
                                    <p className="reveal-el text-xs uppercase tracking-[0.3em] text-[var(--secondary-text)]">Get in touch</p>
                                    <div className="space-y-4 text-sm text-[var(--text)]">
                            {contactMethods.map(({ label, value, href, icon: Icon }) => (
                                <div key={label} className="reveal-el flex items-start gap-3">
                                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                                        <Icon className="h-4 w-4" />
                                    </div>
                                    {href ? (
                                        <a href={href} className="transition-colors duration-200 hover:text-[var(--accent)]">
                                                        <span className="block text-xs uppercase tracking-[0.2em] text-[var(--secondary-text)]">{label}</span>
                                            <span>{value}</span>
                                        </a>
                                    ) : (
                                        <div>
                                                        <span className="block text-xs uppercase tracking-[0.2em] text-[var(--secondary-text)]">{label}</span>
                                            <span>{value}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                                    <Link
                                        href="/#contact"
                                        className="glow-bleed inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[var(--text)] transition hover:border-white/40 hover:bg-white/20 pop-on-scroll"
                        >
                            Start a project
                        </Link>
                    </div>
                    </div>

                            <div className="reveal-el flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.28em] text-[var(--secondary-text)] md:flex-row">
                    <p>© {currentYear} Karim Massaoud. All rights reserved.</p>
                    <p>Crafted with Next.js · Deployed globally</p>
                </div>
                </section>
            </footer>
        </PageAnimator>
    );
};

export default Footer;
