import { CoursesType } from "@/src/types/data-type";
import { Grid } from "@mui/joy";
import React from "react";
import CourseCard from "../course-card/CourseCard";

function Courses({ items }: { items: CoursesType[] }) {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid xs={12} sm={6} md={4} lg={3} key={item.id}>
          <CourseCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Courses;
