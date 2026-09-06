"use client";

import { useState, useMemo, useEffect } from "react";
import { 
  FiArrowRight, 
  FiX, 
  FiClock, 
  FiCheckCircle, 
  FiSearch,
  FiCompass,
  FiFileText,
  FiShare2,
  FiCheck,
  FiLayers,
  FiCpu,
  FiZap,
  FiShield,
  FiSliders,
  FiActivity,
  FiBookOpen,
  FiArrowUpRight
} from "react-icons/fi";

interface Article {
  id: string;
  tag: string;
  title: string;
  category: "Fundamentals" | "Layout Technique" | "Physical Verification" | "Advanced Nodes" | "Career Guide";
  readTime: string;
  themeStyle: {
    bg: string;
    text: string;
    tagStyle: string;
    headerGradient: string;
    decorations: React.ReactNode;
  };
  summary: string;
  keyTopics: string[];
  whyItMatters: string;
  technicalPoints: { title: string; desc: string }[];
  interviewTips: string;
  siliconRule: string;
}

const articlesData: Article[] = [
  {
    id: "analog-layout-intro",
    tag: "REPORT",
    title: "What Is Analog Layout?",
    category: "Fundamentals",
    readTime: "4 min read",
    themeStyle: {
      bg: "bg-gradient-to-b from-[#FF5520] via-[#FF6525] to-[#FF3B30]",
      text: "text-white",
      tagStyle: "text-white/80 font-mono",
      headerGradient: "from-[#FF5520] to-[#FF3B30]",
      decorations: (
        <>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-300 to-orange-400 opacity-90 blur-[0.5px] pointer-events-none" />
          <div className="absolute bottom-16 -right-6 w-32 h-32 rounded-full bg-orange-400/40 pointer-events-none" />
        </>
      )
    },
    summary: "Understand how analog circuits are physically implemented on silicon with micro-level precision and manual floorplanning.",
    keyTopics: ["Silicon Geometries", "Manual Floorplanning", "Parasitic Awareness", "Device Matching"],
    whyItMatters: "Unlike digital physical design where automated tools perform standard cell placement and routing, analog layout is a custom engineering craft. Electrical performance (gain, offset, noise, phase margin) is directly dictated by polygon placement on silicon.",
    technicalPoints: [
      { title: "Schematic Netlist Translation", desc: "Translating electrical circuit schematics into physical GDSII mask geometries across diffusion, poly, contacts, and multi-layer metals." },
      { title: "Transistor Optimization", desc: "Optimizing transistor finger sizing, orientation, and source/drain sharing to minimize parasitic junction capacitances." },
      { title: "Parasitic Mitigation", desc: "Mitigating unwanted parasitic capacitance (Cgs, Cgd) and interconnect parasitic resistance (IR drop) along sensitive high-gain nodes." },
      { title: "Floorplanning & Isolation", desc: "Floorplanning sensitive differential nodes away from noisy switching digital blocks using Deep N-Well and guard ring barriers." }
    ],
    interviewTips: "Expect interviewers to ask why automated APR tools cannot replace analog layout engineers and how parasitic extraction alters schematic simulation results.",
    siliconRule: "Rule #1: Schematic simulation predicts ideal behavior; Silicon performance is dictated by physical layout parasitics."
  },
  {
    id: "analog-vs-digital",
    tag: "CASE STUDY",
    title: "Analog Layout vs. Digital Physical Design",
    category: "Fundamentals",
    readTime: "6 min read",
    themeStyle: {
      bg: "bg-gradient-to-b from-[#2B7FFF] via-[#1D68FE] to-[#1250E2]",
      text: "text-white",
      tagStyle: "text-white/80 font-mono",
      headerGradient: "from-[#2B7FFF] to-[#1250E2]",
      decorations: (
        <>
          <div className="absolute -right-8 top-1/4 w-44 h-44 bg-gradient-to-br from-cyan-300/40 via-blue-400/30 to-transparent rotate-45 pointer-events-none transform -skew-y-12" />
          <div className="absolute right-0 bottom-4 w-36 h-36 bg-blue-400/30 rounded-3xl rotate-12 pointer-events-none" />
        </>
      )
    },
    summary: "Understand the core differences in automation, matching, clock trees, cell density, routing, and sign-off flows.",
    keyTopics: ["APR Flow vs Custom", "CTS & Timing Closure", "Pelgrom's Matching Law", "Standard Cells"],
    whyItMatters: "Choosing the right career trajectory requires understanding the contrast between Digital APR (tool-driven, algorithmic, timing-focused) and Analog Custom Layout (physics-driven, symmetry-oriented, precision-focused).",
    technicalPoints: [
      { title: "Automation vs Custom Craft", desc: "Digital PD uses automated RTL-to-GDSII engines for placing millions of standard cells, whereas Analog Layout requires hand-crafted placement of custom transistor arrays." },
      { title: "Timing Closure vs Noise Integrity", desc: "Digital flows center around Clock Tree Synthesis (CTS) and Setup/Hold timing closure; Analog prioritizes Pelgrom's matching rules, thermal symmetry, and Deep N-Well isolation." },
      { title: "Routing Architecture", desc: "Digital relies on multi-layer grid routing with metal density fill; Analog employs custom differential shielding, star-grounding, and low-IR wide power trunks." },
      { title: "Physical Verification Focus", desc: "Both require DRC/LVS, but digital signoff adds complex Static Timing Analysis (STA), whereas analog signoff demands Parasitic Extraction (PEX) SPICE re-simulation." }
    ],
    interviewTips: "Be prepared to contrast automated digital router algorithms with custom analog shielding, differential routing, and star grounding.",
    siliconRule: "Digital optimizes for Density and Timing closure; Analog optimizes for Precision, Matching, and Noise Immunity."
  },
  {
    id: "drc-lvs",
    tag: "REPORT",
    title: "Understanding DRC & LVS Verification",
    category: "Physical Verification",
    readTime: "5 min read",
    themeStyle: {
      bg: "bg-[#090D16]",
      text: "text-white",
      tagStyle: "text-slate-400 font-mono",
      headerGradient: "from-[#090D16] via-[#1E1B4B] to-[#311042]",
      decorations: (
        <>
          <div className="absolute right-0 bottom-0 w-44 h-44 bg-gradient-to-tl from-[#6C22E0] via-[#8B31FF] to-[#3B1280] rounded-tl-[60px] pointer-events-none" />
          <div className="absolute -right-4 bottom-14 w-32 h-32 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-2xl rotate-45 pointer-events-none opacity-95" />
          <div className="absolute right-12 bottom-6 w-20 h-20 bg-[#9D4EDD] rounded-xl rotate-12 pointer-events-none" />
        </>
      )
    },
    summary: "Learn how Physical Verification guarantees semiconductor manufacturability and electrical netlist equivalence before tapeout.",
    keyTopics: ["Design Rule Check", "Layout vs Schematic", "Antenna Rules", "Soft Checks & Shorts"],
    whyItMatters: "Mask fabrication costs millions of dollars. DRC ensures the polygons can be physically manufactured by the foundry without bridging or breaking, while LVS verifies that the drawn layout matches the golden schematic netlist with 100% precision.",
    technicalPoints: [
      { title: "DRC (Design Rule Check)", desc: "Validates geometric rules including minimum spacing, width, via enclosure, metal density rules, and plasma-induced antenna diode ratios." },
      { title: "LVS (Layout Versus Schematic)", desc: "Extracts physical MOS devices, resistors, and capacitors from drawn mask polygons and verifies 1-to-1 pin and node connectivity against schematic netlist." },
      { title: "Debugging Net Collisions & Opens", desc: "Locating shorted power nets, unrouted high-impedance inputs, and incorrect transistor finger counts." },
      { title: "ERC & Substrate Checks", desc: "Electrical Rule Checks guarantee proper substrate tap biasing and flag floating well violations before fabrication." }
    ],
    interviewTips: "Interviewers frequently give candidates dummy layout cross-sections with floating wells or shorted nets to test root-cause debugging methodology.",
    siliconRule: "Golden Rule: Never tape out until DRC, LVS, and ERC show zero errors with clean runset logs."
  },
  {
    id: "latch-up",
    tag: "CASE STUDY",
    title: "What Is Latch-up & Prevention?",
    category: "Layout Technique",
    readTime: "5 min read",
    themeStyle: {
      bg: "bg-gradient-to-b from-[#FF2A68] via-[#F41C52] to-[#D90429]",
      text: "text-white",
      tagStyle: "text-white/80 font-mono",
      headerGradient: "from-[#FF2A68] to-[#D90429]",
      decorations: (
        <>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-36 bg-[#0E131F] rounded-t-3xl border-t-2 border-x-2 border-slate-700/80 p-3.5 shadow-2xl pointer-events-none">
            <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
            <div className="text-[9px] font-mono text-slate-400 mb-1 text-center">Substrate Guard Ring</div>
            <div className="h-1 bg-red-500/80 rounded mb-1.5" />
            <div className="h-1 bg-slate-700 rounded w-3/4 mb-1" />
          </div>
        </>
      )
    },
    summary: "Understand the destructive parasitic PNPN thyristor mechanism and the guard ring layout techniques used to eliminate it.",
    keyTopics: ["Parasitic SCR", "Substrate Resistance", "Guard Rings", "Tap-to-Diffusion Rules"],
    whyItMatters: "Latch-up creates a low-impedance path between VDD and GND through parasitic bipolar transistors (NPN and PNP) formed in CMOS wells. Once triggered by voltage spikes, high current melts silicon interconnects and permanently destroys the chip.",
    technicalPoints: [
      { title: "Parasitic SCR Mechanism", desc: "Cross-coupled vertical PNP and lateral NPN bipolar structures create a regenerative Silicon Controlled Rectifier with dangerous positive feedback." },
      { title: "Trigger Events", desc: "Overvoltage transients, electrostatic discharge (ESD), or substrate noise that forward-bias the base-emitter junctions of parasitic bipolars." },
      { title: "Continuous Guard Rings", desc: "Surrounding noisy switching devices with N+ taps connected to VDD and P+ taps connected to VSS to collect stray majority carriers." },
      { title: "Substrate Resistance Shunting", desc: "Placing frequent well and substrate contacts to reduce Rsub and Rwell, keeping the parasitic loop gain strictly below unity." }
    ],
    interviewTips: "Be ready to sketch the CMOS inverter cross-section, label the parasitic bipolar elements, and explain how guard rings shunt substrate currents.",
    siliconRule: "Keep the product of parasitic bipolar gains (β_npn · β_pnp) < 1 under all operating temperatures."
  },
  {
    id: "common-centroid",
    tag: "REPORT",
    title: "Common Centroid & Pelgrom's Law",
    category: "Layout Technique",
    readTime: "5 min read",
    themeStyle: {
      bg: "bg-gradient-to-b from-[#1C0C5B] via-[#2F1089] to-[#4318B0]",
      text: "text-white",
      tagStyle: "text-white/80 font-mono",
      headerGradient: "from-[#1C0C5B] to-[#4318B0]",
      decorations: (
        <>
          <div className="absolute right-0 bottom-0 w-36 h-48 bg-gradient-to-t from-[#7928CA] to-[#9D4EDD] rounded-tl-[36px] pointer-events-none opacity-80" />
          <div className="absolute right-8 bottom-0 w-24 h-32 bg-gradient-to-t from-[#4361EE] to-[#3A0CA3] rounded-tl-[24px] pointer-events-none" />
        </>
      )
    },
    summary: "Learn why common-centroid placement is critical for differential pairs and current mirrors to cancel silicon process gradients.",
    keyTopics: ["Process Gradients", "Cross-Quad Arrangement", "Thermal Symmetry", "Dummy Fingers"],
    whyItMatters: "During silicon manufacturing, oxide thickness, doping concentrations, and temperature vary linearly across the die. Common centroid geometry cancels these linear gradients, preventing input offset voltages in op-amps and current mismatches in mirrors.",
    technicalPoints: [
      { title: "Coincident Center of Gravity", desc: "Arranging matching transistor fingers such that the centroid coordinate of device A and device B align at the exact identical spatial point." },
      { title: "1D Interdigitation vs 2D Cross-Quads", desc: "Using 1D ABBA or ABBA-BAAB arrays for 1-directional gradients, and 2x2 or 4x4 Cross-Quads to cancel both X and Y linear variations simultaneously." },
      { title: "Dummy Transistor Boundaries", desc: "Placing identical dummy fingers on the outer edges to maintain consistent optical lithography and mechanical stress." },
      { title: "Symmetrical Interconnect Routing", desc: "Routing matched wiring paths with identical series resistance and parasitic capacitance on both branches." }
    ],
    interviewTips: "Draw the cross-quad matrix on a whiteboard and explain how it cancels both X-axis and Y-axis linear process variations simultaneously.",
    siliconRule: "Matching Formula: Mismatch variance is inversely proportional to active channel area: σ²(ΔVth) = Avth² / (W · L)."
  },
  {
    id: "wpe-lod",
    tag: "CASE STUDY",
    title: "Layout-Dependent Effects (WPE & LOD)",
    category: "Advanced Nodes",
    readTime: "6 min read",
    themeStyle: {
      bg: "bg-white",
      text: "text-[#0A192F]",
      tagStyle: "text-slate-500 font-mono font-bold",
      headerGradient: "from-[#0A192F] via-[#1E293B] to-[#0F172A]",
      decorations: (
        <>
          <div className="absolute top-12 right-6 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-lg pointer-events-none" />
          <div className="absolute top-36 right-8 w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF7A00] to-[#FF4500] shadow-xl pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-blue-500 pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-gradient-to-tr from-[#0072F5] to-[#00DFD8] opacity-90 pointer-events-none" />
        </>
      )
    },
    summary: "Learn how nanometer manufacturing physics (well proximity & diffusion stress) alter transistor electrical parameters.",
    keyTopics: ["Well Proximity Effect", "Length of Diffusion (LOD)", "STI Stress", "Dummy Transistors"],
    whyItMatters: "In modern deep sub-micron nodes (sub-65nm, 28nm, FinFET), physical placement distance relative to well edges and shallow trench isolation (STI) shifts threshold voltage (Vth) and carrier mobility (μ) significantly.",
    technicalPoints: [
      { title: "Well Proximity Effect (WPE)", desc: "High-energy dopant ions scatter off photoresist mask edges during ion implantation, concentrating extra dopants near well borders and shifting Vth." },
      { title: "Length of Diffusion (LOD) & STI Stress", desc: "Compressive mechanical stress from Shallow Trench Isolation alters silicon carrier mobility based on the gate-to-diffusion-edge distance (SA / SB)." },
      { title: "Equalizing Stress Environments", desc: "Surrounding matching differential pairs with active dummy transistors to guarantee identical SA and SB parameters." },
      { title: "Well-Edge Distance Budgeting", desc: "Placing precision analog blocks far from well edges to maintain uniform dopant concentration." }
    ],
    interviewTips: "Explain how Layout-Dependent Effects (LDE) cause schematic-to-post-layout simulation discrepancies if dummy devices are omitted.",
    siliconRule: "In sub-micron nodes, identical W and L do NOT guarantee matching unless proximity and stress environments are identical."
  },
  {
    id: "vlsi-career-start",
    tag: "ROADMAP",
    title: "How to Start a Career in VLSI?",
    category: "Career Guide",
    readTime: "7 min read",
    themeStyle: {
      bg: "bg-gradient-to-b from-[#1D4ED8] via-[#3B82F6] to-[#06B6D4]",
      text: "text-white",
      tagStyle: "text-white/80 font-mono",
      headerGradient: "from-[#1D4ED8] to-[#06B6D4]",
      decorations: (
        <>
          <div className="absolute -bottom-10 right-0 w-44 h-44 bg-gradient-to-tr from-cyan-400/50 via-teal-300/40 to-transparent rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-6 -right-6 w-32 h-32 rounded-3xl bg-blue-300/30 rotate-45 pointer-events-none" />
        </>
      )
    },
    summary: "A practical roadmap for students and engineers to choose a domain, master EDA tools, and build a tapeout-ready portfolio.",
    keyTopics: ["Domain Selection", "EDA Tool Mastery", "PDK Projects", "Technical Interviews"],
    whyItMatters: "The global semiconductor industry is experiencing massive talent demand. Having a structured domain focus (Analog Layout, Digital P&R, or Memory) combined with hands-on tool projects gives fresh engineers a distinct competitive advantage.",
    technicalPoints: [
      { title: "Step 1: Choose Your Specialization", desc: "Analog Layout (custom precision craft) vs Digital Physical Design (automated APR flow) vs Memory Layout (high-density pitch matching)." },
      { title: "Step 2: Master Core Silicon Physics", desc: "Build unshakeable foundations in CMOS operation, short-channel effects, parasitic RC, and physical verification rule decks." },
      { title: "Step 3: Gain Hands-on EDA Tool Proficiency", desc: "Execute real design flows in Cadence Virtuoso, Calibre DRC/LVS, and Linux scripting environments." },
      { title: "Step 4: Build a Verified PDK Project Portfolio", desc: "Complete tapeout-style projects: Op-Amps, Bandgaps, SRAM bitcells, and LDO voltage regulators with full DRC/LVS clean logs." }
    ],
    interviewTips: "Hiring managers look for candidates who can explain *why* they made specific layout decisions rather than just clicking buttons in CAD tools.",
    siliconRule: "Industry Success: Strong Fundamentals + Real PDK Project Experience + Clear Technical Articulation."
  },
  {
    id: "parasitic-extraction",
    tag: "REPORT",
    title: "Parasitic R/C & Post-Layout Signoff",
    category: "Physical Verification",
    readTime: "5 min read",
    themeStyle: {
      bg: "bg-[#0B0F19]",
      text: "text-white",
      tagStyle: "text-slate-400 font-mono",
      headerGradient: "from-[#0B0F19] via-[#0F172A] to-[#1E293B]",
      decorations: (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.15)_100%)] pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-36 h-36 border border-cyan-500/30 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-44 h-44 border border-cyan-500/20 rounded-full pointer-events-none" />
        </>
      )
    },
    summary: "Learn how extraction of interconnect resistance and cross-coupling capacitance drives post-layout simulation accuracy.",
    keyTopics: ["PEX / QRC", "Crosstalk Mitigation", "IR Drop Analysis", "Corner Simulations"],
    whyItMatters: "Interconnect parasitics degrade gain, shift pole-zero locations, and reduce phase margin. Without precise parasitic extraction (PEX), a circuit that simulates cleanly in schematic may oscillate or fail on silicon.",
    technicalPoints: [
      { title: "Parasitic Netlist Generation", desc: "Generating SPEF / DSPF / Calibre View netlists containing extracted interconnect resistances and capacitances for SPICE simulation." },
      { title: "3D Field Solver Extraction", desc: "Accurate modeling of fringing and cross-coupling capacitances between dense multi-level metal interconnects." },
      { title: "Signal Integrity & Shielding", desc: "Mitigating capacitive crosstalk noise on high-impedance analog nodes using VDD/VSS shielding nets." },
      { title: "Electromigration (EM) & IR Drop Signoff", desc: "Verifying current density limits to prevent wire voiding and ensure supply rail integrity across PVT corners." }
    ],
    interviewTips: "Be prepared to explain the difference between schematic simulation and extracted netlist simulation, and how shielding reduces parasitic coupling.",
    siliconRule: "Parasitic Rule: Always budget for wiring capacitance during schematic design sizing."
  }
];

const categories = [
  "All",
  "Fundamentals",
  "Layout Technique",
  "Physical Verification",
  "Advanced Nodes",
  "Career Guide"
] as const;

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="insights" className="relative w-full py-24 bg-[#ECEEF2] overflow-hidden">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left Aligned Section Heading */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-3">
            Semiconductor & VLSI Insights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore technical reports, layout principles, and semiconductor career concepts illustrated in an interactive visual format.
          </p>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0A192F] text-white shadow-md shadow-slate-900/10 scale-[1.02]"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles & concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-white border border-slate-200 focus:outline-none focus:border-[#1D4ED8] text-[#0A192F] placeholder-slate-400 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Graphic Cards Grid Matching Reference Design */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
            {filteredArticles.map((art) => {
              return (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticle(art)}
                  className={`group relative rounded-[28px] ${art.themeStyle.bg} ${art.themeStyle.text} p-6 sm:p-7 flex flex-col justify-between h-full min-h-[360px] sm:min-h-[400px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-black/5`}
                >
                  {/* Visual Background Shapes / Graphic Decor */}
                  {art.themeStyle.decorations}

                  {/* Card Content Top */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-bold tracking-widest uppercase ${art.themeStyle.tagStyle}`}>
                        {art.tag}
                      </span>
                      <span className="text-[10px] font-mono opacity-70 flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3">
                      {art.title}
                    </h3>
                  </div>

                  {/* Hero-Style Button with Left-to-Right Hover Fill Animation */}
                  <div className="relative z-10 pt-8 mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArticle(art);
                      }}
                      className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-xs text-black hover:text-white bg-white border border-black/80 hover:border-[#1D4ED8] shadow-sm overflow-hidden group/btn active:scale-[0.98] transition-colors duration-300 cursor-pointer"
                    >
                      {/* Left-to-Right Blue Hover Background Slide */}
                      <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/btn:scale-x-100 z-0" />
                      
                      {/* Button Text & Arrow */}
                      <span className="relative z-10 flex items-center gap-2">
                        <span>Read Article</span>
                        <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 mb-16 shadow-sm">
            <FiFileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-[#0A192F] mb-1">No articles found</h4>
            <p className="text-xs sm:text-sm text-slate-500 mb-4">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try another keyword or clear the filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0A192F] text-white hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Redesigned Pop-up Modal Positioned Below Navbar */}
        {selectedArticle && (
          <div 
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-40 flex items-start justify-center pt-24 sm:pt-28 pb-6 px-3 sm:px-6 bg-[#0A192F]/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in overflow-y-auto"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white border border-slate-200/80 rounded-3xl sm:rounded-[32px] shadow-2xl overflow-hidden max-h-[calc(100vh-8.5rem)] flex flex-col transform transition-all duration-300 animate-in zoom-in-95 slide-in-from-bottom-6"
            >
              
              {/* Modal Hero Header with Dynamic Gradient Banner */}
              <div className={`relative p-6 sm:p-10 bg-gradient-to-r ${selectedArticle.themeStyle.headerGradient} text-white shrink-0 overflow-hidden`}>
                
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Header Controls */}
                <div className="flex items-center justify-between gap-4 mb-4 relative z-10">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                      {selectedArticle.tag} • {selectedArticle.category}
                    </span>
                    <span className="text-xs font-mono text-white/90 flex items-center gap-1.5">
                      <FiClock className="w-3.5 h-3.5" />
                      {selectedArticle.readTime}
                    </span>
                  </div>

                  {/* Close Button with Hero-like Hover */}
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2.5 rounded-2xl bg-white/15 hover:bg-white text-white hover:text-black border border-white/20 backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
                    aria-label="Close article"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Article Main Title */}
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 relative z-10 max-w-2xl">
                  {selectedArticle.title}
                </h2>

                {/* Key Concepts Pills */}
                <div className="flex items-center gap-2 flex-wrap relative z-10">
                  <span className="text-[11px] font-mono text-white/70">Topics:</span>
                  {selectedArticle.keyTopics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-black/25 border border-white/15 text-white backdrop-blur-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Scrollable Content Body */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-[#F8FAFC]">
                
                {/* Executive Summary Callout Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-100 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#1D4ED8] mb-2">
                    <FiBookOpen className="w-4 h-4" />
                    <span>Executive Summary</span>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                    {selectedArticle.summary}
                  </p>
                </div>

                {/* Section 1: Why This Matters on Silicon */}
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F] mb-3 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />
                    <span>Why This Matters on Silicon</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {selectedArticle.whyItMatters}
                  </p>
                </div>

                {/* Section 2: Key Technical Principles Breakdown */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A192F] flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />
                    <span>Core Technical Rules & Methodologies</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    {selectedArticle.technicalPoints.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#1D4ED8] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono font-bold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                              0{idx + 1}
                            </span>
                            <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                          </div>
                          <h4 className="text-sm font-bold text-[#0A192F] mb-1.5">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Silicon Rule / Formula Highlight */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0A192F] text-white border border-slate-800 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                      Silicon Rule of Thumb
                    </span>
                    <FiZap className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-sm sm:text-base font-mono text-slate-200 leading-relaxed">
                    {selectedArticle.siliconRule}
                  </p>
                </div>

                {/* Section 4: Interview & Industry Relevance */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm mb-2 text-amber-900">
                    <FiCompass className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Technical Interview & Hiring Insight:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                    {selectedArticle.interviewTips}
                  </p>
                </div>

              </div>

              {/* Modal Footer with Hero-Style Buttons */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                
                {/* Share / Copy Article Link */}
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0A192F] transition-colors cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <FiCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiShare2 className="w-4 h-4 text-slate-400" />
                      <span>Share this insight</span>
                    </>
                  )}
                </button>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-3 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>

                  {/* Hero-Style Button with Left-to-Right Blue Fill for Course Enquiry */}
                  <a
                    href="#contact"
                    onClick={() => setSelectedArticle(null)}
                    className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-xs text-black hover:text-white bg-white border border-black/80 hover:border-[#1D4ED8] shadow-sm overflow-hidden group/modalBtn active:scale-[0.98] transition-colors duration-300"
                  >
                    <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/modalBtn:scale-x-100 z-0" />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Enquire About Courses</span>
                      <FiArrowRight className="w-3.5 h-3.5 group-hover/modalBtn:translate-x-1 transition-transform duration-200" />
                    </span>
                  </a>

                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

