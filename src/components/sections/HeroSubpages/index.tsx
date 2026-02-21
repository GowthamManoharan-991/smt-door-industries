import * as React from 'react';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import ImageBlock from '../../blocks/ImageBlock';

export default function HeroSubPages({ title, subtitle, image }) {
  return (
    <section
  className="relative min-h-[420px] lg:min-h-[65vh] flex items-center px-6 sm:px-10 lg:px-24 py-16 lg:py-0 bg-neutral-700 text-white">

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-3 lg:mb-6 leading-[1.15] lg:leading-[1.2]">
              
              {title}
            </h1>
            <p className="text-base lg:text-lg opacity-80 max-w-xl mb-1 lg:mb-0">
              {subtitle}
            </p>
          </div>

          {/* Right card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 lg:p-10 max-w-md lg:ml-auto mx-auto lg:mx-0 mt-2 lg:mt-0">
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
