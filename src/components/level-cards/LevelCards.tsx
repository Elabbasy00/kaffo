import { EducationStageType } from "@/src/types/data-type";
import { Grid } from "@mui/joy";
import React from "react";
import EducationLevelCard from "../education-level-card/EducationLevelCard";

function LevelCards({ levels }: { levels: EducationStageType[] }) {
  console.log(levels);
  return (
    <Grid container spacing={3}>
      {levels.map((item) => (
        <Grid xs={12} sm={6} md={4} key={item.id}>
          <EducationLevelCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default LevelCards;
