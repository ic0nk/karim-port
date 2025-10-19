"use client";

import { useState } from "react";

type Item = {
  id: number;
  title: string;
  summary: string;
  details: string;
};

const ITEMS: Item[] = [
  {
    id: 1,
    title: "User research & interviews",
    summary:
      "Plan and run interviews, gather insights, and synthesize findings to guide design decisions.",
    details:
      "Plan and run interviews, gather insights, and synthesize findings to guide design decisions. Plan and run interviews, gather insights, and synthesize findings to guide design decisions."
  },
  {
    id: 2,
    title: "User research & interviews",
    summary:
      "Plan and run interviews, gather insights, and synthesize findings to guide design decisions.",
    details:
      "More detailed write-up goes here. Explain approach, methods, and outcomes with clarity."
  },
  {
    id: 3,
    title: "User research & interviews",
    summary:
      "Plan and run interviews, gather insights, and synthesize findings to guide design decisions.",
    details:
      "Add metrics, quotes, and artifacts discovered during research for additional context."
  },
  {
    id: 4,
    title: "User research & interviews",
    summary:
      "Plan and run interviews, gather insights, and synthesize findings to guide design decisions.",
    details:
      "This section can expand into a richer case study with images or bullet lists as needed."
  }
];

export default function ProjectDetails() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header bar */}
      <div className="flex items-end justify-between mb-10">
        <div className="flex-1 h-px bg-gray-400" />
        <div className="ml-6 text-sm tracking-wide text-gray-600">User Experience</div>
      </div>

      {/* Title */}
      <h1 className="text-5xl sm:text-6xl font-primary text-[var(--text)] mb-12">
        THE HUMAN SIDE OF DIGITAL
        <br />
        DESIGN
      </h1>

      {/* List */}
      <section className="divide-y divide-gray-300/70 border-y border-gray-300/70">
        {ITEMS.map((item, idx) => {
          const isOpen = openId === item.id;
          const number = String(item.id).padStart(2, "0");
          return (
            <div key={item.id} className="py-6">
              <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-start">
                <span className="text-gray-500 tabular-nums">{number}</span>

                <div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 max-w-3xl">{item.summary}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen ? 'true' : 'false'}
                  aria-controls={`item-${item.id}`}
                  aria-label={isOpen ? 'Collapse section' : 'Expand section'}
                  className="select-none text-gray-600 hover:text-[var(--btn-primary)] text-xl leading-none px-2"
                >
                  {isOpen ? "−" : "+"}
                </button>
              </div>

              {/* Expandable content */}
              <div
                id={`item-${item.id}`}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-4 text-sm text-gray-600 max-w-5xl">
                    {item.details}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
