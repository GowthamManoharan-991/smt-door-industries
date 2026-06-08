import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  icon: 'window' | 'door' | 'energy' | 'repair' | 'design' | 'commercial';
}

interface ComprehensiveServicesGridProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  centerImageUrl?: string;
  centerImageAlt?: string;
  leftServices?: ServiceItem[];
  rightServices?: ServiceItem[];
}

// Inline SVGs with clean white stroke configurations
const renderServiceIcon = (iconType: string) => {
  const baseSvgClass = "w-7 h-7 text-white"; // Force white icons globally
  switch (iconType) {
    case 'window':
      return <svg className={baseSvgClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M12 4v16 M4 12h16" /></svg>;
    case 'door':
      return <svg className={baseSvgClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 012 2v14H6V6a2 2 0 012-2z M14 12v.01" /></svg>;
    case 'energy':
      return <svg className={baseSvgClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
    case 'repair':
      return <svg className={baseSvgClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
    case 'design':
      return <svg className={baseSvgClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>;
    case 'commercial':
      return <svg className={baseSvgClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
    default:
      return <svg className={baseSvgClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
  }
};

export default function ComprehensiveServicesGrid({
  badge = "OUR SERVICES",
  title = "Comprehensive window & door services",
  subtitle = "Partner with a company dedicated to excellence in window and door installations, ensuring each project is handled with precision and care.",
  centerImageUrl = "/images/window-center.png",
  centerImageAlt = "Premium double glazed window structure",
  leftServices = [
    {
      title: "Custom Window Installation",
      description: "Expertly crafted windows tailored to your specific needs.",
      icon: "window"
    },
    {
      title: "Door Installation & Replacement",
      description: "High-quality doors designed for security and style.",
      icon: "door"
    },
    {
      title: "Energy-Efficient Solutions",
      description: "Windows and doors that enhance energy savings, year-round.",
      icon: "energy"
    }
  ],
  rightServices = [
    {
      title: "Window & Door Repair",
      description: "Reliable repairs ensuring long-lasting functionality and aesthetics.",
      icon: "repair"
    },
    {
      title: "Consultation & Design Services",
      description: "Personalized guidance to match your home's unique style.",
      icon: "design"
    },
    {
      title: "Commercial Windows & Doors",
      description: "Durable, efficient solutions for businesses of all sizes.",
      icon: "commercial"
    }
  ]
}: ComprehensiveServicesGridProps) {
  return (
    <section className="relative bg-[#1C1A17] py-20 px-4 sm:px-6 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto space-y-12">
        
        {/* HEADER BLOCK: Unified Centered Layout */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-4">
          {/* Eyebrow */}
          <span className="text-amber-500 font-extrabold tracking-widest text-sm uppercase inline-flex items-center gap-2">
            {badge}
          </span>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#FFFFFF] tracking-wide leading-snug capitalize">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* CORE 3-COLUMN COMPONENT MESH LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* LEFT STRIP: Boxed Premium Card Layout */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            {leftServices.map((service, idx) => (
              <div 
                key={idx} 
                className="flex gap-5 items-start bg-[#11100E] p-5 sm:p-6 rounded-2xl border border-[#292725] shadow-xl group hover:border-amber-500/30 transition-all duration-300"
              >
                {/* Amber card box with white icon */}
                <div className="flex-shrink-0 bg-[#F59E0B] p-3.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  {renderServiceIcon(service.icon)}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-white text-base md:text-lg group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MIDDLE COLUMN: Isolated Main Showcase Asset */}
          <div className="md:col-span-2 lg:col-span-4 flex justify-center order-1 lg:order-2 py-6 lg:py-0">
            <div className="w-full max-w-[320px] transition-transform duration-500 hover:scale-105">
              <img 
                src={centerImageUrl} 
                alt={centerImageAlt} 
                className="w-full h-auto object-contain mx-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT STRIP: Boxed Premium Card Layout Balanced to Left Side Aesthetic */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3">
            {rightServices.map((service, idx) => (
              <div 
                key={idx} 
                className="flex gap-5 items-start bg-[#11100E] p-5 sm:p-6 rounded-2xl border border-[#292725] shadow-xl group hover:border-amber-500/30 transition-all duration-300"
              >
                {/* Matching Amber card box with white icon */}
                <div className="flex-shrink-0 bg-[#F59E0B] p-3.5 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300">
                  {renderServiceIcon(service.icon)}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-white text-base md:text-lg group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
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