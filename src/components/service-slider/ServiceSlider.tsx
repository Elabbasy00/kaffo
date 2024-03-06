import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { Box, Container } from "@mui/joy";
import ServiceCard from "../service-card/ServiceCard";
import { services } from "@/src/data/data";
import { Autoplay } from "swiper/modules";

function ServiceSlider() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: 2,
        my: 3,
      }}
    >
      <Container>
        <SwiperComponent
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5.3}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 2.1,
              spaceBetween: 10,
            },
            587: {
              slidesPerView: 2.7,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5.2,
              spaceBetween: 40,
            },
          }}
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              <ServiceCard item={item} />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </Container>
    </Box>
  );
}

export default ServiceSlider;
