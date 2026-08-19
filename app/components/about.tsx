"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#F9F8F6] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center overflow-hidden">
      
      {/* Premium Parallax Background shape */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.05),transparent_50%)]"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      />

      {/* Title Header */}
      <div className="relative z-10 w-full max-w-6xl mb-12 text-left">
        <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-2">
          About LifeSemiconductors
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1B1A]">
          High-Precision Physical Layout & Training
        </h1>
      </div>

      {/* Feature Cards Grid (Asymmetrical grid) */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Top-Left (CMOS cell layouts) */}
        <div className="md:col-span-7 bg-[#EFEBF4] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group min-h-[380px] pb-44 sm:pb-48 md:pb-10 border border-[#E2DCE8]">
          <div className="max-w-[320px] z-10">
            <span className="text-xs font-semibold tracking-wider text-[#7C3AED] uppercase">
              Technical Training
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1B1A] mt-2 mb-4 leading-tight">
              Learn custom cell layouts
            </h3>
            <p className="text-sm text-[#4E4D4A] leading-relaxed">
              Master CMOS, analog routing, and RF layout design using industry-standard tools (Cadence, L-Edit) with silicon-guided bootcamps.
            </p>
          </div>

          {/* Interactive Layout Mockup on Right */}
          <div className="absolute bottom-0 right-0 w-[240px] md:w-[280px] bg-[#1E1D24] border-t border-l border-slate-700/50 rounded-tl-2xl p-4 shadow-2xl transform translate-y-6 translate-x-4 group-hover:translate-y-4 group-hover:translate-x-2 transition-all duration-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-[10px] font-mono text-slate-400">Layout_Editor: main_dff.cell</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">DRC: PASS</span>
            </div>
            {/* Grid simulator */}
            <div className="grid grid-cols-6 gap-1 font-mono text-[9px] text-slate-500 mb-2">
              <div className="h-6 rounded bg-blue-500/20 border border-blue-500/40 col-span-3 flex items-center justify-center text-blue-300">Metal1</div>
              <div className="h-6 rounded bg-rose-500/20 border border-rose-500/40 col-span-3 flex items-center justify-center text-rose-300">Poly</div>
              <div className="h-6 rounded bg-amber-500/20 border border-amber-500/40 col-span-2 flex items-center justify-center text-amber-300">N-Well</div>
              <div className="h-6 rounded bg-cyan-500/20 border border-cyan-500/40 col-span-4 flex items-center justify-center text-cyan-300">Diffusion</div>
            </div>
            {/* Button */}
            <div className="w-full py-1.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded text-center text-[10px] font-bold cursor-pointer transition-colors">
              Run DRC / LVS Check
            </div>
          </div>
        </div>

        {/* Card 2: Top-Right (Tape-out Flow) */}
        <div className="md:col-span-5 bg-[#F0EFEA] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative min-h-[380px] border border-[#E2E1DD]">
          <div className="max-w-[300px]">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Design Services
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1B1A] mt-2 mb-4 leading-tight">
              Tape-out faster
            </h3>
            <p className="text-sm text-[#4E4D4A] leading-relaxed">
              Our specialists execute DRC-clean IC designs, layout floorplanning, and physical validation on-time.
            </p>
          </div>

          {/* Flow diagram mockup */}
          <div className="mt-8 bg-white/80 border border-slate-200/60 rounded-2xl p-4 shadow-sm">
            <div className="flex flex-col gap-2 font-mono text-[10px]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[8px]">1</div>
                <div className="flex-1 bg-slate-100 p-1.5 rounded text-slate-700">Netlist & Floorplan</div>
              </div>
              <div className="w-px h-2 bg-slate-300 ml-2" />
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[8px]">2</div>
                <div className="flex-1 bg-slate-100 p-1.5 rounded text-slate-700">Placement & Routing</div>
              </div>
              <div className="w-px h-2 bg-slate-300 ml-2" />
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[8px]">3</div>
                <div className="flex-1 bg-[#7C3AED]/10 text-[#7C3AED] p-1.5 rounded font-semibold border border-[#7C3AED]/20">GDSII Tape-out</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Bottom-Left (Verification panels) */}
        <div className="md:col-span-5 bg-[#1E2530] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative min-h-[380px] text-white border border-slate-800">
          {/* Schematic vs Layout panel mockup */}
          <div className="flex gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-3 shadow-inner mb-6">
            <div className="flex-1 border border-slate-800 rounded p-2 bg-[#12161E]">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mb-2" />
              <div className="h-6 w-full border border-dashed border-slate-700 rounded flex items-center justify-center text-[9px] font-mono text-slate-400">Schematic</div>
            </div>
            <div className="flex-1 border border-slate-800 rounded p-2 bg-[#12161E]">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mb-2" />
              <div className="h-6 w-full border border-solid border-[#7C3AED]/50 rounded bg-[#7C3AED]/10 flex items-center justify-center text-[9px] font-mono text-violet-300">Layout Match</div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Advanced Verification
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-tight">
              DRC & LVS verification
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Verify matching netlists and schematic layouts without connectivity errors before submitting to fabrication.
            </p>
          </div>
        </div>

        {/* Card 4: Bottom-Right (Pipeline stats) */}
        <div className="md:col-span-7 bg-[#7C3AED] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[380px] text-white border border-[#6D28D9] shadow-lg shadow-violet-500/5">
          <div className="max-w-[400px]">
            <span className="text-xs font-semibold tracking-wider text-violet-200 uppercase">
              Precision Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
              Build layout pipelines together
            </h3>
            <p className="text-sm text-violet-100 leading-relaxed">
              Our engineering specialists collaborate with your team to optimize placement, manage ESD requirements, and increase chip yield output.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 mt-8 border-t border-white/20 pt-6">
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-xs text-violet-200 uppercase font-semibold mt-1">LVS matching accuracy</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div>
              <div className="text-3xl font-bold text-white">40nm - 5nm</div>
              <div className="text-xs text-violet-200 uppercase font-semibold mt-1">Node experience</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
