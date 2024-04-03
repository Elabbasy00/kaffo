import { EducationType } from "@/src/types/data-type";
import { Box, Container } from "@mui/joy";
import React from "react";
import ImageCard from "../image-card/ImageCard";

function StagesCards({ items }: { items: EducationType[] }) {
  return (
    <Container>
      <Box
        component="ul"
        sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, my: 5 }}
      >
        {items.map((item) => (
          <ImageCard item={item} key={item.id} />
        ))}
      </Box>
    </Container>
  );
}

export default StagesCards;
