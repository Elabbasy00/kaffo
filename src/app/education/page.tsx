import { getStagesList } from "@/src/actions/actions";
import PageHeader from "@/src/components/page-header/PageHeader";
import StagesCards from "@/src/components/stages-cards/StagesCards";

import React from "react";

// const getStages = async () => {
//   const data = await getStagesList();
//   return data;
// };

async function page() {
  // const data = await getStages();
  return (
    <div>
      <PageHeader
        background="/pages-headers/about-us.jpg"
        title="الـمـنـصـة الـتـعـلـيـمـة"
        subtitle="ابـد رحـلـتـك الاكـاديـمـيـه"
      />
      {/* <StagesCards items={JSON.parse(JSON.stringify(data))} /> */}
    </div>
  );
}

export default page;
