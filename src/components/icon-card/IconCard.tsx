import { AspectRatio, Card, CardContent, Chip, Typography } from "@mui/joy";
import Image from "next/image";
import React from "react";

function IconCard({
  item,
}: {
  item: { name: string; img: string; desc: string };
}) {
  return (
    <Card
      variant="plain"
      orientation="horizontal"
      color="primary"
      size="lg"
      sx={{
        overflow: "hidden",
        "&:hover": {
          boxShadow: "md",
        },
      }}
    >
      <Image
        src={item.img}
        width={100}
        height={0}
        sizes="100vw"
        style={{
          margin: "auto",
          width: "auto",
          height: "100%",
          objectFit: "contain",
        }}
        alt=""
      />

      <CardContent>
        <Typography
          level="h2"
          fontWeight="600"
          id="card-description"
          textColor={"neutral.solidBg"}
        >
          {item.name}
        </Typography>
        <Typography level="body-md" textColor="neutral.500" mb={1}>
          {item?.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default IconCard;
