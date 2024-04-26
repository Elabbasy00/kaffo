import { ServicesType } from "@/src/types/data-type";
import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

function ServiceCard({ item }: { item: ServicesType }) {
  return (
    <Card
      variant="plain"
      sx={{
        minHeight: "200px",
        position: "relative",
        overflow: "hidden",
        ":hover": {
          ".service-card-text": {
            h4: {
              transform: "translateY(0px)",
            },
            h6: {
              transform: "translateY(0px)",
              opacity: 1,
            },
          },
        },
      }}
    >
      <CardCover>
        <Image
          width={200}
          height={200}
          src={item.cover}
          loading="lazy"
          quality={100}
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background: "linear-gradient(to top, #0E6B81, rgba(0,0,0,0) 160px)",
        }}
      />
      <CardContent
        sx={{ justifyContent: "flex-end" }}
        className="service-card-text"
      >
        <Typography
          level="title-lg"
          component="h4"
          fontWeight={700}
          textColor="#fff"
          sx={{
            transform: "translateY(20px)",
            transition:
              "transform 0.4s linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          component="h6"
          sx={{
            transform: "translateY(40px)",
            opacity: 0,
            transition:
              "transform 0.8s linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)",
            // "transform 0.5s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)",
          }}
          startDecorator={<MdArrowForward />}
          textColor="primary.solidBg"
        >
          <Link href={`/services/${item.parent}/${item.slug}`}>
            اعـرف آكـثـر
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
