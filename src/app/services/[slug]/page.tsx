import { getServices } from "@/src/actions/actions";
import PageHeader from "@/src/components/page-header/PageHeader";
import ServiceCard from "@/src/components/service-card/ServiceCard";

import { Container, Grid } from "@mui/joy";
import React from "react";
const allServices = async () => {
  try {
    const services = await getServices();
    return services;
  } catch {
    return [];
  }
};

async function page({ params }: { params: { slug: string } }) {
  const services = await allServices();
  return (
    <div>
      <PageHeader
        background="/pages-headers/services.jpg"
        title="خــدمــاتــنــا"
      />
      <Container sx={{ my: 5 }}>
        <Grid container spacing={2}>
          {services
            .filter((service) => service.parent === params?.slug)
            .map((item) => (
              <Grid key={item.id} md={3} sm={4} xs={12}>
                <ServiceCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default page;
