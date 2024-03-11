import { Typography } from "@mui/joy";
import React from "react";
import TextSlideAnimation from "../text-slide-animation/TextSlideAnimation";
import TowSideLayout from "../tow-side-layout/TowSideLayout";
import OutlineButton from "../outline-btn/OutlineButton";

function HomeAbout() {
  return (
    <TowSideLayout img="/home.jpg" reversed={true} withEffect={true}>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        sx={{ color: "neutral.solidBg" }}
      >
        مــن نــحــن
      </Typography>

      <Typography
        level="h4"
        sx={{
          color: "text.secondary",
          fontWeight: "600",
        }}
      >
        <TextSlideAnimation text="في عالم يدعو إلى التقنية والتطوير، تتألق شركة كفو بتقديم خدمات تسويقية متقدمة، حيث نعكس رؤيتك بأسلوب إبداعي وفعّال. تتميز خدماتنا البرمجية بالتخصيص والتطور، حيث نقدم حلولًا تقنية مبتكرة لتلبية احتياجات عملك. وفي عالم التعليم، نمنحك فرصة التعلم بروح ملهمة وبرامج مخصصة تطويرية. إن كفو تجمع بين التسويق، البرمجة، والتعليم لتقديم تجارب فريدة ودعم شامل لرحلة نجاحك." />
      </Typography>
      <OutlineButton
        color="neutral"
        backgroundColor="var(--joy-palette-neutral-solidBg)"
      >
        قـصـتـنـا
      </OutlineButton>
    </TowSideLayout>
  );
}

export default HomeAbout;
