"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import CarouselCard from "./CarouselCard";

const Slider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        className="mySwiper"
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
