import * as React from 'react';
import classNames from 'classnames';

export default function FurnitureShowcaseSection({ badge, title, subtitle, products }) {
  return (
    <section id="furniture-collection" className="bg-[#ffffff] py-20 px-6 sm:px-12 lg:px-24 text-neutral-800">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        
        {/* Header Block Arrangement */}
        <div className="max-w-3xl">
          {badge && (
            <div className="mb-3">
              <span className="inline-block bg-amber-800 text-white text-[10px] font-extrabold tracking-wider uppercase px-5 py-2 rounded-full shadow-sm">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-3xl font-extrabold text-[#4A4A4A] tracking-tight leading-tight mb-3">
            {title || "Handcrafted Premium Furniture"}
          </h2>
          <p className="text-sm text-[#374151] leading-relaxed">
            {subtitle || "Explore meticulously carved sofas, robust storage cots, and legacy cabinetry crafted out of raw, elite wood variants."}
          </p>
        </div>

        {/* Product Interactive Display Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((prod, idx) => (
            <div key={idx} className="group cursor-pointer bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200/60 shadow-sm transition-all hover:shadow-md">
              
              {/* Product Card Image Container Block */}
              <div className="h-56 bg-neutral-200/70 w-full relative overflow-hidden flex items-center justify-center">
                {prod.image?.url ? (
                  <img 
                    src={prod.image.url} 
                    alt={prod.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Product View</span>
                )}
              </div>

              {/* Dynamic Information Metadata Block */}
              <div className="p-5 border-t border-neutral-100 bg-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block mb-1">
                  {prod.category}
                </span>
                <h4 className="text-base font-bold text-[#4A4A4A] tracking-tight leading-none">
                  {prod.title}
                </h4>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}