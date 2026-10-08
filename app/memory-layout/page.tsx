"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiPlus,
  FiChevronRight,
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiTerminal,
  FiZap,
  FiGrid,
  FiSliders,
  FiBox,
  FiDatabase,
  FiActivity
} from "react-icons/fi";

interface ModuleSection {
  subtitle?: string;
  badge?: string;
  topics: string[];
}

interface ModuleItem {
  id: string;
  name: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  hasAssignment?: boolean;
  assignmentText?: string;
  sections: ModuleSection[];
}

const memoryLayoutFlow = [
  { step: "01", name: "Schematic", desc: "Schematic capture & transistor sizing" },
  { step: "02", name: "Circuit Understanding", desc: "Hold, read & write operating margins" },
  { step: "03", name: "Bitcell Architecture", desc: "6T / 8T / 10T topology selection" },
  { step: "04", name: "Floor Planning", desc: "Well taps, boundary cells & pitch matching" },
  { step: "05", name: "Device Placement", desc: "Symmetrical PU, PD & Access transistor layout" },
  { step: "06", name: "Diffusion / Poly Optimization", desc: "Continuous diffusion sharing & poly bending" },
  { step: "07", name: "Routing", desc: "Orthogonal M1-M4 bitline/wordline routing" },
  { step: "08", name: "Array Formation", desc: "Abutment, mirroring & dummy row/col insertion" },
  { step: "09", name: "DRC", desc: "Advanced design rule clean verification" },
  { step: "10", name: "LVS", desc: "Exact pin-to-pin netlist matching" },
  { step: "11", name: "PEX / Parasitic Analysis", desc: "Bitline capacitance & wordline resistance extraction" },
  { step: "12", name: "Memory-Level Optimization", desc: "Area density, timing closure & IR drop signoff" },
];

const modules: ModuleItem[] = [
  {
    id: "module-1",
    name: "Module 1",
    title: "Semiconductor & Device Fundamentals",
    icon: <FiCpu className="w-5 h-5 text-[#7C3AED]" />,
    summary: "Establish strong foundations in solid-state physics, carrier transport mechanisms, PN junctions, MOSFET operation, and CMOS logic.",
    hasAssignment: true,
    assignmentText: "Analyze semiconductor carrier dynamics and solve MOSFET & CMOS fundamental characterization problems.",
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
          "MOSFET Current Equations (Square-Law & Modern Velocity Saturation)",
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
    icon: <FiLayers className="w-5 h-5 text-[#7C3AED]" />,
    summary: "Explore end-to-end silicon wafer manufacturing flows, CMOS fabrication steps, memory hierarchy, and SRAM bitcell operating ratios.",
    hasAssignment: true,
    assignmentText: "Analyze a basic SRAM bitcell and understand its operating modes (Hold, Read, Write) and stability ratios.",
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
    icon: <FiTerminal className="w-5 h-5 text-[#7C3AED]" />,
    summary: "Master the standard VLSI engineering terminal environment, directory management, and TC-SH scripting for CAD tool flow automation.",
    hasAssignment: true,
    assignmentText: "Create automated tcsh scripts for VLSI design directory setups, batch layout execution, and DRC log verification.",
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
    icon: <FiZap className="w-5 h-5 text-[#7C3AED]" />,
    summary: "Deep-dive into 6T and 8T SRAM circuits, peripheral control blocks, decoder architectures, precharge, and sense amplifiers.",
    hasAssignment: true,
    assignmentText: "Analyze 6T/8T SRAM operation in detail and identify every device sizing, critical net, and signal timing window.",
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
    icon: <FiGrid className="w-5 h-5 text-[#7C3AED]" />,
    summary: "Transition from circuit schematics to compact physical mask layouts: diffusion sharing, poly routing, and 6T/8T silicon layouts.",
    hasAssignment: true,
    assignmentText: "Create a complete, DRC/LVS-clean SRAM bitcell layout from schematic in an industry EDA layout tool.",
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
    icon: <FiSliders className="w-5 h-5 text-[#7C3AED]" />,
    summary: "Master array abutment, cell mirroring, matching & symmetry, memory parasitics (EM/IR, crosstalk), FinFET layout, and LDE mitigation.",
    hasAssignment: true,
    assignmentText: "Optimize a complete memory bitcell and mini-array for area, routing, matching, and high-speed electrical performance.",
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
    icon: <FiBox className="w-5 h-5 text-[#7C3AED]" />,
    summary: "Hands-on tapeout-oriented projects covering 6T bitcells, 8T bitcells, scalable SRAM arrays, peripheral blocks, and top-level memory macro signoff.",
    hasAssignment: true,
    assignmentText: "Execute complete physical layout, DRC, LVS, and PEX signoff for 5 industry-grade memory projects.",
    sections: [
      {
        subtitle: "Project 1 — 6T SRAM Bitcell Layout",
        badge: "Core Bitcell",
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
        badge: "Dual-Port Architecture",
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
        badge: "Array Macro",
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
        badge: "Peripheral Blocks",
        topics: [
          "Choose one or more dedicated peripheral blocks:",
          "• High-Speed Bitline Precharge & Equalization Circuit",
          "• Voltage-Latch Sense Amplifier (VLSA) with Matched Pairs",
          "• High-Drive Differential Write Driver",
          "• Row Address Decoder & Wordline Driver Stages",
          "• Column Multiplexer (Col MUX) & I/O Buffers",
          "Layout Sizing, Pitch Matching & Verification",
        ],
      },
      {
        subtitle: "Project 5 — Memory Top-Level Macro Layout",
        badge: "Full Chip Tapeout",
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

export default function MemoryLayoutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative min-h-screen bg-white text-neutral-900 selection:bg-black selection:text-white font-normal overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-40 md:pt-44 pb-28">

        {/* Top Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-10 font-normal">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <FiChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/#courses" className="hover:text-black transition-colors">
            Programs
          </Link>
          <FiChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-neutral-900 font-medium">Memory Layout</span>
        </nav>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Description, Flow & Sticky Action */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 flex flex-col items-start text-left">
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase text-slate-400 block mb-3">
              • SPECIALIZED VLSI PROGRAM
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-950 leading-[1.08] mb-5">
              Memory Layout Design.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
              From Semiconductor Fundamentals to Real-Time Memory Layout Projects. Master the physical implementation of memory circuits including SRAM bitcells (6T/8T), high-density memory arrays, peripheral decoders &amp; sense amps, device matching, layout optimization, DRC/LVS verification, and tapeout signoff.
            </p>

            {/* Quick Metrics Badge Card */}
            <div className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs mb-6 space-y-3.5">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <FiCheckCircle className="w-4 h-4 text-black shrink-0" />
                <span><strong>7 Comprehensive Modules</strong> (Physics to Tapeout)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <FiCheckCircle className="w-4 h-4 text-black shrink-0" />
                <span><strong>Hands-On Assignments</strong> for Every Module</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <FiCheckCircle className="w-4 h-4 text-black shrink-0" />
                <span><strong>5 Tapeout Projects:</strong> 6T, 8T, Array, Peripherals &amp; Top-Level</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                <FiCheckCircle className="w-4 h-4 text-black shrink-0" />
                <span><strong>Full Verification:</strong> DRC, LVS, PEX &amp; Parasitic Signoff</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-8 py-4 rounded-full font-medium text-sm text-white bg-black hover:bg-neutral-800 shadow-sm transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Enquire for Next Batch</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Right Column: Accordion Rows */}
          <div className="lg:col-span-7 flex flex-col border-t border-slate-200">
            {modules.map((mod, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={mod.id}
                  className="border-b border-slate-200 transition-colors"
                >
                  {/* Clickable Row Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-7 sm:py-9 flex items-center justify-between text-left group transition-all cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4 pr-4">
                      <span className="text-xs font-mono text-slate-400 group-hover:text-[#7C3AED] transition-colors mt-1 sm:mt-0">
                        0{index + 1}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0A192F] group-hover:text-[#7C3AED] transition-colors tracking-tight">
                            {mod.title}
                          </h2>
                          {mod.hasAssignment && (
                            <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-md bg-purple-50 text-[#7C3AED] border border-purple-200">
                              Includes Assignment
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 font-normal line-clamp-1">
                          {mod.summary}
                        </p>
                      </div>
                    </div>

                    {/* Plus / Cross Icon with Smooth Rotation */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-slate-400 group-hover:text-[#7C3AED] transition-all shrink-0">
                      <FiPlus
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45 text-[#7C3AED]" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable Module Content */}
                  {isOpen && (
                    <div className="pb-8 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="space-y-6 pl-2 sm:pl-8">
                        {mod.sections.map((sec, sIdx) => (
                          <div key={sIdx} className="space-y-3">
                            <div className="flex items-center justify-between">
                              {sec.subtitle && (
                                <h3 className="text-xs sm:text-sm font-semibold text-[#7C3AED] font-mono tracking-wider uppercase flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                                  <span>{sec.subtitle}</span>
                                </h3>
                              )}
                              {sec.badge && (
                                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                                  {sec.badge}
                                </span>
                              )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {sec.topics.map((topic, tIdx) => (
                                <div
                                  key={tIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#7C3AED]/60 hover:text-[#7C3AED] transition-all"
                                >
                                  <span className="text-[#7C3AED] font-bold text-xs mt-0.5">•</span>
                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Assignment Note Card */}
                        {mod.hasAssignment && (
                          <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200/90 text-xs sm:text-sm text-[#7C3AED] flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#7C3AED] mt-1.5 shrink-0 animate-pulse" />
                            <div>
                              <span className="font-bold uppercase font-mono tracking-wider block text-[11px] text-purple-900 mb-0.5">
                                Practical Assignment:
                              </span>
                              <span className="text-purple-950 font-normal">
                                {mod.assignmentText}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Section: Complete Memory Layout Execution Flow */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#7C3AED] block mb-2">
              • INDUSTRY METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Complete Memory Layout Flow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3">
              Every student masters the standard multi-step physical execution workflow followed in leading semiconductor memory design companies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {memoryLayoutFlow.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#7C3AED] hover:shadow-sm transition-all text-left group"
              >
                <span className="text-xs font-mono font-bold text-[#7C3AED] block mb-1">
                  {item.step}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-[#0A192F] group-hover:text-[#7C3AED] transition-colors mb-1 leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-500 font-normal leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
