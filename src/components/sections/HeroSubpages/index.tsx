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
  actions // New array prop to handle CTA buttons dynamically
}) {
  return (
    <section
      className={classNames(
        "relative flex items-center px-6 sm:px-10 lg:px-24 text-white bg-neutral-700",
        extraHeightClass ? extraHeightClass : "min-h-[420px] lg:min-h-[65vh] py-16 lg:py-0"
      )}
    >
      {image?.url && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image.url}
            alt={image.altText || ''}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto">
        <div 
          className={classNames(
            "grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-16"
          )}
        >
          {/* Left Side */}
          <div>
            <h1 className={classNames(
              "font-bold mb-3 lg:mb-6 leading-[1.15] lg:leading-[1.2]",
              titleClassName ? titleClassName : "text-4xl lg:text-6xl"
            )}>
              {title}
            </h1>
            <p className="text-base lg:text-lg opacity-80 max-w-xl mb-6">
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
                        "px-6 py-3 rounded-lg font-medium transition-all text-sm tracking-wide inline-block",
                        isFilled 
                          ? "bg-white text-black hover:bg-neutral-200" // Filled button styling
                          : "border border-white text-white hover:bg-white/10" // Outline button styling
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
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 lg:p-10 max-w-md lg:ml-auto mx-auto lg:mx-0 mt-2 lg:mt-0">
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