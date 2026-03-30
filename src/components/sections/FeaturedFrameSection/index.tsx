import Image from 'next/image';
import classNames from 'classnames';

interface Item {
  id?: string;
  title: string;
  description?: string;
  image: string;
  alt?: string;
}

interface FeaturedFrameSectionProps {
  elementId?: string;
  colors?: string;
  eyebrow?: { text?: string };
  heading?: { text?: string };
  subheading?: { text?: string };
  items: Item[];
}

export default function FeaturedFrameSection(props: FeaturedFrameSectionProps) {
  const {
    elementId,
    colors = 'bg-white',
    eyebrow,
    heading,
    subheading,
    items = []
  } = props;

  return (
    <section id={elementId} className={classNames(colors, 'py-20')}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          {eyebrow?.text && (
            <p className="text-sm tracking-[0.3em] uppercase text-[#6B7280] font-extrabold mb-3">
              {eyebrow.text}
            </p>
          )}

          {heading?.text && (
            <h2 className="text-4xl md:text-5xl font-bold text-[#4A4A4A] leading-tight">
              {heading.text}
            </h2>
          )}

          {subheading?.text && (
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              {subheading.text}
            </p>
          )}
        </div>

        {/* Grid: Updated to 5 columns for desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-col items-center text-center group"
            >

              {/* Direct Image Shadow (Box Removed) */}
              <div className="relative w-full h-[350px] transition-all duration-300 group-hover:scale-[1.02]">
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  fill
                  className="object-contain drop-shadow-md group-hover:drop-shadow-xl"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-[#4A4A4A]">
                {item.title}
              </h3>

              {/* Bottom Accent Line */}
              <div className="w-12 h-[2px] bg-[#EE940C] mt-2 mb-1"></div>

              {/* Description */}
              {item.description && (
                <p className="text-sm text-gray-700 mt-2">
                  {item.description}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}