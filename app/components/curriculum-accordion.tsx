"use client";

import React from "react";
import Image from "next/image";

const allTenModules = [
  {
    num: "01/",
    title: "SEMICONDUCTOR & CMOS FUNDAMENTALS",
    desc: "Semiconductor physics, energy bands, CMOS basics, NMOS/PMOS operation, threshold voltage, small-signal models, and nanometer technology layers.",
    dots: "•••",
  },
  {
    num: "02/",
    title: "LAYOUT DESIGN FUNDAMENTALS",
    desc: "EDA layout environment, layer hierarchy, active/poly regions, contacts, vias, basic design rules (DRC), and layout-versus-schematic (LVS) connectivity.",
    dots: "•••",
  },
  {
    num: "03/",
    title: "FLOORPLANNING & DEVICE PLACEMENT",
    desc: "Block-level hierarchy organization, power & ground mesh distribution, device proximity effects, placement symmetry, and area utilization optimization.",
    dots: "•••",
  },
  {
    num: "04/",
    title: "DEVICE MATCHING TECHNIQUES",
    desc: "Pelgrom's matching law, common centroid topologies, interdigitation, dummy transistors/resistors, cross-quad routing, and thermal gradient mitigation.",
    dots: "•••",
  },
  {
    num: "05/",
    title: "ANALOG ROUTING TECHNIQUES",
    desc: "Parasitic-aware metal routing, differential pair symmetry, critical signal shielding, star ground topologies, and substrate noise reduction.",
    dots: "•••",
  },
  {
    num: "06/",
    title: "ADVANCED LAYOUT CONSIDERATIONS",
    desc: "Guard ring structures, deep N-well isolation, substrate noise coupling, latch-up prevention guidelines, and layout dependent effects (WPE, LOD, PSE).",
    dots: "•••",
  },
  {
    num: "07/",
    title: "PHYSICAL VERIFICATION (DRC / LVS)",
    desc: "Sign-off DRC checks, LVS netlist comparison, shorts and opens resolution, ERC antenna rule closure, and industrial verification workflows.",
    dots: "•••",
  },
  {
    num: "08/",
    title: "PARASITIC EXTRACTION (PEX)",
    desc: "RC parasitic extraction rules, post-layout netlist generation, back-annotation, parasitic-aware corner simulations, and pre- vs post-layout trade-offs.",
    dots: "•••",
  },
  {
    num: "09/",
    title: "PRACTICAL PDK PROJECTS",
    desc: "Tapeout-grade execution of Two-Stage CMOS Op-Amps, Bandgap Voltage References (BGR), Low-Dropout Regulators (LDO), and SRAM bitcells.",
    dots: "•••",
  },
  {
    num: "10/",
    title: "INTERVIEW & CAREER PREPARATION",
    desc: "Comprehensive analog layout technical question bank, design scenario articulation, resume optimization, mock rounds, and tier-1 interview readiness.",
    dots: "•••",
  },
];

export default function CurriculumAccordion() {
  return (
    <section id="curriculum" className="relative w-full bg-[#E5E7EB] text-black border-t border-neutral-300 font-sans selection:bg-black selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto">
        
        {/* Top Header Row with Crosshairs */}
        <div className="relative border-b border-neutral-300 px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Massive Editorial Headline */}
            <div className="lg:col-span-8 flex flex-col">
              <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight text-neutral-400 leading-[0.86] select-none">
                CURRICULUM
              </span>
              <span className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight text-black leading-[0.86] select-none">
                APPROACH
              </span>
            </div>

            {/* Right Side Editorial Description */}
           

          </div>

          {/* Crosshair Indicators */}
          <span className="absolute -bottom-2 -left-1 text-neutral-700 text-xs font-mono select-none">+</span>
          <span className="absolute -bottom-2 -right-1 text-neutral-700 text-xs font-mono select-none">+</span>
        </div>

        {/* Main Grid Section: Sticky Left Image Frame + Right 10-Module Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Sticky Featured Architecture Image */}
          <div className="lg:col-span-5 relative border-b lg:border-b-0 lg:border-r border-neutral-300 p-6 sm:p-10 lg:p-12 bg-[#E5E7EB]">
            <div className="lg:sticky lg:top-28">
              <div className="relative w-full aspect-4/3 sm:aspect-square lg:aspect-4/5 rounded-2xl overflow-hidden border border-neutral-300/80 bg-white shadow-xs p-4 sm:p-6 flex items-center justify-center group">
                <div className="relative w-full h-full">
                  <Image
                    src="/footer.jpg"
                    alt="Semiconductor Architecture & Layout Curriculum"
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Module Counter / Indicator */}
              
            </div>

            {/* Junction Crosshair */}
            <span className="absolute -top-2.5 -right-2 text-neutral-800 text-sm font-mono select-none z-10 hidden lg:block">+</span>
          </div>

          {/* Right Column: 10 Modules (2 columns x 5 rows) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2">
            {allTenModules.map((mod, idx) => {
              const isEven = idx % 2 === 0;
              const isLastTwo = idx >= allTenModules.length - 2;

              return (
                <div
                  key={mod.num}
                  className={`relative p-8 sm:p-9 lg:p-10 min-h-[290px] sm:min-h-[320px] flex flex-col justify-between transition-colors duration-300 hover:bg-[#DCDFE3] border-b border-neutral-300 ${
                    isEven ? "sm:border-r border-neutral-300" : ""
                  } ${isLastTwo ? "lg:border-b-0" : ""}`}
                >
                  {/* Top Row: Module Number and Dot Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-mono font-bold tracking-tight text-neutral-900">
                      {mod.num}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-neutral-500">
                      {mod.dots}
                    </span>
                  </div>

                  {/* Bottom Content: Title and Description */}
                  <div className="pt-8">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight uppercase text-black mb-2.5 leading-snug">
                      {mod.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-mono text-neutral-700 leading-relaxed uppercase">
                      {mod.desc}
                    </p>
                  </div>

                  {/* Crosshairs at grid corners */}
                  <span className="absolute -top-2 -right-1 text-neutral-800 text-xs font-mono select-none hidden sm:block">+</span>
                  <span className="absolute -bottom-2 -right-1 text-neutral-800 text-xs font-mono select-none hidden sm:block">+</span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
