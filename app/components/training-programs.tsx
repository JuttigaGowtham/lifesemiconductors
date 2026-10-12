"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export const programs = [
  {
    id: "physical-design",
    title: "Physical Design",
    offsetClass: "lg:translate-y-0",
    description: "Learn the physical implementation flow of digital designs, from netlist through physical implementation and verification.",
    targetHref: "/physical-design",
    image: "/analoglayout.jpg",
    isComingSoon: false,
  },
  {
    id: "analog-layout",
    title: "Analog Layout",
    offsetClass: "lg:translate-y-6",
    description: "Learn how analog circuits are physically implemented on silicon using practical layout techniques and verification methodologies.",
    targetHref: "/analog-layout",
    image: "/analoglayout.jpg",
    isComingSoon: false,
  },
  {
    id: "memory-layout",
    title: "Memory Layout",
    offsetClass: "lg:translate-y-10",
    description: "Develop practical skills for implementing memory circuits and understanding layout considerations in memory-based designs.",
    targetHref: "/memory-layout",
    image: "/memory layout.jpg",
    isComingSoon: false,
  },
  {
    id: "analog-design",
    title: "Analog Design",
    offsetClass: "lg:translate-y-16",
    description: "Build a strong foundation in analog circuit design and understand the principles behind analog integrated circuits.",
    targetHref: "/analog-design",
    image: "/analoglayout.jpg",
    isComingSoon: true,
  },
  {
    id: "memory-design",
    title: "Memory Design",
    offsetClass: "lg:translate-y-20",
    description: "Understand the fundamentals and design concepts behind semiconductor memory circuits.",
    targetHref: "/memory-design",
    image: "/analoglayout.jpg",
    isComingSoon: true,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 pb-20 lg:pb-32">
          {programs.map((prog) => (
            <Link
              key={prog.id}
              href={prog.targetHref}
              className={`group relative bg-white border border-neutral-900 rounded-2xl sm:rounded-3xl p-7 sm:p-9 flex flex-col justify-between min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl cursor-pointer ${prog.offsetClass}`}
            >
              {/* Background Hover Image & Overlay */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <Image
                  src={prog.image || "/analoglayout.jpg"}
                  alt={prog.title}
                  fill
                  className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/45" />
              </div>

              {/* Top Minimal Track Indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                  Track
                </span>
                {prog.isComingSoon ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-300 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:bg-amber-400 animate-pulse" />
                    Coming Soon
                  </span>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-white transition-colors duration-300" />
                )}
              </div>

              {/* Bottom: Title & Explore Link */}
              <div className="relative z-10 pt-8 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 group-hover:text-white leading-snug transition-colors duration-300">
                    {prog.title}
                  </h3>
                  {prog.isComingSoon && (
                    <span className="inline-block mt-1 text-xs font-mono text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="w-10 h-10 rounded-full border border-neutral-900 group-hover:border-white flex items-center justify-center text-neutral-900 group-hover:text-black group-hover:bg-white transition-all shrink-0 ml-3">
                  <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
