"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const programs = [
  {
    id: "physical-design",
    title: "Physical Design",
    offsetClass: "lg:translate-y-0",
    description: "Learn the physical implementation flow of digital designs, from netlist through physical implementation and verification.",
    targetHref: "/physical-design",
  },
  {
    id: "analog-design",
    title: "Analog Design",
    offsetClass: "lg:translate-y-16",
    description: "Build a strong foundation in analog circuit design and understand the principles behind analog integrated circuits.",
    targetHref: "#contact",
  },
  {
    id: "analog-layout",
    title: "Analog Layout",
    offsetClass: "lg:translate-y-6",
    description: "Learn how analog circuits are physically implemented on silicon using practical layout techniques and verification methodologies.",
    targetHref: "/analog-layout",
  },
  {
    id: "memory-design",
    title: "Memory Design",
    offsetClass: "lg:translate-y-20",
    description: "Understand the fundamentals and design concepts behind semiconductor memory circuits.",
    targetHref: "#contact",
  },
  {
    id: "memory-layout",
    title: "Memory Layout",
    offsetClass: "lg:translate-y-10",
    description: "Develop practical skills for implementing memory circuits and understanding layout considerations in memory-based designs.",
    targetHref: "/memory-layout",
  },
];

export default function TrainingPrograms() {
  return (
    <section id="courses" className="relative w-full py-24 sm:py-32 bg-[#F4F4F6] text-neutral-900 overflow-hidden border-t border-neutral-300 selection:bg-black selection:text-white">
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section matching reference aesthetic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-24 items-start">
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-500 font-semibold block mb-4">
              SPECIALIZATIONS
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-neutral-900 leading-[0.9]">
              EXPERTISE
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8 lg:max-w-md lg:ml-auto">
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Explore specialized semiconductor training tracks covering the entire spectrum of IC implementation, circuit design, and physical verification.
            </p>
          </div>
        </div>

        {/* Staggered Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 pb-20 lg:pb-32">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`group relative bg-white hover:bg-black border border-neutral-900 rounded-2xl sm:rounded-3xl p-7 sm:p-9 flex flex-col justify-between min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl cursor-pointer ${prog.offsetClass}`}
            >
              {/* Description (Commented Out) */}
              {/* <div>
                <p className="text-sm sm:text-base text-neutral-600 group-hover:text-neutral-300 font-normal leading-relaxed transition-colors duration-300">
                  {prog.description}
                </p>
              </div> */}

              {/* Top Minimal Track Indicator */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-neutral-400 transition-colors duration-300">
                  Track
                </span>
                <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-white transition-colors duration-300" />
              </div>

              {/* Bottom: Title & Explore Link */}
              <div className="pt-8">
                <Link
                  href={prog.targetHref}
                  className="flex items-end justify-between group/link"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 group-hover:text-white leading-snug transition-colors duration-300">
                      {prog.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-neutral-900 group-hover:border-white flex items-center justify-center text-neutral-900 group-hover:text-black group-hover:bg-white transition-all shrink-0 ml-3">
                    <FiArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
