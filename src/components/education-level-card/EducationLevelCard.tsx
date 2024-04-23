"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  ListItem,
  ListItemButton,
  Typography,
  accordionDetailsClasses,
  accordionSummaryClasses,
} from "@mui/joy";
import React from "react";
import Link from "next/link";
import { EducationStageType } from "@/src/types/data-type";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";

function EducationLevelCard({ item }: { item: EducationStageType }) {
  return (
    <AccordionGroup
      variant="outlined"
      transition="0.2s"
      sx={{
        // padding: "5px 10px",
        borderRadius: "lg",
        [`& .${accordionSummaryClasses.button}:hover`]: {
          bgcolor: "transparent",
        },
        [`& .${accordionDetailsClasses.content}`]: {
          boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
          [`&.${accordionDetailsClasses.expanded}`]: {
            paddingBlock: "0.75rem",
          },
        },
      }}
    >
      <Accordion>
        <AccordionSummary indicator={null}>
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardOverflow>
              {item?.image && (
                <AspectRatio ratio="2">
                  <Image
                    src={item?.image}
                    loading="lazy"
                    alt=""
                    width={500}
                    height={500}
                  />
                </AspectRatio>
              )}
            </CardOverflow>
            <CardContent>
              <Typography level="title-md">{item?.name}</Typography>
            </CardContent>
            <CardOverflow>
              <Divider inset="context" />
              <CardContent
                orientation="horizontal"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography level="body-md" textColor="text.icon">
                  {item?.grade_levels?.length} مستوي
                </Typography>
                <MdArrowDownward />
              </CardContent>
            </CardOverflow>
          </Card>
        </AccordionSummary>
        <AccordionDetails>
          {item?.grade_levels?.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem
                component={Link}
                href={`/education/topic/${item?.slug}/`}
              >
                <ListItemButton>{item?.name}</ListItemButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}

export default EducationLevelCard;
