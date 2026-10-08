"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HeroScroller from "./hero-scroller";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative w-full flex flex-col overflow-hidden bg-[#FAFAFC] selection:bg-black selection:text-white">

      {/* Top Hero Content Area with Parallax Background Image */}
      <div className="relative w-full min-h-[95vh] sm:min-h-[105vh] flex items-center pt-32 sm:pt-40 md:pt-44 pb-36 sm:pb-48 overflow-hidden">
        
        {/* Parallax Hero Background Image */}
        <div
          className="absolute inset-0 pointer-events-none z-0 will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.28}px, 0) scale(1.05)`,
            transition: "transform 0.05s ease-out",
          }}
        >
          <Image
            src="/hero copy 2.jpg"
            alt="Semiconductor and PCB Background"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Subtle gradient mask on left for high contrast readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFC]/95 via-[#FAFAFC]/75 to-transparent" />
        </div>

        {/* Hero Content with Subtle Parallax Depth */}
        <div
          className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-left will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.06}px, 0)`,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column: Heading, Subtitle, CTAs & Scroller */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              {/* Main Hero Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-black leading-[1.05] mb-6">
                Build Your Future in <br className="hidden sm:inline" />
                Semiconductor & VLSI.
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 sm:mb-10 font-normal max-w-2xl">
                At <strong className="text-black font-semibold">LIFE Semiconductor Institute</strong>, we help students, graduates, and working professionals develop the deep technical knowledge and silicon-level practical skills required to excel in the global semiconductor industry.
              </p>

              {/* Hero Scroller (Seamless vertical program ticker) */}
              <div className="w-full max-w-[520px] mb-8 sm:mb-10">
                <HeroScroller />
              </div>

              {/* CTA Buttons - Styled in clean About page rounded pill aesthetic */}
              <div className="flex flex-wrap items-center justify-start gap-4">
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-white bg-black hover:bg-neutral-800 shadow-sm transition-all duration-300 active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <span>Explore Our Courses →</span>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-neutral-900 hover:text-black bg-white border border-neutral-300 hover:border-black shadow-xs transition-all duration-300 active:scale-[0.98]"
                >
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Full-Width Edge-to-Edge Bidirectional Marquee Tickers - Monochrome Editorial Bar */}
      <div className="relative z-10 w-full overflow-hidden bg-black text-white border-y border-neutral-800 shadow-xl">
        {/* Row 1: Scrolling Left to Right */}
        <div className="py-4 sm:py-5 border-b border-white/10 overflow-hidden flex select-none bg-black">
          <div className="animate-marquee-right whitespace-nowrap flex items-center font-[family-name:var(--font-space-grotesk)] font-medium text-sm sm:text-base md:text-xl tracking-tight text-white">
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
                <span className="text-white hover:text-neutral-300 transition-colors">{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right to Left */}
        <div className="py-4 sm:py-5 overflow-hidden flex bg-black select-none">
          <div className="animate-marquee-left whitespace-nowrap flex items-center font-[family-name:var(--font-space-grotesk)] font-medium text-sm sm:text-base md:text-xl tracking-tight text-white">
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
                <span className="text-white/90 hover:text-neutral-300 transition-colors">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
