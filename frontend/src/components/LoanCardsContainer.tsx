"use client";

import { loanCardsData } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LoanCard from "./LoanCard";

export default function LoanCardContainer() {
  return (
    <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2}
        slidesPerView={6}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1224: {
            slidesPerView: 5,
            spaceBetween: 8,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
        className="loan-swiper px-4 items-center justify-center"
      >
        {loanCardsData.map((card) => (
          <SwiperSlide key={card.label} className="flex justify-center">
            <div className="py-4">
              <LoanCard
                description={card.description}
                label={card.label}
                theme={card.theme}
                icon={card.icon}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
