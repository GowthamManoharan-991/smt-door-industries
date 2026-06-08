import React from 'react';

interface ImageBlock {
  type: string;
  url: string;
  altText: string;
}

interface CtaBlock {
  label: string;
  url: string;
}

interface ExclusivePromoStripProps {
  title?: string;
  description?: string;
  image?: ImageBlock;
  primaryCta?: CtaBlock;
  secondaryCta?: CtaBlock;
}

export default function ExclusivePromoStrip({
  title = "Exclusive Discount Deals & Up To 40% Off",
  description,
  image,
  primaryCta,
  secondaryCta
}: ExclusivePromoStripProps) {
  return (
    /* FIXED: Drastically reduced padding on the white section background container */
    <section className="relative bg-white py-8 md:py-10 overflow-visible">
      
      {/* Yellow strip container padding and heights remain exactly the same as your image */}
      <div className="w-full bg-[#F59E0F] py-8 md:py-10 px-4 sm:px-6 lg:px-8 relative min-h-[220px] flex items-center">
        
        {/* The grid is shifted relative to its layout box to let the image overhang beautifully */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* LEFT COLUMN: The Perfectly Centered Pop-Out Image (3 out of 12 cols) */}
          <div className="lg:col-span-3 relative flex justify-center lg:justify-start">
            {image && (
              /* lg:-my-24 extends the bounding box vertically on desktop so it pops out of both sides evenly */
              <div className="w-full max-w-[260px] lg:-my-24 z-10 transform transition-transform duration-300">
                <img 
                  src={image.url} 
                  alt={image.altText || "Featured Product Door Frame"} 
                  className="w-full h-auto block bg-transparent"
                />
              </div>
            )}
          </div>

          {/* MIDDLE COLUMN: Text Heading & Explainer Subcopy (5 out of 12 cols) */}
          <div className="lg:col-span-5 text-slate-950 space-y-4 text-center lg:text-left lg:pl-10">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.02em] leading-[1.4]">
              {title}
            </h2>
            {description && (
              <p className="text-slate-900 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90">
                {description}
              </p>
            )}
          </div>

          {/* RIGHT COLUMN: Interactive Double Call To Action Row Links (4 out of 12 cols) */}
          <div className="lg:col-span-4 flex flex-wrap items-center justify-center lg:justify-end gap-4">
            {primaryCta && (
              <a 
                href={primaryCta.url} 
                className="inline-block bg-[#1C1A17] hover:bg-black text-[#EAB308] font-bold text-xs uppercase tracking-wider px-7 py-4 text-center transition-colors duration-200 shadow-md min-w-[145px]"
              >
                {primaryCta.label}
              </a>
            )}
            
            {secondaryCta && (
              <a 
                href={secondaryCta.url} 
                className="inline-block border border-slate-950 hover:bg-slate-950 hover:text-white text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-4 text-center transition-all duration-200 min-w-[145px]"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}