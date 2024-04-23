import { getAvailableEducationList } from "@/src/actions/actions";
import PageHeader from "@/src/components/page-header/PageHeader";
import StagesCards from "@/src/components/stages-cards/StagesCards";
import { Divider, Typography } from "@mui/joy";

import React from "react";

const getStages = async () => {
  const data = await getAvailableEducationList();
  return data;
};

export default async function page() {
  const data = await getStages();
  return (
    <div>
      <PageHeader
        background="/pages-headers/about-us.jpg"
        title="الـمـنـصـة الـتـعـلـيـمـة"
        subtitle="ابـد رحـلـتـك الاكـاديـمـيـه"
      />
      <Divider sx={{ mt: 4 }}>
        <Typography
          level="h2"
          sx={{ textAlign: "center" }}
          textColor="neutral.solidBg"
        >
          اخـتـار مـسـارك الاكـاديـمي
        </Typography>
      </Divider>

      <StagesCards items={JSON.parse(JSON.stringify(data))} />
    </div>
  );
}
