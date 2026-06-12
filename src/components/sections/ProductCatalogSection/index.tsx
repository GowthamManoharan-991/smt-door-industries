import * as React from 'react';

export default function ProductCatalogSection({ title, subtitle, tabs }) {
  const [activeTab, setActiveTab] = React.useState(0);

  // Business WhatsApp Contact Destination
  const WHATSAPP_NUMBER = "919791974780";

  return (
    /* Background set to deep navy #05192F, and text color defaulted to a light neutral slate */
    <section id="catalog" className="bg-[#05192F] py-20 px-6 sm:px-12 lg:px-24 text-slate-300">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Title set to crisp white for ultra-high contrast readability */}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {title || "Our Premium uPVC Collection"}
          </h2>
          {/* Subtitle set to slate-400 for a luxury, secondary text look */}
          <p className="text-sm text-slate-400 leading-relaxed">
            {subtitle || "Tailored architectural solutions engineered for modern luxury homes."}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          {/* Background adjusted to a premium semi-transparent dark pane */}
          <div className="inline-flex p-1.5 bg-slate-800/60 border border-slate-700/50 rounded-xl gap-2">
            {tabs?.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 text-sm font-bold tracking-wide rounded-lg transition-all duration-200 ${
                  activeTab === idx
                    /* Active tab uses white text with a crisp dark slate pill background */
                    ? 'bg-slate-700 text-white shadow-lg'
                    /* Inactive tabs use slate-400 text and shift to premium gold on hover */
                    : 'text-slate-400 hover:text-[#F59E0B]'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabs?.[activeTab]?.items?.map((item, idx) => {
            // Context-rich message layout structure
            const messageText = `Hello, I'm looking for details regarding the premium architectural system: "${item.name}". Please provide compliance details and estimation structures.`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;

            return (
              <div 
                key={idx} 
                /* Cards shifted to an ultra-clean slate-900 palette with dark borders to blend into the main background */
                className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-slate-700/80 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Container */}
                {/* Bright white card inner backgrounds changed to a sleek dark charcoal/slate tint */}
                <div className="bg-slate-800/40 h-56 w-full overflow-hidden flex items-center justify-center p-6 relative border-b border-slate-800">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Panel */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Header changed to white, hovers beautifully into Metallic Gold (#F59E0B) */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F59E0B] transition-colors">
                    {item.name}
                  </h3>
                  {/* Description text optimized to soft slate-400 */}
                  <p className="text-xs text-slate-400 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                  {/* Actionable Click-to-Chat Button Wrapper */}
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-slate-300 hover:text-[#F59E0B] transition-colors cursor-pointer group/link"
                    >
                      Get Details 
                      <span className="ml-1 transition-transform group-hover/link:translate-x-1">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}