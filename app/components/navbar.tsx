"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHeroPage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isHeroPage
                    ? scrolled
                        ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50 py-3.5 shadow-lg"
                        : "bg-transparent py-3.5 md:py-5 border-none"
                    : scrolled
                        ? "glass-navbar py-3.5 shadow-sm"
                        : "glass-navbar py-3.5 md:py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo - Housed in a clean high-contrast card so the colors remain vibrant over dark background images */}
                    <Link href="/" className="group flex items-center">
                        <div className="bg-white/95 px-3.5 py-1.5 rounded-xl flex items-center justify-center h-10 border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:border-[#7C3AED]/30 transition-all duration-300">
                            <Image
                                src="/LIFE FINAL.jpg"
                                alt="Life Semiconductors Logo"
                                width={170}
                                height={34}
                                className="h-6 sm:h-7 w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav Items */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative group text-[14px] font-medium transition-colors duration-200"
                                >
                                    <span
                                        className={`transition-colors duration-200 ${
                                            isActive
                                                ? (isHeroPage ? "text-white font-semibold" : "text-black font-semibold")
                                                : (isHeroPage ? "text-slate-300 hover:text-white" : "text-black hover:opacity-75")
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Login CTA - Transparent border styling with slide fill transition */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/login"
                            className={`relative px-6 py-2 rounded-full text-sm font-semibold border active:scale-[0.98] transition-colors duration-300 overflow-hidden group ${
                                isHeroPage
                                    ? "text-white border-white/40 hover:text-slate-950 hover:border-white"
                                    : "text-black border-black hover:text-white hover:border-black"
                            }`}
                        >
                            <span className={`absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0 ${
                                isHeroPage ? "bg-white" : "bg-black"
                            }`} />
                            <span className="relative z-10">Login</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex md:hidden p-2 rounded-lg focus:outline-none transition-colors ${
                            isHeroPage ? "text-slate-300 hover:text-white" : "text-black hover:opacity-75"
                        }`}
                        aria-label="Toggle navigation menu"
                    >
                        <div className="relative w-6 h-6 flex flex-col justify-between items-center">
                            <span
                                className={`w-6 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[11px]" : ""
                                    }`}
                            />
                            <span
                                className={`w-6 h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`w-6 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[11px]" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-x-0 top-[69px] bottom-0 z-40 backdrop-blur-lg border-t md:hidden flex flex-col px-6 py-8 justify-between transition-all duration-300 ease-in-out overflow-y-auto ${
                    isHeroPage
                        ? "bg-slate-950/95 border-slate-900"
                        : "bg-[#F9F8F6]/95 border-slate-200"
                } ${isOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-10 opacity-0 pointer-events-none"
                    }`}
            >
                <nav className="flex flex-col gap-5">
                    {navItems.map((item, idx) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-medium tracking-wide transition-all duration-200 transform ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                <span
                                    className={`block py-1.5 ${
                                        isActive
                                            ? (isHeroPage
                                                ? "text-white font-semibold border-l-2 border-[#7C3AED] pl-3"
                                                : "text-black font-semibold border-l-2 border-[#7C3AED] pl-3")
                                            : (isHeroPage
                                                ? "text-slate-300 hover:text-white"
                                                : "text-black hover:opacity-75")
                                    }`}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div
                    className={`flex flex-col gap-4 transform transition-all duration-300 delay-200 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        }`}
                >
                    <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className={`relative w-full py-3.5 rounded-xl text-center text-base font-semibold border active:scale-[0.98] transition-colors duration-300 overflow-hidden group ${
                            isHeroPage
                                ? "text-white border-white/40 hover:text-slate-950 hover:border-white"
                                : "text-black border-black/40 hover:text-white hover:border-black"
                        }`}
                    >
                        <span className={`absolute inset-0 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0 ${
                            isHeroPage ? "bg-white" : "bg-black"
                        }`} />
                        <span className="relative z-10">Login</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

const navItems = [
    { name: "About", href: "/about" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
];
