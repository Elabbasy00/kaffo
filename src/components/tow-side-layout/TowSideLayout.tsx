"use client";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { typographyClasses } from "@mui/joy/Typography";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  img: string;
  reversed?: boolean;
  withEffect?: boolean;
}
function TowSideLayout({ img, reversed, withEffect = false, children }: Props) {
  return (
    <Container
      sx={(theme) => ({
        position: "relative",
        bgcolor: "background.body",
        minHeight: "100%",
        display: "flex",
        flexDirection: reversed ? "column-reverse" : "column",
        alignItems: "center",
        pt: 6,
        pb: 2,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: "row",
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "50ch",
          textAlign: "center",
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: "flex-start",
            textAlign: "initial",
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: "balance",
          },
        })}
      >
        {/* <Typography color="primary" fontSize="lg" fontWeight="lg">
            The power to do more
            </Typography> */}
        {children}
      </Box>
      <AspectRatio
        ratio={600 / 520}
        variant="plain"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: "300",
          alignSelf: "stretch",
          boxShadow: withEffect ? "lg" : "",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          ":hover": {
            img: {
              transform: withEffect ? "scale(1.04)" : "",
            },
          },
          borderRadius: "lg",
          //   bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        <Image
          src={img}
          alt="Programming"
          // width={100}
          // height={100}
          quality={100}
          fill
          style={{
            width: "100%",
            height: "100%",
            transition: "all 0.3s linear",
          }}
        />
      </AspectRatio>
    </Container>
  );
}

export default TowSideLayout;
