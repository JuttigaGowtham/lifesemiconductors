"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

interface ShowcaseCard {
  id: string;
  title: string;
  image: string;
  description: string;
  targetHref: string;
}

const showcaseCards: ShowcaseCard[] = [
  {
    id: "analog-layout",
    title: "Analog Layout",
    image: "/analoglayout.jpg",
    description: "Master custom analog silicon layout on industrial PDKs with device matching, common-centroid symmetry, guard rings, parasitic extraction, and DRC/LVS sign-off verification.",
    targetHref: "/analog-layout",
  },
  {
    id: "physical-design",
    title: "Physical Design",
    image: "/vlsi.jpg",
    description: "Learn the complete physical implementation flow of digital designs: floorplanning, placement, clock tree synthesis (CTS), timing closure, and DRC/LVS sign-off verification.",
    targetHref: "/physical-design",
  },
  {
    id: "memory-layout",
    title: "Memory Layout",
    image: "/memory layout.jpg",
    description: "Develop hands-on expertise in semiconductor memory circuits: SRAM bitcell architecture, peripheral decoders, sense amplifiers, and pitch-matched layout techniques.",
    targetHref: "/memory-layout",
  },
  {
    id: "analog-design",
    title: "Analog Design",
    image: "/circulam.jpg",
    description: "Build a strong foundation in analog circuit design and understand the principles behind analog integrated circuits, Op-Amps, and Bandgap references.",
    targetHref: "/training",
  },
  {
    id: "memory-design",
    title: "Memory Design",
    image: "/footer-chip-design.jpg",
    description: "Master high-speed semiconductor memory architecture: SRAM bitcell design, sense amplifiers, wordline decoders, write drivers, and read/write margin analysis.",
    targetHref: "/memory-layout",
  },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll controls (Right-to-left continuous flow)
  const scrollNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector<HTMLElement>("[data-card-item]");
    const cardStep = card ? card.offsetWidth + 28 : 500;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 15) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardStep, behavior: "smooth" });
    }
  };

  // 2-second automatic right-to-left scroll interval
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="hero" className="relative w-full flex flex-col overflow-hidden bg-[#FAFAFC] selection:bg-black selection:text-white">
      {/* Top Hero Content Area with Modern Dot Grid Background */}
      <div className="relative w-full flex flex-col items-center justify-start pt-32 sm:pt-40 md:pt-44 pb-12 sm:pb-16 overflow-hidden bg-[#FAFAFC]">
        {/* Visible High-Tech Dot Matrix Grid - Upto below heading and paragraph only */}
        <div
          data-parallax="-0.03"
          className="absolute inset-x-0 top-0 h-[560px] sm:h-[620px] md:h-[680px] pointer-events-none overflow-hidden bg-[radial-gradient(rgba(0,0,0,0.14)_1.5px,transparent_1.5px)] [background-size:24px_24px] will-change-transform"
          style={{
            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        />

        {/* Hero Content - Centered */}
        <div
          data-parallax="0.06"
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 w-full text-center flex flex-col items-center justify-center will-change-transform"
        >
          {/* 1. Top Pill Badge: Slots Alert */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all duration-300 mb-8 sm:mb-10 group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-neutral-800">
              Limited slots available?
            </span>
            <span className="text-xs text-neutral-400 group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>

          {/* 2. Bold Two-Line Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold tracking-tight text-neutral-950 leading-[1.12] mb-6 text-center max-w-5xl">
            <span>Masters in Semiconductor</span>
          </h1>

          {/* 3. Subtitle / Narrative Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            In today’s world, life without electronics is unimaginable. From communication and healthcare to education and entertainment, semiconductors power modern life. They are the heartbeat of technology and the foundation of human progress.
          </p>

          {/* 4. Dark Pill CTA Button */}
          <Link
            href="/training"
            className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black text-white hover:bg-neutral-800 font-medium text-sm sm:text-base shadow-[0_12px_28px_rgba(0,0,0,0.18)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mb-8"
          >
            <span>Explore Courses</span>
          </Link>

          {/* 5. Social Proof: Overlapping Avatars + Rating Stars */}
          <div className="flex items-center gap-4">
            {/* Overlapping Avatars */}
            <div className="flex items-center -space-x-2.5">
              <div className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full ring-2 ring-white overflow-hidden bg-neutral-200">
                <Image src="/student.jpg" alt="Trained Engineer" fill className="object-cover" />
              </div>
              <div className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full ring-2 ring-white overflow-hidden bg-neutral-200">
                <Image src="/freshgradute.jpg" alt="Trained Engineer" fill className="object-cover" />
              </div>
              <div className="relative w-8 sm:w-9 h-8 sm:h-9 rounded-full ring-2 ring-white overflow-hidden bg-neutral-200">
                <Image src="/workingprofessionals.jpg" alt="Trained Engineer" fill className="object-cover" />
              </div>
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full ring-2 ring-white bg-neutral-900 text-white flex items-center justify-center text-[10px] sm:text-[11px] font-bold font-mono">
                +50
              </div>
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-0.5 text-black text-xs leading-none">
                {"★★★★★"}
              </div>
              <span className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-1">
                From 50+ Placed Engineers
              </span>
            </div>
          </div>
        </div>

        {/* Showcase Cards with 2-Second Right-to-Left Auto-Scroll */}
        <div
          id="courses"
          data-parallax="0.03"
          className="relative z-10 w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 will-change-transform"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Horizontal Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-7 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-4 pb-8 px-1"
          >
            {showcaseCards.map((card) => (
              <div
                key={card.id}
                data-card-item
                className="w-[360px] sm:w-[420px] md:w-[480px] lg:w-[520px] xl:w-[540px] min-h-[520px] sm:min-h-[560px] md:min-h-[600px] shrink-0 snap-start bg-white rounded-[32px] sm:rounded-[36px] p-5 sm:p-7 md:p-8 border border-neutral-200/90 shadow-[0_6px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* 1. Top Half Image Preview Box (Enlarged with Rounded Corners, No Badge) */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-[24px] sm:rounded-[28px] overflow-hidden mb-6 bg-neutral-100 border border-neutral-100 shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* 2. Track Title & Description */}
                <div className="flex flex-col flex-1 justify-between">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl md:text-[1.7rem] font-bold tracking-tight text-neutral-950 mb-3 sm:mb-4 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] md:text-base text-neutral-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* 3. Bottom Explore Link */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 group-hover:text-black transition-colors">
                      Explore Courses
                    </span>
                    <Link
                      href={card.targetHref}
                      aria-label={`Explore ${card.title}`}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-100 hover:bg-black text-neutral-700 hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 shadow-2xs group/arrow"
                    >
                      <FiArrowUpRight className="w-5 h-5 transition-transform group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Width Edge-to-Edge Marquee Ticker - Batch Alert Bar */}
      <div className="relative z-10 w-full overflow-hidden bg-black text-white border-y border-neutral-800 shadow-xl">
        <div className="py-4 sm:py-5 border-b border-white/10 overflow-hidden flex select-none bg-black">
          <div className="animate-marquee-right whitespace-nowrap flex items-center font-[family-name:var(--font-space-grotesk)] font-medium text-sm sm:text-base md:text-lg tracking-tight text-white">
            {Array.from({ length: 8 }).map((_, idx) => (
              <span key={idx} className="shrink-0 pr-10 sm:pr-16 flex items-center gap-6">
                <Link
                  href="/contact"
                  className="text-white hover:text-amber-300 transition-colors inline-flex items-center gap-2"
                >
                  <span> New Batch Alert! Analog Layout Training Batch Starts October 20th | Enroll Now – Limited Seats Available!</span>
                </Link>
                <span className="text-neutral-600 font-mono text-xs select-none">✦</span>
              </span>
            ))}
          </div>
        </div> 
      </div>
    </section>
  );
}
