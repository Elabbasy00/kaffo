import {
  BlogType,
  BlogsType,
  CoursesType,
  EducationLevelType,
  EducationStageType,
  EducationType,
} from "../types/data-type";
import { api } from "../utils/fetcher";

export async function getAvailableEducationList() {
  const data = await api<EducationType[]>("api/education/", {
    method: "get",
  });

  return data;
}

export async function getEducationStages(slug: string) {
  const data = await api<EducationStageType[]>(
    `api/education/stages/?slug=${slug}`,
    {
      method: "get",
    }
  );

  return data;
}
//
export async function getEducationLevel(stage: string) {
  const data = await api<EducationLevelType[]>(
    `api/education/levels/?stage=${stage}`,
    {
      method: "get",
    }
  );

  return data;
}

export async function getGradeCourses(grade: string) {
  const data = await api<CoursesType[]>(
    `api/education/grade-courses/?grade_level=${grade}`,
    {
      method: "get",
    }
  );

  return data;
}

export async function getSingleCourse(slug: string) {
  const data = await api<CoursesType>(
    `api/education/single-course/?slug=${slug}`,
    {
      method: "get",
    }
  );

  return data;
}

export async function getBlogList(
  limit: number = 10,
  offset: number = 0
): Promise<BlogsType> {
  const data = await api<BlogsType>(
    `api/blog/list/?limit=${limit}&offset=${offset}`,
    {
      method: "get",
    }
  );

  return data;
}

export async function getSingleBlog(slug: string) {
  const data = await api<BlogType>(`api/blog/single-post/?slug=${slug}`, {
    method: "get",
  });

  return data;
}
