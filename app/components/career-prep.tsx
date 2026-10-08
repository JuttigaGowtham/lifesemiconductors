"use client";

import React, { useRef, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const prepCards = [
  {
    step: "STEP 1.",
    title: "Technical Interviews",
    desc: "Master core CMOS physics, small-signal models, Pelgrom's matching law, and second-order nanometer effects frequently tested in technical rounds.",
  },
  {
    step: "STEP 2.",
    title: "Practical Scenarios",
    desc: "Learn how to tackle real-world floorplanning, routing congestion, latch-up mitigation, and physical verification design questions confidently.",
  },
  {
    step: "STEP 3.",
    title: "Project Articulation",
    desc: "Master the ability to clearly articulate your PDK project architectures (Op-Amp, SRAM, LDO, BGR), design challenges, and verification trade-offs.",
  },
  {
    step: "STEP 4.",
    title: "VLSI Resume Building",
    desc: "Structure your resume to effectively highlight EDA tool proficiencies (Cadence Virtuoso, Calibre), Linux workflows, and tapeout-style projects.",
  },
  {
    step: "STEP 5.",
    title: "Mock Technical Rounds",
    desc: "Simulate rigorous technical interview rounds with experienced semiconductor professionals and receive actionable feedback on strengths and gaps.",
  },
  {
    step: "STEP 6.",
    title: "EDA Sign-off Mastery",
    desc: "Gain deep familiarity with industrial tapeout flows, parasitic extraction (PEX/QRC), and EM/IR reliability signoff checks.",
  },
  {
    step: "STEP 7.",
    title: "Career Readiness",
    desc: "Build the communication clarity, professional presentation, and engineering mindset required to excel in tier-1 semiconductor firms.",
  },
  {
    step: "STEP 8.",
    title: "Domain Career Pathways",
    desc: "Receive dedicated guidance on career pathways across Analog Layout, Digital Physical Design, and Memory Layout to match your strengths.",
  },
  {
    step: "STEP 9.",
    title: "Offer & Networking",
    desc: "Learn industry compensation structures, offer evaluation strategies, and build a lasting professional network in semiconductor engineering.",
  },
  {
    step: "STEP 10.",
    title: "Silicon Productivity",
    desc: "Develop day-one team design review confidence, tapeout schedule discipline, and long-term career milestone execution.",
  },
];

export default function CareerPrep() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(3800);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDimensions = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (trackRef.current && containerRef.current) {
        const totalDistance = trackRef.current.scrollWidth - containerRef.current.clientWidth;
        setMaxTranslate(Math.max(totalDistance, 0));
      }
    };

    checkDimensions();
    window.addEventListener("resize", checkDimensions);
    // Recalculate after initial render settles
    const timer = setTimeout(checkDimensions, 300);

    return () => {
      window.removeEventListener("resize", checkDimensions);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;

      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollPrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const currentStep = Math.min(Math.floor(scrollProgress * 9.99) + 1, 10);

  return (
    <section
      id="career-prep"
      ref={sectionRef}
      className="relative w-full bg-[#0B0C0E] text-white border-t border-neutral-800 lg:h-[400vh] selection:bg-white selection:text-black"
    >
      {/* Sticky Full-Viewport Container on Desktop */}
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden py-16 lg:py-0">
        <div className="w-full h-full flex flex-col lg:flex-row">
          
          {/* Left Side: Giant Typography & Info */}
          <div className="w-full lg:w-[38%] xl:w-[34%] shrink-0 z-20 flex flex-col justify-between bg-[#0B0C0E] p-6 sm:p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-neutral-800">
            <div>
              {/* Step indicator placed directly ABOVE the heading */}
              <div className="mb-4">
                <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-400 font-semibold select-none">
                  STEP {String(currentStep).padStart(2, "0")} / 10
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#E5E5E5] leading-[0.88] select-none">
                HOW WE<br />WORK
              </h2>

              {/* Subheading / Description */}
              <p className="mt-8 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-md">
                Technical knowledge is only one part of building a successful VLSI career. Our career-focused learning approach prepares you thoroughly across ten comprehensive industry pillars.
              </p>
            </div>

            {/* Bottom Progress Bar & Arrows */}
            <div className="pt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* <button
                  onClick={scrollPrev}
                  aria-label="Previous step"
                  className="w-10 h-10 rounded-full border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer bg-neutral-900/60"
                >
                  <FiArrowLeft className="w-4 h-4" />
                </button> */}
                {/* <button
                  onClick={scrollNext}
                  aria-label="Next step"
                  className="w-10 h-10 rounded-full border border-neutral-800 hover:border-neutral-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer bg-neutral-900/60"
                >
                  <FiArrowRight className="w-4 h-4" />
                </button> */}
              </div>

              {/* Horizontal line progress indicator */}
              <div className="w-28 sm:w-36 bg-neutral-800 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-100 ease-out"
                  style={{ width: `${Math.max(scrollProgress * 100, 10)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Horizontal Scrolling Step Cards */}
          <div
            ref={containerRef}
            className="flex-1 overflow-hidden relative h-full flex items-center bg-[#0B0C0E]"
          >
            <div
              ref={trackRef}
              className="flex h-full w-max items-stretch overflow-x-auto lg:overflow-visible scroll-smooth no-scrollbar will-change-transform transition-transform duration-100 ease-out pr-12 lg:pr-24"
              style={
                isDesktop
                  ? { transform: `translateX(-${scrollProgress * maxTranslate}px)` }
                  : undefined
              }
            >
              {prepCards.map((card, idx) => (
                <div
                  key={card.step}
                  className="group relative bg-[#0B0C0E] hover:bg-[#111317] w-[300px] sm:w-[360px] lg:w-[400px] xl:w-[440px] shrink-0 h-full min-h-[460px] lg:min-h-full p-8 sm:p-10 lg:p-12 flex flex-col justify-between cursor-pointer border-r border-neutral-800 transition-colors duration-300"
                >
                  {/* Top: STEP Indicator with Red Accent Dot */}
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-mono font-bold tracking-wider uppercase text-neutral-200">
                      STEP {idx + 1}
                      <span className="text-[#FF4D2E]">.</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                      {String(idx + 1).padStart(2, "0")}/10
                    </span>
                  </div>

                  {/* Bottom: Card Title and Description */}
                  <div className="pt-20">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.15] mb-4">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-neutral-400 font-normal leading-relaxed">
                      {card.desc}
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
