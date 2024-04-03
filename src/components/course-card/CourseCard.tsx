import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import MuiLink from "@mui/joy/Link";

import Typography from "@mui/joy/Typography";
import Image from "next/image";
import { CoursesType } from "@/src/types/data-type";
import Link from "next/link";

export default function CourseCard({ item }: { item: CoursesType }) {
  return (
    <Card sx={{ maxWidth: "100%", boxShadow: "lg" }} variant="plain">
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <Image
            src={item.cover}
            loading="lazy"
            alt={item.subject}
            width={100}
            height={100}
            style={{ width: "100%", height: "100%" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs" textColor="primary.solidBg">
          {item.title}
        </Typography>
        <MuiLink
          component={Link}
          href={`/education/course/${item.slug}`}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
        >
          {item.subject}
        </MuiLink>

        <Typography
          level="body-xs"
          sx={{ mt: 1, fontWeight: "xl" }}
          textColor="text.icon"
          noWrap
          //   endDecorator={
          //     <Chip component="span" size="sm" variant="soft" color="success">
          //       Lowest price
          //     </Chip>
          //   }
        >
          {item.desc}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="primary" size="lg">
          Enroll
        </Button>
      </CardOverflow>
    </Card>
  );
}
