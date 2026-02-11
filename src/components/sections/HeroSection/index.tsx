"use client";

import React, { useEffect, useState } from "react";

/* ---------------- TYPES ---------------- */

type HeroAction = {
  label: string;
  url: string;
};

type HeroSlide = {
  image: string;
  tag?: string;          // 👈 NEW (small word above heading)
  title?: string;
  subtitle?: string;
  actions?: HeroAction[];
};

type Props = {
  slides?: HeroSlide[];
};

/* ---------------- COMPONENT ---------------- */

export default function HeroSection({ slides = [] }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ---------------- AUTO SLIDESHOW ---------------- */

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  /* ---------------- EMPTY STATE ---------------- */

  if (!slides.length) {
    return (
      <section
        className="relative w-full overflow-hidden flex items-center"
        style={{ height: "70vh" }}
      >
        <div className="absolute inset-0 bg-gray-800" />
        <div className="relative z-10 max-w-4xl px-8 text-white">
          <h1 className="text-4xl font-bold">No hero slides found</h1>
        </div>
      </section>
    );
  }

  const activeSlide = slides[currentIndex];

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] overflow-hidden flex items-center bg-black">

      {/* ---------------- BACKGROUND (FADE ONLY) ---------------- */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hero-bg"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition:
                typeof window !== "undefined" && window.innerWidth < 640
                  ? "100% center" // mobile – extreme right
                  : "right center",
              position: "absolute",
              inset: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: "opacity 1000ms ease",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* ---------------- OVERLAY ---------------- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* ---------------- CONTENT ---------------- */}
      <div
        key={currentIndex}
        className="
          relative z-10 max-w-4xl
          px-8
          sm:px-8
          lg:pl-32 lg:pr-6
          text-left text-white
          animate-fade-up
        "
      >
        {/* ---------- SMALL TAG ABOVE HEADING ---------- */}
        {activeSlide.tag && (
          <div
            className="mb-3 text-lg sm:text-sm lg:text-lg font-bold  tracking-[0.35em] sm:tracking-[0.25em] lg:tracking-[0.75em] uppercase"
            style={{ color: "#C6B461" }}
          >
            {activeSlide.tag}
          </div>
        )}

        {/* ---------- MAIN HEADING ---------- */}
        {activeSlide.title && (
          <h1
            className="
              block
              text-4xl sm:text-4xl lg:text-5xl
              font-bold
              mb-6
              px-6 py-4
              border-2
              whitespace-pre-line
            "
            style={{
              fontFamily: "'Futura STD', sans-serif",
              lineHeight: "1.4",          // ✅ reliable line-height
              color: "#FFFFFF",
              borderColor: "#C6B461",     // classy gold
            }}
          >
            {activeSlide.title}
          </h1>
        )}

        {/* ---------- SUBTITLE ---------- */}
        {activeSlide.subtitle && (
          <p className="text-base sm:text-lg lg:text-xl mb-8">
            {activeSlide.subtitle}
          </p>
        )}

        {/* ---------------- ACTIONS ---------------- */}
        <div className="flex items-center gap-4 mt-6">
          {activeSlide.actions?.[0] && (
            <a
              href={activeSlide.actions[0].url}
              className="bg-white text-black text-[15px] font-medium py-3.5 px-9 rounded-lg hover:bg-gray-200 transition"
            >
              {activeSlide.actions[0].label}
            </a>
          )}

          {activeSlide.actions?.[1] && (
            <a
              href={activeSlide.actions[1].url}
              className="
                group inline-flex items-center gap-3
                px-7 py-3.5
                rounded-[10px]
                bg-white/10
                border border-white/20
                text-white text-[14px] sm:text-[14px] lg:text-[15px] font-medium
                backdrop-blur-md
                shadow-lg shadow-black/30
                hover:bg-white/15 hover:border-white/40
                transition-all duration-300
              "
            >
              <span>{activeSlide.actions[1].label}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                />
              </svg>
            </a>
          )}
        </div>

        {/* ---------------- STATS ---------------- */}
        <div className="mt-12 flex items-center gap-12 text-white">
          <div className="flex items-start gap-4">
            <div className="w-[1.5px] h-14 bg-white/60" />
            <div>
              <div className="text-3xl font-semibold">2,635</div>
              <div className="text-sm text-gray-300">projects done</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-[1.5px] h-14 bg-white/60" />
            <div>
              <div className="text-3xl font-semibold">129</div>
              <div className="text-sm text-gray-300">total clients</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-[1.5px] h-14 bg-white/60" />
            <div>
              <div className="text-3xl font-semibold">30+</div>
              <div className="text-sm text-gray-300">designers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
