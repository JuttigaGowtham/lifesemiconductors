import type { Metadata } from "next";
import Link from "next/link";
import { FiChevronRight, FiClock, FiBriefcase, FiAward, FiUsers, FiTrendingUp, FiArrowRight, FiCheckCircle } from "react-icons/fi";



export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 overflow-hidden selection:bg-neutral-900 selection:text-white">
      {/* Background Subtle Tech Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 mb-8 sm:mb-12 font-mono">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <FiChevronRight className="w-3.5 h-3.5 text-neutral-300" />
          <span className="text-neutral-900 font-semibold">Placements</span>
        </nav>

        {/* Hero Section / Teaser Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 leading-[1.05] mb-6">
            Placements <br />
            <span className="text-neutral-400 font-medium">Coming Soon......</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-3xl">
            We are assembling our official alumni placement directory, hiring partner network, verified compensation statistics, and alumni video testimonials. The complete placement portal will launch soon.
          </p>
        </div>
      </div>
    </main>
  );
}
