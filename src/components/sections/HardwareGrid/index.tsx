import React from 'react';
import HardwareProductCard from './HardwareProductCard';

interface HardwareProduct {
  model: string;
  image: string;
  tagline?: string;
}

interface HardwareGridProps {
  elementId: string;
  background: 'white' | 'zinc';
  height?: string;
  products: HardwareProduct[];
}

export default function HardwareGrid({ 
  elementId, 
  background, 
  products 
}: HardwareGridProps) {
  
  const bgClass = background === 'white' ? 'bg-white' : 'bg-zinc-50';

  return (
    <section 
      id={elementId} 
      className={`${bgClass} py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle section introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight sm:text-4xl">
            Our Core Collections
          </h2>
          <div className="h-1 w-12 bg-amber-500 mx-auto mt-4 rounded"></div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <HardwareProductCard 
              key={`${product.model}-${index}`}
              model={product.model}
              image={product.image}
              tagline={product.tagline}
            />
          ))}
        </div>
      </div>
    </section>
  );
}