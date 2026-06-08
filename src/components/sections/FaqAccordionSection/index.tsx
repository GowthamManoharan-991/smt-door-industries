import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionSectionProps {
  badge?: string;
  title?: string;
  imageUrl?: string;
  imageAlt?: string;
  faqs?: FaqItem[];
  primaryCta?: { label: string; url: string };
  secondaryCta?: { label: string; url: string };
}

export default function FaqAccordionSection({
  badge = "WHY PICK US?",
  title = "A Sophisticated Touch To Safeguard Your Home's Doors",
  imageUrl = "/images/faq-security.jpg",
  imageAlt = "Smart lock and door security system",
  faqs = [
    {
      question: "How should a new door be measured?",
      answer: "Pellentesque suscipit sagittis sagittis. Duis sed pellentesque justo, sit amet sollicitudin sapien. Cras maximus tempor mauris."
    },
    {
      question: "How are pre-hung doors installed?",
      answer: "Mauris luctus sem vitae nisl convallis, vel porttitor tellus rhoncus. Aliquam nec diam ut tellus elementum efficitur sit amet non felis."
    },
    {
      question: "How much does door installation cost?",
      answer: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed imperdiet, urna sed sodales aliquam."
    },
    {
      question: "What distinguishes crafted windows?",
      answer: "Nullam eget felis eget nisl ultrices varius. Quisque vel efficitur magna. Curabitur sed nisl non ex egestas vehicula sed id nisi."
    }
  ],
  primaryCta = { label: "OTHER FAQ'S", url: "/faqs" },
  secondaryCta = { label: "SUBMIT QUERY", url: "/contact" }
}: FaqAccordionSectionProps) {
  // Track which accordion item index is currently open
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP ROW: Header Text & Dynamic CTA Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase block">
              {badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4A4A4A] tracking-wide leading-[1.2]">
              {title}
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href={primaryCta.url}
              className="inline-block bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 shadow-sm transition"
            >
              {primaryCta.label}
            </a>
            <a 
              href={secondaryCta.url}
              className="inline-block border border-slate-950 bg-white hover:bg-slate-950 hover:text-white text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 text-center transition min-w-[140px]"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>

        {/* BOTTOM ROW: Split Image & Interactive Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Rounded Visual Showcase (5 out of 12 cols) */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src={imageUrl} 
                alt={imageAlt} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Clean Numbered Accordion Rows (7 out of 12 cols) */}
          <div className="lg:col-span-7 divide-y divide-slate-200">
            {faqs.map((faq, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div key={idx} className="py-4 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setActiveIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group py-3"
                  >
                    <div className="flex items-center space-x-4 text-gray-500 font-bold text-base md:text-lg tracking-tight">
                      {/* Formatted row index sequence numbers */}
                      <span className="text-[#4A4A4A]">{idx + 1}.</span>
                      <span className=" text-[#4A4A4A] group-hover:text-amber-500 transition-colors duration-200">
                        {faq.question}
                      </span>
                    </div>
                    
                    {/* Circle Arrow Toggles */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      isOpen 
                        ? 'bg-[#F59E0B] border-[#F59E0B] text-slate-950' 
                        : 'border-slate-300 text-gray-600 group-hover:border-slate-900'
                    }`}>
                      <svg 
                        className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Expansion Panel */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="pl-7 text-gray-500 text-sm md:text-base leading-relaxed pb-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}