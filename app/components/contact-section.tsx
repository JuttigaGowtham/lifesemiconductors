"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FiCheckCircle,
  FiChevronDown,
  FiLoader,
  FiAlertCircle
} from "react-icons/fi";
import { supabase } from "../lib/supabase";

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
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error("Supabase credentials are not configured in your .env.local file yet. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      }

      const { error } = await supabase.from("contact_submissions").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          selected_program: formData.selectedProgram,
          phone: formData.phone,
          organization: formData.organization || null,
          message: formData.message || null,
        }
      ]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      const msg = err?.message || err?.details || err?.error_description || (typeof err === "string" ? err : JSON.stringify(err));
      setErrorMessage(msg && msg !== "{}" ? msg : "Failed to submit enquiry. Please verify that the table 'contact_submissions' exists in Supabase and RLS allows inserts.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FAFAFC] text-neutral-900 border-t border-neutral-200 overflow-hidden selection:bg-black selection:text-white">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]">
              Let&apos;s build your VLSI future together
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Have questions about our training tracks, batch schedules, syllabus details, or fee structure? Reach out and our technical advisors will get back to you.
            </p>
          </div>
        </div>

        {/* Main Grid: Form Left, Illustration Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-xs hover:border-black transition-all duration-300">
            
            {/* Form Container */}
            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto shadow-md">
                  <FiCheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-neutral-950">Thank You for Reaching Out!</h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  We have received your enquiry for <strong className="text-black">{formData.selectedProgram}</strong>. Our team will contact you shortly via Phone / WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      selectedProgram: "Analog Layout",
                      phone: "",
                      organization: "",
                      message: ""
                    });
                  }}
                  className="text-xs font-semibold text-black hover:underline pt-2 inline-block cursor-pointer"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                    <div>
                      <p className="font-semibold">Submission failed</p>
                      <p className="mt-0.5 text-red-600">{errorMessage}</p>
                    </div>
                  </div>
                )}
                
                {/* ROW 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-black transition-colors">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={isLoading}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-transparent border-b border-slate-200 focus:border-black py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-black transition-colors">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      disabled={isLoading}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full bg-transparent border-b border-slate-200 focus:border-black py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* ROW 2: Programs & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-black transition-colors">
                      Programs &amp; Areas of Interest *
                    </label>
                    <div className="relative">
                      <select
                        required
                        disabled={isLoading}
                        value={formData.selectedProgram}
                        onChange={(e) => setFormData({ ...formData, selectedProgram: e.target.value })}
                        className="w-full bg-transparent border-b border-slate-200 focus:border-black py-2.5 text-sm font-medium text-black outline-none transition-all duration-300 appearance-none cursor-pointer pr-8 disabled:opacity-50"
                      >
                        {programOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-white text-black py-2">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-black group-focus-within:rotate-180 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-black transition-colors">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      disabled={isLoading}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-transparent border-b border-slate-200 focus:border-black py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* ROW 3: Organization & Message */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-black transition-colors">
                      College / Company (Optional)
                    </label>
                    <input
                      type="text"
                      disabled={isLoading}
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. B.Tech ECE / Working Professional"
                      className="w-full bg-transparent border-b border-slate-200 focus:border-black py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-xs font-medium text-slate-400 mb-1 group-focus-within:text-black transition-colors">
                      Your Message / Specific Requirements
                    </label>
                    <input
                      type="text"
                      disabled={isLoading}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Batch timing, syllabus details..."
                      className="w-full bg-transparent border-b border-slate-200 focus:border-black py-2.5 text-sm text-black placeholder-slate-400 outline-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* ROW 4: Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center px-10 py-4 rounded-full font-medium text-sm text-white bg-black hover:bg-neutral-800 shadow-sm transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <FiLoader className="w-4 h-4 animate-spin text-current" />
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      <span>Submit Enquiry →</span>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
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
