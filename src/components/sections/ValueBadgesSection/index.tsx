import * as React from 'react';
import classNames from 'classnames';

export default function ValueBadgesSection({
  badge,
  title,
  subtitle,
  badges,
  elementId,
}) {
  return (
    <section
      id={elementId || "sawmill-features"}
      className="bg-[#ffffff] py-16 px-6 sm:px-12 lg:px-24 text-neutral-800 border-y border-neutral-200/40"
    >
      <div className="w-full max-w-7xl mx-auto space-y-12">

        {/* Section Header Layout */}
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block uppercase tracking-wider text-[11px] font-extrabold bg-amber-800 text-amber-50 px-3 py-1 rounded-lg mb-2 ">
              {badge}
            </span>
          )}

          <h2 className="text-3xl font-extrabold text-[#4A4A4A] tracking-tight leading-tight mb-3">
            {title || "Why Architects & Builders Choose Our Saw Mill"}
          </h2>

          <p className="text-sm text-[#374151] leading-relaxed">
            {subtitle || "Delivering uncompromising quality straight from our processing facility to your construction site."}
          </p>
        </div>

        {/* Feature Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges?.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 border-l-2 border-neutral-200 hover:border-amber-800 pl-4 transition-colors duration-300 bg-white p-6 rounded-xl border border-neutral-100 shadow-sm"
            >
              <div className="flex flex-col">
                <h4 className="text-base font-bold text-[#4A4A4A] tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#374151] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}