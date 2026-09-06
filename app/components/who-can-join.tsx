"use client";

const targetAudiences = [
  {
    title: "Engineering Students",
    subtitle: "ECE / EEE / Core Tech",
    description: "Students from ECE, EEE, and related engineering backgrounds who want to explore VLSI and get ahead before graduating.",
    badge: "Undergrad / Masters",
    accent: "text-[#1D4ED8] border-blue-200 bg-blue-50"
  },
  {
    title: "Fresh Graduates",
    subtitle: "Immediate Job Seekers",
    description: "Graduates looking to bridge the college-to-industry gap and build the solid technical foundation required for semiconductor roles.",
    badge: "Entry-Level Focus",
    accent: "text-indigo-600 border-indigo-200 bg-indigo-50"
  },
  {
    title: "VLSI Aspirants",
    subtitle: "Specialized Seekers",
    description: "Learners who want to specialize deeply in Analog Design, Digital P&R, Memory, Physical Design, or Custom Layout.",
    badge: "Domain Specialists",
    accent: "text-[#0284C7] border-cyan-200 bg-cyan-50"
  },
  {
    title: "Working Professionals",
    subtitle: "Skill Upgrades",
    description: "Engineers looking to strengthen their semiconductor knowledge, switch domains, or upskill in specialized VLSI workflows.",
    badge: "Upskilling Track",
    accent: "text-emerald-600 border-emerald-200 bg-emerald-50"
  },
  {
    title: "Career Transitioners",
    subtitle: "Cross-Domain Switch",
    description: "Technical professionals from software, embedded, or electrical fields looking to pivot into the high-growth microchip industry.",
    badge: "Career Switch",
    accent: "text-amber-600 border-amber-200 bg-amber-50"
  }
];

export default function WhoCanJoin() {
  return (
    <section className="relative w-full py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-4">
            Who Is LIFE Training For?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our structured programs are tailored to help learners at various career stages enter and advance in the semiconductor sector.
          </p>
        </div>

        {/* 5 Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((item, idx) => {
            return (
              <div
                key={item.title}
                className={`group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#1D4ED8] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500">
                      {item.subtitle}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-[#0A192F] border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    <h3 className="text-xl font-bold text-[#0A192F] group-hover:text-[#1D4ED8] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
