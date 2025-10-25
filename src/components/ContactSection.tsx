'use client';

import React from 'react';
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";

// --- Type Definitions ---
interface IconLinkProps {
href: string;
icon: React.ElementType;
}

interface FormFieldProps {
    label: string;
    children: React.ReactNode;
    // optional className to allow styling the field container from call sites
    className?: string;
}
// --- End Type Definitions ---


const IconLink: React.FC<IconLinkProps> = ({ href, icon: IconComponent }) => (
<a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="icon-link mx-3 transition-transform duration-300 hover:translate-y-[-5px]"
>
    <IconComponent className="w-6 h-6" />
</a>
);

const FormField: React.FC<FormFieldProps> = ({ label, children, className = '' }) => (
    <div className={"mb-6 " + className}>
    {/* Label: Uses secondary text color and font-secondary */}
    <label className="block text-sm font-semibold mb-2 uppercase text-[var(--secondary-text)] font-[var(--font-secondary)]">
    {label}
    </label>
    {/* Input Container: Uses accent color as background */}
    <div className="p-1 rounded-[var(--radius)] bg-[var(--accent)]">
    {children}
    </div>
</div>
);

/**
 * Main component to display the Contact Section.
 */
export const ContactSection: React.FC = () => {
// Simple handler for the form submission (for demonstration purposes)
const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Form Submitted!');
    // NOTE: Using a custom modal/message box is recommended over alert() in production.
    alert('Thank you for your message! This is a demo submission.');
};

return (
    <section className="py-20 md:py-20 bg-[var(--background)] font-[var(--font-secondary)] min-h-screen relative" id="contact">
        <div className="text-number absolute top-30 left-0 -mt-0 -ml-0 text-[var(--secondary-text)] transform -rotate-270 text-6xl">
            05
        </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header/Section Numbering */}
        <div className="mb-4">            
            {/* Contact Me Label */}
            <h4 className="body-text-b text-right">
                Contact Me
            </h4>
            <div className="h-px bg-[var(--secondary-text)] ml-auto max-w-[565px]"/>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
            {/* Left Column: Logo and Social Links */}
            <div className="flex flex-col items-center justify-center justify-self-center self-center pt-10 pb-16 lg:pb-0 lg:pt-0">
                {/* Logo/Monogram: Uses h1 style, accent color */}
                <Image src="/assets/K.svg" alt="Logo" width={100} height={100} className='mb-8'/>
                
                {/* Social Icons */}
                <div className="flex justify-center mb-8">
                <IconLink href="#" icon={FaLinkedin} />
                <IconLink href="#" icon={MdLocalPhone} />
                <IconLink href="#" icon={FaGithub} />
                <IconLink href="#" icon={IoMdMail} />
                </div>
                
                {/* Tagline: Uses secondary text color and body-text-r style */}
                <p className="text-base text-[var(--secondary-text)] font-[var(--font-secondary)]">
                    Let's Build Something Great Together
                </p>
            </div>
            
            {/* Right Column: Contact Form */}
            <div className="w-full">
                
                {/* Title: Uses h2 style, secondary-text color */}
                <h3 className="text-4xl text-left font-primary mb-12 w-[565px] ml-auto">
                GET IN TOUCH FOR PROJECTS AND PARTNERSHIPS
                </h3>

                <form onSubmit={handleSubmit}>
                
                {/* Name Field */}
                <FormField label="NAME" className="bg-[var(--accent)]">
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r"
                    required
                    />
                </FormField>

                {/* Email Field */}
                <FormField label="YOUR EMAIL">
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r"
                    required
                    />
                </FormField>
                
                {/* Phone Field */}
                <FormField label="PHONE">
                    <input
                    type="tel"
                    placeholder="Your Number"
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r"
                    />
                </FormField>
                
                {/* Message Field */}
                <FormField label="YOUR MESSAGE">
                    <textarea
                    placeholder="Tell me all what you want...."
                    rows={6}
                    className="w-full py-3 px-4 rounded-[var(--radius-sm)] border-none focus:ring-2 focus:ring-[var(--accent)] bg-[var(--background)] text-[var(--text)] body-text-r resize-none"
                    required
                    />
                </FormField>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
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
