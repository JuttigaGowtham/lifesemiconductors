"use client";

import { useState } from "react";

const projectCategories = [
  {
    id: "analog",
    name: "Analog Design & Layout",
    badge: "7 Projects",
    description: "Hands-on implementation of precision analog building blocks with symmetrical matching, common centroid placement, and parasitic extraction.",
    projects: [
      { name: "Differential Pair", desc: "Design & layout with interdigitated common centroid matching and dummy finger insertion." },
      { name: "Current Mirror", desc: "Cascode current mirror with high output impedance and precise aspect ratio matching." },
      { name: "Operational Amplifier (Op-Amp)", desc: "Two-stage Miller OTA with frequency compensation capacitors and guard rings." },
      { name: "Bandgap Reference (BGR)", desc: "Temperature-compensated voltage reference circuit layout with diode matching." },
      { name: "Low-Dropout Regulator (LDO)", desc: "Power MOS sizing, pass device layout, and transient response optimization." },
      { name: "Phase Locked Loop (PLL)", desc: "VCO, phase detector, charge pump layout with strict substrate noise shielding." },
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
      { name: "8T SRAM Dual-Port Cell", desc: "Isolated read port layout for low-voltage operation and high SNM stability." },
      { name: "Latch-Type Sense Amplifier", desc: "Differential voltage amplifier with cross-coupled inverter symmetry." },
      { name: "Precharge Circuit", desc: "High-speed bitline precharge and equalization layout with PMOS clamps." },
      { name: "Write Driver Circuit", desc: "High-drive pull-down circuitry for reliable write margin closure." },
      { name: "Wordline Driver & Decoder", desc: "Row decoder tree and buffered wordline drivers with RC delay optimization." },
      { name: "Memory Peripheral Circuits", desc: "Column multiplexers, control logic, and power gating ring integration." }
    ]
  },
  {
    id: "physical-design",
    name: "Digital Physical Design",
    badge: "7 Projects",
    description: "Complete RTL-to-GDSII tapeout flow for high-performance digital ASIC blocks using automated EDA implementation flows.",
    projects: [
      { name: "Floorplanning & Power Grid", desc: "Die size budgeting, IO pad rings, and low-IR-drop mesh power grid design." },
      { name: "Cell Placement & Optimization", desc: "Congestion-aware standard cell placement with timing-driven optimization." },
      { name: "Clock Tree Synthesis (CTS)", desc: "Balanced clock tree construction, skew minimization, and buffer insertion." },
      { name: "Detailed Routing (P&R)", desc: "Track assignment, crosstalk reduction, and antenna violation fixing." },
      { name: "Static Timing Analysis (STA)", desc: "Setup & hold closure across multiple PVT corners with OCV derating." },
      { name: "Physical Verification (DRC/LVS)", desc: "Full-chip DRC, LVS connectivity matching, and soft-check signoff." },
      { name: "Signoff Concepts & DFM", desc: "Metal density filling, antenna diode insertion, and final tapeout GDSII export." }
    ]
  }
];

export default function PracticalProjects() {
  const [activeTab, setActiveTab] = useState("analog");
  const currentCategory = projectCategories.find((c) => c.id === activeTab) || projectCategories[0];

  return (
    <section id="projects" className="relative w-full py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-4">
            Learn by Building
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At LIFE, practical learning is an essential part of the curriculum. Learners work on tapeout-grade design and layout projects aligned with industry EDA flows.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-slate-100">
          {projectCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0A192F] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-[#0A192F]"
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  isActive ? "bg-[#1D4ED8] text-white" : "bg-white text-slate-500"
                }`}>
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Domain Description Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            {currentCategory.description}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-xs font-bold text-[#0A192F] hover:text-[#1D4ED8] px-4 py-2 rounded-lg border border-slate-200 hover:border-blue-300 bg-white whitespace-nowrap shrink-0 transition-colors"
          >
            Enquire for this track
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentCategory.projects.map((proj, idx) => (
            <div
              key={proj.name}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1D4ED8] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-mono font-bold text-slate-400 mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#0A192F] mb-2 leading-snug">
                  {proj.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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

