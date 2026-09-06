"use client";

import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMessageCircle, FiMail, FiMapPin, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-white text-black border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">

          {/* Col 1: Institute Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white px-3 py-1.5 rounded-xl flex items-center justify-center w-fit border border-slate-200 shadow-sm">
              <Image
                src="/LIFE FINAL.jpg"
                alt="LIFE Semiconductor Institute"
                width={140}
                height={30}
                className="h-6 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-black leading-relaxed">
              <strong className="text-black font-semibold">LIFE Semiconductor Institute</strong> provides practical and industry-focused training helping learners build strong technical foundations and practical skills for the semiconductor and VLSI industry.
            </p>

            <div className="pt-2 text-xs text-black font-semibold tracking-wide">
              Practical. Industry-Focused. Career-Ready.
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-black">
              <li><Link href="/#hero" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/#courses" className="hover:text-blue-600 transition-colors">Courses</Link></li>
              <li><Link href="/#projects" className="hover:text-blue-600 transition-colors">Projects</Link></li>
              <li><Link href="/#why-life" className="hover:text-blue-600 transition-colors">Why LIFE</Link></li>
              <li><Link href="/#journey" className="hover:text-blue-600 transition-colors">Learning Journey</Link></li>
              <li><Link href="/#insights" className="hover:text-blue-600 transition-colors">Insights</Link></li>
              <li><Link href="/#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black">
              Training Courses
            </h4>
            <ul className="space-y-2 text-xs text-black">
              <li><Link href="/#courses" className="hover:text-blue-600 transition-colors">Physical Design</Link></li>
              <li><Link href="/#courses" className="hover:text-blue-600 transition-colors">Analog Design</Link></li>
              <li><Link href="/#analog-layout" className="hover:text-blue-600 transition-colors font-medium">Analog Layout (3-Month Flagship)</Link></li>
              <li><Link href="/#curriculum" className="hover:text-blue-600 transition-colors">Analog Layout 10-Module Syllabus</Link></li>
              <li><Link href="/#courses" className="hover:text-blue-600 transition-colors">Memory Design</Link></li>
              <li><Link href="/#courses" className="hover:text-blue-600 transition-colors">Memory Layout</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-black">
              Contact Institute
            </h4>
            <div className="space-y-3 text-xs text-black">
              <div className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-black shrink-0" />
                <a href="tel:+919618347989" className="text-black hover:text-blue-600 font-medium transition-colors">
                  +91 9618347989
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FiMessageCircle className="w-4 h-4 text-black shrink-0" />
                <a
                  href="https://wa.me/919618347989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-600 font-medium hover:underline"
                >
                  WhatsApp: +91 9618347989
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-black shrink-0" />
                <a href="mailto:info@lifesemiconductors.com" className="text-black hover:text-blue-600 transition-colors">
                  info@lifesemiconductors.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <FiMapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span className="text-black leading-relaxed">
                  Silicon Technology Hub, HITEC City, Hyderabad, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black">
          <div>
            © 2026 LIFE Semiconductor Institute. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 p-2.5 rounded-xl bg-slate-100 border border-slate-300 text-black hover:text-white hover:bg-black transition-all shadow-sm"
              title="Scroll to Top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Brand Watermark Text */}
        <div className="w-full text-center mt-12 select-none pointer-events-none opacity-20">
          <span
            style={{ fontFamily: "var(--font-dancing-script), 'Dancing Script', cursive" }}
            className="text-[11vw] sm:text-[9vw] md:text-[7.5vw] font-bold text-black tracking-tight font-cursive block leading-none"
          >
            LIFE Semiconductor Institute
          </span>
        </div>

      </div>
    </footer>
  );
}
