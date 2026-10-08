"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPlus, FiChevronRight, FiSearch, FiX } from "react-icons/fi";

interface ModuleSection {
  subtitle?: string;
  badge?: string;
  topics: string[];
}

interface ModuleItem {
  id: string;
  name: string;
  title: string;
  summary: string;
  hasAssignment?: boolean;
  sections: ModuleSection[];
}

const modules: ModuleItem[] = [
  {
    id: "module-1",
    name: "Module 1",
    title: "Semiconductor Fundamentals & Device Physics",
    summary: "Master semiconductor physics from valency band theory to diode, BJT, and deep-dive MOSFET current equations.",
    sections: [
      {
        subtitle: "Materials & Conduction Principles",
        topics: [
          "Insulator, Conductor & Semiconductor (Valency Band Theory)",
          "Why Semiconductor? Core Advantages in Modern Electronics",
          "Types of Semiconductors (Intrinsic & Extrinsic)",
          "Carrier Dynamics (Electron & Hole Acceleration in Crystal Lattice View)",
          "Conductivity & Resistivity Fundamentals",
          "Drift Current vs Diffusion Current Mechanism",
        ],
      },
      {
        subtitle: "Junctions & Active Transistors",
        topics: [
          "PN Junction Diode: Working Principle & IV Characteristics",
          "Bipolar Junction Transistor (BJT): Physics, Working & IV Curves",
          "Field Effect Transistors (FET): Architecture & Types",
          "Why MOSFET is Chosen over all other transistor types",
          "MOSFET Fundamentals: Operation Regions, IV Characteristics & Current Equations",
        ],
      },
    ],
  },
  {
    id: "module-2",
    name: "Module 2",
    title: "Fabrication in Detail & Process Technologies",
    summary: "Explore step-by-step silicon wafer fabrication and modern advanced process technologies like FDSOI and STI.",
    sections: [
      {
        subtitle: "Silicon Fabrication Process Flow",
        topics: [
          "Complete Silicon Fabrication Step-by-Step Explanation",
          "Wafer Preparation, Oxidation & Photolithography",
          "Ion Implantation, Diffusion & Thin Film Deposition",
          "Etching, Metallization & Planarization (CMP)",
        ],
      },
      {
        subtitle: "Advanced Process Variations",
        topics: [
          "FDSOI (Fully Depleted Silicon-On-Insulator) Technology",
          "STI (Shallow Trench Isolation) Process & Well Engineering",
          "FinFET vs Planar CMOS Technology Comparison",
        ],
      },
    ],
  },
  {
    id: "module-3",
    name: "Module 3",
    title: "LINUX & Shell Scripting",
    summary: "Industry-standard Linux terminal proficiency and shell scripting for automating EDA workflows.",
    sections: [
      {
        subtitle: "Linux OS for VLSI Engineers",
        topics: [
          "Linux Operating System Architecture & Directory Structure",
          "Essential File System & Process Management Commands",
          "File Permissions, Ownership & Environment Variable Setup",
          "EDA Tool Launching & Environment Configuration",
        ],
      },
      {
        subtitle: "Shell Scripting & Flow Automation",
        topics: [
          "Shell Scripting Fundamentals (Bash/Csh)",
          "Variables, Loops, Conditional Constructs & Regular Expressions",
          "Automating Batch Simulations & Log File Parsing (Grep/Sed/Awk)",
        ],
      },
    ],
  },
  {
    id: "module-4",
    name: "Module 4",
    title: "CMOS Inverter & Circuit Analysis",
    summary: "Deep-dive analysis into the core building block of integrated circuits: DC & AC characteristics.",
    sections: [
      {
        subtitle: "CMOS Technology & Fundamentals",
        topics: [
          "What is CMOS? Complementary Logic Principles",
          "What is a CMOS Inverter? Structure & Working Mechanism",
        ],
      },
      {
        subtitle: "Inverter DC & AC Analysis",
        topics: [
          "DC Analysis: Voltage Transfer Characteristics (VTC) & Switching Threshold (Vm)",
          "Noise Margins (NML, NMH) & Sizing (W/L Ratio Optimization)",
          "AC Analysis: Transient Response, Rise Time, Fall Time & Propagation Delays",
          "Dynamic & Static Power Dissipation Analysis",
        ],
      },
    ],
  },
  {
    id: "module-5",
    name: "Module 5",
    title: "Layout Detail Introduction (Level 1)",
    summary: "From schematic logic to physical silicon mask layout using stick diagrams, Euler graphs, and logic gates.",
    sections: [
      {
        subtitle: "Layout Fundamentals & EDA Tools",
        topics: [
          "Layout Basics & Exploration of Industry EDA Layout Editors",
          "Layer Palette, DRC Rules, Layer Connectivity & Technology Files",
          "Boolean Expression to Schematic & Vice-Versa",
          "Stick Diagram Principles & Euler Graph Method for Optimal Sizing/Diffusions",
        ],
      },
      {
        subtitle: "Standard Logic Cell Physical Implementation",
        topics: [
          "Inverter (NOT Gate) Silicon Layout",
          "NAND & NOR Gate Physical Layout",
          "AND & OR Gate Physical Layout",
          "XOR & XNOR Complex Gate Layout",
          "Multiplexer (MUX) Cell Layout & Routing",
        ],
      },
    ],
  },
  {
    id: "module-6",
    name: "Module 6",
    title: "Analog Layout Theoretical Concepts (Level 2)",
    summary: "Advanced analog layout techniques: matching, shielding, guard rings, parasitics, and layout-dependent effects (LDE).",
    hasAssignment: true,
    sections: [
      {
        subtitle: "Analog Core Circuits & Operating Principles",
        topics: [
          "Working Principle of Current Mirrors & Cascode Architectures",
          "Working Principle & Topologies of Differential Pairs",
        ],
      },
      {
        subtitle: "Advanced Analog Layout Concepts & Silicon Reliability",
        topics: [
          "Matching Techniques: Interdigitation, Common Centroid & Dummy Devices",
          "Shielding Techniques for Sensitive Analog Nets (Differential Routing)",
          "Guarding & Guard Rings for Substrate Noise Isolation",
          "Latchup Prevention Mechanisms & Well Tap Placement Guidelines",
          "Electromigration (EM) Rules & IR Drop Analysis",
          "Parasitic Extraction (PEX) & Parasitics Calculation (R, C, CC)",
          "Layout Dependent Effects (LDE): Well Proximity Effect (WPE), STI Stress Effect (PSE), Length of Diffusion (LOD)",
        ],
      },
    ],
  },
  {
    id: "module-7",
    name: "Module 7",
    title: "Analog Layout Tapeout Projects",
    summary: "Hands-on implementation of 5 industry-grade silicon tapeout projects with complete DRC, LVS & PEX signoff.",
    sections: [
      {
        subtitle: "5 Industry-Standard Design Projects",
        topics: [
          "Project 1: Operational Amplifier (Op-Amp) or Error Amplifier Layout",
          "Project 2: Bandgap Reference (BGR) Circuit Layout with Temperature Compensation",
          "Project 3: Low-Dropout Voltage Regulator (LDO) Layout with Power Transistor Array",
          "Project 4: Voltage Controlled Oscillator (VCO) Layout with Symmetry & Phase Noise Isolation",
          "Project 5: Current-Steering DAC (CS DAC) or 3-Bit Flash ADC Layout",
        ],
      },
      {
        subtitle: "Verification & Signoff Milestone",
        topics: [
          "Full-Chip Design Rule Checking (DRC) Signoff",
          "Layout Versus Schematic (LVS) Clean Verification",
          "Parasitic Extraction (PEX) & Post-Layout Simulation Comparison",
          "Tapeout Review & Silicon Reliability Signoff",
        ],
      },
    ],
  },
];

const tapeoutProjects = [
  {
    num: "01",
    name: "Operational Amplifier (Op-Amp)",
    desc: "Precision two-stage CMOS Op-Amp layout focusing on input differential pair matching, common-centroid capacitors, and low offset.",
  },
  {
    num: "02",
    name: "Bandgap Reference (BGR)",
    desc: "Curvature-compensated voltage reference circuit with cross-quad BJT matching and thermal gradient cancellation.",
  },
  {
    num: "03",
    name: "Low-Dropout Regulator (LDO)",
    desc: "Power transistor array layout with wide power metal routing, electro-migration rule signoff, and low-IR ground mesh.",
  },
  {
    num: "04",
    name: "Voltage Controlled Oscillator (VCO)",
    desc: "LC-tank/ring VCO layout with symmetry planes, differential net shielding, and strict substrate noise isolation.",
  },
  {
    num: "05",
    name: "Current-Steering DAC / ADC",
    desc: "Binary-weighted & unary current cell array layout with matched current sources, dummy rings, and minimal DNL/INL error.",
  },
];

export default function AnalogLayoutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState(0);

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
            <span className="text-neutral-900 font-semibold">Analog Layout</span>
          </nav>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]">
                Analog Layout
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                From semiconductor physics to 5 complete tapeout projects — master device matching, LDE mitigation, guard rings, and DRC/LVS signoff.
              </p>
            </div>
          </div>

          {/* 4 Feature Badges Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-neutral-100">
            {[
              { label: "Program Scope", value: "7 Deep-Dive Modules" },
              { label: "Hands-on Practice", value: "Assignments Each Concept" },
              { label: "Tapeout Projects", value: "5 Silicon Lab Projects" },
              { label: "Verification Signoff", value: "DRC, LVS & PEX Clean" },
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

      {/* Interactive 5-Project Tapeout Showcase Bar */}
      <section className="relative w-full py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
                5 Practical Tapeout Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 font-mono">
              Click each project to inspect analog layout architecture
            </p>
          </div>

          {/* Project Tabs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {tapeoutProjects.map((proj, idx) => {
              const isSelected = activeProject === idx;
              return (
                <button
                  key={proj.num}
                  onClick={() => setActiveProject(idx)}
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
                      PROJECT {proj.num}
                    </span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isSelected ? "bg-white" : "bg-neutral-300"
                      }`}
                    />
                  </div>
                  <div className="text-lg font-medium tracking-tight leading-snug">
                    {proj.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Project Details Panel */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Project {tapeoutProjects[activeProject].num}
                </span>
                <span className="text-white">•</span>
                <span className="text-sm font-semibold text-white">
                  {tapeoutProjects[activeProject].name}
                </span>
              </div>
              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                {tapeoutProjects[activeProject].desc}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm text-black bg-white hover:bg-neutral-100 transition-all shrink-0 self-start md:self-auto shadow-sm"
            >
              <span>Explore in EDA Lab</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Main 7-Module Curriculum Breakdown */}
      <section className="relative w-full py-20 sm:py-28 lg:py-32">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-2">
                Curriculum Breakdown
              </h2>
              <p className="text-base text-neutral-600 font-normal">
                7 comprehensive modules taking you from semiconductor physics to silicon tapeout projects.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search topics (e.g. Matching, Guard rings, DRC)..."
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
                          <div className="flex flex-wrap items-center gap-2.5 mb-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 group-hover:text-black leading-snug">
                              {mod.title}
                            </h3>
                            {mod.hasAssignment && (
                              <span className="text-[10px] uppercase font-mono font-semibold tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                                Includes Assignments
                              </span>
                            )}
                          </div>
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
