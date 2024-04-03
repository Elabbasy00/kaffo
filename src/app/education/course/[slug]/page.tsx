import { getSingleCourse } from "@/src/actions/actions";
import CourseDetail from "@/src/components/course-detail/CourseDetail";
import VideosAccordion from "@/src/components/videos-accordion/VideosAccordion";
import { Box, Container, Sheet, Typography } from "@mui/joy";

import React from "react";

// async function getCourse(slug: string) {
//   const course = await getSingleCourse(slug);
//   return course;
// }

async function page({ params }: { params: { slug: string } }) {
  // const course = await getCourse(params.slug);
  return (
    <Box sx={{ py: 2, display: "flex", flexDirection: "column", gap: 3 }}>
      {/* <CourseDetail course={course} /> */}
      <Container>
        <Typography level="h4" sx={{ my: 4 }} textColor="text.icon">
          الـفـديـوهـات
        </Typography>
        {/* <Sheet variant="outlined">
          <VideosAccordion videos={course.course_videos} />
        </Sheet> */}
      </Container>
    </Box>
  );
}

export default page;
