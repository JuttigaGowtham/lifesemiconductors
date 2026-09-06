"use client";

const modules = [
  {
    num: "1",
    module: "Module 01",
    title: "Semiconductor & Analog Layout Fundamentals",
    topics: [
      "Semiconductor Basics",
      "CMOS Fundamentals",
      "MOS Devices",
      "Analog IC Design Overview",
      "Technology Files and Layers"
    ]
  },
  {
    num: "2",
    module: "Module 02",
    title: "Layout Design Fundamentals",
    topics: [
      "Layout Environment",
      "Layers",
      "Contacts",
      "Vias",
      "Design Rules",
      "Connectivity"
    ]
  },
  {
    num: "3",
    module: "Module 03",
    title: "Floor Planning & Device Placement",
    topics: [
      "Layout Planning",
      "Block Organization",
      "Power & Ground Planning",
      "Device Placement",
      "Proximity",
      "Symmetry",
      "Area Optimization"
    ]
  },
  {
    num: "4",
    module: "Module 04",
    title: "Device Matching Techniques",
    topics: [
      "Matching Fundamentals",
      "Common Centroid",
      "Interdigitation",
      "Dummy Devices",
      "Symmetrical Layout",
      "Gradient Effects"
    ]
  },
  {
    num: "5",
    module: "Module 05",
    title: "Analog Routing Techniques",
    topics: [
      "Metal Routing",
      "Signal Routing",
      "Power Routing",
      "Sensitive Signals",
      "Shielding",
      "Noise and Coupling Reduction"
    ]
  },
  {
    num: "6",
    module: "Module 06",
    title: "Advanced Analog Layout",
    topics: [
      "Guard Rings",
      "Isolation",
      "Latch-up",
      "Parasitic Effects",
      "Layout-Dependent Effects",
      "Reliability Considerations"
    ]
  },
  {
    num: "7",
    module: "Module 07",
    title: "DRC & LVS",
    topics: [
      "DRC Fundamentals",
      "DRC Error Analysis",
      "DRC Debugging",
      "LVS Fundamentals",
      "LVS Debugging",
      "Connectivity Verification"
    ]
  },
  {
    num: "8",
    module: "Module 08",
    title: "Parasitic Extraction & Post-Layout Analysis",
    topics: [
      "Parasitics",
      "Resistance & Capacitance",
      "Extraction",
      "Post-Layout Netlist",
      "Parasitic-Aware Simulation",
      "Performance Comparison"
    ]
  },
  {
    num: "9",
    module: "Module 09",
    title: "Practical Projects",
    topics: [
      "Analog Block Layout",
      "Matching Exercises",
      "Complete Layout Implementation",
      "DRC/LVS Closure",
      "Debugging",
      "Optimization"
    ]
  },
  {
    num: "10",
    module: "Module 10",
    title: "Interview & Career Preparation",
    topics: [
      "Analog Layout Interview Concepts",
      "Technical Questions",
      "Practical Interview Exercises",
      "Project Discussion",
      "Resume Guidance",
      "Semiconductor Career Preparation"
    ]
  }
];

export default function CurriculumAccordion() {
  return (
    <section id="curriculum" className="relative w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#6055EE]">
              COURSE CURRICULUM
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Structured Learning. Practical Implementation.
          </h2>
        </div>

        {/* 3 Cards per Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div
              key={mod.module}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-indigo-950/5 hover:border-[#6055EE] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              {/* Large Background Watermark Number as shown in image */}
              <span className="absolute top-2 right-4 font-black text-7xl sm:text-8xl text-slate-200/70 group-hover:text-indigo-100/90 transition-colors pointer-events-none select-none z-0 tracking-tighter leading-none">
                {mod.num}
              </span>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#6055EE] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-lg">
                    {mod.module}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0A192F] group-hover:text-[#6055EE] transition-colors leading-snug mb-4">
                  {mod.title}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {mod.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#6055EE] font-bold text-xs mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
