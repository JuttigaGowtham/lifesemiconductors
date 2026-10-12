"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";

interface SubItem {
  title: string;
  desc?: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/training",
    subItems: [
      {
        title: "All Training Programs (Full Curriculum)",
        desc: "Tapeout-oriented roadmap, 10 modules & EDA methodologies",
        href: "/training",
      },
      {
        title: "Analog IC Layout (3-Month Flagship)",
        desc: "Tapeout-oriented PDK training, matching & DRC/LVS clean layouts",
        href: "/analog-layout",
      },
      {
        title: "Physical Design (P&R)",
        desc: "Floorplanning, CTS, routing, timing closure & sign-off",
        href: "/physical-design",
      },
      {
        title: "Custom Memory & StdCell",
        desc: "SRAM bitcell architectures, sense amps & decoder layout",
        href: "/memory-layout",
      },
      {
        title: "Analog Circuit Design",
        desc: "MOS models, op-amps, bandgap reference & mixed-signal blocks",
        href: "/analog-design",
      },
    ],
  },
  {
    name: "Domain",
    href: "/analog-layout",
    subItems: [
      {
        title: "Analog & Mixed-Signal Layout",
        desc: "Silicon implementation, matched pairs & ESD routing",
        href: "/analog-layout",
      },
      {
        title: "Digital Physical Design",
        desc: "ASIC back-end flow, placement & timing closure",
        href: "/physical-design",
      },
      {
        title: "Memory Architecture & Layout",
        desc: "SRAM array architecture & peripheral layout",
        href: "/memory-layout",
      },
      {
        title: "Physical Verification & Projects",
        desc: "Calibre rule deck mastery, antenna & practical projects",
        href: "/projects",
      },
      {
        title: "Analog Circuit Design",
        desc: "Schematic architecture, biasing & simulation",
        href: "/analog-design",
      },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Placements", href: "/placements" },
  { name: "Blog", href: "/insights" },
  { name: "FAQ", href: "/contact#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  // Prevent background scroll when mobile navigation drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex items-center justify-between max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300 h-11 sm:h-13 md:h-15">
        {/* Brand Logo - Responsive on Mobile, Tablet & Desktop */}
        <Link
          href="/"
          className="pointer-events-auto inline-flex items-center justify-center bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 h-11 sm:h-13 md:h-15 transition-all duration-300 hover:border-neutral-300 hover:scale-[1.02] active:scale-[0.98] shrink-0 z-10"
          aria-label="LIFE Semiconductors Home"
        >
          <Image
            src="/LIFE FINAL.jpg"
            alt="LIFE Semiconductors"
            width={600}
            height={160}
            quality={100}
            unoptimized
            className="h-7 sm:h-8.5 md:h-11 w-auto object-contain max-w-[140px] sm:max-w-[185px] md:max-w-[240px]"
            priority
          />
        </Link>

        {/* Main Desktop Navigation Pill - Centered on Laptop/Desktop (xl+) */}
        <div className="pointer-events-auto hidden xl:inline-flex items-center gap-1 sm:gap-1.5 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-4 sm:px-5 py-2 sm:py-2.5 h-12 sm:h-14 md:h-15 transition-all duration-300 hover:border-neutral-300 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {/* Desktop Nav Items */}
          <nav className="flex items-center gap-1 sm:gap-1.5">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                onMouseLeave={() => item.subItems && handleMouseLeave()}
              >
                {item.subItems ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                    }
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-[13.5px] sm:text-[14px] font-medium flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                      activeDropdown === item.name
                        ? "text-black bg-neutral-100"
                        : "text-neutral-700 hover:text-black hover:bg-neutral-100"
                    }`}
                  >
                    <span>{item.name}</span>
                    <FiChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180 text-black" : "text-neutral-400"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3.5 sm:px-4 py-2 rounded-full text-[13.5px] sm:text-[14px] font-medium text-neutral-700 hover:text-black hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap block"
                  >
                    {item.name}
                  </Link>
                )}

                {/* White Glassmorphic Dropdown Menu */}
                {item.subItems && activeDropdown === item.name && (
                  <div
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 sm:w-88 bg-white/98 backdrop-blur-2xl border border-neutral-200/90 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="flex flex-col gap-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group/item flex flex-col p-3 rounded-xl hover:bg-neutral-100 border border-transparent hover:border-neutral-200/60 transition-all text-left"
                        >
                          <span className="text-xs sm:text-[13px] font-medium text-neutral-900 group-hover/item:text-black transition-colors">
                            {sub.title}
                          </span>
                          {sub.desc && (
                            <span className="text-[11px] text-neutral-500 leading-tight mt-1 group-hover/item:text-neutral-700">
                              {sub.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Contact Pill - Fixed Right on Laptop/Desktop */}
        <Link
          href="/contact"
          className="pointer-events-auto hidden xl:inline-flex items-center justify-center bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-5 sm:px-6 py-2 sm:py-2.5 h-12 sm:h-14 md:h-15 transition-all duration-300 hover:border-neutral-300 hover:scale-[1.02] active:scale-[0.98] shrink-0 group"
          aria-label="Contact LIFE Semiconductors"
        >
          <span className="text-[13.5px] sm:text-[14px] font-semibold text-neutral-800 group-hover:text-black transition-colors">
            Contact
          </span>
        </Link>

        {/* Mobile & Tablet Control Buttons (< xl) */}
        <div className="pointer-events-auto flex items-center gap-2 xl:hidden shrink-0 z-10">
          {/* Quick Contact Button for Tablet Screens (640px to 1279px) */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-4 py-2 h-11 sm:h-13 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black hover:border-neutral-300 transition-all active:scale-95"
          >
            <span>Contact</span>
          </Link>

          {/* Toggle Menu Pill (Mobile & Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-3.5 sm:px-4 h-11 sm:h-13 transition-all duration-300 hover:border-neutral-300 active:scale-95 text-neutral-800 hover:text-black cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <FiX className="w-5 h-5 sm:w-5.5 sm:h-5.5" /> : <FiMenu className="w-5 h-5 sm:w-5.5 sm:h-5.5" />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Slide-Over Drawer (< xl) */}
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay - Tapping outside closes drawer */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 xl:hidden animate-in fade-in duration-200 pointer-events-auto"
            aria-hidden="true"
          />

          {/* Drawer Card */}
          <div className="fixed top-3 sm:top-5 right-4 sm:right-6 left-4 sm:left-auto sm:w-[420px] max-h-[88vh] z-50 bg-white/98 backdrop-blur-2xl border border-neutral-200 rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.2)] p-5 sm:p-6 flex flex-col pointer-events-auto overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Drawer Header with Title and Close Button */}
            <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900">
                  LIFE Semiconductors
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="flex items-center justify-between text-sm font-semibold text-neutral-800 hover:text-black py-2.5 px-3 rounded-xl hover:bg-neutral-100 transition-all text-left cursor-pointer"
                      >
                        <span>{item.name}</span>
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileExpanded === item.name ? "rotate-180 text-black" : "text-neutral-400"
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.name && (
                        <div className="pl-3 pr-2 py-1.5 flex flex-col gap-1 border-l-2 border-neutral-200 ml-3 my-1">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex flex-col py-2 px-2.5 rounded-lg hover:bg-neutral-100 transition-colors"
                            >
                              <span className="text-xs font-medium text-neutral-800 group-hover:text-black">
                                {sub.title}
                              </span>
                              {sub.desc && (
                                <span className="text-[10.5px] text-neutral-500 leading-tight mt-0.5">
                                  {sub.desc}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-semibold text-neutral-800 hover:text-black py-2.5 px-3 rounded-xl hover:bg-neutral-100 transition-all"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="pt-4 border-t border-neutral-100 mt-3 flex flex-col gap-2.5">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 px-4 rounded-full bg-neutral-950 hover:bg-black text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Enquire & Contact</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between gap-2 pt-1 text-xs text-neutral-600 font-mono">
                <a
                  href="tel:+919618347989"
                  className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-700"
                >
                  <FiPhone className="w-3.5 h-3.5 text-neutral-900" />
                  <span>+91 9618347989</span>
                </a>
                <a
                  href="mailto:info@lifesemiconductors.com"
                  className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-700"
                >
                  <FiMail className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
