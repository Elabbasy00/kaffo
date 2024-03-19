import { Sheet, Typography } from "@mui/joy";
import React from "react";

interface Props {
  background: string;
  title: string;
  subtitle?: string;
}
function PageHeader({ background, title, subtitle }: Props) {
  return (
    <Sheet
      color="neutral"
      variant="solid"
      sx={{
        position: "relative",
        minHeight: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        flexDirection: "column",
        width: "100%",
        "&:after": {
          content: "''",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--joy-palette-neutral-solidBg)",
          zIndex: 1,
        },
      }}
    >
      <Typography
        level="h1"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        fontWeight={900}
        textColor={"#fff"}
        zIndex={3}
        mb={1}
      >
        {title}
      </Typography>
      <Typography
        level="body-md"
        fontWeight={900}
        zIndex={3}
        textColor={"text.tertiary"}
      >
        {subtitle}
      </Typography>
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#000",
          zIndex: 1,
        }}
      /> */}
    </Sheet>
  );
}

export default PageHeader;
