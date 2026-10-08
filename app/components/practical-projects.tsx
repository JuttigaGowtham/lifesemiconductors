"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const projectCategories = [
  {
    id: "analog",
    name: "Analog Design & Layout",
    badge: "7 Projects",
    description: "Hands-on implementation of precision analog building blocks with symmetrical matching, common centroid placement, and parasitic extraction.",
    projects: [
      { name: "Differential Pair", desc: "Design & layout with interdigitated common centroid matching and dummy finger insertion." },
      { name: "Current Mirror", desc: "Cascode current mirror with high output impedance and precise aspect ratio matching." },
      { name: "Operational Amplifier", desc: "Two-stage Miller OTA with frequency compensation capacitors and guard rings." },
      { name: "Bandgap Reference", desc: "Temperature-compensated voltage reference circuit layout with diode matching." },
      { name: "Low-Dropout Regulator", desc: "Power MOS sizing, pass device layout, and transient response optimization." },
      { name: "Phase Locked Loop", desc: "VCO, phase detector, charge pump layout with strict substrate noise shielding." },
      { name: "ADC / DAC Circuits", desc: "Binary-weighted and R-2R ladder layouts with tight matching tolerances." }
    ]
  },
  {
    id: "memory",
    name: "Memory Design & Layout",
    badge: "7 Projects",
    description: "Deep dive into memory compiler architecture, compact bit cell pitch matching, and high-speed differential read/write peripherals.",
    projects: [
      { name: "6T SRAM Bitcell", desc: "Minimum-pitch symmetrical 6T bitcell layout adhering to strict design rules (DRC/DFM)." },
      { name: "8T SRAM Dual-Port", desc: "Isolated read port layout for low-voltage operation and high SNM stability." },
      { name: "Sense Amplifier", desc: "Differential voltage amplifier with cross-coupled inverter symmetry." },
      { name: "Precharge Circuit", desc: "High-speed bitline precharge and equalization layout with PMOS clamps." },
      { name: "Write Driver Circuit", desc: "High-drive pull-down circuitry for reliable write margin closure." },
      { name: "Wordline Drivers", desc: "Row decoder tree and buffered wordline drivers with RC delay optimization." },
      { name: "Peripheral Circuits", desc: "Column multiplexers, control logic, and power gating ring integration." }
    ]
  },
  {
    id: "physical-design",
    name: "Digital Physical Design",
    badge: "7 Projects",
    description: "Complete RTL-to-GDSII tapeout flow for high-performance digital ASIC blocks using automated EDA implementation flows.",
    projects: [
      { name: "Floorplanning & Grid", desc: "Die size budgeting, IO pad rings, and low-IR-drop mesh power grid design." },
      { name: "Placement & Optimization", desc: "Congestion-aware standard cell placement with timing-driven optimization." },
      { name: "Clock Tree Synthesis", desc: "Balanced clock tree construction, skew minimization, and buffer insertion." },
      { name: "Detailed Routing (P&R)", desc: "Track assignment, crosstalk reduction, and antenna violation fixing." },
      { name: "Timing Analysis (STA)", desc: "Setup & hold closure across multiple PVT corners with OCV derating." },
      { name: "Physical Verification", desc: "Full-chip DRC, LVS connectivity matching, and soft-check signoff." },
      { name: "Signoff & DFM", desc: "Metal density filling, antenna diode insertion, and final tapeout GDSII export." }
    ]
  }
];

export default function PracticalProjects() {
  const [activeTab, setActiveTab] = useState("analog");
  const currentCategory = projectCategories.find((c) => c.id === activeTab) || projectCategories[0];

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 bg-black text-white overflow-hidden selection:bg-white selection:text-black border-t border-neutral-900">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Header Section */}
        <div className="mb-14 sm:mb-20">

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.05]">
            Learn by Building
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-3xl mt-4 font-normal leading-relaxed">
            At LIFE, practical learning is an essential part of the curriculum. Learners work on tapeout-grade design and layout projects aligned with industry EDA flows.
          </p>
        </div>

        {/* Track Category Selector Tabs (Monochrome) */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-neutral-900">
          {projectCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  isActive ? "bg-black text-white" : "bg-neutral-800 text-neutral-400"
                }`}>
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Domain Description Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl leading-relaxed">
            {currentCategory.description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider font-semibold text-white hover:text-black hover:bg-white px-5 py-2.5 rounded-full border border-neutral-800 bg-neutral-950 whitespace-nowrap shrink-0 transition-all duration-300"
          >
            Enquire for this track →
          </a>
        </div>

        {/* 4-Column Grid with Monochrome Fluid Wave Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800/80 border border-neutral-800/80 overflow-hidden shadow-2xl">
          {currentCategory.projects.map((proj, idx) => (
            <div
              key={proj.name}
              className="group relative bg-[#0D0E12] hover:bg-[#12131A] min-h-[360px] sm:min-h-[400px] p-7 sm:p-8 flex flex-col justify-between cursor-pointer overflow-hidden transition-colors duration-500"
            >
              {/* Monochrome Wave Animation Layer on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                {/* Fluid Wave SVG 1 */}
                <div className="absolute -bottom-8 -left-20 -right-20 h-48 opacity-15 text-white transition-transform duration-1000 group-hover:translate-y-[-18px]">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full fill-current">
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
                  </svg>
                </div>

                {/* Fluid Wave SVG 2 */}
                <div className="absolute -bottom-12 -left-10 -right-10 h-52 opacity-10 text-neutral-300 transition-transform duration-700 group-hover:translate-y-[-28px]">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full fill-current">
                    <path d="M0.00,49.98 C200.00,120.00 320.00,10.00 500.00,60.00 L500.00,150.00 L0.00,150.00 Z" />
                  </svg>
                </div>

                {/* Ambient Silver / White radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/10 via-neutral-900/40 to-transparent" />
              </div>

              {/* Card Index Number at Top */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="text-xs font-mono font-semibold text-neutral-500 group-hover:text-white transition-colors duration-300">
                  0{idx + 1}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-white transition-colors duration-300" />
              </div>

              {/* Card Content at Bottom */}
              <div className="relative z-10 pt-16">
                {/* Arrow + Title */}
                <div className="flex items-start gap-2.5 mb-3">
                  <FiArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 shrink-0 mt-0.5" />
                  <h3 className="text-lg sm:text-xl font-medium text-white leading-snug tracking-tight">
                    {proj.name}
                  </h3>
                </div>

                {/* Description in About font style */}
                <p className="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-200 font-normal leading-relaxed transition-colors duration-300 pl-7.5">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
