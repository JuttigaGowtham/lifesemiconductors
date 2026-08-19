"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
    const [slideIndex, setSlideIndex] = useState(0);

    // Auto-scroll/cross-fade the slideshow every 7 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % 3);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-slate-950">
            {/* Background Slideshow Wrapper */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">

                {/* Slide 1 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${slideIndex === 0 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src="/hero1.jpg"
                        alt="Semiconductor Silicon Wafer"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover animate-slow-pan opacity-60"
                    />
                </div>

                {/* Slide 2 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${slideIndex === 1 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src="/hero2.jpg"
                        alt="Semiconductor Fabrication Cleanroom"
                        fill
                        sizes="100vw"
                        className="object-cover animate-slow-pan opacity-60"
                    />
                </div>

                {/* Slide 3 */}
                <div
                    className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${slideIndex === 2 ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src="/hero3.jpg"
                        alt="Semiconductor Microchip Layout Design"
                        fill
                        sizes="100vw"
                        className="object-cover animate-slow-pan opacity-60"
                    />
                </div>

                {/* Cinematic dark gradients to guarantee text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[0.5px]" />
            </div>

            {/* Main Content Area - Aligned to bottom-left, buttons removed */}
            <div className="absolute bottom-16 left-6 right-6 sm:bottom-20 sm:left-10 sm:right-10 md:bottom-24 md:left-16 md:right-auto md:w-full md:max-w-3xl md:px-0 z-10 text-left text-white">
                {/* Hero Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 drop-shadow-md text-white">
                    Empowering the Future of Semiconductor Layouts
                </h1>

                {/* Hero Description */}
                <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed drop-shadow max-w-2xl">
                    Lifesemiconductors delivers world-class layout design bootcamps, hands-on training, and expert consulting solutions for the microchip industry.
                </p>
            </div>

            {/* Futuristic grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Glowing bottom border decoration */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        </section>
    );
}
