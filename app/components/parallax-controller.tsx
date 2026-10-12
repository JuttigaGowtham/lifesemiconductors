"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ParallaxController() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const elementPositions = new Map<HTMLElement, number>();

    // Cache initial document top coordinates
    const measureElements = () => {
      elementPositions.clear();
      const elements = document.querySelectorAll<HTMLElement>("[data-parallax], [data-parallax-zoom]");
      elements.forEach((el) => {
        // Reset current transform to get true natural geometry
        const currentTransform = el.style.transform;
        el.style.transform = "none";
        const rect = el.getBoundingClientRect();
        const docTop = rect.top + window.scrollY;
        elementPositions.set(el, docTop);
        el.style.transform = currentTransform;
      });
    };

    const updateParallax = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // 1. Process elements with [data-parallax]
      const parallaxElements = document.querySelectorAll<HTMLElement>("[data-parallax]");
      parallaxElements.forEach((el) => {
        let docTop = elementPositions.get(el);
        if (docTop === undefined) {
          const rect = el.getBoundingClientRect();
          docTop = rect.top + scrollY;
          elementPositions.set(el, docTop);
        }

        const naturalViewportTop = docTop - scrollY;
        const height = el.offsetHeight || 100;

        // Active zone: visible in viewport + margin
        if (naturalViewportTop + height >= -200 && naturalViewportTop <= windowHeight + 200) {
          const centerOffset = naturalViewportTop + height / 2 - windowHeight / 2;
          const rawSpeed = el.getAttribute("data-parallax");

          let speed = 0.18;
          if (rawSpeed === "slow") speed = 0.10;
          else if (rawSpeed === "medium") speed = 0.20;
          else if (rawSpeed === "fast") speed = 0.35;
          else if (rawSpeed === "reverse") speed = -0.16;
          else if (!isNaN(parseFloat(rawSpeed || ""))) speed = parseFloat(rawSpeed || "0.18");

          const y = centerOffset * speed;
          el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
        }
      });

      // 2. Process elements with [data-parallax-zoom]
      const zoomElements = document.querySelectorAll<HTMLElement>("[data-parallax-zoom]");
      zoomElements.forEach((el) => {
        let docTop = elementPositions.get(el);
        if (docTop === undefined) {
          const rect = el.getBoundingClientRect();
          docTop = rect.top + scrollY;
          elementPositions.set(el, docTop);
        }
        const naturalViewportTop = docTop - scrollY;
        const height = el.offsetHeight || 100;

        if (naturalViewportTop + height >= 0 && naturalViewportTop <= windowHeight) {
          const centerDist = Math.abs(naturalViewportTop + height / 2 - windowHeight / 2);
          const progress = Math.max(0, 1 - centerDist / (windowHeight / 2));
          const scale = 1 + progress * 0.05;
          el.style.transform = `scale(${scale.toFixed(3)})`;
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const onResize = () => {
      measureElements();
      updateParallax();
    };

    // Initialize after DOM paint
    const timer = setTimeout(() => {
      measureElements();
      updateParallax();
    }, 100);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  return (
    <>
      {/* Ambient Silicon Tech Floating Background Orbs with Real Parallax Float */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          data-parallax="-0.22"
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/8 to-indigo-500/4 blur-3xl will-change-transform"
        />
        <div
          data-parallax="0.25"
          className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-blue-500/6 to-violet-500/3 blur-3xl will-change-transform"
        />
        <div
          data-parallax="-0.20"
          className="absolute top-2/3 -left-20 w-96 h-96 rounded-full bg-violet-400/6 blur-3xl will-change-transform"
        />
        <div
          data-parallax="0.28"
          className="absolute -bottom-24 right-1/4 w-[28rem] h-[28rem] rounded-full bg-indigo-500/6 blur-3xl will-change-transform"
        />
      </div>
    </>
  );
}
