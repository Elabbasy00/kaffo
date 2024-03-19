"use client";
import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { team } from "@/src/data/data";
import { EffectCoverflow } from "swiper/modules";
import { Box, Button, Container } from "@mui/joy";
import BoardCard from "../board-card/BoardCard";
import OutlineButton from "../outline-btn/OutlineButton";
import Link from "next/link";

function TeamSlider() {
  return (
    <>
      <SwiperComponent
        style={{ margin: "50px 0", padding: "20px 0" }}
        centeredSlides={true}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
          },
        }}
        effect="coverflow"
        loop={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        modules={[EffectCoverflow]}
        grabCursor={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: false,
        }}
        //   slidesPerView={4}
        spaceBetween={20}
      >
        {team.map((item, idx) => (
          <SwiperSlide key={idx}>
            <BoardCard item={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Link href="about">
          <OutlineButton
            color="neutral"
            backgroundColor="var(--joy-palette-primary-softColor)"
          >
            عرض المزيد
          </OutlineButton>
        </Link>
      </Box>
    </>
  );
}

export default TeamSlider;
