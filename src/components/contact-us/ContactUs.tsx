"use client";
import { services } from "@/src/data/data";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
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
import { fetcher } from "@/src/utils/fetcher";
import toast from "react-hot-toast";
import { ErrorsType } from "@/src/types/data-type";

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

interface ContactUsData {
  name: string;
  email: string;
  phone_number: string;
  service: string | null;
}

function ContactUs() {
  const [data, setData] = React.useState<ContactUsData>({
    name: "",
    email: "",
    phone_number: "",
    service: "",
  });
  const [erros, setErrors] = React.useState<ErrorsType | null>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetcher("api/users/contact-us/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    if (!response.ok) {
      setErrors(resData);
      toast.error(resData.message);
    } else {
      setErrors(null);
      toast.success(resData.message);
      setData({ name: "", email: "", phone_number: "", service: "" });
    }
  };
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
                  href="tel:201147617485"
                  component="a"
                  target="_blank"
                >
                  <IoPhonePortrait />
                </IconButton>
                <IconButton
                  variant="outlined"
                  color="primary"
                  href="https://api.whatsapp.com/send?phone=201147617485"
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
            <Box component="form" onSubmit={onSubmit}>
              <FormControlWrapper
                color="neutral"
                size="lg"
                required
                error={erros?.extra?.fields?.name}
              >
                <Label>الاسم</Label>
                <Input
                  variant="soft"
                  placeholder="الاســم"
                  name="name"
                  value={data.name}
                  onChange={onChange}
                />
                <FormHelperText
                  sx={{ fontWeight: "bold", color: "danger.softBg" }}
                >
                  {erros?.extra?.fields?.name}
                </FormHelperText>
              </FormControlWrapper>
              <FormControlWrapper
                color="neutral"
                size="lg"
                required
                error={erros?.extra?.fields?.email}
              >
                <Label>البريد الالكتروني</Label>
                <Input
                  variant="soft"
                  placeholder="الـبـريـد الالـكـتـرونـي"
                  name="email"
                  value={data.email}
                  onChange={onChange}
                />
                <FormHelperText
                  sx={{ fontWeight: "bold", color: "danger.softBg" }}
                >
                  {erros?.extra?.fields?.email}
                </FormHelperText>
              </FormControlWrapper>
              <FormControlWrapper
                color="neutral"
                size="lg"
                required
                error={erros?.extra?.fields?.phone_number}
              >
                <Label>رقم الجوال</Label>
                <Input
                  variant="soft"
                  placeholder="رقـم الـجـوال"
                  name="phone_number"
                  value={data.phone_number}
                  onChange={onChange}
                />
                <FormHelperText
                  sx={{ fontWeight: "bold", color: "danger.softBg" }}
                >
                  {erros?.extra?.fields?.phone_number}
                </FormHelperText>
              </FormControlWrapper>

              <Label>اختر الخدمة</Label>

              <Select
                required
                slotProps={{
                  listbox: {
                    "data-lenis-prevent": true,
                  },
                }}
                placeholder="اخـتـر الـخـدمـة"
                variant="soft"
                size="lg"
                name="service"
                value={data.service}
                onChange={(e, value) =>
                  // @ts-ignore
                  onChange({ target: { name: "service", value: value! } })
                }
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
                  type="submit"
                >
                  ارسـال طـلـبـك
                </OutlineButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ContactUs;
