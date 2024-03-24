import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { StageType } from "@/src/types/data-type";
import MuiLink from "@mui/joy/Link";
import Link from "next/link";
import { Box } from "@mui/joy";

export default function ImageCard({ item }: { item: StageType }) {
  return (
    <Card
      component="li"
      sx={{
        minWidth: 300,
        flexGrow: 1,
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        ":hover": {
          img: {
            transform: "scale(1.1)",
          },
        },
      }}
      variant="plain"
    >
      <CardCover>
        <Image
          loading="lazy"
          width={100}
          height={100}
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all 0.3s linear",
          }}
        />
      </CardCover>
      <CardContent>
        <Typography
          level="title-lg"
          fontWeight="900"
          textColor="#fff"
          mt={{ xs: 12, sm: 18 }}
        >
          {item.name}
        </Typography>
        <MuiLink
          component={Link}
          href={`/education/${item.slug}`}
          overlay
        ></MuiLink>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          background: "linear-gradient(180deg, #faaf40e6, #0e6b81d6)",
        }}
      />
    </Card>
  );
}
