import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

import Image from "next/image";
import { ServicesProjectsType } from "@/src/types/data-type";
import { BsEye } from "react-icons/bs";

export default function ProjectCard({
  item,
  onOpen,
}: {
  item: ServicesProjectsType;
  onOpen: Function;
}) {
  return (
    <Card
      variant="plain"
      sx={{
        bgcolor: "initial",

        p: 0,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <AspectRatio ratio="4/3">
          <figure>
            <Image src={item.cover} loading="lazy" fill alt="" />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            "&:hover, &:focus-within": {
              opacity: 1,
            },
            opacity: 0,
            transition: "0.1s ease-in",
            background: "linear-gradient(to top, #0E6B81, rgba(0,0,0,0) 160px)",
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <div>
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                flexGrow: 1,
                alignSelf: "flex-end",
              }}
            >
              <Typography
                level="h2"
                noWrap
                sx={{
                  fontSize: "lg",
                  color: "#fff",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                {item.title}
              </Typography>
              <IconButton
                size="sm"
                variant="solid"
                onClick={() => onOpen(item)}
                color="primary"
                sx={{
                  ml: "auto",
                  fontSize: "md",
                  bgcolor: "rgba(0 0 0 / 0.2)",
                }}
              >
                <BsEye />
              </IconButton>
            </Box>
          </div>
        </CardCover>
      </Box>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography
          textColor="neutral.softBg"
          sx={{ fontSize: "lg", fontWeight: "md" }}
        >
          {item.overview}
        </Typography>
      </Box>
    </Card>
  );
}
