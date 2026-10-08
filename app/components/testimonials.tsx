"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const testimonials = [
  {
    quote: "The hands-on approach to analog layout and matching techniques gave me the practical confidence I needed. The DRC/LVS debugging sessions were directly relevant to industry teams.",
    author: "Rohit Kumar",
    role: "Analog Layout Track",
    initials: "RK",
  },
  {
    quote: "I learned not just how to draw layouts, but why specific placement and routing strategies matter for parasitic extraction, noise reduction, and signal integrity.",
    author: "Sneha Patel",
    role: "VLSI Graduate",
    initials: "SP",
  },
  {
    quote: "Learning the Cadence Virtuoso flow and Calibre DRC/LVS debugging on real designs gave me the exact hands-on edge needed for semiconductor recruitment.",
    author: "Harish Varma",
    role: "Physical Design & Layout",
    initials: "HV",
  },
  {
    quote: "Building a 6T SRAM cell from scratch and completing DRC/LVS signoff gave me end-to-end practical clarity that textbooks never provided. Highly recommended!",
    author: "Ananya Reddy",
    role: "Memory & Custom IC",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-white text-neutral-900 border-t border-slate-200">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header matching About page typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div className="max-w-3xl text-left">
            <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400 font-semibold block mb-3 select-none">
              STUDENT EXPERIENCES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#0A192F] leading-[1.08] mb-4">
              Learners Who Got Confident.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Practical learning creates confidence, and confidence gets results. Here&apos;s what learners shared after building their semiconductor fundamentals with LIFE.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#0A192F] hover:bg-black transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <span>Start Your Journey →</span>
          </a>
        </div>

        {/* 4-Column Architectural Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="group relative bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-black transition-all duration-300 shadow-xs hover:shadow-lg"
            >
              <div>
                <span className="text-3xl font-serif text-slate-300 block mb-3 leading-none">“</span>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-mono font-bold text-slate-700">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#0A192F] leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-400 font-normal mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
