import ServiceCard from "@/src/components/service-card/ServiceCard";
import { services } from "@/src/data/data";
import { Grid } from "@mui/joy";
import React from "react";

function page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Grid container spacing={2}>
      {services
        .filter((service) => service.ref === params?.slug)
        .map((item) => (
          <Grid key={item.id} md={3} sm={4} xs={12}>
            <ServiceCard item={item} />
          </Grid>
        ))}
    </Grid>
  );
}

export default page;
