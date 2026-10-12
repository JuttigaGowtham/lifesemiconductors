"use client";

import React from "react";

const highlights = [
  "Training is conducted by industry experts and experienced trainers.",
  "Continuous assessment through tests, assignments and projects",
  "Customized and dedicated learning platform",
  "Self assessment reports and Knowledge analysis using Dipstick platform.",
  "State-of-the-art lab facility with access to the latest Cadence EDA tools.",
  "24x7 EDA tool access",
  "Mock interviews",
  "Guaranteed job opportunity on successful completion of the course!",
];

interface ProgramHighlightsProps {
  programName?: string;
}

export default function ProgramHighlights({ programName }: ProgramHighlightsProps) {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-white border-b border-neutral-200">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 mb-8 sm:mb-10">
          Program Highlights
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 sm:gap-y-5">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3.5 text-base sm:text-lg text-neutral-800 font-medium leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-black shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
