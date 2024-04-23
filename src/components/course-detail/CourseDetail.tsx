import { CoursesType } from "@/src/types/data-type";
import { Button, Sheet, Typography } from "@mui/joy";
import React from "react";
import TowSideLayout from "../tow-side-layout/TowSideLayout";
import Link from "next/link";

function CourseDetail({ course }: { course: CoursesType }) {
  return (
    <Sheet>
      <TowSideLayout img={course.cover} withEffect={true}>
        <Typography color="primary" fontSize="lg" fontWeight="lg">
          {course.title}
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          {course.subject}
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          {course.desc}
        </Typography>
        <Button component={Link} href="/contact" size="lg">
          انـضـم الـيـنـا
        </Button>
      </TowSideLayout>
    </Sheet>
  );
}

export default CourseDetail;
