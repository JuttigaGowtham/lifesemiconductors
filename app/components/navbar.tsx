"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

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
  { name: "Home", href: "/#hero" },
  {
    name: "Programs",
    href: "/#courses",
    subItems: [
      {
        title: "Analog IC Layout (3-Month Flagship)",
        desc: "Tapeout-oriented PDK training, matching & DRC/LVS clean layouts",
        href: "/#analog-layout",
      },
      {
        title: "Physical Design (P&R)",
        desc: "Floorplanning, CTS, routing, timing closure & sign-off",
        href: "/#courses",
      },
      {
        title: "Analog Circuit Design",
        desc: "MOS models, op-amps, bandgap reference & mixed-signal blocks",
        href: "/#courses",
      },
      {
        title: "Custom Memory & StdCell",
        desc: "SRAM bitcell architectures, sense amps & decoder layout",
        href: "/#courses",
      },
    ],
  },
  {
    name: "Domain",
    href: "/#analog-layout",
    subItems: [
      {
        title: "Analog & Mixed-Signal Layout",
        desc: "Silicon implementation, matched pairs & ESD routing",
        href: "/#analog-layout",
      },
      {
        title: "Digital Physical Design",
        desc: "ASIC back-end flow, placement & timing closure",
        href: "/#courses",
      },
      {
        title: "Analog Circuit Design",
        desc: "Schematic architecture, biasing & simulation",
        href: "/#courses",
      },
      {
        title: "Memory Architecture & Layout",
        desc: "SRAM array architecture & peripheral layout",
        href: "/#courses",
      },
      {
        title: "Physical Verification (DRC/LVS)",
        desc: "Calibre rule deck mastery, antenna & latch-up prevention",
        href: "/#projects",
      },
    ],
  },
  { name: "Placement", href: "/#career-prep" },
  { name: "Blog", href: "/#insights" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-2 sm:px-4 md:px-6 pointer-events-none transition-all duration-300">
      {/* Floating Pill Container */}
      <div
        className={`w-full max-w-[1420px] bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-slate-200/90 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 min-h-[64px] sm:min-h-[72px] flex items-center justify-between gap-4 pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "shadow-xl shadow-slate-900/10 border-slate-300/90"
            : "shadow-md shadow-slate-900/5"
        }`}
      >
        {/* Logo with Brand Title */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="bg-white px-3 py-1.5 rounded-xl flex items-center justify-center h-10 sm:h-11 border border-slate-200 shadow-xs group-hover:border-blue-500/40 transition-all duration-300">
            <Image
              src="/LIFE FINAL.jpg"
              alt="LIFE Semiconductor Institute"
              width={140}
              height={32}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </div>
          <div className="hidden xl:flex flex-col">
            <span className="text-sm font-bold tracking-wider text-[#0A192F] uppercase group-hover:text-blue-600 transition-colors">
              LIFE Semiconductor
            </span>
            <span className="text-[11px] text-slate-500 font-medium tracking-tight">
              Learn • Implement • Focus • Excel
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative py-2"
              onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
              onMouseLeave={() => item.subItems && handleMouseLeave()}
            >
              {item.subItems ? (
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  }
                  className={`text-[14px] xl:text-[15px] font-semibold flex items-center gap-1.5 transition-colors duration-200 py-1 ${
                    activeDropdown === item.name
                      ? "text-[#1D4ED8]"
                      : "text-[#0A192F]/85 hover:text-[#1D4ED8]"
                  }`}
                >
                  <span>{item.name}</span>
                  <FiChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180 text-[#1D4ED8]" : "text-slate-400"
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-[14px] xl:text-[15px] font-semibold text-[#0A192F]/85 hover:text-[#1D4ED8] transition-colors duration-200 relative group py-1 whitespace-nowrap"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1D4ED8] transition-all duration-300 group-hover:w-full" />
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.subItems && activeDropdown === item.name && (
                <div
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 sm:w-96 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="flex flex-col gap-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group/item flex flex-col p-2.5 rounded-xl hover:bg-blue-50/70 border border-transparent hover:border-blue-100 transition-all text-left"
                      >
                        <span className="text-xs sm:text-[13px] font-bold text-[#0A192F] group-hover/item:text-[#1D4ED8] transition-colors">
                          {sub.title}
                        </span>
                        {sub.desc && (
                          <span className="text-[11px] text-slate-500 leading-tight mt-0.5 group-hover/item:text-slate-600">
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

        {/* Right CTA Buttons - Login & Sign Up (Styled like hero buttons) */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Login Button */}
          <Link
            href="/#contact"
            className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-black hover:text-white bg-white border-2 border-black/80 hover:border-[#1D4ED8] shadow-xs overflow-hidden group active:scale-[0.98] transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-[#1D4ED8] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0" />
            <span className="relative z-10">Login</span>
          </Link>

          {/* Sign Up Button */}
          <Link
            href="/#contact"
            className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1D4ED8] hover:bg-[#1E40AF] border-2 border-[#1D4ED8] hover:border-[#1E40AF] shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all duration-300"
          >
            <span className="relative z-10">Sign Up</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden p-2 rounded-xl text-[#0A192F] hover:text-[#1D4ED8] hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 sm:top-24 z-40 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl p-6 lg:hidden flex flex-col pointer-events-auto max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="flex items-center justify-between text-base font-semibold text-[#0A192F] hover:text-[#1D4ED8] py-2.5 px-3 rounded-xl hover:bg-blue-50/60 transition-all text-left"
                    >
                      <span>{item.name}</span>
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpanded === item.name ? "rotate-180 text-[#1D4ED8]" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.name && (
                      <div className="pl-4 pr-2 py-1.5 flex flex-col gap-1.5 border-l-2 border-blue-200 ml-3 mt-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xs sm:text-sm font-medium text-slate-700 hover:text-[#1D4ED8] py-1.5 px-2 rounded-lg hover:bg-blue-50/50 transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold text-[#0A192F] hover:text-[#1D4ED8] py-2.5 px-3 rounded-xl hover:bg-blue-50/60 border-l-2 border-transparent hover:border-[#1D4ED8] transition-all"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTAs */}
            <div className="flex flex-col sm:hidden gap-2.5 pt-4 mt-2 border-t border-slate-200">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-xl font-bold text-sm text-black bg-white border-2 border-black/80 hover:border-[#1D4ED8] hover:text-white hover:bg-[#1D4ED8] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-xl font-bold text-sm text-white bg-[#1D4ED8] hover:bg-[#1E40AF] transition-colors shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
