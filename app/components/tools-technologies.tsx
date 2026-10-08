"use client";

import React from "react";

const toolHighlights = [
  {
    id: "physical-verification",
    title: "Physical Verification.",
    subtitle: "DRC, LVS, Antenna & PEX Signoff.",
    description:
      "Learn industry-standard verification suites including Siemens Calibre and Cadence PVS. Master full-chip DRC rule deck debugging, LVS connectivity extraction, antenna violation fixing, and parasitic extraction (PEX) for tapeout-grade silicon accuracy.",
  },
  {
    id: "layout-design",
    title: "Layout & Design.",
    subtitle: "Custom IC & Schematic-Driven Layout.",
    description:
      "Master Cadence Virtuoso for schematic-driven layout (SDL), hierarchy floorplanning, custom analog routing, guard ring placement, and parameterized cell (Pcell) instantiation across modern foundry technology nodes.",
  },
  {
    id: "design-environment",
    title: "Design Environment.",
    subtitle: "Enterprise Linux & Shell Automation.",
    description:
      "Gain hands-on experience with enterprise Linux/UNIX design workstation environments, command-line productivity, Bash scripting, and TCL automation essential for modern semiconductor design center workflows.",
  },
];

export default function ToolsTechnologies() {
  return (
    <section
      id="tools-technologies"
      className="relative w-full pt-20 sm:pt-28 lg:pt-36 pb-10 sm:pb-14 lg:pb-16 bg-white text-neutral-900 border-t border-neutral-200 overflow-hidden selection:bg-black selection:text-white"
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Big Impact Editorial Headline matching reference image */}
        <div className="mb-14 sm:mb-20 lg:mb-24 max-w-5xl">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] font-light tracking-tight text-neutral-950 leading-[0.95] mb-6">
            Tools &amp; Technologies.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-500 font-normal leading-relaxed max-w-3xl">
            Develop practical familiarity with industry-standard EDA tools and verification workflows used in leading semiconductor design centers.
          </p>
        </div>

        {/* Minimalist Editorial 2-Column Rows matching reference image */}
        <div>
          {toolHighlights.map((item) => (
            <div
              key={item.id}
              className="border-t border-neutral-200 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start transition-colors duration-300 hover:bg-neutral-50/50"
            >
              {/* Left Column: Title & Subtitle */}
              <div className="lg:col-span-5 max-w-md">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-950 leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-500 font-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Right Column: Narrative Description */}
              <div className="lg:col-span-7 max-w-2xl">
                <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-normal leading-relaxed">
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
