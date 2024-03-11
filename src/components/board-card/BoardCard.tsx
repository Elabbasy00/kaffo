import * as React from "react";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";

import Image from "next/image";
import { Link as MuiLink } from "@mui/joy";
import Link from "next/link";

export default function BoardCard({
  item,
}: {
  item: { name: string; desc: string; img: string };
}) {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        position: "relative",
        boxShadow: "lg",
        // transition:
        //   "all 1.6s linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)",

        // ":hover": {
        //   // transform: "translateY(-10px)",
        // },
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Image
          width={100}
          height={100}
          src={item.img}
          alt=""
          quality={100}
          style={{
            width: "100%",
            height: "350px",
            // maxHeight: "350px",
            borderRadius: "5px",
            objectFit: "cover",
            // display: "block",
          }}
        />

        <Typography textColor="primary.solidBg" level="title-lg">
          {item.name}
        </Typography>
        <Typography
          level="body-sm"
          textColor="text.secondary"
          fontWeight="700"
          // sx={{ maxWidth: "2ch" }}
        >
          ❝ {item.desc} ❝
        </Typography>
        <MuiLink overlay component={Link} href="/"></MuiLink>
      </CardContent>
    </Card>
  );
}
