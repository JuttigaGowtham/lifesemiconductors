"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "Who can join LIFE Semiconductor Institute?",
    answer: "Our programs are suitable for engineering students (ECE, EEE, CSE, Core), fresh graduates, VLSI aspirants, and working professionals looking to upskill or transition into the semiconductor industry, depending on course prerequisites."
  },
  {
    question: "Do I need prior VLSI experience?",
    answer: "Prerequisites vary by course. For foundational courses, a basic understanding of electronics and CMOS concepts is helpful. For specialized advanced courses, foundational familiarity is recommended, which we also cover in the introductory modules."
  },
  {
    question: "Is the training practical?",
    answer: "Yes, 100%. Our core philosophy is practical implementation. We combine conceptual lectures with extensive hands-on lab exercises, schematic-to-layout drafting, physical verification (DRC/LVS debugging), and tapeout-style projects."
  },
  {
    question: "Will I work on projects?",
    answer: "Yes. Practical projects and tapeout exercises (such as Op-Amps, Differential Pairs, Bandgap References, 6T/8T SRAM, and Physical Design P&R flows) are fully integrated into each training track."
  },
  {
    question: "Is interview preparation included?",
    answer: "Yes. Applicable programs include dedicated interview-focused modules covering core conceptual questions, practical schematic/layout drawing tests, project defense methodology, and resume guidance."
  },
  {
    question: "Which tools are covered?",
    answer: "Tools depend on the selected training program. Relevant industry-standard EDA tools (including Cadence Virtuoso, Siemens Calibre / Cadence PVS, and Linux environments) and verification methodologies are introduced as part of applicable programs."
  },
  {
    question: "How can I enquire about a course?",
    answer: "You can contact LIFE Semiconductor Institute directly through phone (+91 9618347989), WhatsApp (+91 9618347989), email (info@lifesemiconductors.com), or by submitting the enquiry form on this website."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full py-24 bg-white text-black border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid: Large Character on Left, FAQ List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Graphic Character Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] flex items-center justify-center">
              <Image
                src="/faq-character.png"
                alt="Still Have Questions?"
                width={428}
                height={687}
                className="w-full h-auto max-h-[580px] object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Title and Animated FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Bold Headline matching reference layout */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight mb-8">
              Still have questions?
            </h2>

            {/* Accordion Stack with smooth open/close height and rotation animations */}
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={faq.question} className="py-4 sm:py-5 transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group py-1"
                    >
                      <span className="text-base sm:text-lg font-semibold text-black group-hover:text-blue-600 transition-colors leading-snug">
                        {faq.question}
                      </span>
                      
                      {/* Circular Plus Icon that smoothly rotates 45 degrees into (x) on open */}
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "border-black bg-black text-white" 
                          : "border-slate-300 group-hover:border-black text-black"
                      }`}>
                        <FiPlus className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`} />
                      </div>
                    </button>

                    {/* Smooth Animated Accordion Collapse/Expand container */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed pr-10 pb-1">
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
