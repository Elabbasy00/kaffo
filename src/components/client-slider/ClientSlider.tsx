"use client";
import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { client } from "@/src/data/data";
import ClientsCard from "../clients-card/ClientsCard";
import { Autoplay } from "swiper/modules";

function ClientSlider() {
  return (
    <SwiperComponent
      className="client-slider"
      style={{ margin: "50px 0" }}
      centeredSlides={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      // effect="coverflow"
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      // coverflowEffect={{
      //   rotate: 20,
      //   stretch: 0,
      //   depth: 350,
      //   modifier: 1,
      //   slideShadows: false,
      // }}
      slidesPerView={4}
      spaceBetween={20}
    >
      {client.map((item, idx) => (
        <SwiperSlide key={idx}>
          <ClientsCard item={item} />
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
}

export default ClientSlider;
