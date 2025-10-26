"use client";

import { useState } from 'react';

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

type AccordionItemProps = {
    item: typeof experienceData[0];
    isOpen: boolean;
    onClick: () => void;
};

const AccordionItem = ({ item, isOpen, onClick }: AccordionItemProps) => {
const contentClasses = isOpen
    ? 'max-h-[500px] opacity-100 mt-4 pl-8'
    : 'max-h-0 opacity-0 mt-0 pl-8 overflow-hidden';

return (
    <div className="border-b border-[var(--secondary-text)] py-4 transition-all duration-300 ease-in-out">
    <div className="flex justify-between items-start cursor-pointer" onClick={onClick}>
        <div className="flex items-start">
        <span className="text-[var(--secondary-text)] mr-4 min-w-[20px]">{`0${item.id}`}</span> 
        <div>
            <h3 className="text-lg text-[var(--text)] body-text-b">{item.title}</h3>
            <p className="text-[var(--secondary-text)] text-sm mt-1">{item.description}</p>
        </div>
        </div>
        <span className="text-[var(--text)] text-2xl transition-transform duration-300">
        {isOpen ? '−' : '+'}
        </span>
    </div>
    <div className={`transition-all duration-300 ease-in-out ${contentClasses}`}>
        <p className="text-[var(--secondary-text)] text-sm">{item.fullDescription}</p>
    </div>
    </div>
);
};

const UserExperience = () => {
const [openId, setOpenId] = useState<number | null>(4);

const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
};

return (
    <section id="user-experience" className="bg-[var(--Secondary-Background)] text-[var(--text)] py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-number absolute top-9 left-0 -mt-0 -ml-0 text-[var(--secondary-text)] transform -rotate-270 text-6xl">
            03
        </div>
        <div className="max-w-5xl mx-auto">
            <div className="text-right mb-6">
                <h4 className='body-text-b'>User Experience</h4>
                <div className="h-px bg-[var(--secondary-text)] ml-auto max-w-[700px]"/>
                <h3 className="text-4xl text-left font-primary mb-12 max-w-[700px] w-full ml-auto ">THE HUMAN SIDE OF DIGITAL DESIGN</h3>
            </div>
            <div>
            {experienceData.map((item) => (
                <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onClick={() => handleClick(item.id)}
                />
            ))}
            </div>
        </div>
    </section>
);
};

export default UserExperience;