import * as React from 'react';
import classNames from 'classnames';

export default function TimberHeroSection({ badge, title, subtitle, image, actions }) {
  return (
    <section 
      id="timber-hero" 
      className="relative w-full min-h-[50vh] lg:min-h-[90vh] pt-5 pb-20 px-6 sm:px-12 lg:px-12 flex items-start justify-center overflow-hidden"
    >
      {/* Absolute Background Layer */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {image?.url ? (
          <img 
            src={image.url} 
            alt={image.altText || 'Premium studio background'} 
            className="w-full h-full object-cover object-top" 
          />
        ) : (
          <div className="w-full h-full bg-[#161a22]" />
        )}
        
        {/* 🎨 GRADIENT OVERLAY LAYER: Clear at the top, fading to dark at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#11141a]" />
      </div>

      {/* Content Layout */}
      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-start mt-6 lg:mt-12 z-10">
        
        {badge && (
          <span className="text-[#ebebeb] uppercase tracking-widest text-xs font-extrabold mb-4 block">
            {badge}
          </span>
        )}

        <h1 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold text-[#A08057] tracking-wide leading-none mb-6 max-w-3xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          {title || "Living Room"}
        </h1>

        <p className="text-sm sm:text-base text-white font-light leading-[1.45] tracking-wide mb-10 max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {subtitle || "Durable metal springs in the seat give the sofa a springy comfort, allowing you to sit, relax and enjoy it for many years."}
        </p>

        {/* Action Buttons Layout */}
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {actions.map((action, idx) => {
              const isFilled = action.variant === 'filled';
              return (
                <a
                  key={idx}
                  href={action.url || '#'}
                  className={classNames(
                    "px-7 py-3 rounded-lg font-medium transition-all text-sm tracking-wide inline-block shadow-md min-w-[140px]",
                    isFilled 
                      ? "bg-[#A08057] text-white hover:bg-[#8c6f4b]" 
                      : "border-2 border-[#A08057] text-[#A08057] hover:bg-[#A08057]/10 backdrop-blur-sm"
                  )}
                >
                  {action.label}
                </a>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}