import { getServices } from "@/src/actions/actions";
import React from "react";
import ServiceSlider from "./ServiceSlider";

async function ServiceSection() {
  const services = await getServices();
  return <ServiceSlider services={services} />;
}

export default ServiceSection;
