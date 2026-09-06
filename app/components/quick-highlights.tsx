"use client";

const highlights = [
  {
    step: "01",
    title: "Practical Learning",
    description: "Learn concepts through hands-on exercises and real-world implementation.",
  },
  {
    step: "02",
    title: "Industry-Oriented Curriculum",
    description: "Develop knowledge aligned with modern semiconductor design methodologies.",
  },
  {
    step: "03",
    title: "Hands-on Projects",
    description: "Apply your learning through practical design and custom layout projects.",
  },
  {
    step: "04",
    title: "Interview Preparation",
    description: "Strengthen core technical concepts and prepare thoroughly for VLSI interviews.",
  },
];

export default function QuickHighlights() {
  return (
    <section className="relative w-full py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative p-7 rounded-3xl bg-white border border-slate-200/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/5 hover:border-[#1D4ED8] flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Top Accent Line on Hover - Consistent Blue for every card */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1D4ED8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Header with Number Pill and Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-[#0A192F] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-300">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0A192F] mb-3 group-hover:text-[#1D4ED8] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
