"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 md:py-40 bg-white text-[#0A192F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Minimalist Tag */}
          <div className="lg:col-span-3 pt-2">
            <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400 font-semibold select-none">
              MEET LIFE❤️
            </span>
          </div>

          {/* Right Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-9 max-w-4xl">
            {/* Big Impact Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-[#0A192F] leading-[1.18] mb-8 sm:mb-10">
              We&apos;re a specialized semiconductor training institute helping engineers close the gap between theoretical knowledge and real-world silicon tapeout expertise.
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-12 sm:mb-16">
              LIFE Semiconductor Institute is a dedicated VLSI training academy serving aspiring engineers and working professionals worldwide. Whether we are building foundational device physics mastery, teaching complex analog matching and layout-dependent effect (LDE) mitigation, structuring high-density memory arrays, or guiding physical design flows from netlist to GDSII signoff — we are driven by the opportunity to shape confident, industry-ready semiconductor professionals.
            </p>

            {/* Minimalist 3-Pillar Grid (Philosophy, Mission, Vision) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 pt-10 border-t border-slate-200">
              <div>
                <span className="text-xs font-mono text-slate-400 font-bold block mb-2">
                  01 / PHILOSOPHY
                </span>
                <h3 className="text-base font-bold text-[#0A192F] mb-2">
                  Learn by Doing
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Practical EDA tool implementation with real silicon design constraints and industry methodologies.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 font-bold block mb-2">
                  02 / MISSION
                </span>
                <h3 className="text-base font-bold text-[#0A192F] mb-2">
                  Career-Ready VLSI
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Bridge the gap between academic education and semiconductor industry recruitment standards.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 font-bold block mb-2">
                  03 / VISION
                </span>
                <h3 className="text-base font-bold text-[#0A192F] mb-2">
                  Global Excellence
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Empowering the next generation of analog, digital, and memory layout engineers globally.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
