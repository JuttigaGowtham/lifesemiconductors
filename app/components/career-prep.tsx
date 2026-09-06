"use client";

const prepCards = [
  {
    id: "tech-interview",
    num: "01",
    title: "Technical Interviews",
    desc: "Master core CMOS physics, small-signal models, Pelgrom's matching law, and second-order nanometer effects frequently tested in technical rounds.",
    badge: "</>"
  },
  {
    id: "practical-layout",
    num: "02",
    title: "Practical Scenarios",
    desc: "Learn how to tackle real-world floorplanning, routing congestion, latch-up mitigation, and physical verification design questions confidently.",
    badge: "DRC/LVS"
  },
  {
    id: "project-defense",
    num: "03",
    title: "Project Articulation",
    desc: "Master the ability to clearly articulate your PDK project architectures (Op-Amp, SRAM, LDO, BGR), design challenges, and verification trade-offs.",
    badge: "PDK"
  },
  {
    id: "vlsi-resume",
    num: "04",
    title: "VLSI Resume Building",
    desc: "Structure your resume to effectively highlight EDA tool proficiencies (Cadence Virtuoso, Calibre), Linux workflows, and tapeout-style projects.",
    badge: "CV"
  },
  {
    id: "mock-interviews",
    num: "05",
    title: "Mock Technical Rounds",
    desc: "Simulate rigorous technical interview rounds with experienced semiconductor professionals and receive actionable feedback on strengths and gaps.",
    badge: "1-on-1"
  },
  {
    id: "eda-signoff",
    num: "06",
    title: "EDA Sign-off Mastery",
    desc: "Gain deep familiarity with industrial tapeout flows, parasitic extraction (PEX/QRC), and EM/IR reliability signoff checks.",
    badge: "EDA"
  },
  {
    id: "career-readiness",
    num: "07",
    title: "Career Readiness",
    desc: "Build the communication clarity, professional presentation, and engineering mindset required to excel in tier-1 semiconductor firms.",
    badge: "CAREER"
  },
  {
    id: "placement-support",
    num: "08",
    title: "Domain Career Pathways",
    desc: "Receive dedicated guidance on career pathways across Analog Layout, Digital Physical Design, and Memory Layout to match your strengths.",
    badge: "VERIFIED"
  }
];

export default function CareerPrep() {
  const topRow = prepCards.slice(0, 3);
  const midLeft = prepCards[3];
  const midRight = prepCards[4];
  const bottomRow = prepCards.slice(5, 8);

  const renderCard = (card: typeof prepCards[0]) => (
    <div
      key={card.id}
      className="group relative bg-white border-2 border-black rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#1D4ED8] hover:border-[#1D4ED8] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
    >
      {/* Floating Corner Micro-Badge */}
      <div className="absolute -top-3 right-6 bg-black text-white px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase border border-black shadow-[2px_2px_0px_0px_#1D4ED8] group-hover:bg-[#1D4ED8] transition-colors z-10">
        {card.badge}
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono font-black text-[#1D4ED8] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
            STEP #{card.num}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-black text-[#0A192F] group-hover:text-[#1D4ED8] transition-colors leading-snug mb-2.5">
          {card.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {card.desc}
        </p>
      </div>
    </div>
  );

  return (
    <section id="career-prep" className="relative w-full py-24 bg-[#F8FAFC] border-t border-slate-200 overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Aligned Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-3">
            Prepare With Confidence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Technical knowledge is only one part of building a VLSI career. Our career-focused learning approach prepares you thoroughly across eight comprehensive industry pillars.
          </p>
        </div>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {/* Top Row: Cards 01, 02, 03 */}
          {topRow.map(renderCard)}

          {/* Middle Row Left: Card 04 */}
          {renderCard(midLeft)}

          {/* Middle Row Center: The 3D Extruded Center Emblem Tile */}
          <div className="relative bg-black text-white border-2 border-black rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1D4ED8] flex flex-col items-center justify-center text-center overflow-hidden min-h-[220px] group">
            {/* Subtle Circuit Wave Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

            {/* 3D Text Block */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-2 text-yellow-400 text-xs font-mono">
                <span className="tracking-widest uppercase text-slate-300 font-bold text-[10px]">LIFE SEMICONDUCTOR</span>
              </div>

              {/* Bold 3D Extruded Header */}
              <div className="my-1 select-none">
                <span className="text-3xl sm:text-4xl font-black tracking-tighter uppercase block text-white drop-shadow-[3px_3px_0px_#1D4ED8] transform -rotate-1">
                  CAREER
                </span>
                <span className="text-3xl sm:text-4xl font-black tracking-tighter uppercase block text-white drop-shadow-[3px_3px_0px_#1D4ED8] transform rotate-1 mt-0.5">
                  PREP
                </span>
              </div>

              <p className="text-xs text-slate-300 max-w-[220px] mt-2 leading-relaxed">
                Transform theoretical knowledge into tapeout-ready silicon engineering confidence.
              </p>

              <div className="mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                100% Industry Oriented
              </div>
            </div>
          </div>

          {/* Middle Row Right: Card 05 */}
          {renderCard(midRight)}

          {/* Bottom Row: Cards 06, 07, 08 */}
          {bottomRow.map(renderCard)}
        </div>
      </div>
    </section>
  );
}





