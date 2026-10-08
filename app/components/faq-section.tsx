"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "Who can join LIFE Semiconductor Institute?",
    answer:
      "Our programs are suitable for engineering students (ECE, EEE, CSE, Core), fresh graduates, VLSI aspirants, and working professionals looking to upskill or transition into the semiconductor industry, depending on course prerequisites.",
  },
  {
    question: "Do I need prior VLSI experience?",
    answer:
      "Prerequisites vary by course. For foundational courses, a basic understanding of electronics and CMOS concepts is helpful. For specialized advanced courses, foundational familiarity is recommended, which we also cover in the introductory modules.",
  },
  {
    question: "Is the training practical?",
    answer:
      "Yes, 100%. Our core philosophy is practical implementation. We combine conceptual lectures with extensive hands-on lab exercises, schematic-to-layout drafting, physical verification (DRC/LVS debugging), and tapeout-style projects.",
  },
  {
    question: "Will I work on projects?",
    answer:
      "Yes. Practical projects and tapeout exercises (such as Op-Amps, Differential Pairs, Bandgap References, 6T/8T SRAM, and Physical Design P&R flows) are fully integrated into each training track.",
  },
  {
    question: "Is interview preparation included?",
    answer:
      "Yes. Applicable programs include dedicated interview-focused modules covering core conceptual questions, practical schematic/layout drawing tests, project defense methodology, and resume guidance.",
  },
  {
    question: "Which tools are covered?",
    answer:
      "Tools depend on the selected training program. Relevant industry-standard EDA tools (including Cadence Virtuoso, Siemens Calibre / Cadence PVS, and Linux environments) and verification methodologies are introduced as part of applicable programs.",
  },
  {
    question: "How can I enquire about a course?",
    answer:
      "You can contact LIFE Semiconductor Institute directly through phone (+91 9618347989), WhatsApp (+91 9618347989), email (info@lifesemiconductors.com), or by submitting the enquiry form on this website.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAFAFC] text-neutral-900 border-t border-neutral-200 overflow-hidden selection:bg-black selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]">
              Still have questions?
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Find clear answers to common questions about our semiconductor training curriculum, tools, and career support.
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Graphic Character on Left, FAQ List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-28">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] flex items-center justify-center">
              <Image
                src="/Faq.jpg"
                alt="Still Have Questions?"
                width={428}
                height={687}
                className="w-full h-auto max-h-[580px] object-contain  shadow-xs"
                priority
              />
            </div>
          </div>

          {/* Right Column: FAQ Accordion Stack */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Accordion Stack */}
            <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={faq.question} className="py-6 sm:py-7 transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group py-1"
                    >
                      <span className="text-lg sm:text-xl font-medium text-neutral-900 group-hover:text-black transition-colors leading-snug">
                        {faq.question}
                      </span>
                      
                      {/* Plus Icon that rotates on open */}
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "border-black bg-black text-white" 
                          : "border-neutral-300 group-hover:border-black text-neutral-900 bg-white"
                      }`}>
                        <FiPlus className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`} />
                      </div>
                    </button>

                    {/* Collapsible Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pt-4 pb-2" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl pr-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
