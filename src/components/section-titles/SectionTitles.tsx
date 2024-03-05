import { Box, Divider, SvgIcon, Typography } from "@mui/joy";
import React from "react";
import TextSlideAnimation from "../text-slide-animation/TextSlideAnimation";

function SectionTitles({ text }: { text: string }) {
  return (
    <Box sx={{ position: "relative", my: 5 }}>
      <Divider>
        <Typography
          level="h1"
          fontWeight="900"
          sx={{ color: "primary.solidBg" }}
        >
          <TextSlideAnimation text={text} />
        </Typography>
      </Divider>
    </Box>
  );
}

export default SectionTitles;
