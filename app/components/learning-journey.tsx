import Image from "next/image";

export default function LearningJourney() {
  return (
    <section id="journey" className="relative w-full py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight leading-tight mb-4">
            From Fundamentals to Industry Readiness
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our learning methodology follows a disciplined 8-step path designed to turn theoretical knowledge into tangible chip design capability.
          </p>
        </div>

        {/* Learning Journey Visual Flowchart */}
        <div className="w-full flex justify-center items-center py-4">
          <div className="relative w-full max-w-4xl flex justify-center">
            <Image
              src="/learn.png"
              alt="From Fundamentals to Industry Readiness Learning Journey"
              width={1008}
              height={1122}
              className="w-full h-auto max-h-[800px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

