import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function LearningPaths() {
  return (
    <section id="learning-paths" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAFAFC] text-neutral-900 border-b border-neutral-200 overflow-hidden selection:bg-black selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]">
              Learning Paths
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Choose the journey tailored to your career stage — from zero-cost semiconductor fundamentals to full-scale industry EDA tool mastery.
            </p>
          </div>
        </div>

        {/* 3-Column Bento Grid matching Reference Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* CARD 1 (LEFT): SkillUp Scholars (Free Learning Path - White Background / Black Text) */}
          <div className="lg:col-span-4 bg-white border border-black rounded-3xl p-8 sm:p-10 flex flex-col justify-end transition-all duration-300 shadow-xs hover:shadow-xl group min-h-[380px] sm:min-h-[460px]">
            <div className="mt-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-tight text-neutral-900 mb-4 group-hover:text-black transition-colors leading-snug">
                "SkillUp Scholars — Free Learning Path"
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                Build semiconductor fundamentals and explore VLSI concepts.
              </p>
            </div>
          </div>

          {/* CARD 2 (MIDDLE): SkillUp Premier (Professional Learning Path - Black Background / White Text) */}
          <div className="lg:col-span-4 bg-black text-white border border-white rounded-3xl p-8 sm:p-10 flex flex-col justify-end hover:border-neutral-700 transition-all duration-300 shadow-xl hover:shadow-2xl group min-h-[380px] sm:min-h-[460px]">
            <div className="mt-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-tight text-white mb-4 group-hover:text-neutral-100 transition-colors leading-snug">
                "SkillUp Premier — Professional Learning Path"
              </h3>

              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Structured learning with EDA tools, hands-on assignments, memory layout projects and interview preparation.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE STACKED CARDS (Matching Reference Layout) */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between min-h-[380px] sm:min-h-[460px]">
            
            {/* Top Stat Card */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 hover:border-black transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-center flex-1">
              <div className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 mb-2">
                100% Practical
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Hands-on semiconductor implementation and silicon-level design methodologies.
              </p>
            </div>

            {/* Middle Stat Card */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 hover:border-black transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-center flex-1">
              <div className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 mb-2">
                Industry EDA Tools
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Experience industry-standard EDA tools, DRC/LVS physical verification, and custom layouts.
              </p>
            </div>

            {/* Bottom Dark CTA Card */}
            <a
              href="#contact"
              className="group relative bg-black text-white border border-neutral-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-center justify-between hover:bg-neutral-900 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <span className="text-base sm:text-lg font-medium text-white group-hover:text-neutral-100">
                Explore Learning Paths
              </span>

              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover:bg-neutral-100 transition-all group-hover:scale-105 shadow-sm">
                <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
