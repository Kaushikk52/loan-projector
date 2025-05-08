"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroComponent() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[3/1]">
              <Image
                src="/Hero.png"
                fill
                alt={`hero-image-${index}`}
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
