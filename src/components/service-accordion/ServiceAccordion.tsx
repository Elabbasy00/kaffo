"use client";
import React from "react";
import Accordion, { accordionClasses } from "@mui/joy/Accordion";
import {
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/joy";
function CustomAccordion() {
  const [index, setIndex] = React.useState<number | null>(0);

  return (
    <AccordionGroup
      sx={{
        [`& .${accordionClasses.root}`]: {
          marginTop: "0.5rem",
          transition: "0.2s ease",
          color: "#fff",
          button: {
            color: "neutral.solidBg",
            fontWeight: "900",
            fontSize: "1.6em",
            padding: 2,
          },
          '& button:not([aria-expanded="true"])': {
            transition: "0.2s ease",
            paddingBottom: "0.625rem",
          },
          "& button:hover": {
            background: "transparent",
            color: "neutral.solidBg",
          },
        },
        [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
          bgcolor: "background.level1",
          borderRadius: "md",
          borderBottom: "1px solid",
          borderColor: "background.level2",
        },
        '& [aria-expanded="true"]': {
          boxShadow: (theme) => `inset 0 -1px 0 ${theme.vars.palette.divider}`,
        },
      }}
    >
      <Accordion
        expanded={index === 0}
        onChange={(event, expanded) => {
          setIndex(expanded ? 0 : null);
        }}
      >
        <AccordionSummary>الـخـدمــات الـتـعـلـيـمـيـة</AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} sx={{ my: 2 }}>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="neutral.solidBg">
                  الرؤية
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "40nc" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="primary.solidBg">
                  الهدف
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "100%" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="neutral.solidBg">
                  الرسالة
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "40nc" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 1}
        onChange={(event, expanded) => {
          setIndex(expanded ? 1 : null);
        }}
      >
        <AccordionSummary>الـخـدمــات الـتـسـويـقـيـة</AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} sx={{ my: 2 }}>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="neutral.solidBg">
                  الرؤية
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "40nc" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="primary.solidBg">
                  الهدف
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "100%" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="neutral.solidBg">
                  الرسالة
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "40nc" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 2}
        onChange={(event, expanded) => {
          setIndex(expanded ? 2 : null);
        }}
      >
        <AccordionSummary>الـخـدمــات الـبـرمـجـيـة</AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3} sx={{ my: 2 }}>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="neutral.solidBg">
                  الرؤية
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "40nc" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="primary.solidBg">
                  الهدف
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "100%" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
            <Grid xs={12} md={4}>
              <Box>
                <Typography level="h1" textColor="neutral.solidBg">
                  الرسالة
                </Typography>

                <Typography level="body-lg" sx={{ maxWidth: "40nc" }}>
                  تـعـرف عـلـي كـفـوَّ نقدم خـدمـات تعليمية و برمجية متقنة علي
                  اعلي مستوي بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة
                  عالمية و اسعار تنافسية
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}

export default CustomAccordion;
