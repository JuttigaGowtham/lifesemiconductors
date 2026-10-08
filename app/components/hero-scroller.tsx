"use client";

import Link from "next/link";

const programs = [
  { name: "Analog IC Layout Design", href: "/#analog-layout" },
  { name: "Physical Design (PD)", href: "/physical-design" },
  { name: "Analog Circuit Design", href: "/#courses" },
  { name: "Memory Layout Design", href: "/#courses" },
];

export default function HeroScroller() {
  return (
    <div className="relative w-full max-w-[520px] flex flex-col items-start select-none">
      {/* Vertical Scroll Window with Top & Bottom Fade Mask */}
      <div
        className="relative w-full overflow-hidden h-[160px] sm:h-[180px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, transparent 100%)",
        }}
      >
        {/* Continuous Upward Scrolling Wrapper */}
        <div className="flex flex-col gap-3.5 sm:gap-4 animate-marquee-up">
          {[...programs, ...programs, ...programs, ...programs].map((program, idx) => (
            <div key={`${program.name}-${idx}`} className="py-1 flex items-center">
              <Link
                href={program.href}
                className="group block w-full text-left tracking-tight cursor-pointer"
              >
                <span className="leading-none whitespace-nowrap text-lg sm:text-xl md:text-2xl font-medium text-neutral-800 group-hover:text-black transition-colors">
                  {program.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
