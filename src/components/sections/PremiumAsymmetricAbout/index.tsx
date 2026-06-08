import React from 'react';

interface ImageBlock {
  type: string;
  url: string;
  altText: string;
}

interface FeatureItem {
  text: string;
}

interface MetricItem {
  label: string;
  value: string;
  icon: string;
}

interface PremiumAsymmetricAboutProps {
  badge?: string;
  title?: string;
  description?: string;
  images?: ImageBlock[];
  features?: FeatureItem[];
  ctaButton?: {
    label: string;
    url: string;
    style?: string;
  };
  phoneCallout?: {
    label: string;
    url: string;
  };
  metrics?: MetricItem[];
}

// Icon helper mapping string lookups to standard inline SVGs
const renderIcon = (iconName: string) => {
  const baseClass = "w-6 h-6 text-amber-500";
  switch (iconName) {
    case 'target':
      return <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'store':
      return <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
    case 'clients':
      return <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
    case 'gear':
    default:
      return <svg className={baseClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
  }
};

export default function PremiumAsymmetricAbout({
  badge = "ABOUT US",
  title,
  description,
  images = [],
  features = [],
  ctaButton,
  phoneCallout,
  metrics = []
}: PremiumAsymmetricAboutProps) {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Overlapping Collage */}
        <div className="lg:col-span-4 relative flex flex-col items-center lg:items-start">
          {images[0] && (
            <div className="w-4/5 lg:w-full aspect-[4/5] rounded-sm overflow-hidden shadow-lg border-4 border-white z-10">
              <img src={images[0].url} alt={images[0].altText} className="w-full h-full object-cover" />
            </div>
          )}
          {images[1] && (
            <div className="w-3/5 lg:w-3/4 aspect-square rounded-sm overflow-hidden shadow-xl border-4 border-white absolute -bottom-10 -right-2 lg:-right-10 z-20">
              <img src={images[1].url} alt={images[1].altText} className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {/* MIDDLE COLUMN: Text Descriptions */}
        <div className="lg:col-span-5 space-y-6 lg:pl-6 mt-10 lg:mt-0">
          <div className="space-y-2">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase block">{badge}</span>
            <h2 className="text-3xl sm:text-3xl lg:text-[36px] leading-[1.2] sm:leading-[1.25] mt-2 font-semibold text-[#4A4A4A] tracking-tight ">{title}</h2>
          </div>
          <p className="text-gray-600 text-[16px] sm:text-[14px] lg:text-[15px] leading-relaxed my-4">
  {description}
</p>
          <ul className="space-y-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-gray-800 font-medium text-sm">
                <span className="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            {ctaButton && (
              <a href={ctaButton.url} className={`inline-block uppercase tracking-wider text-xs px-8 py-4 shadow-md transition-all duration-200 ${ctaButton.style || 'bg-amber-500 text-slate-950'}`}>
                {ctaButton.label}
              </a>
            )}
            {phoneCallout && (
              <a href={phoneCallout.url} className="flex items-center space-x-3 group bg-white border border-slate-200 px-6 py-3 shadow-sm hover:shadow transition-all">
                <span className="w-10 h-10 bg-slate-950 rounded-full flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                </span>
                <span className="text-slate-900 font-bold text-sm tracking-wide">{phoneCallout.label}</span>
              </a>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Metric Cards (2x2 Grid on Mobile, 1x4 Flat Column Stack on Desktop) */}
<div className="w-full lg:col-span-3">
  <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-0 lg:space-y-4">
    {metrics.map((metric, idx) => (
      <div 
        key={idx} 
        className="bg-white p-4 sm:p-5 shadow-sm border border-slate-100 flex items-center space-x-3 sm:space-x-4 rounded-sm w-full"
      >
        <div className="bg-amber-50 p-2.5 sm:p-3 rounded-sm flex-shrink-0 flex items-center justify-center">
          {renderIcon(metric.icon)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wide truncate">
            {metric.label}
          </p>
          <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mt-0.5">
            {metric.value}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}