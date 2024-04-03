import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
// import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import MuiLink from "@mui/joy/Link";
import Link from "next/link";
import Typography from "@mui/joy/Typography";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { BlogType } from "@/src/types/data-type";
import { Button } from "@mui/joy";

export default function BlogCard({ item }: { item: BlogType }) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        // height: "250px",
        "&:hover": {
          boxShadow: "lg",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="1 / 1" sx={{ minWidth: "100%", height: "100%" }}>
          <Image
            src={item.cover}
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs" textColor="primary.solidBg">
          {new Date(item.created_at).toDateString()}
        </Typography>
        <MuiLink
          href={`/blog/${item.slug}`}
          fontWeight="lg"
          color="neutral"
          textColor="text.primary"
          component={Link}
          as="div"
          overlay
          startDecorator={<MdArrowOutward />}
        >
          <Typography noWrap>{item.overview}</Typography>
        </MuiLink>
      </CardContent>
    </Card>
  );
}
