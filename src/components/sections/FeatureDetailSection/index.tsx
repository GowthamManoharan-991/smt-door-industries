import * as React from 'react';

export default function FeatureDetailSection({ 
  badge, 
  title, 
  subtitle, 
  image, 
  leftSideFeatures, 
  cta, 
  featuresList 
}) {
  return (
    <section id="details" className="bg-[#ffffff] py-20 px-6 sm:px-12 lg:px-24 text-neutral-800">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Main 3-column layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">
          
          {/* Column 1: Left Side (Own Production, Free Measurement, etc.) */}
          <div className="flex flex-col items-start text-left justify-center order-2 lg:order-1 h-full w-full">
            {badge && (
              <span className="text-[#F59E0B] uppercase tracking-wider text-xs font-extrabold mb-3">
                {badge}
              </span>
            )}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#06192F] leading-tight mb-4">
              {title}
            </h2>
            <p className="text-sm text-neutral-600 opacity-90 leading-relaxed mb-6">
              {subtitle}
            </p>

            {/* Left Side Features Render */}
            {leftSideFeatures && leftSideFeatures.length > 0 && (
              <div className="flex flex-col items-start space-y-5 mb-8 w-full">
                {leftSideFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 shadow-sm text-[#F59E0B] shrink-0">
                      {item.icon === 'factory' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-6 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
                        </svg>
                      )}
                      {item.icon === 'ruler' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18M19 3v18M5 7h5M5 12h8M5 17h5" />
                        </svg>
                      )}
                      {item.icon === 'user-check' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                      {item.icon === 'award' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v5m0 0l3-3m-3 3l-3-3M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
                        </svg>
                      )}
                      {item.icon === 'zap' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#06192F] tracking-wide mb-0.5">
                        {item.label}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Accent Button */}
            {cta && (
              <div>
                <a 
                  href={cta.url} 
                  className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#fca308] text-white text-xs font-bold tracking-wider px-6 py-3 rounded shadow transition-all uppercase"
                >
                  {cta.label} &rarr;
                </a>
              </div>
            )}
          </div>

          {/* Column 2: Centerpiece Product Graphic */}
          <div className="flex justify-center items-center w-full order-first lg:order-2 h-full">
            {image?.url && (
              <img 
                src={image.url} 
                alt={image.altText || ''} 
                className="max-h-[320px] lg:max-h-[420px] w-auto max-w-full object-contain drop-shadow-xl mx-auto" 
              />
            )}
          </div>

          {/* Column 3: Right Side (Acoustic Shield, UV Resistance, etc.) */}
          <div className="flex flex-col justify-center order-3 h-full w-full">
            {featuresList && featuresList.length > 0 && (
              <div className="flex flex-col gap-4 w-full">
                {featuresList.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 bg-[#FFFFFF] border border-neutral-800 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  >
                    {/* Right Side Icons */}
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F59E0B] text-black rounded-xl shrink-0 shadow-sm border border-amber-600/10">
                      {feature.icon === 'volume-x' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                        </svg>
                      )}
                      {feature.icon === 'sun' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="4" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                        </svg>
                      )}
                      {feature.icon === 'cloud-rain' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 13a4 4 0 00-4.937-3.87 5 5 0 00-9.063 2.53A4 4 0 006 19.5h10a3.5 3.5 0 001.5-6.665M12 21v2M16 20v2M8 20v2" />
                        </svg>
                      )}
                      {feature.icon === 'shield-alert' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4M12 16h.01" />
                        </svg>
                      )}
                      {feature.icon === 'bug-off' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.7 4.7l14.6 14.6M8.11 8.11a4.004 4.004 0 005.66 5.66M12 3v4M3 12h4M21 12h-4M18 5l-2.4 2.4M6 5l2.4 2.4" />
                        </svg>
                      )}
                      {feature.icon === 'sparkles' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM19 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2zM12 7l-2 3H7l2.5 2L8.5 15l3.5-2 3.5 2-1-3 2.5-2h-3l-2-3z" />
                        </svg>
                      )}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#06192F] tracking-wide mb-0.5">
                        {feature.label}
                      </span>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}