"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFC] text-black border-t border-neutral-200 font-sans selection:bg-black selection:text-white transition-colors duration-300">

      {/* 1. TOP SECTION: Semiconductor Chip PCB Design with Anatomical Scientific Leader Labels */}
      <div className="w-full border-b border-neutral-200 overflow-hidden bg-white">
        <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
          {/* Diagram Container with Vector Leader Lines & Labels */}
          <div className="relative w-full max-w-[1000px] mx-auto aspect-[4501/2807] select-none">
            <div className="relative w-full h-full">
              {/* Central PCB Image */}
              <Image
                src="/footer.jpg"
                alt="Semiconductor Chip Board Architecture"
                fill
                priority
                className="object-contain object-center pointer-events-none"
              />

              {/* SVG Overlay for Scientific Leader Lines & Labels */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 1000 624"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. SOC PROCESSOR CORE (Top Left-Center) */}
                <g>
                  <circle cx="395" cy="140" r="3.5" fill="#171717" />
                  <polyline 
                    points="190,45 330,45 395,140" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="180" 
                    y="45" 
                    textAnchor="end" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    SOC PROCESSOR CORE
                  </text>
                </g>

                {/* 2. ELECTROLYTIC CAPACITOR (Top Left) */}
                <g>
                  <circle cx="150" cy="180" r="3.5" fill="#171717" />
                  <polyline 
                    points="190,130 150,130 150,180" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="180" 
                    y="130" 
                    textAnchor="end" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    ELECTROLYTIC CAPACITOR
                  </text>
                </g>

                {/* 3. DATA BUS TRACES (Mid Left) */}
                <g>
                  <circle cx="311" cy="322" r="3.5" fill="#171717" />
                  <polyline 
                    points="190,310 230,310 311,322" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="180" 
                    y="310" 
                    textAnchor="end" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    DATA BUS TRACES
                  </text>
                </g>

                {/* 4. EXPANSION BUS INTERFACE (Bottom Left) */}
                <g>
                  <circle cx="284" cy="407" r="3.5" fill="#171717" />
                  <polyline 
                    points="190,485 220,485 284,407" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="180" 
                    y="485" 
                    textAnchor="end" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    EXPANSION BUS INTERFACE
                  </text>
                </g>

                {/* 5. DRIVER & LOGIC IC (Center / Top Right) */}
                <g>
                  <circle cx="495" cy="262" r="3.5" fill="#171717" />
                  <polyline 
                    points="495,262 580,135 815,135" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="825" 
                    y="135" 
                    textAnchor="start" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    DRIVER & LOGIC IC
                  </text>
                </g>

                {/* 6. I/O CONNECTOR ARRAY (Right) */}
                <g>
                  <circle cx="750" cy="270" r="3.5" fill="#171717" />
                  <polyline 
                    points="750,270 790,240 815,240" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="825" 
                    y="240" 
                    textAnchor="start" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    I/O CONNECTOR ARRAY
                  </text>
                </g>

                {/* 7. SMD PASSIVE ARRAYS (Mid Lower Right) */}
                <g>
                  <circle cx="580" cy="325" r="3.5" fill="#171717" />
                  <polyline 
                    points="580,325 670,360 815,360" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="825" 
                    y="360" 
                    textAnchor="start" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    SMD PASSIVE ARRAYS
                  </text>
                </g>

                {/* 8. CRYSTAL OSCILLATOR (Bottom Right) */}
                <g>
                  <circle cx="622" cy="482" r="3.5" fill="#171717" />
                  <polyline 
                    points="622,482 710,505 815,505" 
                    stroke="#171717" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <text 
                    x="825" 
                    y="505" 
                    textAnchor="start" 
                    dominantBaseline="middle"
                    className="font-mono font-semibold text-[11px] sm:text-[12px] fill-neutral-900 tracking-wider uppercase"
                  >
                    CRYSTAL OSCILLATOR
                  </text>
                </g>

              </svg>

            </div>
          </div>
        </div>
      </div>

      {/* 2. MID SECTION: Category Navigation Row */}
      <div className="w-full border-b border-neutral-200 bg-[#FAFAFC]">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-mono tracking-wider uppercase text-neutral-600">
            <div>
              <Link
                href="/#about"
                className="hover:text-black transition-colors inline-block font-medium"
              >
                About Institute
              </Link>
            </div>
            <div>
              <Link
                href="/#insights"
                className="hover:text-black transition-colors inline-block font-medium"
              >
                Media & Insights
              </Link>
            </div>
            <div>
              <Link
                href="/#career-prep"
                className="hover:text-black transition-colors inline-block font-medium"
              >
                Careers & Outcomes
              </Link>
            </div>
            <div className="sm:text-right">
              <Link
                href="/#contact"
                className="hover:text-black transition-colors inline-block font-bold text-black"
              >
                Join Us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: Headline + HQ Info + Pill Action Button */}
      <div className="w-full py-12 sm:py-16 lg:py-20 bg-[#FAFAFC]">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

            {/* Left: Massive LIFE Name with Semiconductors Subtitle */}
            <div className="flex-1 min-w-[240px]">
              <h2 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] font-black uppercase tracking-tighter text-black leading-none select-none">
                LIFE
              </h2>
              <span className="block text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.35em] uppercase text-neutral-500 mt-1 select-none">
                SEMICONDUCTORS
              </span>
            </div>

            {/* Middle: HQ Address & Contact Info */}
            <div className="text-xs sm:text-sm leading-relaxed text-neutral-600 space-y-2">
              <div className="font-semibold text-sm sm:text-base text-black">
                LIFE Semiconductor Institute
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4 text-neutral-800 shrink-0" />
                <span>Silicon Technology Hub, HITEC City, Hyderabad, India</span>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm">
                <a
                  href="mailto:info@lifesemiconductors.com"
                  className="flex items-center gap-1.5 text-neutral-700 hover:text-black font-medium transition-colors"
                >
                  <FiMail className="w-3.5 h-3.5 text-neutral-800" />
                  <span>info@lifesemiconductors.com</span>
                </a>
                <span className="text-neutral-300">•</span>
                <a
                  href="tel:+919618347989"
                  className="flex items-center gap-1.5 text-neutral-700 hover:text-black font-medium transition-colors"
                >
                  <FiPhone className="w-3.5 h-3.5 text-neutral-800" />
                  <span>+91 9618347989</span>
                </a>
              </div>
            </div>

            {/* Right: Rounded Pill Button matching About Page */}
            <div className="flex items-center lg:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-white bg-black hover:bg-neutral-800 shadow-sm transition-all duration-300 active:scale-98"
              >
                <span>Get In Touch →</span>
              </Link>
            </div>

          </div>

          {/* Micro Footer Bottom Bar */}
          <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
            <div>
              © 2026 LIFE Semiconductor Institute. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>HITEC City • Hyderabad</span>
              <span>•</span>
              <span>Physical Design • Analog Layout • Memory Design</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
