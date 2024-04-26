import { getServicesProjects } from "@/src/actions/actions";
import ProjectCard from "@/src/components/project-card/ProjectCard";
import ProjectView from "@/src/components/project-view/ProjectView";
import { Grid } from "@mui/joy";
import React from "react";

async function page({ params }: { params: { serviceSlug: string } }) {
  const slug = params?.serviceSlug;
  const projects = await getServicesProjects(slug);

  return <ProjectView projects={projects} />;
}

export default page;
