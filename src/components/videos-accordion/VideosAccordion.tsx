import React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { VideoType } from "@/src/types/data-type";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { Typography } from "@mui/joy";

export default function VideosAccordion({
  videos,
}: {
  videos: VideoType[] | undefined;
}) {
  return (
    <AccordionGroup>
      {videos?.map((video) => (
        <Accordion
          key={video.id}
          disabled={!video.is_trial}
          sx={{
            button: {
              py: 1,
            },
          }}
        >
          <AccordionSummary>
            <Typography level="h4">{video.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "background.level1" }}>
            <MediaPlayer
              className="custom-video"
              title="Sprite Fight"
              src={video.link}
              poster={video.cover}
              hideControlsOnMouseLeave={true}
              posterLoad="visible"
              aspectRatio="14/6"
            >
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails={video.cover}
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionGroup>
  );
}
