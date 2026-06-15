import React from 'react';

export default function PortfolioShowcaseSection(props: any) {
  const targetData = props?.data ? props.data : props;

  const {
    badge = 'Our Work Portfolio',
    title = 'Exquisite Craftsmanship In Action',
    subtitle = 'Explore our completed installations and custom furniture.',
    categories = [],
    actions = []
  } = targetData || {};

  return (
    <section className="bg-gradient-to-br from-stone-900 via-[#111827] to-zinc-950 py-20 px-6 sm:px-12 lg:px-24 text-stone-100 border-y border-stone-800/60">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <div className="mb-4">
              <span className="inline-block bg-amber-800 text-white text-[10px] font-extrabold tracking-wider uppercase px-5 py-2 rounded-lg shadow-sm">
                {badge}
              </span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-4 text-[#A08057]">
            {title}
          </h2>
          <p className="mt-4 text-base text-stone-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Categories Stack */}
        {categories && categories.length > 0 ? (
          <div className="space-y-16">
            {categories.map((category: any, catIdx: number) => (
              <div key={catIdx} className="border-b border-stone-800/60 pb-12 last:border-0 last:pb-0">
                
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-amber-800">0{catIdx + 1}.</span> {category.name}
                  </h3>
                  <p className="text-stone-400 mt-1 text-xs sm:text-sm max-w-2xl">
                    {category.description}
                  </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images?.map((img: any, imgIdx: number) => (
                    <div 
                      key={imgIdx} 
                      className="group relative overflow-hidden rounded-xl shadow-md bg-stone-900/40 border border-stone-800/40 aspect-[4/3]"
                    >
                      <img
                        src={img.url}
                        alt={img.altText || category.name}
                        className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80";
                        }}
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-xs font-semibold tracking-wide">
                          {img.altText}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-stone-900/40 border border-dashed border-stone-800 rounded-xl max-w-md mx-auto">
            <p className="text-amber-500 font-medium text-sm mb-2">⚠️ Setup Check Needed</p>
            <p className="text-stone-500 text-xs px-4">
              Received keys: {Object.keys(targetData).join(', ') || 'none'}
            </p>
          </div>
        )}

        {/* Formatted CTA Action Buttons */}
        {actions && actions.length > 0 && (
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-stone-800/60 pt-10">
            {actions.map((btn: any, btnIdx: number) => {
              const isFilled = btn.variant === 'filled';
              return (
                <a
                  key={btnIdx}
                  href={btn.url}
                  className={`w-full sm:w-auto text-center px-8 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md ${
                    isFilled
                      ? 'bg-amber-800 text-white hover:bg-amber-800'
                      : 'border border-amber-800 text-white hover:bg-stone-900/60'
                  }`}
                >
                  {btn.label}
                </a>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}