"use client";

import React from "react";

const steps = [
  {
    num: "1",
    stepLabel: "Step 1",
    title: "Strong Fundamentals",
    description: "Build a clear understanding of semiconductor and VLSI concepts before moving into advanced topics.",
  },
  {
    num: "2",
    stepLabel: "Step 2",
    title: "Practical Approach",
    description: "Learn through exercises, implementation, debugging, and project-based learning.",
  },
  {
    num: "3",
    stepLabel: "Step 3",
    title: "Industry-Relevant Skills",
    description: "Understand methodologies, tools, and workflows used in semiconductor design environments.",
  },
  {
    num: "4",
    stepLabel: "Step 4",
    title: "Project-Based Learning",
    description: "Apply technical concepts through practical design and layout projects.",
  },
  {
    num: "5",
    stepLabel: "Step 5",
    title: "Verification Mindset",
    description: "Learn to identify, analyze, debug, and resolve design and physical verification issues.",
  },
  {
    num: "6",
    stepLabel: "Step 6",
    title: "Career Preparation",
    description: "Develop technical confidence through interview-oriented learning and project discussions.",
  },
];

export default function WhyLife() {
  return (
    <section id="why-life" className="relative w-full bg-[#F2F2F2] text-neutral-900 border-t border-neutral-300 overflow-hidden selection:bg-black selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          
          {/* Left Column: Big Impact Headline (Sticky on desktop) */}
          <div className="lg:col-span-5 px-6 sm:px-10 lg:px-14 py-16 sm:py-24 lg:py-32 lg:border-r border-neutral-300 flex flex-col justify-between">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] font-black uppercase tracking-tight text-neutral-900 leading-[0.9] mb-8 sm:mb-10">
                HOW WE
                <br />
                WORK
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-md">
                Guiding every engineer from fundamental concepts to career completion seamlessly.
              </p>
            </div>
          </div>

          {/* Right Column: Numbered Process Grid List */}
          <div className="lg:col-span-7 flex flex-col border-t lg:border-t-0 border-neutral-300">
            {steps.map((item, index) => (
              <div
                key={item.num}
                className={`grid grid-cols-12 border-b border-neutral-300 transition-colors duration-300 hover:bg-neutral-200/50 ${
                  index === 0 ? "border-t lg:border-t-0" : ""
                }`}
              >
                {/* Left Number Sub-Column */}
                <div className="col-span-3 sm:col-span-3 md:col-span-3 px-5 sm:px-8 py-8 sm:py-12 flex flex-col justify-between">
                  <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-neutral-900 select-none leading-none">
                    {item.num}
                  </span>
                  <div className="w-6 sm:w-8 h-[2px] bg-neutral-900 mt-6 sm:mt-10" />
                </div>

                {/* Right Content Sub-Column */}
                <div className="col-span-9 sm:col-span-9 md:col-span-9 px-6 sm:px-10 lg:px-12 py-8 sm:py-12 border-l border-neutral-300 flex flex-col justify-between min-h-[160px] sm:min-h-[190px]">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4 sm:mb-6">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-600 font-normal leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
