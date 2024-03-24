import { StageType } from "@/src/types/data-type";
import { Box, Container } from "@mui/joy";
import React from "react";
import ImageCard from "../image-card/ImageCard";

function StagesCards({ items }: { items: StageType[] }) {
  return (
    <Container>
      <Box
        component="ul"
        sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, my: 10 }}
      >
        {items.map((item) => (
          <ImageCard item={item} key={item.id} />
        ))}
      </Box>
    </Container>
  );
}

export default StagesCards;
