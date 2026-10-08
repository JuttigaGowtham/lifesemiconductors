"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const corePillars = [
  {
    num: "01",
    title: "Semiconductor & CMOS Fundamentals",
    desc: "Understand basic semiconductor physics, MOS device operations, and CMOS concepts critical for precision analog layout.",
  },
  {
    num: "02",
    title: "Layout Fundamentals",
    desc: "Master layers, contacts, vias, electrical connectivity, design rules (DRC), and the Cadence Virtuoso layout environment.",
  },
  {
    num: "03",
    title: "Floor Planning & Placement",
    desc: "Organize layout architecture while considering signal flow, device matching, proximity, power/ground rails, and silicon area.",
  },
  {
    num: "04",
    title: "Device Matching & Symmetry",
    desc: "Master Common Centroid, Interdigitation, Dummy finger insertion, Symmetry planes, Proximity rules, and Gradient effect cancellation.",
  },
  {
    num: "05",
    title: "Analog Routing Methodologies",
    desc: "Learn critical signal routing, low-IR power routing, sensitive net shielding, noise reduction, and capacitive coupling mitigation.",
  },
  {
    num: "06",
    title: "Advanced Layout Techniques",
    desc: "Implement Guard Rings, Deep N-Well isolation, Latch-up prevention, WPE/LOD layout-dependent effects, and EM/IR reliability.",
  },
  {
    num: "07",
    title: "Physical Verification (DRC/LVS)",
    desc: "Run comprehensive DRC, debug geometric violations, verify LVS schematic match, and resolve cross-hierarchy connectivity errors.",
  },
  {
    num: "08",
    title: "Parasitic Extraction & Analysis",
    desc: "Extract parasitic R & C networks, generate post-layout netlists, run parasitic-aware simulation, and optimize layout performance.",
  },
];

const programHighlights = [
  { label: "Duration", value: "3 Months Intensive" },
  { label: "Methodology", value: "Hands-on EDA Lab" },
  { label: "PDKs & Tools", value: "Industrial Standard" },
  { label: "Career Goal", value: "Tapeout-Ready Layout Engineer" },
];

const learningOutcomes = [
  "CMOS devices and analog layout fundamentals",
  "Layout floor planning and device placement",
  "Device matching and symmetry techniques",
  "Common-centroid and interdigitation patterns",
  "Analog routing and critical signal shielding",
  "Noise reduction and coupling minimization",
  "Guard rings and Deep N-Well isolation",
  "Parasitic and layout-dependent effects (WPE/LOD)",
  "Industrial DRC and LVS verification flows",
  "Parasitic extraction (PEX) & post-layout netlists",
  "Practical analog block layout tapeout project",
  "Rigorous technical interview & defense preparation",
];

export default function AnalogLayoutDeepDive() {
  return (
    <section id="analog-layout" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAFAFC] text-neutral-900 border-t border-neutral-200 overflow-hidden selection:bg-black selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]">
              Analog Layout Training
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Build hands-on expertise in custom Analog IC layout through structured fundamentals, practical exercises, tapeout-grade PDK projects, and industrial physical verification methodologies.
            </p>
          </div>
        </div>

        {/* Feature Bento Section: Highlights + Dedicated Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16 sm:mb-24">
          
          {/* Left Column: Key Program Highlights & Overview */}
          <div className="lg:col-span-6 bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between hover:border-black transition-all duration-300 shadow-xs hover:shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200">
                  FLAGSHIP PROGRAM
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  3-Month Intensive Track
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900 leading-snug mb-6">
                Silicon-Proven Curriculum Designed for Modern Semiconductor Teams
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-8">
                Master custom IC drafting from basic polygon creation to complex analog block floorplanning, matching architectures, guard ring isolations, and signoff DRC/LVS rule deck verification.
              </p>

              {/* 4 Stat Badges Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-100">
                {programHighlights.map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-neutral-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-8 mt-8 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Full 10-Module Syllabus
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-black hover:bg-neutral-800 transition-all shadow-sm"
              >
                <span>Enquire for Next Batch</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Dedicated Image Card (Ready for User Image) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[500px] lg:min-h-full border border-neutral-200 group bg-neutral-950 flex flex-col justify-between p-8 sm:p-10 shadow-xs hover:shadow-xl transition-all duration-300">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/analoglayout.jpg"
                alt="Analog Layout Training at LIFE Semiconductor Institute"
                fill
                className="object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
            </div>
          </div>

        </div>

        {/* 8 Core Engineering Pillars Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-200">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
                What You Will Master
              </h3>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md">
              Eight comprehensive engineering pillars covering the full spectrum of custom analog layout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {corePillars.map((item) => (
              <div
                key={item.num}
                className="group relative bg-white border border-neutral-200 rounded-3xl p-8 sm:p-9 flex flex-col justify-between hover:border-black transition-all duration-300 shadow-xs hover:shadow-xl min-h-[300px]"
              >
                <div>
                  <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                    {item.num} / PILLAR
                  </span>

                  <h4 className="text-xl sm:text-2xl font-medium text-neutral-900 leading-snug mb-3 group-hover:text-black transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes Section */}
        <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-neutral-100">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
                Analog Layout Learning Outcomes
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 font-normal mt-2 max-w-2xl leading-relaxed">
                By the end of the program, learners develop practical mastery of these core industry competencies:
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-black hover:bg-neutral-800 transition-all shadow-sm shrink-0 self-start lg:self-auto"
            >
              <span>Explore Full Syllabus →</span>
            </a>
          </div>

          {/* 12 Outcomes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {learningOutcomes.map((outcome, idx) => (
              <div
                key={outcome}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80"
              >
                <span className="text-xs font-mono text-neutral-400 font-semibold shrink-0 mt-0.5">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="text-sm sm:text-base font-normal text-neutral-700 leading-relaxed">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
