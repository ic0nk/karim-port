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

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-600 py-4">
      <div className="flex justify-between items-start cursor-pointer" onClick={onClick}>
        <div className="flex items-start">
          <span className="text-gray-400 mr-4">{`0${item.id}`}</span>
          <div>
            <h3 className="text-lg font-medium text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          </div>
        </div>
        <span className="text-white text-2xl">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="mt-4 pl-8">
          <p className="text-gray-400 text-sm">{item.fullDescription}</p>
        </div>
      )}
    </div>
  );
};

const UserExperience = () => {
  const [openId, setOpenId] = useState(4);

  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-number absolute top-20 left-0 -mt-4 -ml-12 text-gray-700 font-bold text-9xl">
            03
        </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-right mb-12">
            <p className='body-text-b'>User Experience</p>
            <div className="w-40 h-px bg-gray-600 ml-auto"/>
        </div>
        <h2 className="text-4xl font-primary mb-12 text-center">THE HUMAN SIDE OF DIGITAL DESIGN</h2>
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