"use client";

import { FiCheck } from "react-icons/fi";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 bg-[#F8FAFC] circuit-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-6">
            Empowering the Next Generation of Semiconductor Professionals
          </h2>
          
          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p className="text-lg sm:text-xl text-[#0A192F] font-semibold">
              LIFE Semiconductor Institute is a specialized training institute dedicated to semiconductor and VLSI education.
            </p>
            <p>
              We provide practical and industry-focused training for students, fresh graduates, and working professionals who want to build their careers in the semiconductor industry.
            </p>
            <p>
              Our approach combines strong fundamentals, practical implementation, industry methodologies, hands-on projects, and career preparation.
            </p>
          </div>
        </div>

        {/* Premium Highlighted Philosophy Box */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white border-2 border-blue-200/90 text-[#0A192F] shadow-lg shadow-blue-900/5 mb-10 overflow-hidden">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#1D4ED8] uppercase block mb-2">
              Our Core Philosophy
            </span>
            <p className="text-base sm:text-xl font-bold leading-relaxed text-[#0A192F]">
              &ldquo;We believe effective VLSI training should go beyond classroom theory. Learners should understand the concepts, practice them, apply them to real design problems, and develop the confidence to use their knowledge in professional environments.&rdquo;
            </p>
          </div>
        </div>
        {/* 2 Cards Down to Content (Mission & Vision without icons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 hover:border-[#1D4ED8] text-[#0A192F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden flex flex-col justify-between">
            {/* Top Accent Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1D4ED8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  OUR PURPOSE
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  01
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-4 group-hover:text-[#1D4ED8] transition-colors">
                Our Mission
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To provide practical, structured, and industry-oriented semiconductor training that helps learners build strong technical foundations and become career-ready VLSI professionals.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-semibold group-hover:text-[#1D4ED8] transition-colors">
              <span>Career-Ready Focus</span>
              <span>→</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 hover:border-[#1D4ED8] text-[#0A192F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden flex flex-col justify-between">
            {/* Top Accent Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1D4ED8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  OUR ASPIRATION
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] mb-4 group-hover:text-[#1D4ED8] transition-colors">
                Our Vision
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To become a trusted learning platform for semiconductor and VLSI education by developing skilled professionals who are prepared for the evolving semiconductor industry.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-semibold group-hover:text-[#1D4ED8] transition-colors">
              <span>Industry Excellence</span>
              <span>→</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
