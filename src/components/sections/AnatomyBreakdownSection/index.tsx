import * as React from 'react';
import AnatomyBreakdown from '@/components/sections/AnatomyBreakdownSection';

export default function AnatomyBreakdownSection({ badge, title, subtitle, image, specifications }) {
  return (
    <section id="technical-specs" className="bg-[#ffffff] py-20 px-6 sm:px-12 lg:px-24 text-neutral-800">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Exploded Cross-Section Graphic */}
          <div className="flex justify-center items-center w-full bg-neutral-50 rounded-2xl p-8 border border-neutral-100/50">
            {image?.url && (
              <img 
                src={image.url} 
                alt={image.altText || 'uPVC profile anatomy'} 
                className="max-h-[400px] lg:max-h-[480px] w-auto max-w-full object-contain drop-shadow-xl mx-auto" 
              />
            )}
          </div>

          {/* Right Column: Layered Specifications List */}
          <div className="flex flex-col justify-center w-full">
            {badge && (
              <span className="text-[#F59E0B] uppercase tracking-wider text-xs font-extrabold mb-3 block">
                {badge}
              </span>
            )}
            <h2 className="text-3xl font-extrabold text-[#06192F] leading-tight mb-4">
              {title || "What's Inside Our Premium Profiles?"}
            </h2>
            <p className="text-sm text-neutral-600 opacity-90 leading-relaxed mb-8">
              {subtitle || "True luxury lies in hidden precision engineering. Look beneath the surface at the technology ensuring lifetime stability."}
            </p>

            {/* Spec Stacks */}
            <div className="space-y-6">
              {specifications?.map((spec, idx) => (
                <div key={idx} className="flex gap-4 border-l-2 border-neutral-200 hover:border-[#F59E0B] pl-4 transition-colors duration-300">
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-[#06192F] mb-1">
                      {spec.title}
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {spec.desc}
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