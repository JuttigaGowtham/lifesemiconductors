"use client";

import { FiArrowUpRight } from "react-icons/fi";

const testimonials = [
  {
    quote: "The hands-on approach to analog layout and matching techniques gave me the practical confidence I needed. The DRC/LVS debugging sessions were directly relevant to industry teams.",
    author: "Rohit Kumar",
    role: "Analog Layout Track",
    avatarBg: "bg-rose-500",
    initials: "RK",
    cardBg: "bg-[#FFEFE8]",
    cardBorder: "border-[#FECDD3]",
    textColor: "text-[#881337]",
    quoteColor: "text-rose-400"
  },
  {
    quote: "I learned not just how to draw layouts, but why specific placement and routing strategies matter for parasitic extraction, noise reduction, and signal integrity.",
    author: "Sneha Patel",
    role: "VLSI Graduate",
    avatarBg: "bg-amber-500",
    initials: "SP",
    cardBg: "bg-[#FEF9C3]",
    cardBorder: "border-[#FDE047]",
    textColor: "text-[#713F12]",
    quoteColor: "text-amber-400"
  },
  {
    quote: "Learning the Cadence Virtuoso flow and Calibre DRC/LVS debugging on real designs gave me the exact hands-on edge needed for semiconductor recruitment.",
    author: "Harish Varma",
    role: "Physical Design & Layout",
    avatarBg: "bg-indigo-600",
    initials: "HV",
    cardBg: "bg-[#E0E7FF]",
    cardBorder: "border-[#C7D2FE]",
    textColor: "text-[#1E1B4B]",
    quoteColor: "text-indigo-400"
  },
  {
    quote: "Building a 6T SRAM cell from scratch and completing DRC/LVS signoff gave me end-to-end practical clarity that textbooks never provided. Highly recommended!",
    author: "Ananya Reddy",
    role: "Memory & Custom IC",
    avatarBg: "bg-orange-500",
    initials: "AR",
    cardBg: "bg-[#FFEDD5]",
    cardBorder: "border-[#FED7AA]",
    textColor: "text-[#7C2D12]",
    quoteColor: "text-orange-400"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 bg-white text-black border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-black leading-none mb-4">
              Learners Who Got Confident
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Practical learning creates confidence, and confidence gets results. Here&apos;s what learners shared after building their semiconductor fundamentals with LIFE.
            </p>
          </div>

          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-7 py-3 rounded-xl font-bold text-sm text-black hover:text-white bg-white border-2 border-black/80 hover:border-[#1D4ED8] shadow-sm overflow-hidden group active:scale-[0.98] transition-colors duration-300 shrink-0 self-start md:self-auto"
          >
            <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
            <span className="relative z-10 flex items-center gap-2">
              <span>More praise</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
          </a>
        </div>

        {/* Uniform Straight Equal-Height Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className={`h-full p-7 sm:p-8 rounded-3xl ${item.cardBg} border ${item.cardBorder} shadow-sm hover:shadow-xl hover:shadow-slate-900/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5`}
            >
              {/* Quote Mark and Text */}
              <div className="flex-1 flex flex-col mb-8">
                <span className={`text-4xl font-serif font-black ${item.quoteColor} leading-none block mb-3 select-none opacity-75`}>
                  “
                </span>
                
                <p className="text-black text-sm sm:text-[15px] font-medium leading-relaxed flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer with Avatar Badge */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-black/10 mt-auto">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-inner shrink-0`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-black leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-[11px] font-semibold text-slate-700 mt-0.5 uppercase tracking-wider">
                    {item.role}
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

