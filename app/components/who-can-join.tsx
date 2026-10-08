"use client";

import React from "react";
import Image from "next/image";

interface AudienceItem {
  id: string;
  title: string;
  role: string;
  image: string;
  description: string;
}

const targetAudiences: AudienceItem[] = [
  {
    id: "students",
    title: "Engineering Students",
    role: "Undergrad & Masters",
    image: "/student.jpg",
    description: "Build foundational semiconductor physics, CMOS layout rules, and practical EDA project confidence while completing your degree.",
  },
  {
    id: "fresh-graduates",
    title: "Fresh Graduates",
    role: "Entry-Level VLSI",
    image: "/freshgradute.jpg",
    description: "Bridge the gap between academic theory and tapeout-ready industry recruitment standards with real-world IC design flows.",
  },
  {
    id: "vlsi-aspirants",
    title: "VLSI Aspirants",
    role: "Domain Specialists",
    image: "/vlsi.jpg",
    description: "Master specialized tracks across analog layout matching, memory array compilers, or digital physical implementation (P&R).",
  },
  {
    id: "working-professionals",
    title: "Working Professionals",
    role: "Upskilling Track",
    image: "/workingprofessionals.jpg",
    description: "Upgrade technical competencies to match modern foundry PDKs, FinFET considerations, and advanced verification signoff tools.",
  },
  {
    id: "career-transitioners",
    title: "Career Transitioners",
    role: "Cross-Domain Switch",
    image: "/carrertranistors.jpg",
    description: "Pivot seamlessly from embedded firmware, PCB engineering, or software domains into core semiconductor layout and IC roles.",
  },
];

export default function WhoCanJoin() {
  return (
    <section id="who-can-join" className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-24 sm:pb-32 lg:pb-40 bg-white text-neutral-900 overflow-hidden selection:bg-black selection:text-white border-t border-neutral-200">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Impact Sticky Headline matching reference image */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.25rem] font-bold tracking-tight text-neutral-950 leading-[1.04] mb-8">
              Who can join?
              <br />
              <span className="text-neutral-400">LIFE.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-md">
              From engineering students building first-principles mastery to working professionals executing seamless career pivots into silicon design.
            </p>
          </div>

          {/* Right Column: 2-Column Profiles Grid matching reference image */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-12 lg:gap-x-16 gap-y-14 sm:gap-y-18">
              {targetAudiences.map((item) => (
                <div key={item.id} className="group flex flex-col">
                  {/* Rounded Profile Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm bg-neutral-100 mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-cover object-top filter grayscale-20 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  {/* Profile Details with Left Border */}
                  <div className="border-l-2 border-neutral-200 group-hover:border-black pl-5 transition-colors duration-300">
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 leading-snug mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base font-normal text-neutral-500 mb-2.5">
                      {item.role}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
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
