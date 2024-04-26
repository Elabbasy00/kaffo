import { getServicesProjects } from "@/src/actions/actions";
import ProjectView from "@/src/components/project-view/ProjectView";

import React from "react";

const serviceProjects = async (slug: string) => {
  try {
    const projects = await getServicesProjects(slug);
    return projects;
  } catch {
    return [];
  }
};

async function page({ params }: { params: { serviceSlug: string } }) {
  const slug = params?.serviceSlug;
  const projects = await serviceProjects(slug);

  return <ProjectView projects={projects} />;
}

export default page;
