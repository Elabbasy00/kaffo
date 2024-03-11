"use client";
import { Box, Button, Container, Sheet, Typography, styled } from "@mui/joy";
import React from "react";
import OutlineButton from "../outline-btn/OutlineButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaWhatsapp } from "react-icons/fa";

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
    fontSize: "2em",
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
    fontSize: "14px",
  },
}));

const TextWapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    alignItems: "center",
  },
}));

const Circle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "5%",
  right: "7%",
  backgroundPosition: "top center !important",
  backgroundSize: "contain",
  zIndex: 1,
  display: "block",
  width: "350px",
  height: "350px",
  margin: "0 auto",
  borderRadius: "50%",
  [theme.breakpoints.down("md")]: {
    right: "50%",
    // top: "80%",
    transform: "translate(50%, 0%)",
    width: "257px",
    height: "257px",
  },
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

            <HeroDescription
              level="title-lg"
              fontWeight={700}
              letterSpacing={1}
              lineHeight={1.8}
            >
              كفو، حيث يلتقي الإبداع بالتعلم بطريقة ملهمة! نحن نتخذ من التعليم،
              البرمجة، والتسويق فنًا، نقدم خدماتنا بروح إيجابية و متميزة لتسهيل
              رحلة النجاح لعملائنا.
            </HeroDescription>
            <a href="https://wa.me/+966552623843" target="_blank">
              <OutlineButton
                endDecorator={<FaWhatsapp style={{ fontSize: "1.6em" }} />}
                backgroundColor="var(--joy-palette-primary-solidBg)"
              >
                تواصـل معانا
              </OutlineButton>
            </a>
          </TextWapper>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              width: "100%",
              height: { xs: "100%", md: "90vh" },
              position: "relative",
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
