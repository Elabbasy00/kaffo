"use client";
import React from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

interface Props {
  spaceBetween: number;
  slidesPerView: number | "auto";
  children: React.ReactNode;
  [key: string]: any;
}
function SwiperComponent({
  spaceBetween,
  slidesPerView,
  children,
  ...rest
}: Props) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      dir="rtl"
      {...rest}
    >
      {children}
    </Swiper>
  );
}

export default SwiperComponent;
