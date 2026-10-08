"use client";

import { useState, useRef } from "react";
import Link from "next/link";
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
  {
    name: "Programs",
    href: "/#courses",
    subItems: [
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
        title: "Analog Circuit Design",
        desc: "MOS models, op-amps, bandgap reference & mixed-signal blocks",
        href: "/#courses",
      },
      {
        title: "Custom Memory & StdCell",
        desc: "SRAM bitcell architectures, sense amps & decoder layout",
        href: "/memory-layout",
      },
    ],
  },
  { name: "Learning Paths", href: "/#learning-paths" },
  {
    name: "Domain",
    href: "/#analog-layout",
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
        title: "Analog Circuit Design",
        desc: "Schematic architecture, biasing & simulation",
        href: "/#courses",
      },
      {
        title: "Memory Architecture & Layout",
        desc: "SRAM array architecture & peripheral layout",
        href: "/memory-layout",
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

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex items-center justify-center gap-2 sm:gap-3 px-4 pointer-events-none transition-all duration-300">
      
      {/* Separate Logo Pill - Left Side */}
      <Link
        href="/"
        className="pointer-events-auto inline-flex items-center gap-2 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98] group"
        aria-label="LIFE Semiconductor Home"
      >
        <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px] tracking-tight group-hover:scale-105 transition-transform shadow-xs">
          L
        </div>
        <span className="font-semibold text-xs sm:text-sm tracking-tight text-neutral-900 group-hover:text-black">
          LIFE
        </span>
      </Link>

      {/* Main Navigation Pill */}
      <div className="pointer-events-auto inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-xl border border-neutral-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full px-3 sm:px-4 py-2 transition-all duration-300 hover:border-neutral-300">
        
        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
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
                  className={`px-3.5 py-1.5 rounded-full text-[13.5px] sm:text-[14px] font-medium flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
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
                  className="px-3.5 py-1.5 rounded-full text-[13.5px] sm:text-[14px] font-medium text-neutral-700 hover:text-black hover:bg-neutral-100 transition-all duration-200 whitespace-nowrap block"
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

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 rounded-full text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors ml-1"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer / Dropdown - White Theme */}
      {isOpen && (
        <div className="fixed inset-x-4 top-20 z-40 bg-white/98 backdrop-blur-2xl border border-neutral-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 md:hidden flex flex-col pointer-events-auto max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="flex items-center justify-between text-sm font-medium text-neutral-800 hover:text-black py-2.5 px-3 rounded-xl hover:bg-neutral-100 transition-all text-left"
                    >
                      <span>{item.name}</span>
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileExpanded === item.name ? "rotate-180 text-black" : "text-neutral-400"
                        }`}
                      />
                    </button>
                    {mobileExpanded === item.name && (
                      <div className="pl-3 pr-2 py-1.5 flex flex-col gap-1 border-l border-neutral-200 ml-3 mt-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-normal text-neutral-600 hover:text-black py-2 px-2 rounded-lg hover:bg-neutral-100 transition-colors"
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
                    className="text-sm font-medium text-neutral-800 hover:text-black py-2.5 px-3 rounded-xl hover:bg-neutral-100 transition-all"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
