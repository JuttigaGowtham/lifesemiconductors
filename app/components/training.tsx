"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Training() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    {
      title: "Analog & Mixed-Signal Layout",
      subtitle: "Custom IC Design",
      duration: "12 Weeks • Live Interactive",
      description: "Master physical design principles for analog blocks. Learn CMOS mismatch rules, floorplanning, and active device routing.",
      highlights: [
        "CMOS Devices & Physics basics",
        "Guard rings & latch-up prevention",
        "Differential pair matching techniques",
        "Full DRC/LVS validation runs"
      ],
      href: "/training/analog-layout"
    },
    {
      title: "Digital Physical Design (P&R)",
      subtitle: "Automated Flow (APR)",
      duration: "16 Weeks • Bootcamp",
      description: "Learn RTL-to-GDSII digital flow. Practice floorplanning, placement, clock tree synthesis (CTS), and timing closure.",
      highlights: [
        "Floorplanning & power grid design",
        "Automated cell placement & routing",
        "Clock Tree Synthesis (CTS) optimization",
        "Static Timing Analysis (STA) sign-off"
      ],
      href: "/training/digital-pr"
    },
    {
      title: "RF Layout Engineering",
      subtitle: "High Frequency Layout",
      duration: "8 Weeks • Advanced Specialist",
      description: "Understand high-frequency signal requirements. Layout RF components, match impedance, and shield noise paths.",
      highlights: [
        "Substrate noise isolation techniques",
        "RF passive component placement",
        "Transmission line matching layouts",
        "Parasitic extraction & post-layout simulation"
      ],
      href: "/training/rf-layout"
    },
    {
      title: "Standard Cell Layout Design",
      subtitle: "Library Cell Creation",
      duration: "6 Weeks • Intensive",
      description: "Learn the fundamentals of library development. Design standard logical cells (NAND, NOR, DFF) optimized for density, power, and speed.",
      highlights: [
        "Logic gate schematic to layout",
        "Standard height cell grid constraints",
        "Pin placement & boundary rules",
        "Library characterization basics"
      ],
      href: "/training/standard-cell"
    },
    {
      title: "Memory Layout Design",
      subtitle: "High Density Memory",
      duration: "10 Weeks • Specialist",
      description: "Dive into memory array layouts. Master SRAM/ROM bitcell placing, wordline/bitline routing, decoders, and high-density compiler layouts.",
      highlights: [
        "SRAM bitcell layout & sizing",
        "Sense amplifier design placement",
        "Decoders & column mux routing",
        "Symmetry and pitch-matching rules"
      ],
      href: "/training/memory-layout"
    },
    {
      title: "ESD & I/O Pad Layout Design",
      subtitle: "Robust Circuit Protection",
      duration: "8 Weeks • Advanced",
      description: "Understand electrical overstress protection. Layout robust ESD clamps, high-current I/O cell pads, and custom guard ring boundaries.",
      highlights: [
        "ESD protection device geometries",
        "High-current bus routing rules",
        "Guard ring isolation structures",
        "Latch-up prevention verification"
      ],
      href: "/training/esd-io-layout"
    }
  ];

  return (
    <section className="relative w-full bg-[#F4F3EF] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center border-t border-[#E2E1DD] overflow-hidden">
      
      {/* Premium Parallax Background shape */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.04),transparent_50%)]"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      />

      <div className="relative z-10 w-full max-w-6xl text-left mb-16">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7C3AED]">
          VLSI Curriculum
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1B1A] mt-2 mb-4">
          Accelerate Your VLSI Career
        </h2>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          Our bootcamps provide hands-on experience using official EDA tool flows, preparing you directly for layout design roles in global semiconductor firms.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div 
            key={course.title}
            className="bg-[#F9F8F6] rounded-[24px] sm:rounded-[28px] border border-[#E2E1DD] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] transition-all duration-300 group"
          >
            <div>
              {/* Title & Duration */}
              <div className="mb-4">
                <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                  {course.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-[#1C1B1A] mt-1 leading-snug">
                  {course.title}
                </h3>
                <span className="text-xs text-[#7C3AED] font-medium block mt-2">
                  {course.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Highlights Checklist */}
              <div className="border-t border-slate-200/80 pt-5 mb-8">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  Syllabus Core
                </span>
                <ul className="flex flex-col gap-2.5">
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-xs text-[#4E4D4A]">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button: Color-fill sliding animation from left to right */}
            <Link
              href={course.href}
              className="relative w-full py-3.5 rounded-xl text-center text-xs font-bold text-[#7C3AED] border border-[#7C3AED] hover:text-white transition-colors duration-300 overflow-hidden group/btn block"
            >
              <span className="absolute inset-0 bg-[#7C3AED] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/btn:scale-x-100 z-0" />
              <span className="relative z-10">Download Syllabus</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
