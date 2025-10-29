'use client';

import React, { useEffect, useRef } from 'react';
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";

// --- Type Definitions ---
interface IconLinkProps {
href: string;
icon: React.ElementType;
label: string;
}

interface FormFieldProps {
label: string;
children: React.ReactNode;
className?: string;
}
// --- End Type Definitions ---


const IconLink: React.FC<IconLinkProps> = ({ href, icon: IconComponent, label }) => (
<a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link mx-3 transition-transform duration-300 hover:translate-y-[-5px]"
    aria-label={label}
    title={label}
>
    <IconComponent className="w-6 h-6" />
</a>
);

const FormField: React.FC<FormFieldProps> = ({ label, children, className }) => (
<div className="mb-6">
    {/* Label: Uses secondary text color and font-secondary */}
    <label className="block text-sm font-semibold mb-2 uppercase text-[var(--secondary-text)] font-[var(--font-secondary)]">
    {label}
    </label>
    {/* Input Container: Uses accent color as background */}
    <div className={`p-1 rounded-[var(--radius)] bg-[var(--accent)] ${className ?? ''}`}>
    {children}
    </div>
</div>
);

/**
 * Main component to display the Contact Section.
 */
export const ContactSection: React.FC = () => {
const sectionRef = useRef<HTMLElement | null>(null);
useEffect(() => {
    let tween: any | undefined;
    let isCancelled = false;
    const run = async () => {
        const gsapModule = await import('gsap');
        const stModule = await import('gsap/ScrollTrigger');
        const gsap: any = (gsapModule as any).default ?? (gsapModule as any);
        const ScrollTrigger: any = (stModule as any).ScrollTrigger ?? (stModule as any).default;
        gsap.registerPlugin(ScrollTrigger);
        if (!sectionRef.current || isCancelled) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        tween = gsap.from(sectionRef.current, {
            y: 50,
            autoAlpha: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: sectionRef.current,
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
    };
}, []);
// Submit to API and persist in JSON DB
const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        message: String(formData.get('message') ?? ''),
    };

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok || !data.ok) {
            console.error('Submit failed', data);
            alert('Failed to send. Please check your details and try again.');
            return;
        }
        form.reset();
        alert('Thanks! Your message has been saved.');
    } catch (err) {
        console.error('Network error', err);
        alert('Network error. Please try again.');
    }
};

return (
    <section ref={sectionRef} data-once="true" className="reveal-section py-20 md:py-20 bg-[var(--background)] font-[var(--font-secondary)] min-h-screen relative" id="contact">
        <div className="text-number absolute top-5 right-0 -mt-0 -ml-0 text-[var(--secondary-text)] transform -rotate-270 text-6xl">
            04
        </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header/Section Numbering */}
        <div className="mb-4">            
            {/* Contact Me Label */}
            <h4 className="body-text-b text-right reveal-el">
                Contact Me
            </h4>
            <div className="h-px bg-[var(--secondary-text)] ml-auto max-w-[565px] reveal-el"/>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
            {/* Left Column: Logo and Social Links */}
            <div className="flex flex-col items-center justify-center justify-self-center self-center pt-10 pb-16 lg:pb-0 lg:pt-0 reveal-el">
                {/* Logo/Monogram: Uses h1 style, accent color */}
                <Image src="/assets/K.svg" alt="Logo" width={100} height={100} className='mb-8'/>
                
                {/* Social Icons */}
                <div className="flex justify-center mb-8 pop-on-scroll">
                <IconLink href="#" icon={FaLinkedin} label="LinkedIn" />
                <IconLink href="#" icon={MdLocalPhone} label="Phone" />
                <IconLink href="#" icon={FaGithub} label="GitHub" />
                <IconLink href="#" icon={IoMdMail} label="Email" />
                </div>
                
                {/* Tagline: Uses secondary text color and body-text-r style */}
                <p className="text-base text-[var(--secondary-text)] font-[var(--font-secondary)] reveal-el">
                    Let's Build Something Great Together
                </p>
            </div>
            
            {/* Right Column: Contact Form */}
            <div className="w-full reveal-el">
                
                {/* Title: Uses h2 style, secondary-text color */}
                <h3 className="text-4xl text-left font-primary mb-12 max-w-[565px] w-full ml-auto pop-on-scroll">
                GET IN TOUCH FOR PROJECTS AND PARTNERSHIPS
                </h3>

                <form onSubmit={handleSubmit}>
                
                {/* Name Field */}
                <FormField label="NAME" className="bg-[var(--accent)]">
                    <input suppressHydrationWarning
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r"
                    required
                    />
                </FormField>

                {/* Email Field */}
                <FormField label="YOUR EMAIL">
                    <input suppressHydrationWarning
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r"
                    required
                    />
                </FormField>
                
                {/* Phone Field */}
                <FormField label="PHONE">
                    <input suppressHydrationWarning
                    type="tel"
                    name="phone"
                    placeholder="Your Number"
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r"
                    />
                </FormField>
                
                {/* Message Field */}
                <FormField label="YOUR MESSAGE">
                    <textarea suppressHydrationWarning
                    name="message"
                    placeholder="Tell me all what you want...."
                    rows={6}
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r resize-none"
                    required
                    />
                </FormField>

                {/* Submit Button */}
                <button suppressHydrationWarning
                    type="submit"
                    className="btn btn-primary w-full mt-4 pop-on-scroll"
                >
                    SEND TO ME
                </button>
                </form>
            </div>
        </div>
        
    </div>
    </section>
);
};

export default ContactSection;
