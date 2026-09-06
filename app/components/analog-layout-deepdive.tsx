"use client";

const corePillars = [
  {
    num: "01",
    title: "Semiconductor & CMOS Fundamentals",
    desc: "Understand basic semiconductor physics, MOS device operations, and CMOS concepts critical for precision analog layout."
  },
  {
    num: "02",
    title: "Layout Fundamentals",
    desc: "Master layers, contacts, vias, electrical connectivity, design rules (DRC), and the Cadence Virtuoso layout environment."
  },
  {
    num: "03",
    title: "Floor Planning & Placement",
    desc: "Organize layout architecture while considering signal flow, device matching, proximity, power/ground rails, and silicon area."
  },
  {
    num: "04",
    title: "Device Matching & Symmetry",
    desc: "Master Common Centroid, Interdigitation, Dummy finger insertion, Symmetry planes, Proximity rules, and Gradient effect cancellation."
  },
  {
    num: "05",
    title: "Analog Routing Methodologies",
    desc: "Learn critical signal routing, low-IR power routing, sensitive net shielding, noise reduction, and capacitive coupling mitigation."
  },
  {
    num: "06",
    title: "Advanced Layout Techniques",
    desc: "Implement Guard Rings, Deep N-Well isolation, Latch-up prevention, WPE/LOD layout-dependent effects, and EM/IR reliability."
  },
  {
    num: "07",
    title: "Physical Verification (DRC/LVS)",
    desc: "Run comprehensive DRC, debug geometric violations, verify LVS schematic match, and resolve cross-hierarchy connectivity errors."
  },
  {
    num: "08",
    title: "Parasitic Extraction & Analysis",
    desc: "Extract parasitic R & C networks, generate post-layout netlists, run parasitic-aware simulation, and optimize layout performance."
  }
];

const programHighlights = [
  { label: "Duration", value: "3 Months Intensive" },
  { label: "Methodology", value: "Hands-on EDA Lab" },
  { label: "PDKs & Tools", value: "Industrial Standard" },
  { label: "Career Goal", value: "Tapeout-Ready Layout Engineer" }
];

const learningOutcomes = [
  "CMOS devices and analog layout fundamentals",
  "Layout floor planning and device placement",
  "Device matching and symmetry techniques",
  "Common-centroid and interdigitation patterns",
  "Analog routing and critical signal shielding",
  "Noise reduction and coupling minimization",
  "Guard rings and Deep N-Well isolation",
  "Parasitic and layout-dependent effects (WPE/LOD)",
  "Industrial DRC and LVS verification flows",
  "Parasitic extraction (PEX) & post-layout netlists",
  "Practical analog block layout tapeout project",
  "Rigorous technical interview & defense preparation"
];

export default function AnalogLayoutDeepDive() {
  return (
    <section id="analog-layout" className="relative w-full py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-4xl mb-14 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-2">
            FLAGSHIP PROGRAM • 3 MONTHS INTENSIVE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-4">
            Analog Layout Training
          </h2>

          <p className="text-lg sm:text-xl text-[#0A192F] font-bold mb-3">
            Build Practical Expertise in Analog IC Layout
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Learn the complete Analog IC Layout flow through structured fundamentals, practical exercises, tapeout-grade PDK projects, and industry-oriented physical verification methodologies.
          </p>

          {/* Program Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {programHighlights.map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  {item.label}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0A192F]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Core Engineering Pillars */}
        <div className="mb-16">
          <div className="text-left mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
              What You Will Master
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Eight comprehensive engineering pillars covering the full spectrum of custom analog layout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-mono font-bold text-slate-400 mb-3">
                    PILLAR {item.num}
                  </span>

                  <h4 className="text-base font-bold text-[#0A192F] leading-snug mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
                COMPETENCIES & DELIVERABLES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                Analog Layout Learning Outcomes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl">
                By the end of the program, learners develop practical mastery of these core industry competencies:
              </p>
            </div>

            <a
              href="#curriculum"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0A192F] hover:bg-slate-800 transition-all whitespace-nowrap self-start lg:self-auto"
            >
              Explore 10-Module Syllabus
            </a>
          </div>

          {/* 12 Outcomes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningOutcomes.map((outcome, idx) => (
              <div
                key={outcome}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200"
              >
                <span className="text-xs font-mono text-slate-400 font-bold shrink-0 mt-0.5">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

