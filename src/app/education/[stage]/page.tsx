import { getEducationStages } from "@/src/actions/actions";
import LevelCards from "@/src/components/level-cards/LevelCards";
import { Container, Divider, Typography } from "@mui/joy";
import React from "react";

const getStages = async (stage: string) => {
  try {
    const data = await getEducationStages(stage);
    return data;
  } catch {
    return null;
  }
};
// decodeURIComponent
async function page({ params }: { params: { stage: any } }) {
  const levels = await getStages(params.stage);

  return (
    <Container>
      <Divider>
        <Typography
          level="h2"
          sx={{ textAlign: "center", my: 4 }}
          textColor="neutral.solidBg"
        >
          اخـتـار مستواك التعليمي
        </Typography>
      </Divider>
      <LevelCards levels={JSON.parse(JSON.stringify(levels))} />
    </Container>
  );
}

export default page;
