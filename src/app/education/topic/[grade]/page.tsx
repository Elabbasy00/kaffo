import { getGradeCourses } from "@/src/actions/actions";
import CourseCard from "@/src/components/course-card/CourseCard";
import Courses from "@/src/components/courses/Courses";
import { Container, Divider, Typography } from "@mui/joy";
import React from "react";

// async function getCourses(grade: string) {
//   const courses = await getGradeCourses((grade = grade));
//   return courses;
// }
async function page({ params }: { params: { grade: string } }) {
  // const courses = await getCourses(params.grade);

  return (
    <Container>
      <Typography level="h2" sx={{ my: 3 }} textColor="neutral.solidBg">
        كـورسات {decodeURIComponent(params.grade.replaceAll("-", " "))}
      </Typography>
      <Divider sx={{ my: 2 }} />
      {/* <Courses items={JSON.parse(JSON.stringify(courses))} /> */}
    </Container>
  );
}

export default page;
