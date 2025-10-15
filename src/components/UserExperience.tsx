"use client";

import { useState } from 'react';

const experienceData = [
{
    id: 1,
    title: 'User research & interviews',
    description: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
    fullDescription: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
},
{
    id: 2,
    title: 'User research & interviews',
    description: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
    fullDescription: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
},
{
    id: 3,
    title: 'User research & interviews',
    description: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
    fullDescription: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
},
{
    id: 4,
    title: 'User research & interviews',
    description: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
    fullDescription: 'Plan and run interviews, gather insights, and synthesize findings to guide design decisions.Plan and run interviews, gather insights, and synthesize findings to guide design decisions.Plan and run interviews, gather insights, and synthesize findings to guide design decisions.Plan and run interviews, gather insights, and synthesize findings to guide design decisions.Plan and run interviews, gather insights, and synthesize findings to guide design decisions.',
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
    <section className="bg-[var(--Secondary-Background)] text-[var(--text)] py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-number absolute top-20 left-0 -mt-0 -ml-0 text-[var(--secondary-text)] transform -rotate-270 text-6xl">
            03
        </div>
        <div className="max-w-5xl mx-auto">
            <div className="text-right mb-6">
                <h4 className='body-text-b'>User Experience</h4>
                <div className="h-px bg-[var(--secondary-text)] ml-auto max-w-[779px]"/>
                <h2 className="text-4xl text-left font-primary mb-12 w-[776px] ml-auto ">THE HUMAN SIDE OF DIGITAL DESIGN</h2>
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