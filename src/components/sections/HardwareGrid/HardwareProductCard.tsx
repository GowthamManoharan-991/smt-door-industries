import React from 'react';
import Image from 'next/image';

interface HardwareProductCardProps {
  model: string;
  image: string;
  tagline?: string;
}

export default function HardwareProductCard({ 
  model, 
  image, 
  tagline 
}: HardwareProductCardProps) {
  
  // Format target message for WhatsApp lead tracking
  const encodedMessage = encodeURIComponent(
    `Hi SMT Door Industries, I want to inquire about the premium "${model}" collection.`
  );
  const whatsappUrl = `https://wa.me/919791974780?text=${encodedMessage}`;

  return (
    <div className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Expanded Product Image Container - Increased padding & height for maximum view size */}
      <div className="bg-[#f5f5f5] w-full min-h-[320px] sm:min-h-[360px] md:min-h-[380px] overflow-hidden relative p-6 flex items-center justify-center">
        <div className="relative w-full h-[300px] sm:h-[340px] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Image
            src={image}
            alt={`SMT Premium ${model}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain object-center" 
            priority={model === 'Locks' || model === 'Handles'}
          />
        </div>
      </div>

      {/* Product Information & Action Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white text-center">
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 transition-colors duration-200 group-hover:text-amber-700">
            {model}
          </h3>
          {tagline && (
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed font-normal px-2">
              {tagline}
            </p>
          )}
        </div>
        
        {/* Instant Lead Generation Trigger */}
        <div className="mt-6">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1a1510] py-3 px-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-amber-600 hover:text-zinc-950"
          >
            Enquire Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}