"use client";
import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { Box } from "@mui/joy";
import ServiceCard from "../service-card/ServiceCard";

import { Autoplay } from "swiper/modules";
import { ServicesType } from "@/src/types/data-type";

function ServiceSlider({ services = [] }: { services: ServicesType[] }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: 2,
        my: 3,
      }}
    >
      <SwiperComponent
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: false,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
          },
          587: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {services?.map((item) => (
          <SwiperSlide key={item.id}>
            <ServiceCard item={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Box>
  );
}

export default ServiceSlider;
