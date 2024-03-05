"use client";
import { Box, Container, Sheet, Typography, styled } from "@mui/joy";
import React from "react";
import OutlineButton from "../outline-btn/OutlineButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  alignItems: "center",
  position: "relative",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const HeroText = styled(Typography)(({ theme }) => ({
  fontSize: "5em",
  color: "#fff",
  fontWeight: "900",

  [theme.breakpoints.down("md")]: {
    fontSize: "3em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3em",
  },
}));

const HeroDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.tertiary,
  fontSize: "1em",
  margin: "20px 0 ",
  width: "60%",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const TextWapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const Circle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "5%",
  right: "7%",
  backgroundPosition: "top center !important",
  backgroundSize: "contain",
  zIndex: 1,
  // transform: "translate(-10%, -1%)",
  display: "block",
  width: "350px",
  height: "350px",

  // clipPath: "circle(50% at 50% 50%)",
  margin: "0 auto",
  borderRadius: "50%",

  // marginleft: 280,
  // [theme.breakpoints.down("lg")]: {
  //   width: "300px",
  //   height: "300px",
  //   top: "0vw",
  //   right: "4vw",
  //   // transform: "translate(-12%, -1%)",
  // },
  // [theme.breakpoints.down("md")]: {
  //   width: "250px",
  //   height: "250px",
  //   top: "unset",
  //   right: "unset",
  //   transform: "unset",
  //   marginBottom: 130,
  //   marginLeft: 50,
  // },
}));

function Hero() {
  const ref = React.useRef(null);

  useGSAP(() => {
    gsap.timeline({ repeat: -1, yoyo: true }).fromTo(
      ref.current,
      {
        background: "linear-gradient(180deg, #FAAF40,  #0E6B81)",
        duration: 3,
        ease: "power1.inOut",
      },
      {
        background: "linear-gradient(180deg,  #0E6B81, #FAAF40)",
        duration: 3,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <Sheet
      sx={{
        height: "90vh",
        width: "100%",
        position: "relative",
        backgroundColor: "#0E6B81",
        overflow: "hidden",
      }}
    >
      <Container>
        <HeroWrapper>
          <TextWapper>
            <HeroText level="h1">هَــــلَا</HeroText>
            <HeroText level="h1">خـلـيـك كفوَّ</HeroText>

            <HeroDescription level="title-lg">
              كفو، حيث يلتقي الإبداع بالتعلم بطريقة ملهمة! نحن نتخذ من التعليم،
              البرمجة، والتسويق فنًا، نقدم خدماتنا بروح إيجابية و متميزة لتسهيل
              رحلة النجاح لعملائنا.
            </HeroDescription>
            <OutlineButton backgroundColor="var(--joy-palette-primary-solidBg)">
              من نحن
            </OutlineButton>
          </TextWapper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              width: "100%",
              height: { xs: "100%", md: "90vh" },
              position: "relative",
              // background: "url(./hero.svg)",
              // backgroundRepeat: "no-repeat",
              // backgroundPosition: "bottom",
              // backgroundSize: "contain",
              // zIndex: 1000,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                width: "100%",
                height: "100%",
                background: "url(./hero.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "contain",
                zIndex: 1000,
              }}
            ></Box>
          </Box>
          <Circle ref={ref}></Circle>
        </HeroWrapper>
      </Container>
    </Sheet>
  );
}

export default Hero;
