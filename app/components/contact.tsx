"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  FiMessageSquare, 
  FiMapPin, 
  FiPhone, 
  FiFacebook, 
  FiTwitter, 
  FiLinkedin, 
  FiYoutube, 
  FiGlobe 
} from "react-icons/fi";

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);

  // Parallax Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#F9F8F6] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 flex items-center justify-center overflow-hidden">
      
      {/* Premium Parallax Background shape to add depth safely without misaligning content */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.06),transparent_50%)]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      {/* Outer Card Wrapper (replicates the reference double-border and card shadow) */}
      <div className="relative z-10 w-full max-w-6xl bg-white border border-[#E2E1DD] rounded-[24px] sm:rounded-[40px] p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
        
        {/* Left Pane: Brand, Contact Details & Social Links */}
        <div className="md:col-span-5 flex flex-col justify-between py-4">
          <div>
            {/* Logo */}
            <div className="mb-12 flex justify-start">
              <div className="bg-white/95 px-3 py-1 rounded-xl flex items-center justify-center border border-slate-200 shadow-sm">
                <Image
                  src="/LIFE FINAL.jpg"
                  alt="Life Semiconductors Logo"
                  width={150}
                  height={30}
                  className="h-6 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Contact Information List */}
            <div className="flex flex-col gap-8">
              {/* Chat item */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-slate-50 border border-[#E2E1DD] rounded-xl flex items-center justify-center shrink-0">
                  <FiMessageSquare className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1B1A]">Chat to us</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Our friendly team is here to help.</p>
                  <a href="mailto:info@lifesemiconductors.com" className="text-xs font-semibold text-[#7C3AED] hover:underline mt-1.5 block">
                    info@lifesemiconductors.com
                  </a>
                </div>
              </div>

              {/* Visit item */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-slate-50 border border-[#E2E1DD] rounded-xl flex items-center justify-center shrink-0">
                  <FiMapPin className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1B1A]">Visit us</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Come say hello at our office HQ.</p>
                  <p className="text-xs font-semibold text-[#1C1B1A] mt-1.5 leading-relaxed">
                    100 Semiconductor Boulevard<br />
                    Silicon Valley, CA 94043
                  </p>
                </div>
              </div>

              {/* Call item */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-slate-50 border border-[#E2E1DD] rounded-xl flex items-center justify-center shrink-0">
                  <FiPhone className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1B1A]">Call us</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15559090808" className="text-xs font-semibold text-[#7C3AED] hover:underline mt-1.5 block">
                    +1 (555) 909-0808
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Link Pill Blocks */}
          <div className="flex items-center gap-3 mt-12 md:mt-0">
            <a href="#" className="p-2.5 bg-slate-50 border border-[#E2E1DD] rounded-lg hover:border-[#7C3AED]/30 transition-all flex items-center justify-center">
              <FiFacebook className="w-4 h-4 text-slate-500 hover:text-[#7C3AED] transition-colors" />
            </a>
            <a href="#" className="p-2.5 bg-slate-50 border border-[#E2E1DD] rounded-lg hover:border-[#7C3AED]/30 transition-all flex items-center justify-center">
              <FiTwitter className="w-4 h-4 text-slate-500 hover:text-[#7C3AED] transition-colors" />
            </a>
            <a href="#" className="p-2.5 bg-slate-50 border border-[#E2E1DD] rounded-lg hover:border-[#7C3AED]/30 transition-all flex items-center justify-center">
              <FiLinkedin className="w-4 h-4 text-slate-500 hover:text-[#7C3AED] transition-colors" />
            </a>
            <a href="#" className="p-2.5 bg-slate-50 border border-[#E2E1DD] rounded-lg hover:border-[#7C3AED]/30 transition-all flex items-center justify-center">
              <FiYoutube className="w-4 h-4 text-slate-500 hover:text-[#7C3AED] transition-colors" />
            </a>
            <a href="#" className="p-2.5 bg-slate-50 border border-[#E2E1DD] rounded-lg hover:border-[#7C3AED]/30 transition-all flex items-center justify-center">
              <FiGlobe className="w-4 h-4 text-slate-500 hover:text-[#7C3AED] transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Pane: Premium Form Container (Violet theme replacement for Lime card) */}
        <div className="md:col-span-7 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between shadow-lg shadow-violet-600/10">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 leading-tight text-white">
              Got questions? We've got the expertise. Let's team up.
            </h3>
            <p className="text-sm text-violet-100 mb-8 max-w-lg">
              Tell us more about yourself and what layout training or consulting services you have in mind.
            </p>

            {/* Custom Interactive Form */}
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              {/* Name Input */}
              <div className="flex flex-col">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="bg-transparent border-b border-violet-400/40 focus:border-white py-2 text-sm placeholder-violet-200/60 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="bg-transparent border-b border-violet-400/40 focus:border-white py-2 text-sm placeholder-violet-200/60 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Description Input */}
              <div className="flex flex-col">
                <textarea 
                  placeholder="Tell us a little about your requirements..." 
                  rows={2}
                  className="bg-transparent border-b border-violet-400/40 focus:border-white py-2 text-sm placeholder-violet-200/60 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Checkboxes: How can we help? */}
              <div className="mt-4">
                <span className="text-xs font-semibold text-violet-100 block mb-3.5">
                  How can we help?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-violet-100">
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" className="accent-white w-4 h-4 rounded border-violet-400 bg-transparent" />
                    <span>Analog / Mixed-Signal Layout</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" className="accent-white w-4 h-4 rounded border-violet-400 bg-transparent" />
                    <span>Digital Physical Design (P&R)</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" className="accent-white w-4 h-4 rounded border-violet-400 bg-transparent" />
                    <span>RF Layout Engineering</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" className="accent-white w-4 h-4 rounded border-violet-400 bg-transparent" />
                    <span>Memory Compiler Layouts</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" className="accent-white w-4 h-4 rounded border-violet-400 bg-transparent" />
                    <span>Standard Library Cells</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer select-none">
                    <input type="checkbox" className="accent-white w-4 h-4 rounded border-violet-400 bg-transparent" />
                    <span>Other VLSI Consulting</span>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Submit Button: Solid Dark charcoal button with left-to-right color hover fill */}
          <div className="mt-10">
            <button
              type="submit"
              className="relative w-full py-4 rounded-xl text-center text-xs font-bold text-white bg-slate-950 border border-slate-900 overflow-hidden group active:scale-[0.98] transition-all duration-300 block"
            >
              <span className="absolute inset-0 bg-[#7C3AED] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
              <span className="relative z-10">Let's get started!</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
