"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FiArrowRight, 
  FiCheckCircle,
  FiChevronDown
} from "react-icons/fi";

const programOptions = [
  "Analog Layout",
  "Physical Design",
  "Analog Design",
  "Memory Design",
  "Memory Layout",
  "Custom Batches",
  "Career Guidance"
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    selectedProgram: "Analog Layout",
    phone: "",
    organization: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-white text-black border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Form Left, Illustration Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title and Underlined Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Big Bold Headline matching reference design */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
              Let&apos;s build your VLSI future together
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mb-10 leading-relaxed max-w-xl">
              Have questions about our training tracks, batch schedules, syllabus details, or fee structure? Reach out and our technical advisors will get back to you.
            </p>

            {/* Underlined Interactive Form with Row-by-Row Animations */}
            {isSubmitted ? (
              <div className="p-8 rounded-3xl bg-blue-50 border border-blue-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center mx-auto shadow-md">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0A192F]">Thank You for Reaching Out!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We have received your enquiry for <strong className="text-black">{formData.selectedProgram}</strong>. Our team will contact you shortly via Phone / WhatsApp.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold text-[#1D4ED8] hover:underline pt-2 inline-block"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* ROW 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300 transform hover:-translate-y-0.5">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-[#1D4ED8] transition-colors">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#1D4ED8] py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-[#1D4ED8] transition-colors">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#1D4ED8] py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* ROW 2: Programs & Areas of Interest Dropdown + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300 transform hover:-translate-y-0.5">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-[#1D4ED8] transition-colors">
                      Programs &amp; Areas of Interest *
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.selectedProgram}
                        onChange={(e) => setFormData({ ...formData, selectedProgram: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#1D4ED8] py-2.5 text-sm font-semibold text-black outline-none transition-all duration-300 appearance-none cursor-pointer pr-8"
                      >
                        {programOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-black py-2">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#1D4ED8] group-focus-within:rotate-180 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-[#1D4ED8] transition-colors">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#1D4ED8] py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* ROW 3: College / Company & Message */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-300 transform hover:-translate-y-0.5">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 font-semibold group-focus-within:text-[#1D4ED8] transition-colors">
                      College / Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. B.Tech ECE / Working Professional"
                      className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#1D4ED8] py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-[#1D4ED8] transition-colors">
                      Your Message / Specific Requirements
                    </label>
                    <input
                      type="text"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Batch timing, syllabus details..."
                      className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#1D4ED8] py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* ROW 4: Submit Button with left-to-right hover fill */}
                <div className="pt-2 transition-all duration-300 transform hover:-translate-y-0.5">
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-sm text-black hover:text-white bg-white border-2 border-black/80 hover:border-[#1D4ED8] shadow-sm overflow-hidden group active:scale-[0.98] transition-colors duration-300 cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Submit Enquiry</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Illustration (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Artistic Vector Illustration */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-4">
              <Image
                src="/contactus.svg"
                alt="Contact LIFE Semiconductor Institute"
                width={474}
                height={575}
                className="w-full h-auto max-h-[500px] object-contain"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
