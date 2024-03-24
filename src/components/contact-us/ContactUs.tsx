"use client";
import { services } from "@/src/data/data";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
  styled,
} from "@mui/joy";

import Image from "next/image";
import React from "react";
import { IoPhonePortrait, IoLogoWhatsapp } from "react-icons/io5";
// import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import OutlineButton from "../outline-btn/OutlineButton";

const InfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",

  alignItems: "flex-start",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  marginTop: 15,
  svg: {
    fontSize: "22px",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "block",
  margin: " 20px 0",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const FormControlWrapper = styled(FormControl)(({ theme }) => ({
  marginBottom: 10,
}));

const Label = styled(FormLabel)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.1em",
  marginBottom: 8,
}));

function ContactUs() {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          bgcolor: "neutral.solidBg",
          borderRadius: "20px",
          mt: 6,
          py: 4,
          px: 8,
        }}
      >
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <InfoWrapper>
              <ImageWrapper>
                <Image
                  src="/contact_2.svg"
                  width={400}
                  height={400}
                  // fill
                  style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                  }}
                  alt="contact us"
                />
              </ImageWrapper>
              <Typography
                level="h3"
                textColor={"primary.solidBg"}
                fontWeight={800}
              >
                تـواصـل مـعـانـا
              </Typography>
              <Typography level="body-md" textColor={"text.tertiary"}>
                نسعد بخدمتك بشكل أفضل من خلال التواصل معنا
              </Typography>
              <IconsWrapper>
                <IconButton
                  variant="outlined"
                  color="primary"
                  href="tel:+966552623843"
                  component="a"
                  target="_blank"
                >
                  <IoPhonePortrait />
                </IconButton>
                <IconButton
                  variant="outlined"
                  color="primary"
                  href="https://api.whatsapp.com/send?phone=966552623843"
                  component="a"
                  target="_blank"
                >
                  <IoLogoWhatsapp />
                </IconButton>
                <IconButton
                  variant="outlined"
                  color="primary"
                  component="a"
                  href="mailto:kaffo2024@gmail.com"
                  target="_blank"
                >
                  <MdEmail />
                </IconButton>
              </IconsWrapper>
            </InfoWrapper>
          </Grid>
          <Grid xs={12} md={6}>
            <FormControlWrapper color="neutral" size="lg">
              <Label>الاسم</Label>
              <Input variant="soft" placeholder="الاســم" />
            </FormControlWrapper>
            <FormControlWrapper color="neutral" size="lg">
              <Label>البريد الالكتروني</Label>
              <Input variant="soft" placeholder="الـبـريـد الالـكـتـرونـي" />
            </FormControlWrapper>
            <FormControlWrapper color="neutral" size="lg">
              <Label>رقم الجوال</Label>
              <Input variant="soft" placeholder="رقـم الـجـوال" />
            </FormControlWrapper>

            <Label>اختر الخدمة</Label>

            <Select
              slotProps={{
                listbox: {
                  "data-lenis-prevent": true,
                },
              }}
              placeholder="اخـتـر الـخـدمـة"
              variant="soft"
              size="lg"
            >
              {services.map((item) => (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <Box sx={{ my: 2 }}>
              <OutlineButton
                backgroundColor="var(--joy-palette-primary-solidBg)"
                color="primary"
              >
                ارسـال طـلـبـك
              </OutlineButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ContactUs;
