"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

// 1. Added title, description, and actions to the props
export default function TestimonialCarousel({
  testimonials = [],
  title,
  description,
  actions = []
}: {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
  actions?: any[];
}) {
  return (
    <section className="py-16 bg-[#1c1a17]">
      <div className="max-w-[78rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* LEFT COLUMN – NOW DYNAMIC */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              {title || "Our customers love what we do"} 
            </h2>

            <p className="text-gray-300 mb-6">
              {description || "Over 50000 companies of all sizes use our services."}
            </p>

            {/* If actions exist in YAML, show the first one, otherwise show default */}
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 text-amber-500 font-semibold rounded-lg shadow hover:shadow-md transition">
              {actions[0]?.label || "Read the success stories"}
            </button>
          </div>

          {/* RIGHT COLUMN – CARDS */}
          <div className="md:col-span-2">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={40}
              loop
              autoplay={{ delay: 3000 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i} className="flex justify-center">
                  <div className="relative bg-white rounded-2xl px-8 pt-10 pb-8 text-center shadow-xl max-w-md w-full">
                    <p className="text-gray-600 italic mb-6 leading-relaxed">
                      “{item.quote}”
                    </p>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <span className="text-sm font-semibold text-yellow-500">
                      {item.role}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}