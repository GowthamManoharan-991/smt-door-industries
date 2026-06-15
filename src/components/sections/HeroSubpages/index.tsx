import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import ImageBlock from '../../blocks/ImageBlock';

export default function HeroSubPages({ 
  title, 
  subtitle, 
  image, 
  cardBadge, 
  cardTitle, 
  cardText, 
  showFeatures = true,
  titleClassName, 
  extraHeightClass,
  actions, 
  hideOverlay = false 
}) {
  
  // 🎯 Safely isolate style updates to the hardware page based on the title prop
  const isHardwarePage = hideOverlay || (title && title.toLowerCase().includes('hardware'));

  return (
    <section
      className={classNames(
        "relative flex items-center px-6 sm:px-10 lg:px-24",
        isHardwarePage ? "text-neutral-800" : "text-white bg-neutral-700",
        extraHeightClass ? extraHeightClass : "min-h-[420px] lg:min-h-[65vh] py-16 lg:py-0"
      )}
    >
      {image?.url && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image.url}
            alt={image.altText || ''}
            className="w-full h-full object-cover object-center"
          />
          {!isHardwarePage && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />
          )}
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto">
        <div className={classNames("grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-16")}>
          
          {/* Left Side Content */}
          <div>
            <h1 className={classNames(
              "font-bold mb-3 lg:mb-6 leading-[1.15] lg:leading-[1.2]",
              titleClassName ? titleClassName : (isHardwarePage ? "text-neutral-500 text-4xl lg:text-5xl" : "text-4xl lg:text-5xl")
            )}>
              {title}
            </h1>
            <p className={classNames(
              "text-sm lg:text-base max-w-xl tracking-wide leading-relaxed mb-6",
              isHardwarePage ? "text-neutral-600 font-medium" : "opacity-80"
            )}>
              {subtitle}
            </p>

            {/* Dynamic Buttons Layout */}
            {actions && actions.length > 0 && (
              <div className="flex flex-wrap gap-4 items-center mb-1 lg:mb-0">
                {actions.map((action, idx) => {
                  const isFilled = action.variant === 'filled';
                  return (
                    <a
                      key={idx}
                      href={action.url || '#'}
                      className={classNames(
                        // Keeping original sizing, tracking, and weight intact
                        "px-6 py-3 rounded-lg font-medium transition-all text-sm tracking-wide inline-block shadow-sm",
                        // Only swapping color values based on context
                        isFilled 
                          ? (isHardwarePage ? "bg-black/85 text-white hover:bg-neutral-800" : "bg-white text-black hover:bg-neutral-200")
                          : (isHardwarePage ? "border border-black/50 text-black/80 hover:bg-black/5" : "border border-white text-white hover:bg-white/10")
                      )}
                    >
                      {action.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Right card */}
          {showFeatures ? (
            <div className={classNames(
              "backdrop-blur-xl border rounded-2xl p-5 lg:p-10 max-w-md lg:ml-auto mx-auto lg:mx-0 mt-2 lg:mt-0",
              isHardwarePage 
                ? "bg-black/5 border-black/6 text-neutral-800" 
                : "bg-white/10 border border-white/20 text-white"
            )}>
              <p className="text-xs tracking-widest uppercase opacity-70 mb-4">
                {cardBadge || 'Features'}
              </p>
              <h3 className="text-2xl font-serif mb-4">
                {cardTitle || 'Elegant Simplicity'}
              </h3>
              <p className="text-sm opacity-80">
                {cardText || 'Experience the perfect blend of form and function with our carefully curated selection of contemporary pieces.'}
              </p>
            </div>
          ) : (
            <div className="hidden lg:block" />
          )}
        </div>
      </div>
    </section>
  );
}