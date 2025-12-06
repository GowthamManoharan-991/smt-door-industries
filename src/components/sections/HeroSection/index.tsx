"use client";
import React, { useEffect, useState } from "react";
import classNames from "classnames";

type Props = {
  image?: string[] | string;
  title?: { text?: string };
  subtitle?: any;
  actions?: any[];
};

export default function HeroSection({ image = [], title, subtitle, actions }: Props) {
  // Netlify frontmatter often uses `image:` which can be string or array.
  const images = Array.isArray(image) ? image : [image];

  // Debug: show what we actually received (open browser DevTools Console)
  // eslint-disable-next-line no-console
  console.log("IMAGES RECEIVED FROM YAML:", images);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // No images -> render empty hero shell (still shows overlay/text)
  if (!images || images.length === 0) {
    return (
      <section className={classNames("relative w-full h-screen flex items-center")}>
        <div className="absolute inset-0 bg-gray-800" />
        <div className="relative z-10 max-w-4xl pl-8 px-6 text-left text-white">
          <h1 className="text-4xl font-bold">No hero images found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className={classNames("relative w-full h-screen overflow-hidden flex items-center")}>
      {/* Fade + Slide stacked slides */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => {
          // numeric offset from current to compute horizontal shift
          const offset = index - currentImageIndex;

          // transformX in percent — keeps each slide exactly full width.
          const translate = `${offset * 100}%`;

          // Each slide is absolutely positioned and stacked.
          const style: React.CSSProperties = {
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            // move each slide horizontally relative to the currently active one
            transform: `translateX(${translate})`,
            // fade active slide to 1, others to 0
            opacity: index === currentImageIndex ? 1 : 0,
            // handle transition for both transform and opacity
            transition: "transform 1200ms ease, opacity 1200ms ease",
            willChange: "transform, opacity",
            pointerEvents: "none", // so content clickable
          };

          return <div key={index} style={style} />;
        })}
      </div>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.0) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl pl-32 pr-6 text-left text-white">
        <h1 className="text-5xl font-bold leading-tight mb-6">{title?.text}</h1>
        {subtitle && <p className="text-xl mb-8">{subtitle?.text || subtitle}</p>}

        <div className="flex items-center gap-4 mt-6">
          {actions?.[0] && (
            <a href={actions[0].url} className="bg-white text-black font-medium py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition">
              {actions[0].label || "Get Started"}
            </a>
          )}
          {actions?.[1] && (
            <a href={actions[1].url} className="inline-flex items-center gap-3 border border-white/40 text-white font-medium py-3 px-5 rounded-lg text-lg bg-white/5 hover:bg-white/10 transition">
              <span>{actions[1].label || "Learn More"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5" /> 
              </svg>
            </a>
          )}
        </div>

        {/* Stats */}
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
