import React from "react";
import SectionTitles from "../section-titles/SectionTitles";
import { Box, Container, Grid } from "@mui/joy";
import BlogCard from "../blog-card/BlogCard";
import OutlineButton from "../outline-btn/OutlineButton";
import Link from "next/link";
import { getBlogList } from "@/src/actions/actions";
import { BlogsType } from "@/src/types/data-type";

const getBlogs = async (limit: number, offest: number) => {
  const data = await getBlogList(limit, offest);
  return data;
};

async function BlogsSection({
  limit,
  offest,
}: {
  limit: number;
  offest: number;
}) {
  const blogs = await getBlogs(limit, offest);

  return (
    <>
      <SectionTitles text="الـمـدونـة" />
      <Container>
        <Grid container spacing={2}>
          {blogs?.results?.map((item) => (
            <Grid key={item.id} xs={12} sm={6} md={3}>
              <BlogCard item={item} />
            </Grid>
          ))}
          <Grid xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link href="/blog" style={{ margin: "10px auto" }}>
                <OutlineButton
                  fullWidth
                  backgroundColor="var(--joy-palette-primary-solidBg)"
                >
                  كـل الـمـقـالات
                </OutlineButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BlogsSection;
