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

export default function TestimonialCarousel({
  testimonials = [],
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="py-16 bg-[#1c1a17]">
      <div className="max-w-[78rem] mx-auto px-6">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* LEFT COLUMN – TEXT */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Our customers <br /> love what we do
            </h2>

            <p className="text-gray-300 mb-6">
              Over 50000 companies of all sizes use our services to
              understand their business and grow faster.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-black/40 text-amber-500 font-semibold rounded-lg shadow hover:shadow-md transition">
              Read the success stories
            </button>
          </div>

          {/* RIGHT COLUMN – CARDS (2 COLUMNS AREA) */}
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
                    
                    
                    {/* Avatar */}
                    {/*
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-14 h-14 rounded-full"
                        />
                      </div>
                    </div>
                    */}

                    {/* Quote */}
                    <p className="text-gray-600 italic mb-6 leading-relaxed">
                      “{item.quote}”
                    </p>

                    {/* Name */}
                    <h4 className="font-bold text-lg">{item.name}</h4>

                    {/* Role */}
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
