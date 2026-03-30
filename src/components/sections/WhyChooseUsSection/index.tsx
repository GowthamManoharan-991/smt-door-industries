import React from "react";
import classNames from "classnames";
import { Speaker, Zap, Layers } from "lucide-react";

const ICONS = {
  speaker: Speaker,
  zap: Zap,
  layers: Layers
};

export default function WhyChooseUsSection(props) {
  const { eyebrow, title, subtitle, items = [] } = props;

  return (
    <section className="relative w-full py-16 bg-[#1C1A17] text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-sm tracking-widest text-amber-500 font-extrabold uppercase">
            {eyebrow}
          </p>
        )}

        {/* Title */}
        {title && (
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">
            {title}
          </h2>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-6 max-w-3xl mx-auto text-gray-400">
            {subtitle}
          </p>
        )}

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <FeatureCard
                key={index}
                icon={Icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-md border border-white/10 hover:border-white/20 transition">
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-500 mx-auto">
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>

      <h3 className="mt-6 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
