import { getServices } from "@/src/actions/actions";
import React from "react";
import ServiceSlider from "./ServiceSlider";

const allServices = async () => {
  try {
    const services = await getServices();
    return services;
  } catch {
    return [];
  }
};
async function ServiceSection() {
  const services = await allServices();

  return <ServiceSlider services={services} />;
}

export default ServiceSection;
