"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-between pt-40 sm:pt-48 md:pt-52 pb-0 overflow-hidden bg-white">

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10 w-full text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Hero Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A192F] leading-[1.12] mb-6">
              Build Your Future in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7]">
                Semiconductor & VLSI
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-4 font-normal max-w-2xl">
              At <strong className="text-[#0A192F] font-semibold">LIFE Semiconductor Institute</strong>, we help students, graduates, and working professionals develop the technical knowledge and practical skills required to build a career in the semiconductor and VLSI industry.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#1D4ED8] font-bold mb-8 sm:mb-10 max-w-xl">
              Learn the concepts. Work on practical implementations. Build your technical confidence.
            </p>

            {/* CTA Buttons - Left Aligned with Left-to-Right Blue Hover Fill */}
            <div className="flex flex-wrap items-center justify-start gap-4">
              <a
                href="#courses"
                className="relative inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm md:text-base text-black hover:text-white bg-white border-2 border-black/80 hover:border-[#1D4ED8] shadow-sm overflow-hidden group active:scale-[0.98] transition-colors duration-300"
              >
                <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Explore Our Courses</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </a>

              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm md:text-base text-black hover:text-white bg-white border-2 border-black/80 hover:border-[#1D4ED8] shadow-sm overflow-hidden group active:scale-[0.98] transition-colors duration-300"
              >
                <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
                <span className="relative z-10">Enquire Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Semiconductor Chip Visual (Background Removed) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] aspect-square flex items-center justify-center">
              {/* Soft ambient backglow */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform scale-90 pointer-events-none" />
              <Image
                src="/semiconductor-chip.png"
                alt="Semiconductor Microchip VLSI Architecture"
                width={480}
                height={480}
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 relative z-10"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Full-Width Edge-to-Edge Bidirectional Marquee Tickers */}
      <div className="relative z-10 w-full mt-14 sm:mt-16 overflow-hidden bg-black text-white border-y border-slate-800 shadow-xl">
        {/* Row 1: Scrolling Left to Right */}
        <div className="py-4 sm:py-5 border-b border-white/10 overflow-hidden flex select-none">
          <div className="animate-marquee-right whitespace-nowrap flex items-center font-[family-name:var(--font-space-grotesk)] font-bold text-sm sm:text-base md:text-xl tracking-tight text-white">
            {[
              "Analog IC Layout Design.",
              "Cadence Virtuoso & Calibre.",
              "DRC & LVS Clean Layouts.",
              "FinFET & Planar CMOS.",
              "ESD & Latch-up Protection.",
              "Bandgap & Op-Amp Layouts.",
              "100% Hands-on PDK Training.",
              "Analog IC Layout Design.",
              "Cadence Virtuoso & Calibre.",
              "DRC & LVS Clean Layouts.",
              "FinFET & Planar CMOS.",
              "ESD & Latch-up Protection.",
              "Bandgap & Op-Amp Layouts.",
              "100% Hands-on PDK Training.",
              "Analog IC Layout Design.",
              "Cadence Virtuoso & Calibre.",
              "DRC & LVS Clean Layouts.",
              "FinFET & Planar CMOS.",
              "ESD & Latch-up Protection.",
              "Bandgap & Op-Amp Layouts.",
              "100% Hands-on PDK Training.",
            ].map((item, idx) => (
              <span key={idx} className="shrink-0 pr-8 sm:pr-14">
                <span className="text-white hover:text-blue-400 transition-colors">{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right to Left */}
        <div className="py-4 sm:py-5 overflow-hidden flex bg-black select-none">
          <div className="animate-marquee-left whitespace-nowrap flex items-center font-[family-name:var(--font-space-grotesk)] font-bold text-sm sm:text-base md:text-xl tracking-tight text-white">
            {[
              "Admissions Open For Upcoming Batch.",
              "Live Industry Expert Mentorship.",
              "Practical Silicon-Level Concepts.",
              "Physical Verification Mastery.",
              "Career Guidance & Mock Interviews.",
              "Limited Seats Available.",
              "Admissions Open For Upcoming Batch.",
              "Live Industry Expert Mentorship.",
              "Practical Silicon-Level Concepts.",
              "Physical Verification Mastery.",
              "Career Guidance & Mock Interviews.",
              "Limited Seats Available.",
              "Admissions Open For Upcoming Batch.",
              "Live Industry Expert Mentorship.",
              "Practical Silicon-Level Concepts.",
              "Physical Verification Mastery.",
              "Career Guidance & Mock Interviews.",
              "Limited Seats Available.",
            ].map((item, idx) => (
              <span key={idx} className="shrink-0 pr-8 sm:pr-14">
                <span className="text-white/90 hover:text-blue-400 transition-colors">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
