import { getServicesProjects } from "@/src/actions/actions";
import PageHeader from "@/src/components/page-header/PageHeader";
import ProjectView from "@/src/components/project-view/ProjectView";
import { Container } from "@mui/joy";

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
  const slug = decodeURIComponent(params?.serviceSlug);
  const projects = await serviceProjects(slug);
  const title = slug.replaceAll("-", " ");
  // dad;
  return (
    <div>
      <PageHeader background="/pages-headers/services.jpg" title={title} />
      <Container sx={{ my: 5 }}>
        <ProjectView projects={projects} />;
      </Container>
    </div>
  );
}

export default page;
