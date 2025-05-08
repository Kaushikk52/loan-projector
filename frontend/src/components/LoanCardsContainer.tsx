"use client";

import { loanCardsData } from "@/constants/constants";
import LoanCard from "./LoanCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function LoanCardContainer() {
  return (
    <div className="w-full max-w-md md:max-w-5xl xl:max-w-7xl  px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        className="loan-swiper items-center"
      >
        {loanCardsData.map((card) => (
          <SwiperSlide key={card.label}>
            <div className="py-4">
              <LoanCard
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
