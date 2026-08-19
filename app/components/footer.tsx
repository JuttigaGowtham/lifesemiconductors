"use client";

import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer() {
    return (
        <section className="w-full bg-[#F9F8F6] pt-10 pb-16 px-4 sm:px-6 md:px-12 flex flex-col items-center border-t border-[#E2E1DD]">

            {/* 1. Dark CTA Banner (Full Page width matching content boundaries) */}
            <div className="w-full max-w-6xl bg-black rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-14 text-center text-white relative overflow-hidden mb-12 shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
                {/* Background circular highlights */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_60%)]" />

                <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
                        Ready to transform your IC layouts?
                    </h2>
                    <p className="text-sm text-slate-300 mb-8 max-w-md leading-relaxed">
                        Join thousands of physical layout engineers and top semiconductor firms building tapeout-ready silicon layouts.
                    </p>
                    <Link
                        href="/contact"
                        className="relative px-8 py-3 rounded-full text-xs font-bold text-slate-950 bg-white border border-white hover:text-white transition-colors duration-300 overflow-hidden group/btn shrink-0 shadow-md"
                    >
                        <span className="absolute inset-0 bg-[#7C3AED] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/btn:scale-x-100 z-0" />
                        <span className="relative z-10">Start for free</span>
                    </Link>
                </div>
            </div>

            {/* 2. Full Page Footer Content (Integrated directly into the page layout, no card wrapper) */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col justify-between">

                {/* Top Segment */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">

                    {/* Logo & Description Column */}
                    <div className="md:col-span-5 flex flex-col gap-5 text-left">
                        <div className="flex justify-start">
                            <div className="bg-white px-3.5 py-1.5 rounded-xl flex items-center justify-center border border-slate-200/80 shadow-sm h-10">
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

                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                            LifeSemiconductors empowers engineering teams and VLSI candidates to deliver high-quality, DRC-clean, physical design cell layouts.
                        </p>

                        {/* Simple Social Icons (Row of black/gray line icons) */}
                        <div className="flex items-center gap-4 text-slate-500 mt-2">
                            <a href="#" className="hover:text-[#7C3AED] transition-colors">
                                <FiTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-[#7C3AED] transition-colors">
                                <FiInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-[#7C3AED] transition-colors">
                                <FiLinkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-[#7C3AED] transition-colors">
                                <FiGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Nav Links Grid Segment */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">

                        {/* Column 1: Product */}
                        <div className="flex flex-col gap-3.5">
                            <h4 className="text-xs font-bold text-slate-800 tracking-wider">
                                Training
                            </h4>
                            <nav className="flex flex-col gap-2.5 text-xs text-slate-500">
                                <Link href="/training" className="hover:text-[#7C3AED] transition-colors">Analog Layout</Link>
                                <Link href="/training" className="hover:text-[#7C3AED] transition-colors">Digital Physical Design</Link>
                                <Link href="/training" className="hover:text-[#7C3AED] transition-colors">RF Layout Design</Link>
                                <Link href="/training" className="hover:text-[#7C3AED] transition-colors">Memory Array Layout</Link>
                                <Link href="/training" className="hover:text-[#7C3AED] transition-colors">Standard Cell Layout</Link>
                            </nav>
                        </div>

                        {/* Column 2: Resources */}
                        <div className="flex flex-col gap-3.5">
                            <h4 className="text-xs font-bold text-slate-800 tracking-wider">
                                Resources
                            </h4>
                            <nav className="flex flex-col gap-2.5 text-xs text-slate-500">
                                <Link href="/about" className="hover:text-[#7C3AED] transition-colors">Documentation</Link>
                                <Link href="/training" className="hover:text-[#7C3AED] transition-colors">Tutorials</Link>
                                <Link href="/blog" className="hover:text-[#7C3AED] transition-colors">VLSI Bootcamps</Link>
                                <Link href="/about" className="hover:text-[#7C3AED] transition-colors">Layout Guides</Link>
                                <Link href="/contact" className="hover:text-[#7C3AED] transition-colors">Support Help</Link>
                            </nav>
                        </div>

                        {/* Column 3: Company */}
                        <div className="flex flex-col gap-3.5 col-span-2 sm:col-span-1">
                            <h4 className="text-xs font-bold text-slate-800 tracking-wider">
                                Company
                            </h4>
                            <nav className="flex flex-col gap-2.5 text-xs text-slate-500">
                                <Link href="/about" className="hover:text-[#7C3AED] transition-colors">About Us</Link>
                                <Link href="/contact" className="hover:text-[#7C3AED] transition-colors">Contact Us</Link>
                                <Link href="/blog" className="hover:text-[#7C3AED] transition-colors">Technical Blog</Link>
                                <Link href="/gallery" className="hover:text-[#7C3AED] transition-colors">Media Gallery</Link>
                                <Link href="#" className="hover:text-[#7C3AED] transition-colors">Partnerships</Link>
                            </nav>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200/80 w-full my-6" />

                {/* Bottom Metadata Segment */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-medium">
                    <div>
                        © 2026 LifeSemiconductors. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-[#7C3AED] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#7C3AED] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#7C3AED] transition-colors">Cookies Settings</a>
                    </div>
                </div>

            </div>

            {/* 3. Giant Low-Contrast Watermark (Outside the card, floating on the page bg) */}
            <div className="w-full text-center mt-12 select-none pointer-events-none opacity-30 px-6">
                <span className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7rem] font-bold text-slate-500 tracking-wide font-[family-name:var(--font-dancing-script)] block leading-none">
                    Life Semiconductors
                </span>
            </div>

        </section>
    );
}
