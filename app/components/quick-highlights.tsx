"use client";

import React from "react";

const highlights = [
  {
    step: "01",
    title: "Practical Learning",
    description: "Learn concepts through hands-on exercises and real-world implementation.",
  },
  {
    step: "02",
    title: "Industry-Oriented Curriculum",
    description: "Develop knowledge aligned with modern semiconductor design methodologies.",
  },
  {
    step: "03",
    title: "Hands-on Projects",
    description: "Apply your learning through practical design and custom layout projects.",
  },
  {
    step: "04",
    title: "Interview Preparation",
    description: "Strengthen core technical concepts and prepare thoroughly for VLSI interviews.",
  },
];

export default function QuickHighlights() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-white border-y border-slate-200">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-black transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg cursor-pointer"
            >
              <div>
                {/* Header with Number Tag */}
                <div className="mb-5">
                  <span className="text-xs font-mono font-semibold tracking-wider text-slate-400 uppercase">
                    {item.step} / PILLAR
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#0A192F] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
