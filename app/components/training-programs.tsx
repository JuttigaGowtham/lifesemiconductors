"use client";

import { FiArrowRight } from "react-icons/fi";

const programs = [
  {
    id: "physical-design",
    title: "Physical Design",
    description: "Learn the physical implementation flow of digital designs, from netlist through physical implementation and verification.",
    keyAreas: [
      "Floorplanning",
      "Placement",
      "CTS (Clock Tree Synthesis)",
      "Routing",
      "Timing Analysis",
      "Physical Verification"
    ],
    targetHref: "#contact"
  },
  {
    id: "analog-design",
    title: "Analog Design",
    description: "Build a strong foundation in analog circuit design and understand the principles behind analog integrated circuits.",
    keyAreas: [
      "MOS Circuits",
      "Amplifiers",
      "Current Mirrors",
      "Biasing Circuits",
      "Op-Amps",
      "Analog Building Blocks"
    ],
    targetHref: "#contact"
  },
  {
    id: "analog-layout",
    title: "Analog Layout",
    description: "Learn how analog circuits are physically implemented on silicon using practical layout techniques and verification methodologies.",
    keyAreas: [
      "Floorplanning",
      "Matching & Symmetry",
      "Common Centroid",
      "Interdigitation",
      "Analog Routing",
      "DRC | LVS | PEX"
    ],
    targetHref: "#analog-layout"
  },
  {
    id: "memory-design",
    title: "Memory Design",
    description: "Understand the fundamentals and design concepts behind semiconductor memory circuits.",
    keyAreas: [
      "SRAM Architecture",
      "Memory Cells",
      "Sense Amplifiers",
      "Precharge Logic",
      "Write Drivers",
      "Peripheral Circuits"
    ],
    targetHref: "#contact"
  },
  {
    id: "memory-layout",
    title: "Memory Layout",
    description: "Develop practical skills for implementing memory circuits and understanding layout considerations in memory-based designs.",
    keyAreas: [
      "Bit Cells (6T/8T)",
      "Matching Techniques",
      "Array Layout",
      "Peripheral Layout",
      "Routing Methodologies",
      "DRC/LVS Verification"
    ],
    targetHref: "#contact"
  }
];

export default function TrainingPrograms() {
  return (
    <section id="courses" className="relative w-full py-24 bg-[#F8FAFC] circuit-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight">
              Choose Your VLSI Career Path
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Explore specialized training programs designed for different areas of semiconductor design.
            </p>
          </div>
        </div>

        {/* 5 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, index) => (
            <div
              key={prog.id}
              className="relative rounded-3xl p-8 bg-white text-[#0A192F] border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              {/* Top content */}
              <div>
                <h3 className="text-2xl font-bold text-[#0A192F] mb-3">
                  {prog.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Key Areas list */}
                <div className="border-t border-slate-100 pt-5 mb-8">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-500 block mb-3">
                    Key Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Button - Styled Exactly like Hero Buttons */}
              <div className="pt-2">
                <a
                  href={prog.targetHref}
                  className="relative inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-black hover:text-white bg-white border-2 border-black/80 hover:border-[#1D4ED8] shadow-sm overflow-hidden group/btn active:scale-[0.98] transition-colors duration-300"
                >
                  <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/btn:scale-x-100 z-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Explore {prog.title}</span>
                    <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
