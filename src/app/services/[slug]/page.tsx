import { getServices } from "@/src/actions/actions";
import ServiceCard from "@/src/components/service-card/ServiceCard";

import { Grid } from "@mui/joy";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
  const services = await getServices();
  return (
    <Grid container spacing={2}>
      {services
        .filter((service) => service.parent === params?.slug)
        .map((item) => (
          <Grid key={item.id} md={3} sm={4} xs={12}>
            <ServiceCard item={item} />
          </Grid>
        ))}
    </Grid>
  );
}

export default page;
