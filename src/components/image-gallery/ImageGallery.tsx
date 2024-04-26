import React from "react";
import CustomModel from "../custom-modal/CustomModal";
import ImageGallerySlider from "../image-gallery-slider/ImageGallerySlider";
import { ServicesProjectsType } from "@/src/types/data-type";
import { Box, Container } from "@mui/joy";

function ImageGallery({
  customOpen,
  customSetOpen,
  obj,
}: {
  customOpen: boolean;
  customSetOpen: Function;
  obj: ServicesProjectsType | null;
}) {
  return (
    <CustomModel
      size="sm"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
      }}
      variant="plain"
      customOpen={customOpen}
      customSetOpen={customSetOpen}
    >
      <Container>
        <Box sx={{ width: "100%", height: "100%", paddingY: 2 }}>
          <ImageGallerySlider project={obj} />
        </Box>
      </Container>
    </CustomModel>
  );
}

export default ImageGallery;
