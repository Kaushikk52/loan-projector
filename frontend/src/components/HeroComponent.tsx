"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroImageData } from "@/constants/constants";
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
        {heroImageData.map((src) => (
          <SwiperSlide key={src}>
            <div className="relative w-full aspect-[3/1]">
              <Image
                src={src}
                fill
                alt={`hero-image-1`}
                className="object-top"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
