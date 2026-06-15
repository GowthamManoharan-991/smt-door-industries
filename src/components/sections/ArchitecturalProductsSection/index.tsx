import * as React from 'react';
import classNames from 'classnames';

export default function ArchitecturalProductsSection({ badge, title, subtitle, image, features }) {
  return (
    <section 
      id="architectural-woodworks" 
      className="bg-[#ffffff] py-20 px-6 sm:px-12 lg:px-24 text-neutral-800 border-t border-neutral-200/40"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Product Visual Showcase */}
          <div className="flex justify-center items-center w-full bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-sm">
            {image?.url && (
              <img 
                src={image.url} 
                alt={image.altText || 'Custom wooden frames and windows structures'} 
                className="max-h-[400px] lg:max-h-[480px] w-auto max-w-full object-contain drop-shadow-xl mx-auto rounded-lg" 
              />
            )}
          </div>

          {/* Right Column: Architectural Specification Matrix */}
          <div className="flex flex-col justify-center w-full">
            {badge && (
              <div className="mb-4">
                <span className="inline-block bg-amber-800 text-white text-[10px] font-extrabold tracking-wider uppercase px-5 py-2 rounded-lg shadow-sm">
                  {badge}
                </span>
              </div>
            )}
            
            <h2 className="text-3xl font-extrabold text-[#4A4A4A] tracking-tight leading-tight mb-4">
              {title || "Precision Milled Structural Elements"}
            </h2>
            <p className="text-sm text-[#374151] leading-relaxed mb-8">
              {subtitle || "From heavy framing timbers to elegant structural accents, our master technicians shape each millwork unit for seamless building alignments."}
            </p>

            {/* Structural Product Feature Layers with Amber borders */}
            <div className="space-y-6">
              {features?.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 border-l-2 border-amber-800 pl-4 transition-colors duration-300"
                >
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-[#4A4A4A] mb-1 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#374151] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}