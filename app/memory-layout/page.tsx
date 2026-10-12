"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPlus, FiChevronRight, FiSearch, FiX } from "react-icons/fi";
import ProgramHighlights from "../components/program-highlights";

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
  sections: ModuleSection[];
}

const modules: ModuleItem[] = [
  {
    id: "module-1",
    name: "Module 1",
    title: "Semiconductor & Device Fundamentals",
    summary: "Establish strong foundations in solid-state physics, carrier transport mechanisms, PN junctions, MOSFET operation, and CMOS logic.",
    sections: [
      {
        subtitle: "Semiconductor Fundamentals",
        topics: [
          "Insulator, Conductor and Semiconductor",
          "Valence Band and Conduction Band",
          "Energy Band Theory",
          "Intrinsic and Extrinsic Semiconductors",
          "N-type and P-type Semiconductors",
          "Electrons and Holes Dynamics",
          "Carrier Concentration Analysis",
          "Conductivity and Resistivity Principles",
        ],
      },
      {
        subtitle: "Carrier Transport Mechanisms",
        topics: [
          "Electron and Hole Movement in Crystal Lattice",
          "Drift Current Mechanisms",
          "Diffusion Current Mechanisms",
          "Drift vs. Diffusion Comparison",
          "Carrier Mobility & Velocity Saturation",
          "Current Flow in Semiconductor Devices",
        ],
      },
      {
        subtitle: "PN Junction & Diode Physics",
        topics: [
          "PN Junction Formation",
          "Depletion Region Dynamics",
          "Built-in Potential Calculation",
          "Forward Bias Operation",
          "Reverse Bias Operation & Breakdown",
          "I-V Characteristics",
          "Junction Capacitance (Depletion & Diffusion)",
        ],
      },
      {
        subtitle: "MOSFET Device Operation",
        topics: [
          "NMOS and PMOS Architecture",
          "MOSFET Structure & Physical Cross-Section",
          "MOSFET Operation & Inversion Layer",
          "Operating Regions (Cutoff, Linear, Saturation)",
          "Threshold Voltage (Vth) Physics & Body Effect",
          "I-V Characteristics Curves",
          "MOSFET Current Equations (Square-Law & Velocity Saturation)",
        ],
      },
      {
        subtitle: "CMOS Inverter & Switching Characteristics",
        topics: [
          "CMOS Technology Fundamentals",
          "CMOS Inverter Structure & Switching Operation",
          "Voltage Transfer Characteristics (VTC)",
          "Noise Margin Analysis (NML, NMH)",
          "Static and Dynamic Power Consumption",
          "Propagation Delay (tpdr, tpdf, tpd)",
        ],
      },
    ],
  },
  {
    id: "module-2",
    name: "Module 2",
    title: "Semiconductor Fabrication & Memory Technology",
    summary: "Explore end-to-end silicon wafer manufacturing flows, CMOS fabrication steps, memory hierarchy, and SRAM bitcell operating ratios.",
    sections: [
      {
        subtitle: "IC Fabrication Process",
        topics: [
          "Silicon Wafer Preparation & Ingot Growth",
          "Thermal Oxidation & Oxide Growth",
          "Photolithography & Reticle Exposure",
          "Dry & Wet Etching Techniques",
          "Thin Film Deposition (PVD & CVD)",
          "Ion Implantation & Dopant Activation",
          "Thermal Diffusion & Annealing",
          "Chemical Mechanical Planarization (CMP)",
          "Metallization Processes",
          "Contacts and Vias Engineering",
          "Front-End of Line (FEOL) and Back-End of Line (BEOL)",
        ],
      },
      {
        subtitle: "CMOS Fabrication Sequence",
        topics: [
          "NMOS Fabrication Steps",
          "PMOS Fabrication Steps",
          "Twin-Well & Triple-Well Formation",
          "Source/Drain Formation & Halo Implants",
          "Gate Oxide & Poly/High-k Metal Gate Formation",
          "Interconnect & Dielectric Layer Stack Formation",
        ],
      },
      {
        subtitle: "Memory Technology Introduction",
        topics: [
          "What is Semiconductor Memory?",
          "Memory Hierarchy (Registers, Cache, Main Memory, Storage)",
          "Volatile vs. Non-Volatile Memory Comparison",
          "SRAM (Static Random Access Memory)",
          "DRAM (Dynamic Random Access Memory)",
          "ROM (Read-Only Memory)",
          "Memory Array Architecture Concept",
          "Bitcell Core Matrix Concept",
        ],
      },
      {
        subtitle: "SRAM Fundamentals & Stability",
        topics: [
          "6T SRAM Architecture",
          "8T SRAM Architecture",
          "10T / Advanced SRAM Concepts",
          "Read Operation Dynamics & Precharge Timing",
          "Write Operation Dynamics & Overwriting",
          "Hold / Standby Operation & Data Retention",
          "Read Stability & Static Noise Margin (SNM)",
          "Write Ability & Write Margin",
          "Cell Ratio (CR = W_PD / W_AX)",
          "Pull-Up Ratio (PR = W_PU / W_AX)",
        ],
      },
    ],
  },
  {
    id: "module-3",
    name: "Module 3",
    title: "Linux / UNIX & TC-SH Scripting",
    summary: "Master the standard VLSI engineering terminal environment, directory management, and TC-SH scripting for CAD tool flow automation.",
    sections: [
      {
        subtitle: "Linux / UNIX Fundamentals",
        topics: [
          "Linux Operating Environment Overview",
          "UNIX Command-Line Basics",
          "File System Hierarchy & Inodes",
          "Directory Structure Navigation",
          "File Permissions & Access Control (chmod, chown)",
          "Process Management & Job Scheduling (ps, top, kill, &)",
          "Environment Variables & Shell Initialization (.cshrc, .profile)",
          "Common VLSI Design Commands (grep, sed, awk, find, tar)",
        ],
      },
      {
        subtitle: "VLSI CAD Applications & Automation",
        topics: [
          "Managing VLSI Project Design Directories",
          "Searching Files & Netlists Across Complex Libraries",
          "Automated Log-File Parsing & Error Extraction",
          "Running Batch Layout Verification Commands",
          "Automating Repetitive EDA Tool Tasks",
          "Basic VLSI TC-SH Scripting Architecture",
        ],
      },
    ],
  },
  {
    id: "module-4",
    name: "Module 4",
    title: "Memory Circuit Fundamentals",
    summary: "Deep-dive into 6T and 8T SRAM circuits, peripheral control blocks, decoder architectures, precharge, and sense amplifiers.",
    sections: [
      {
        subtitle: "SRAM Bitcell (6T & 8T Architectures)",
        topics: [
          "6T SRAM Bitcell Architecture & Schematic",
          "Cross-Coupled Inverter Latch Dynamics",
          "Access Transistors Sizing & Switching",
          "Wordline (WL) Assertion & Driver Load",
          "Bitline (BL) and Bitline-Bar (BLB) Operation",
          "VDD and VSS Power Grid Connections",
          "Hold Operation & Leakage Analysis",
          "Read Operation & Read Disturbance Prevention",
          "Write Operation & Differential Pull-Down",
          "8T SRAM Architecture & Dual-Port Operation",
          "Separate Read Path (Read Buffer Transistors)",
          "Read Stability vs. 6T SRAM Comparison",
          "Write Path Sizing & Independent Optimization",
        ],
      },
      {
        subtitle: "Memory Peripheral Circuits",
        topics: [
          "Row Decoder Architecture & Pre-Decoder Stages",
          "Column Decoder & Bitline Selection",
          "Wordline Driver & Pulse Shaping",
          "Bitline Precharge & Equalization Circuits",
          "Write Driver & Write-Assist Circuits",
          "Sense Amplifier (Latch-Based & Current-Mode)",
          "Column Multiplexer (Col MUX) Architecture",
          "Input/Output (I/O) Buffer & Read/Write Control Circuitry",
        ],
      },
      {
        subtitle: "Memory Array Architecture & Parameters",
        topics: [
          "Bitcell Array Organization (Rows × Columns)",
          "Wordline & Bitline Distribution across Array",
          "Sense Circuitry Array Pitch Matching",
          "Sub-Array & Bank Organization",
          "Read Delay (Access Time) Optimization",
          "Write Delay & Setup/Hold Timing",
          "Standby & Active Leakage Power",
          "Dynamic Power Dissipation",
          "Bitcell Density & Silicon Area Optimization",
        ],
      },
    ],
  },
  {
    id: "module-5",
    name: "Module 5",
    title: "Memory Layout Fundamentals",
    summary: "Transition from circuit schematics to compact physical mask layouts: diffusion sharing, poly routing, and 6T/8T silicon layouts.",
    sections: [
      {
        subtitle: "Layout Fundamentals & Design Rules",
        topics: [
          "Schematic vs. Physical Silicon Layout",
          "Layout Database Formats (GDSII, OASIS, OpenAccess)",
          "Technology Layer Stack & Masks",
          "Active Diffusion (OD / RX) Layers",
          "Polysilicon (PO) Gate Layers",
          "Contact Layers (CO)",
          "Metal Interconnects (M1, M2, M3, M4)",
          "Via Connections (VIA1, VIA2, VIA3)",
          "N-Well & P-Substrate Taps",
          "Implant Layers (N+, P+, LDD, Vt Implants)",
          "Design Rule Manual (DRM) & DRC Rule Decks",
        ],
      },
      {
        subtitle: "SRAM Bitcell Layout Implementation",
        topics: [
          "6T SRAM Transistor Placement & Symmetry",
          "Pull-Up (PMOS) Device Placement in N-Well",
          "Pull-Down (NMOS) Device Placement in P-Substrate",
          "Access Transistor Alignment with Wordlines",
          "Shared Continuous Diffusion for Area Reduction",
          "Polysilicon Gate Cross-Coupled Routing",
          "Metal 1 & Metal 2 Power (VDD/VSS) Rails",
          "Wordline (WL) Horizontal Poly/Metal Routing",
          "Bitline (BL) and Bitline-Bar (BLB) Vertical Metal Routing",
          "8T SRAM Layout: Read Port Transistor Isolation",
          "Separate Read Bitline (RBL) & Read Wordline (RWL) Routing",
          "Power & Ground Routing in Dual-Port Bitcells",
        ],
      },
      {
        subtitle: "Layout Optimization & Density Principles",
        topics: [
          "Cell Area Reduction Techniques",
          "Ultra-Compact Bitcell Aspect Ratio Optimization",
          "Diffusion Sharing across Neighboring Devices",
          "Poly Gate Optimization & Minimum Pitch",
          "Pin Accessibility for Wordlines & Bitlines",
          "Parasitic Resistance & Capacitance Minimization",
          "Geometric Symmetry for Electrical Balance",
        ],
      },
    ],
  },
  {
    id: "module-6",
    name: "Module 6",
    title: "Advanced Memory Layout & Array Design",
    summary: "Master array abutment, cell mirroring, matching & symmetry, memory parasitics (EM/IR, crosstalk), FinFET layout, and LDE mitigation.",
    sections: [
      {
        subtitle: "Memory Array Layout & Abutment",
        topics: [
          "Bitcell Array Organization & Grid Matrix",
          "Row and Column Symmetrical Arrangement",
          "Cell Abutment across X and Y Boundaries",
          "Cell Mirroring (Horizontal & Vertical Flip for Well Sharing)",
          "Boundary Conditions & Edge Cell Taps",
          "Array Pitch Matching with Peripheral Circuitry",
          "Continuous Vertical Bitline Routing",
          "Horizontal Low-Resistance Wordline Strapping",
        ],
      },
      {
        subtitle: "Matching, Symmetry & Reliability",
        topics: [
          "Device Matching Principles in Memory Arrays",
          "Geometric & Thermal Symmetry",
          "Common-Centroid Placement Concepts",
          "Interdigitation in Sense Amplifiers",
          "Dummy Bitcells & Dummy Poly Structures",
          "Proximity Effect Mitigation at Array Edges",
        ],
      },
      {
        subtitle: "Memory-Specific Layout Challenges",
        topics: [
          "Bitline Parasitic Capacitance (Cbl) Minimization",
          "Wordline RC Delay & Resistance Optimization",
          "IR Drop on Internal VDD/VSS Power Rails",
          "Electromigration (EM) Current Density Limits",
          "Capacitive Crosstalk Between Adjacent Bitlines",
          "Sub-threshold & Gate Oxide Leakage Suppression",
          "Substrate Noise Coupling Isolation",
          "Array Density vs. Yield Trade-offs",
        ],
      },
      {
        subtitle: "Advanced Devices & Layout-Dependent Effects (LDE)",
        topics: [
          "Multi-Finger Device Folding Techniques",
          "FinFET Memory Layout Concepts (Quantized Widths)",
          "Advanced Node (Sub-28nm / 16nm / 7nm) Considerations",
          "Deep N-Well (DNW) Isolation Strategies",
          "Well Taps & Latch-Up Prevention Rules",
          "Well Proximity Effect (WPE) Impact on Vth",
          "Length of Diffusion (LOD) & Stress Effects",
          "Shallow Trench Isolation (STI) Stress on Drive Currents",
        ],
      },
    ],
  },
  {
    id: "module-7",
    name: "Module 7",
    title: "Memory Layout Real-Time Projects",
    summary: "Hands-on tapeout-oriented projects covering 6T bitcells, 8T bitcells, scalable SRAM arrays, peripheral blocks, and top-level memory macro signoff.",
    sections: [
      {
        subtitle: "Project 1 — 6T SRAM Bitcell Layout",
        topics: [
          "Schematic Understanding & Transistor Ratio Sizing (PU, PD, AX)",
          "Device Identification & Transistor Type Mapping",
          "Floorplanning & Aspect Ratio Optimization",
          "Device Placement with Twin-Well Boundary Sharing",
          "Diffusion Sharing & Active Area Optimization",
          "Polysilicon Gate Routing & Cross-Coupling",
          "Metal 1 / Metal 2 Power & Signal Interconnects",
          "DRC (Design Rule Check) Signoff Clean",
          "LVS (Layout Versus Schematic) Verification Clean",
        ],
      },
      {
        subtitle: "Project 2 — 8T SRAM Bitcell Layout",
        topics: [
          "Read and Write Path Circuit Analysis",
          "Dedicated Read Buffer Transistor Placement",
          "Read Isolation & Disturb-Free Read Verification",
          "Read Wordline (RWL) and Write Wordline (WWL) Routing",
          "Read Bitline (RBL) and Write Bitline (WBL) Routing",
          "Internal Power & Ground Rail Routing",
          "Area Optimization & Pin Accessibility",
          "Full DRC and LVS Clean Verification",
        ],
      },
      {
        subtitle: "Project 3 — SRAM Bitcell Array Layout",
        topics: [
          "Bitcell Grid Replication (Rows × Columns)",
          "Seamless Cell Abutment & Well Sharing",
          "Row Organization & Shared Substrate Taps",
          "Column Organization & Continuous Metal Routing",
          "Wordline Strapping with Upper Metal Layers",
          "Bitline Shielding & Parasitic Capacitance Balancing",
          "Heavy Power Mesh & Ground Rails Grid",
          "Array Boundary Cell & Dummy Ring Placement",
        ],
      },
      {
        subtitle: "Project 4 — Memory Peripheral Block Layout",
        topics: [
          "High-Speed Bitline Precharge & Equalization Circuit",
          "Voltage-Latch Sense Amplifier (VLSA) with Matched Pairs",
          "High-Drive Differential Write Driver",
          "Row Address Decoder & Wordline Driver Stages",
          "Column Multiplexer (Col MUX) & I/O Buffers",
          "Layout Sizing, Pitch Matching & Verification",
        ],
      },
      {
        subtitle: "Project 5 — Memory Top-Level Macro Layout",
        topics: [
          "Hierarchical Integration of Bitcell Array & Peripheral Blocks",
          "Power Distribution Network (VDD/VSS Rings & Straps)",
          "High-Speed Clocks & Enable Signal Distribution",
          "Data Input/Output Interface Pad Routing",
          "Full-Chip Hierarchical DRC & Antenna Signoff",
          "Full-Chip LVS Verification Clean",
          "Density Fill & Dummy Metal Insertion",
          "EM / IR Drop Signoff & Silicon Reliability Review",
        ],
      },
    ],
  },
];

const flowSteps = [
  {
    step: "01",
    name: "Bitcell Architecture",
    desc: "Transistor ratio sizing (PU, PD, AX), stability simulation, cell ratio (CR) and pull-up ratio (PR) optimization for 6T & 8T topologies.",
  },
  {
    step: "02",
    name: "Device Placement & Symmetry",
    desc: "Symmetrical transistor placement, continuous active diffusion sharing, boundary cells, and well tap pitch matching.",
  },
  {
    step: "03",
    name: "Critical Net Routing",
    desc: "Orthogonal metal routing for wordlines (WL) and bitlines (BL/BLB) with parasitic resistance and capacitance minimization.",
  },
  {
    step: "04",
    name: "Array Formation & Abutment",
    desc: "Seamless horizontal/vertical cell mirroring, well sharing, dummy column/row insertion, and power mesh integration.",
  },
  {
    step: "05",
    name: "Physical Verification & Signoff",
    desc: "DRC, LVS, Antenna rules signoff, parasitic extraction (PEX), and EM/IR drop reliability signoff for silicon tapeout.",
  },
];

export default function MemoryLayoutPage() {
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
            <Link href="/training" className="hover:text-black transition-colors">
              Programs
            </Link>
            <FiChevronRight className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-neutral-900 font-semibold">Memory Layout</span>
          </nav>

          {/* Section Header */}
          <div data-parallax="0.04" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 will-change-transform">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]">
                Memory Layout
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                From semiconductor fundamentals to silicon signoff — master 6T/8T SRAM bitcells, sense amplifiers, decoders, array replication, and DRC/LVS verification.
              </p>
            </div>
          </div>

          {/* 4 Feature Badges Bento */}
          <div data-parallax="0.02" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-neutral-100 will-change-transform">
            {[
              { label: "Track Scope", value: "Custom Memory Layout" },
              { label: "CAD & Flow", value: "Virtuoso & Calibre" },
              { label: "Core Focus", value: "6T/8T SRAM, Arrays & Peripherals" },
              { label: "Outcome", value: "Memory Layout Engineer" },
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

      {/* Program Highlights & Assurance */}
      <ProgramHighlights programName="Memory Layout Design" />

      {/* Interactive Memory Implementation Flow Simulator Bar */}
      <section className="relative w-full py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
                Interactive Memory Design Flow
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 font-mono">
              Click each phase to inspect memory layout execution
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
                7 comprehensive modules covering fundamentals, memory circuits, array design, and real-time projects.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search topics (e.g. SRAM, Sense Amp, DRC)..."
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
