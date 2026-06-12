import * as React from 'react';

export default function ManufacturingProcessSection({ badge, title, subtitle, steps }) {
  return (
    <section id="process" className="bg-[#ffffff] py-20 px-6 sm:px-12 lg:px-24 text-neutral-800">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Component Header Sections */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <span className="text-[#F59E0B] uppercase tracking-wider text-xs font-extrabold mb-3 block">
              {badge}
            </span>
          )}
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#06192F] tracking-tight mb-4">
            {title || "Precision Crafted to European Standards"}
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            {subtitle || "From raw compound selection to meticulous site deployments, our fabrication pipeline cuts down any margins of error."}
          </p>
        </div>

        {/* Process Card Rail Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps?.map((item, idx) => (
            <div 
              key={idx} 
              className="relative bg-[#05192F] border border-slate-800 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
            >
              
              {/* Standalone SVG Directional Arrow with smooth horizontal hover slide */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none items-center justify-center w-5">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2.5" 
                    stroke="currentColor" 
                    className="w-5 h-5 text-slate-700 group-hover:text-[#F59E0B] group-hover:translate-x-1.5 transition-all duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
                  </svg>
                </div>
              )}

              <div className="relative z-10">
                {/* Numbers row with updated Phase badge styling */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-extrabold tracking-widest text-[#F59E0B] bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    PHASE
                  </span>
                  <span className="text-3xl font-black text-slate-800 tracking-tighter select-none font-mono group-hover:text-[#F59E0B]/20 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Main step header in White */}
                <h4 className="text-base font-bold text-white mb-2 tracking-tight transition-colors group-hover:text-[#F59E0B]">
                  {item.label}
                </h4>
                
                {/* Step description body in clean slate contrast text */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom colored bar accent line */}
              <div className="h-1 bg-transparent group-hover:bg-[#F59E0B] w-full absolute bottom-0 left-0 transition-colors rounded-b-2xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}