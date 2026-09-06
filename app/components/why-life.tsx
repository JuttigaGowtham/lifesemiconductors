"use client";

const steps = [
  {
    num: "01",
    stepLabel: "Step 1",
    title: "Strong Fundamentals",
    description: "Build a clear understanding of semiconductor and VLSI concepts before moving into advanced topics."
  },
  {
    num: "02",
    stepLabel: "Step 2",
    title: "Practical Approach",
    description: "Learn through exercises, implementation, debugging, and project-based learning."
  },
  {
    num: "03",
    stepLabel: "Step 3",
    title: "Industry-Relevant Skills",
    description: "Understand methodologies, tools, and workflows used in semiconductor design environments."
  },
  {
    num: "04",
    stepLabel: "Step 4",
    title: "Project-Based Learning",
    description: "Apply technical concepts through practical design and layout projects."
  },
  {
    num: "05",
    stepLabel: "Step 5",
    title: "Verification Mindset",
    description: "Learn to identify, analyze, debug, and resolve design and physical verification issues."
  },
  {
    num: "06",
    stepLabel: "Step 6",
    title: "Career Preparation",
    description: "Develop technical confidence through interview-oriented learning and project discussions."
  }
];

export default function WhyLife() {
  return (
    <section id="why-life" className="relative w-full py-28 bg-[#FBFBFC] text-black border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header matching reference image */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-2">
            Our Process
          </h2>
          
          {/* Blue Accent Underline Bar */}
          <div className="w-14 h-1 bg-[#1D4ED8] mx-auto rounded-full mt-3" />
        </div>

        {/* Process Steps (2 Rows of 3 Steps with Continuous Connector Lines) */}
        <div className="space-y-20">
          
          {/* Row 1: Steps 01 — 02 — 03 */}
          <div className="relative">
            {/* Continuous Background Horizontal Line */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-slate-300 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {steps.slice(0, 3).map((item) => (
                <div key={item.num} className="flex flex-col items-center text-center">
                  
                  {/* Big Outlined Number with white bg masking the connector line */}
                  <div className="px-6 bg-[#FBFBFC] mb-4">
                    <span className="text-6xl sm:text-7xl font-light font-mono text-transparent [-webkit-text-stroke:2.5px_#222] tracking-normal select-none block leading-none">
                      {item.num}
                    </span>
                  </div>

                  {/* Step Label in Blue */}
                  <span className="text-base sm:text-lg font-bold text-[#1D4ED8] mb-2 tracking-wide">
                    {item.stepLabel}
                  </span>

                  {/* Title & Description */}
                  <div className="max-w-[280px]">
                    <h3 className="text-base font-bold text-[#0A192F] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Steps 04 — 05 — 06 */}
          <div className="relative pt-6">
            {/* Continuous Background Horizontal Line */}
            <div className="hidden md:block absolute top-[68px] left-[15%] right-[15%] h-[2px] bg-slate-300 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {steps.slice(3, 6).map((item) => (
                <div key={item.num} className="flex flex-col items-center text-center">
                  
                  {/* Big Outlined Number with white bg masking the connector line */}
                  <div className="px-6 bg-[#FBFBFC] mb-4">
                    <span className="text-6xl sm:text-7xl font-light font-mono text-transparent [-webkit-text-stroke:2.5px_#222] tracking-normal select-none block leading-none">
                      {item.num}
                    </span>
                  </div>

                  {/* Step Label in Blue */}
                  <span className="text-base sm:text-lg font-bold text-[#1D4ED8] mb-2 tracking-wide">
                    {item.stepLabel}
                  </span>

                  {/* Title & Description */}
                  <div className="max-w-[280px]">
                    <h3 className="text-base font-bold text-[#0A192F] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
