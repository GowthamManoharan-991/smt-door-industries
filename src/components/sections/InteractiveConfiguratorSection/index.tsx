import * as React from 'react';

export default function InteractiveConfigurator({ title, subtitle, steps, cta }) {
  // Safe Fallback extractions to map directly to whatever text is typed inside the YAML fields
  const defaultStyle = steps?.[0]?.options?.[0] || 'Sliding Window';
  const defaultFinish = steps?.[1]?.options?.[0]?.name || 'Pristine White';
  const defaultGlass = steps?.[2]?.options?.[0] || 'Clear Toughened';

  // Configurator state variables initialized dynamically from data arrays
  const [style, setStyle] = React.useState(defaultStyle);
  const [finish, setFinish] = React.useState(defaultFinish);
  const [glass, setGlass] = React.useState(defaultGlass);

  // 1. Find the exact matching Step 2 option object from the data array
  const finishOptions = steps?.[1]?.options || [];
  const selectedOptionObject = finishOptions.find(opt => typeof opt === 'object' && opt.name === finish);
  
  // 2. Enhanced Normalize Key Utility Function
  const formatKey = (text) => {
    let clean = text.toLowerCase().trim();
    if (clean.includes('sliding')) return 'sliding-system';
    if (clean.includes('casement')) return 'casement-openable';
    if (clean.includes('tilt')) return 'tilt-turn';
    return clean.replace(/[^a-z0-9]+/g, '-');
  };

  const styleKey = formatKey(style);

  // 3. Extract the correct combined matrix image path path safely
  const uploadedImageUrl = selectedOptionObject?.images?.[styleKey] || null;

  return (
    <section id="build-your-own" className="bg-[#05192F] py-20 px-6 sm:px-12 lg:px-24 text-slate-300">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {title || "Customize Your Architectural Solution"}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            {subtitle || "Configure your premium window builds across styling, profile textures, and high-performance glazing elements."}
          </p>
        </div>

        {/* 12-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Columns (7): Clean Photographic Canvas Display Platform */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between items-center relative shadow-[0_4px_30px_rgba(0,0,0,0.3)] min-h-[500px] lg:min-h-[560px]">
            <div className="absolute top-4 left-4 bg-slate-700 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm z-10">
              Live Preview
            </div>
            
            {/* Display Engine Container with Spacious Layout Configuration */}
            <div className="w-full flex items-center justify-center flex-grow py-4">
              <div className="text-center flex flex-col items-center w-full">
                
                {/* Image Container */}
                <div className="w-80 h-80 relative flex items-center justify-center transition-all duration-300">
                  {uploadedImageUrl ? (
                    <div className="w-full h-full relative">
                      <img 
                        src={uploadedImageUrl} 
                        alt={`${finish} ${style}`}
                        key={`${styleKey}-${finish}`} 
                        className="w-full h-full object-contain transition-all duration-300 ease-in-out"
                        onError={(e) => {
                          e.currentTarget.src = "/images/upvc windows and doors 1.webp";
                        }}
                      />
                      {/* Performance Architectural Glazing Tint Filters */}
                      <div 
                        className={`absolute inset-0 transition-all duration-500 pointer-events-none mix-blend-multiply rounded-xl ${
                          glass === 'Acoustic Tinted' ? 'bg-slate-900/35' :
                          glass === 'Privacy Frosted' ? 'bg-sky-950/15 backdrop-blur-[3px]' :
                          'bg-transparent'
                        }`} 
                      />
                    </div>
                  ) : (
                    /* Fallback display if specific combination route asset is missing inside YAML frontmatter */
                    <div className="text-center p-6 border border-dashed border-slate-800 rounded-2xl max-w-xs bg-slate-950/30">
                      <p className="text-xs text-slate-400 font-medium">Image Matrix Path Missing:</p>
                      <span className="text-amber-500 font-mono text-[11px] block mt-2 bg-slate-950 px-2 py-1 rounded border border-slate-800 break-all select-all">
                        {styleKey}
                      </span>
                    </div>
                  )}
                </div>

                {/* System Selection Layout Badge - Now flows naturally with clean top padding gap */}
                <div className="mt-5">
                  <span className="bg-slate-950/95 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider px-5 py-2 rounded-xl border border-slate-800/60 uppercase shadow-xl inline-block whitespace-nowrap">
                    {style}
                  </span>
                </div>

                {/* Live Info Track Metadata Line */}
                <div className="text-xs text-slate-300 tracking-wide font-medium bg-slate-950/40 border border-slate-800/40 px-5 py-2 rounded-xl shadow-inner max-w-sm w-full mt-4">
                  Profile Configuration: <span className="font-bold text-[#D4AF37]">{finish}</span> 
                  <span className="text-slate-600 mx-3">|</span> 
                  Glazing Element: <span className="font-semibold text-slate-200">{glass}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns (5): Choice Step Control Panel Wizard */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/60 border border-slate-800 p-8 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
            <div className="space-y-8">
              
              {/* Step 1 Selector */}
              <div>
                <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider block mb-2">Step 01</span>
                <h3 className="text-sm font-bold text-white mb-3">Select System Profile Style</h3>
                <div className="flex flex-wrap gap-2">
                  {steps?.[0]?.options?.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setStyle(opt)}
                      className={`text-xs px-4 py-2.5 rounded-xl font-bold border transition-all ${
                        style === opt 
                          ? 'bg-slate-700 border-slate-600 text-white shadow-sm' 
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 Selector */}
              <div>
                <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider block mb-2">Step 02</span>
                <h3 className="text-sm font-bold text-white mb-3">Select Profile Color & Finish</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {steps?.[1]?.options?.map((opt) => {
                    const isObject = typeof opt === 'object';
                    const optionName = isObject ? opt.name : opt;
                    const optionValue = isObject ? opt.value : '';

                    return (
                      <button
                        key={optionName}
                        onClick={() => setFinish(optionName)}
                        className={`text-left text-xs px-4 py-3 rounded-xl border flex items-center gap-3 font-bold transition-all ${
                          finish === optionName 
                            ? 'border-[#D4AF37] bg-slate-800 text-[#D4AF37] ring-1 ring-[#D4AF37]' 
                            : 'border-slate-700/60 bg-slate-800/30 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        <div 
                          className={`w-4 h-4 rounded-full border border-black/20 shrink-0 shadow-sm ${
                            optionValue === '#ffffff' ? 'bg-white' :
                            optionValue === '#374151' ? 'bg-slate-600' :
                            optionValue === 'wood-grain-oak' ? 'bg-amber-600' : 
                            optionValue === 'wood-grain-walnut' ? 'bg-amber-900' : 'bg-slate-500'
                          }`} 
                        />
                        {optionName}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 Selector */}
              <div>
                <span className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider block mb-2">Step 03</span>
                <h3 className="text-sm font-bold text-white mb-3">Select Architectural Glazing</h3>
                <div className="flex flex-col gap-2">
                  {steps?.[2]?.options?.map((opt) => (
                    <label 
                      key={opt}
                      onClick={() => setGlass(opt)}
                      className={`flex items-center gap-3 px-4 py-3 border rounded-xl text-xs font-bold cursor-pointer transition-all ${
                        glass === opt 
                          ? 'border-[#D4AF37] bg-slate-800 text-[#D4AF37]' 
                          : 'border-slate-700/60 bg-slate-800/30 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="glass-group" 
                        checked={glass === opt}
                        onChange={() => {}} 
                        className="accent-[#D4AF37] h-3.5 w-3.5"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* CTA Execution Hook */}
            {cta && (
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a 
                  href={`${cta.url}?style=${encodeURIComponent(style)}&finish=${encodeURIComponent(finish)}&glass=${encodeURIComponent(glass)}`}
                  className="w-full text-center inline-block bg-[#F59E0B] hover:bg-[#F59E0B] text-slate-950 text-xs font-bold tracking-wider px-6 py-3.5 rounded-xl shadow transition-all uppercase"
                >
                  {cta.label}
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}