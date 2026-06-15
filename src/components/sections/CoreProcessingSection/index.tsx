import * as React from 'react';
import classNames from 'classnames';

export default function CoreProcessingSection({ badge, title, subtitle, image, items }) {
  return (
    <section 
      id="core-timber-processing" 
      className="bg-gradient-to-br from-stone-900 via-[#111827] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-stone-100 border-y border-stone-800/60"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Sawn Wood Materials List */}
          <div className="flex flex-col justify-center w-full order-last lg:order-first">
            {badge && (
              <div className="mb-3">
                <span className="bg-amber-800 text-amber-50 px-4 py-1.5 rounded-lg uppercase tracking-wider text-[11px] font-extrabold inline-block shadow-sm">
                  {badge}
                </span>
              </div>
            )}
            <h2 className="text-3xl font-extrabold text-[#A08057] tracking-tight leading-tight mb-4">
              {title || "Premium Structural Timber & Sawn Wood"}
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed mb-8">
              {subtitle || "We source and mill the finest log varieties, implementing optimal thermal moisture conditioning cycles to rule out warping entirely."}
            </p>

            {/* Processing Material Stacks */}
            <div className="space-y-6">
              {items?.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex gap-4 border-l-2 border-amber-800 pl-4 transition-colors duration-300"
                >
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-white mb-1 tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {item.specs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sawmill Factory Image Wrapper with Complementary Tint */}
          <div className="flex justify-center items-center w-full bg-stone-900/40 rounded-2xl p-8 border border-stone-800/50 backdrop-blur-sm">
            {image?.url && (
              <img 
                src={image.url} 
                alt={image.altText || 'Raw timber processing setup'} 
                className="max-h-[400px] lg:max-h-[480px] w-auto max-w-full object-contain drop-shadow-2xl mx-auto rounded-lg" 
                loading="lazy"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}