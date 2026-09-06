"use client";

import React from "react";

export default function ToolsTechnologies() {
  return (
    <section id="tools-technologies" className="relative w-full py-20 lg:py-28 bg-white text-[#0A192F] border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-2">
            Tools &amp; Technologies
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Develop practical familiarity with industry-standard EDA tools and verification workflows.
          </p>
        </div>

        {/* --- DESKTOP / TABLET DIAGRAM VIEW (Perfect Concentric Bus Conduit Tree) --- */}
        <div className="hidden md:block relative w-full max-w-5xl mx-auto">
          <svg
            viewBox="0 0 1000 520"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ================= 1. CONDUIT BUS LINES ================= */}
            
            {/* --- LEFT CONDUIT (Concentric parallel lines turning left) --- */}
            {/* Outer rail: starts x=476, curves R=76 to horizontal y=304, meets badge at x=356 */}
            <path
              d="M 476 520 L 476 380 A 76 76 0 0 0 400 304 L 356 304"
              stroke="#0A192F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Inner rail: starts x=464, curves R=64 to horizontal y=316, meets badge at x=356 */}
            <path
              d="M 464 520 L 464 380 A 64 64 0 0 0 400 316 L 356 316"
              stroke="#0A192F"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* --- CENTER CONDUIT (Vertical straight parallel lines) --- */}
            {/* Left rail: x=494, meets center badge bottom at y=236 */}
            <path
              d="M 494 520 L 494 236"
              stroke="#0A192F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Right rail: x=506, meets center badge bottom at y=236 */}
            <path
              d="M 506 520 L 506 236"
              stroke="#0A192F"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* --- RIGHT CONDUIT (Concentric parallel lines turning right) --- */}
            {/* Outer rail: starts x=524, curves R=76 to horizontal y=344, meets badge at x=644 */}
            <path
              d="M 524 520 L 524 420 A 76 76 0 0 1 600 344 L 644 344"
              stroke="#0A192F"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Inner rail: starts x=536, curves R=64 to horizontal y=356, meets badge at x=644 */}
            <path
              d="M 536 520 L 536 420 A 64 64 0 0 1 600 356 L 644 356"
              stroke="#0A192F"
              strokeWidth="2"
              strokeLinecap="round"
            />


            {/* ================= 2. BADGE NODES ================= */}

            {/* --- TOP CENTER BADGE: Physical Verification (cx=500, cy=200, r=36) --- */}
            <g className="cursor-pointer group">
              {/* Outer circle */}
              <circle cx="500" cy="200" r="36" fill="white" stroke="#0A192F" strokeWidth="2" />
              
              {/* Chip Package */}
              <rect x="484" y="184" width="22" height="22" rx="3" stroke="#0A192F" strokeWidth="1.6" fill="none" />
              <rect x="489" y="189" width="12" height="12" rx="1" fill="#0A192F" fillOpacity="0.08" stroke="#0A192F" strokeWidth="1" />
              
              {/* Chip Pins Top */}
              <line x1="488" y1="180" x2="488" y2="184" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="495" y1="180" x2="495" y2="184" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="502" y1="180" x2="502" y2="184" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              
              {/* Chip Pins Bottom */}
              <line x1="488" y1="206" x2="488" y2="210" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="495" y1="206" x2="495" y2="210" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="502" y1="206" x2="502" y2="210" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              
              {/* Chip Pins Left */}
              <line x1="480" y1="188" x2="484" y2="188" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="480" y1="195" x2="484" y2="195" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="480" y1="202" x2="484" y2="202" stroke="#0A192F" strokeWidth="1.6" strokeLinecap="round" />
              
              {/* Magnifying Glass Overlapping */}
              <circle cx="508" cy="206" r="11" stroke="#0A192F" strokeWidth="2" fill="white" />
              <line x1="516" y1="214" x2="524" y2="222" stroke="#0A192F" strokeWidth="2.5" strokeLinecap="round" />
              {/* Small IC inside lens */}
              <rect x="504" y="202" width="8" height="8" rx="1" stroke="#0A192F" strokeWidth="1.2" fill="none" />
              <line x1="508" y1="199" x2="508" y2="202" stroke="#0A192F" strokeWidth="1" />
              <line x1="508" y1="210" x2="508" y2="213" stroke="#0A192F" strokeWidth="1" />
              <line x1="501" y1="206" x2="504" y2="206" stroke="#0A192F" strokeWidth="1" />
              <line x1="512" y1="206" x2="515" y2="206" stroke="#0A192F" strokeWidth="1" />
            </g>

            {/* --- LEFT BADGE: Layout & Design (cx=320, cy=310, r=36) --- */}
            <g className="cursor-pointer group">
              {/* Outer circle */}
              <circle cx="320" cy="310" r="36" fill="white" stroke="#0A192F" strokeWidth="2" />
              
              {/* CAD Window */}
              <rect x="303" y="293" width="34" height="34" rx="4" stroke="#0A192F" strokeWidth="1.8" fill="none" />
              <line x1="303" y1="301" x2="337" y2="301" stroke="#0A192F" strokeWidth="1.2" />
              {/* Header dots */}
              <circle cx="308" cy="297" r="1.2" stroke="#0A192F" strokeWidth="1" fill="none" />
              <circle cx="312" cy="297" r="1.2" stroke="#0A192F" strokeWidth="1" fill="none" />
              {/* Header lines */}
              <line x1="328" y1="296" x2="333" y2="296" stroke="#0A192F" strokeWidth="1" strokeLinecap="round" />
              <line x1="328" y1="298.5" x2="333" y2="298.5" stroke="#0A192F" strokeWidth="1" strokeLinecap="round" />

              {/* Inner IC Layout */}
              <rect x="312" y="307" width="16" height="14" rx="1.5" stroke="#0A192F" strokeWidth="1.4" fill="#0A192F" fillOpacity="0.05" />
              {/* Pins */}
              <line x1="315" y1="304" x2="315" y2="307" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="320" y1="304" x2="320" y2="307" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="325" y1="304" x2="325" y2="307" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="315" y1="321" x2="315" y2="324" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="320" y1="321" x2="320" y2="324" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="325" y1="321" x2="325" y2="324" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="309" y1="311" x2="312" y2="311" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="309" y1="317" x2="312" y2="317" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="328" y1="311" x2="331" y2="311" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="328" y1="317" x2="331" y2="317" stroke="#0A192F" strokeWidth="1.2" strokeLinecap="round" />
            </g>

            {/* --- RIGHT BADGE: Design Environment (cx=680, cy=350, r=36) --- */}
            <g className="cursor-pointer group">
              {/* Outer circle */}
              <circle cx="680" cy="350" r="36" fill="white" stroke="#0A192F" strokeWidth="2" />
              
              {/* Terminal Window Frame */}
              <rect x="663" y="333" width="34" height="34" rx="4" stroke="#0A192F" strokeWidth="1.8" fill="none" />
              <line x1="663" y1="341" x2="697" y2="341" stroke="#0A192F" strokeWidth="1.2" />
              {/* Header Dots */}
              <circle cx="668" cy="337" r="1.2" fill="#0A192F" />
              <circle cx="672" cy="337" r="1.2" fill="#0A192F" />
              <circle cx="676" cy="337" r="1.2" fill="#0A192F" />
              
              {/* Terminal Prompt `> _` */}
              <path d="M 671 349 L 676 353.5 L 671 358" stroke="#0A192F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="680" y1="358" x2="688" y2="358" stroke="#0A192F" strokeWidth="1.8" strokeLinecap="round" />
            </g>


            {/* ================= 3. LABELS & DESCRIPTIONS ================= */}
            
            {/* Top Center: Physical Verification */}
            <foreignObject x="340" y="25" width="320" height="130">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-[#0A192F] tracking-tight mb-2">
                  Physical Verification
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-[280px]">
                  Learn <span className="font-bold text-[#1D4ED8]">Siemens Calibre</span> and <span className="font-bold text-[#1D4ED8]">Cadence PVS</span> for DRC, LVS, Antenna check, and PEX.
                </p>
              </div>
            </foreignObject>

            {/* Left: Layout & Design */}
            <foreignObject x="20" y="245" width="250" height="170">
              <div className="flex flex-col text-right">
                <h3 className="text-xl font-bold text-[#0A192F] tracking-tight mb-2">
                  Layout &amp; Design
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Master <span className="font-bold text-[#1D4ED8]">Cadence Virtuoso</span> for schematic-driven layout, hierarchy editing, custom routing, and Pcell generation.
                </p>
              </div>
            </foreignObject>

            {/* Right: Design Environment */}
            <foreignObject x="730" y="285" width="250" height="170">
              <div className="flex flex-col text-left">
                <h3 className="text-xl font-bold text-[#0A192F] tracking-tight mb-2">
                  Design Environment
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Gain experience with <span className="font-bold text-[#1D4ED8]">Linux/UNIX</span> OS, Bash, and shell automation for enterprise workstation use.
                </p>
              </div>
            </foreignObject>

          </svg>
        </div>

        {/* --- MOBILE VIEW (Clean Stacked Flow) --- */}
        <div className="md:hidden flex flex-col items-center space-y-8 max-w-md mx-auto">
          
          {/* Card 1: Physical Verification */}
          <div className="w-full flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0A192F] flex items-center justify-center p-3 mb-4 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-full h-full text-[#0A192F]" fill="none">
                <rect x="18" y="18" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="22" y1="13" x2="22" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="13" x2="28" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="34" y1="13" x2="34" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="38" x2="22" y2="43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="38" x2="28" y2="43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="13" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="13" y1="28" x2="18" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="13" y1="34" x2="18" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="38" cy="38" r="10" stroke="currentColor" strokeWidth="2" fill="white" />
                <line x1="45.5" y1="45.5" x2="54" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-2">Physical Verification</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Learn <span className="font-bold text-[#1D4ED8]">Siemens Calibre</span> and <span className="font-bold text-[#1D4ED8]">Cadence PVS</span> for DRC, LVS, Antenna check, and PEX.
            </p>
          </div>

          {/* Card 2: Layout & Design */}
          <div className="w-full flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0A192F] flex items-center justify-center p-3 mb-4 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-full h-full text-[#0A192F]" fill="none">
                <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="12" y1="22" x2="52" y2="22" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="23" cy="17" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                <rect x="23" y="29" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="#0A192F" fillOpacity="0.05" />
                <line x1="27" y1="25" x2="27" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="32" y1="25" x2="32" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="37" y1="25" x2="37" y2="29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="27" y1="45" x2="27" y2="49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="32" y1="45" x2="32" y2="49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="37" y1="45" x2="37" y2="49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-2">Layout &amp; Design</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Master <span className="font-bold text-[#1D4ED8]">Cadence Virtuoso</span> for schematic-driven layout, hierarchy editing, custom routing, and Pcell generation.
            </p>
          </div>

          {/* Card 3: Design Environment */}
          <div className="w-full flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0A192F] flex items-center justify-center p-3 mb-4 shadow-sm">
              <svg viewBox="0 0 64 64" className="w-full h-full text-[#0A192F]" fill="none">
                <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="12" y1="22" x2="52" y2="22" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18" cy="17" r="1.5" fill="currentColor" />
                <circle cx="23" cy="17" r="1.5" fill="currentColor" />
                <circle cx="28" cy="17" r="1.5" fill="currentColor" />
                <path d="M22 31 L29 36 L22 41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="33" y1="41" x2="42" y2="41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#0A192F] mb-2">Design Environment</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Gain experience with <span className="font-bold text-[#1D4ED8]">Linux/UNIX</span> OS, Bash, and shell automation for enterprise workstation use.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
