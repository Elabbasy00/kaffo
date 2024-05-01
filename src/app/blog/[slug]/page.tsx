import { getSingleBlog } from "@/src/actions/actions";
import PageHeader from "@/src/components/page-header/PageHeader";
import { Box, Container } from "@mui/joy";
import React from "react";

const getPost = async (slug: string) => {
  try {
    const data = await getSingleBlog(slug);
    return data;
  } catch {
    return null;
  }
};

async function page({ params }: { params: { slug: string } }) {
  const post = await getPost(params?.slug);
  return (
    <Box>
      {post && (
        <>
          <PageHeader background={post?.cover} title={post?.overview} />
          <Container
            maxWidth="lg"
            sx={{
              my: 2,
              fontFamily: "var(--font-cairo) !important",
              ul: { lineHeight: "50px" },
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: post?.content }} />
          </Container>
        </>
      )}
    </Box>
  );
}

export default page;
