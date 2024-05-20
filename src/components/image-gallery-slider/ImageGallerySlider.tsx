"use client";
import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { ServicesProjectsType } from "@/src/types/data-type";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box, styled } from "@mui/joy";

const PrevivewImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: "500px",
  objectFit: "contain",

  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
  },
}));

const ThumbsImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: "110px",
  objectFit: "contain",
}));
function ImageGallerySlider({
  project,
}: {
  project: ServicesProjectsType | null;
}) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <Box
      sx={{
        ".gallery-slider": {
          width: "100%",
          height: "100%",
        },
        ".gallery-thumb": {
          ".swiper-slide": {
            opacity: 0.4,
            transition: "opacity 0.3s ease-in",
          },
          ".swiper-slide-thumb-active": {
            opacity: 1,
          },
        },
      }}
    >
      <SwiperComponent
        className="gallery-slider"
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {project && (
          <SwiperSlide>
            {project?.cover && (
              <PrevivewImage
                unoptimized
                src={project?.cover}
                width={200}
                height={200}
                sizes="100vw"
                quality={100}
                alt={project.title}
              />
            )}
          </SwiperSlide>
        )}
        {project?.gallery.map((item) => (
          <SwiperSlide key={item?.img}>
            <PrevivewImage
              src={item?.img}
              width={20}
              height={20}
              sizes="100vw"
              quality={100}
              unoptimized
              alt={project.title}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <SwiperComponent
        className="gallery-thumb"
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {project && (
          <SwiperSlide>
            {project?.cover && (
              <ThumbsImage
                src={project?.cover}
                width={20}
                height={20}
                quality={100}
                unoptimized
                alt={project.title}
              />
            )}
          </SwiperSlide>
        )}
        {project?.gallery.map((item) => (
          <SwiperSlide key={item?.img}>
            <ThumbsImage
              src={item?.img}
              width={20}
              quality={100}
              height={20}
              unoptimized
              alt={project.title}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Box>
  );
}

export default ImageGallerySlider;
