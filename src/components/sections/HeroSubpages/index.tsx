import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import ImageBlock from '../../blocks/ImageBlock';

export default function HeroSubPages({ title, subtitle, image }) {
  return (
    <section
  className="relative min-h-[420px] lg:min-h-[65vh] flex items-center px-6 sm:px-10 lg:px-24 bg-neutral-700 text-white"
>

      {image?.url && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image.url}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-Futura STD sans-serif font-bold mb-6">
              
              {title}
            </h1>
            <p className="text-lg opacity-80 max-w-xl">
              {subtitle}
            </p>
          </div>

          {/* Right card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 max-w-md ml-auto">
            <p className="text-xs tracking-widest uppercase opacity-70 mb-4">
              Features
            </p>
            <h3 className="text-2xl font-serif mb-4">
              Elegant Simplicity
            </h3>
            <p className="text-sm opacity-80">
              Experience the perfect blend of form and function with our carefully curated selection of contemporary pieces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
