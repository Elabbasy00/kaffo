import CategoryCard from "@/src/components/category-card/CategoryCard";
import PageHeader from "@/src/components/page-header/PageHeader";
import { categoryes } from "@/src/data/data";
import { Container, Grid } from "@mui/joy";
import React from "react";

function page() {
  return (
    <Grid container spacing={2}>
      {categoryes.map((item) => (
        <Grid key={item.ref} xs={12} sm={6} md={4}>
          <CategoryCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default page;
