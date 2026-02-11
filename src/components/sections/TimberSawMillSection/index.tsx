import React from "react";
import Image from "next/image";
import classNames from "classnames";

type Stat = {
  value: string;
  label: string;
};

type ImageItem = {
  src: string;
  alt?: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  stats?: Stat[];
  images: {
    main: ImageItem;
    top: ImageItem;
    bottom: ImageItem;
  };
};

export default function TimberSawMillSection({
  eyebrow,
  title,
  description,
  stats = [],
  images,
}: Props) {
  return (
    <section className="bg-[#1C1A17] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {eyebrow && (
            <span className="text-sm uppercase tracking-widest text-amber-400">
              {eyebrow}
            </span>
          )}

          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mt-4">
            {title}
          </h2>

          {description && (
            <p className="text-gray-400 mt-6 max-w-xl">
              {description}
            </p>
          )}

          {stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl text-amber-500 font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 rounded-xl overflow-hidden">
            <Image
              src={images.main.src}
              alt={images.main.alt || ""}
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src={images.top.src}
              alt={images.top.alt || ""}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl overflow-hidden">
            <Image
              src={images.bottom.src}
              alt={images.bottom.alt || ""}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
