"use client";
import { ServicesProjectsType } from "@/src/types/data-type";
import { Grid } from "@mui/joy";
import React from "react";
import ProjectCard from "../project-card/ProjectCard";
import ImageGallery from "../image-gallery/ImageGallery";

function ProjectView({ projects }: { projects: ServicesProjectsType[] }) {
  const [viewModal, setViewModal] = React.useState<boolean>(false);
  const [viewObj, setViewObj] = React.useState<ServicesProjectsType | null>(
    null
  );

  const handelModelOpen = React.useCallback((obj: ServicesProjectsType) => {
    setViewObj(obj);
    setViewModal(true);
  }, []);
  const handelModelClose = React.useCallback(
    (obj: ServicesProjectsType) => {
      setViewObj(null);
      setViewModal(!viewModal);
    },
    [viewModal]
  );
  return (
    <>
      <Grid container spacing={2}>
        {projects?.map((item) => (
          <Grid key={item.id} xs={12} sm={6} md={4}>
            <ProjectCard item={item} onOpen={handelModelOpen} />
          </Grid>
        ))}
      </Grid>
      <ImageGallery
        customOpen={viewModal}
        customSetOpen={handelModelClose}
        obj={viewObj}
      />
    </>
  );
}

export default ProjectView;
