"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPlus, FiChevronRight, FiSearch, FiX } from "react-icons/fi";

interface ModuleSection {
  subtitle?: string;
  topics: string[];
}

interface ModuleItem {
  id: string;
  name: string;
  title: string;
  summary: string;
  sections: ModuleSection[];
}

const modules: ModuleItem[] = [
  {
    id: "module-1",
    name: "Module 1",
    title: "Device Physics & CMOS Principles",
    summary: "Solidify silicon foundations, MOS operation regions, and inverter characteristics.",
    sections: [
      {
        subtitle: "Semiconductor Fundamentals",
        topics: [
          "Semiconductor basics & energy band theory",
          "PN junction diode mechanics & capacitance",
          "MOSFET architecture & charge distribution",
          "NMOS and PMOS device operation",
          "MOSFET operating regions (Cutoff, Linear, Saturation)",
          "Threshold voltage (Vt) & body effect mechanics",
          "Subthreshold conduction & leakage currents",
          "CMOS technology scaling & short-channel effects",
        ],
      },
      {
        subtitle: "CMOS Inverter & Logic Gates",
        topics: [
          "CMOS inverter DC transfer characteristics (VTC)",
          "Noise margins (NMH, NML) calculation",
          "Dynamic, short-circuit, and leakage power consumption",
          "Propagation delay (tpLH, tpHL) & RC delay models",
          "CMOS complementary logic implementation",
          "Complex combinational gates & Euler paths",
        ],
      },
    ],
  },
  {
    id: "module-2",
    name: "Module 2",
    title: "Digital Logic & Sequential Circuits",
    summary: "Master Boolean algebra, synchronous state machines, and timing constraints.",
    sections: [
      {
        subtitle: "Digital Logic & Timing Primitives",
        topics: [
          "Boolean algebra & logic minimization",
          "Standard combinational building blocks (MUX, Decoders)",
          "Sequential circuits: Latches vs Edge-triggered Flip-Flops",
          "Setup time, hold time, and clock-to-Q delay definitions",
          "Metastability resolution & synchronizers",
          "Finite State Machine (FSM) Mealy & Moore architectures",
          "Pipelining concepts and throughput optimization",
        ],
      },
    ],
  },
  {
    id: "module-3",
    name: "Module 3",
    title: "Linux Environment & TCL Automation",
    summary: "Industry-standard EDA scripting, automation, and Linux toolchains.",
    sections: [
      {
        subtitle: "Linux & TCL Scripting Flow",
        topics: [
          "Linux file systems, permissions & SSH workflows",
          "Process management and EDA batch execution",
          "Bash shell scripting & regex text processing (grep, sed, awk)",
          "TCL scripting syntax, lists, arrays & associative arrays",
          "Control structures, procedures, and custom EDA commands",
          "Automating Netlist inspection & constraint generation",
        ],
      },
    ],
  },
  {
    id: "module-4",
    name: "Module 4",
    title: "Static Timing Analysis (STA)",
    summary: "Deep dive into setup/hold closures, clock skew, jitter, and PVT corners.",
    sections: [
      {
        subtitle: "STA Principles & Timing Closure",
        topics: [
          "Timing paths: Reg-to-Reg, In-to-Reg, Reg-to-Out, In-to-Out",
          "Setup and hold timing equations with skew & jitter",
          "Clock latency, insertion delay, and duty-cycle distortion",
          "PVT corners (Process, Voltage, Temperature) & OCV/AOCV",
          "Multi-cycle paths, false paths, and case analysis",
          "Debugging and fixing setup violations vs hold violations",
          "SDC (Synopsys Design Constraints) syntax and verification",
        ],
      },
    ],
  },
  {
    id: "module-5",
    name: "Module 5",
    title: "Physical Design (RTL to GDSII ASIC Flow)",
    summary: "Complete hands-on implementation from synthesized netlist to signoff tapeout.",
    sections: [
      {
        subtitle: "ASIC Back-End Implementation Flow",
        topics: [
          "Synthesis netlist validation & Library files (.lib, .lef, .def)",
          "Floorplanning: Die size estimation, aspect ratio & core utilization",
          "Pin placement, I/O pads, and macro placement guidelines",
          "Power Planning: Power rings, power stripes, and mesh distribution",
          "Standard cell placement, congestion analysis & timing optimization",
          "Clock Tree Synthesis (CTS): H-tree, mesh, clock gating & skew balance",
          "Routing Flow: Global routing, track assignment, and detailed routing",
          "Signal Integrity (SI) crosstalk noise & glitch prevention",
          "Physical verification signoff: DRC, LVS, Antenna rules & ERC",
          "Parasitic Extraction (SPEF generation) & post-route signoff STA",
          "Final GDSII / OASIS stream export and tapeout review",
        ],
      },
    ],
  },
];

const flowSteps = [
  {
    step: "01",
    name: "Floorplanning",
    desc: "Define die area, core utilization, I/O pin assignments, and halo spacing around SRAM macros.",
  },
  {
    step: "02",
    name: "Power Planning",
    desc: "Design low-IR drop power rings, vertical/horizontal stripes, and standard cell power rails.",
  },
  {
    step: "03",
    name: "Placement",
    desc: "Position standard cells to minimize wirelength, prevent congestion, and optimize initial timing.",
  },
  {
    step: "04",
    name: "Clock Tree (CTS)",
    desc: "Synthesize balanced clock distribution trees with minimal skew, insertion delay, and power.",
  },
  {
    step: "05",
    name: "Routing & Signoff",
    desc: "Execute detailed routing, resolve DRC/LVS errors, extract parasitics, and sign off STA.",
  },
];

export default function PhysicalDesignPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredModules = modules.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchTitle = m.title.toLowerCase().includes(q) || m.summary.toLowerCase().includes(q);
    const matchTopic = m.sections.some((sec) =>
      sec.topics.some((t) => t.toLowerCase().includes(q)) || (sec.subtitle && sec.subtitle.toLowerCase().includes(q))
    );
    return matchTitle || matchTopic;
  });

  return (
    <main className="relative min-h-screen bg-[#FAFAFC] text-neutral-900 selection:bg-black selection:text-white font-medium overflow-hidden">
      
      {/* Top Header Section */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 border-b border-neutral-200 bg-white">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Top Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 mb-8 font-mono">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <FiChevronRight className="w-3.5 h-3.5 text-neutral-300" />
            <Link href="/#courses" className="hover:text-black transition-colors">
              Programs
            </Link>
            <FiChevronRight className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-neutral-900 font-semibold">Physical Design</span>
          </nav>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]">
                Physical Design
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                From RTL synthesis netlist to signoff GDSII — master floorplanning, CTS, routing, timing closure, and physical verification.
              </p>
            </div>
          </div>

          {/* 4 Feature Badges Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-neutral-100">
            {[
              { label: "Track Scope", value: "RTL to GDSII Flow" },
              { label: "Automation", value: "TCL & Scripting" },
              { label: "Core Focus", value: "CTS, STA & Routing" },
              { label: "Outcome", value: "ASIC Backend Engineer" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-neutral-50/90 border border-neutral-200 hover:border-black transition-all duration-300 shadow-xs"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
                  {stat.label}
                </span>
                <div className="text-lg sm:text-xl font-medium tracking-tight text-neutral-900">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive ASIC Implementation Flow Simulator Bar */}
      <section className="relative w-full py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
                Interactive Backend Flow
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 font-mono">
              Click each phase to inspect physical design execution
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {flowSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-6 rounded-3xl transition-all duration-300 border cursor-pointer flex flex-col justify-between min-h-[160px] ${
                    isSelected
                      ? "bg-black text-white border-black shadow-lg scale-[1.02]"
                      : "bg-[#FAFAFC] text-neutral-900 border-neutral-200 hover:border-black"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-xs font-mono font-semibold tracking-wider ${
                        isSelected ? "text-neutral-400" : "text-neutral-400"
                      }`}
                    >
                      STAGE {step.step}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isSelected ? "bg-white" : "bg-neutral-300"
                      }`}
                    />
                  </div>
                  <div className="text-lg font-medium tracking-tight leading-snug">
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Execution Phase {flowSteps[activeStep].step}
                </span>
                <span className="text-white">•</span>
                <span className="text-sm font-semibold text-white">
                  {flowSteps[activeStep].name}
                </span>
              </div>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                {flowSteps[activeStep].desc}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-black bg-white hover:bg-neutral-100 transition-all shrink-0 self-start md:self-auto shadow-sm"
            >
              <span>Learn this in Lab</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Main Curriculum Section */}
      <section className="relative w-full py-20 sm:py-28 lg:py-32">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-2">
                Curriculum Breakdown
              </h2>
              <p className="text-base text-neutral-600 font-normal">
                5 comprehensive modules covering fundamentals, timing, scripting, and full ASIC tapeout.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search topics (e.g. STA, CTS, TCL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full text-xs sm:text-sm bg-white border border-neutral-200 focus:outline-none focus:border-black text-neutral-900 placeholder-neutral-400 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black cursor-pointer"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Accordion List with Balanced Smooth Grid Animation */}
          <div className="space-y-4">
            {filteredModules.length > 0 ? (
              filteredModules.map((mod, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={mod.id}
                    className={`bg-white border rounded-3xl transition-all duration-300 shadow-xs overflow-hidden ${
                      isOpen ? "border-black shadow-md" : "border-neutral-200 hover:border-neutral-400"
                    }`}
                  >
                    {/* Clickable Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 sm:p-8 flex items-center justify-between text-left cursor-pointer select-none group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pr-4">
                        <span className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-400 group-hover:text-black transition-colors shrink-0">
                          {mod.name}
                        </span>
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 group-hover:text-black leading-snug">
                            {mod.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-500 font-normal mt-1 max-w-2xl">
                            {mod.summary}
                          </p>
                        </div>
                      </div>

                      {/* Expand Plus Toggle */}
                      <div
                        className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-black border-black text-white"
                            : "bg-neutral-50 border-neutral-200 text-neutral-700 group-hover:border-black group-hover:text-black"
                        }`}
                      >
                        <FiPlus
                          className={`w-5 h-5 transition-transform duration-300 ease-out ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expandable Module Content with Balanced Smooth Animation */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-neutral-100">
                          <div className="space-y-6 pt-4">
                            {mod.sections.map((sec, sIdx) => (
                              <div key={sIdx} className="space-y-3">
                                {sec.subtitle && (
                                  <h4 className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                                    <span>{sec.subtitle}</span>
                                  </h4>
                                )}

                                {/* Topics Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                  {sec.topics.map((topic, tIdx) => (
                                    <div
                                      key={tIdx}
                                      className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:bg-neutral-100 hover:border-black/30 transition-all text-xs sm:text-sm font-normal text-neutral-800 leading-relaxed"
                                    >
                                      {topic}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 bg-white border border-neutral-200 rounded-3xl p-8">
                <p className="text-base text-neutral-600 mb-4">
                  No modules found matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-black hover:bg-neutral-800 transition-all"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
