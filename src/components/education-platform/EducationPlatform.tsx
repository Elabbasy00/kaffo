import { Box, Button, Typography } from "@mui/joy";
import React from "react";
import Link from "next/link";

function EducationPlatform() {
  return (
    <Box
      sx={{
        background: "url(/educ.jpg)",
        width: "100%",
        height: "100%",
        py: 5,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
        my: 10,
      }}
    >
      <Box
        sx={{
          zIndex: 5,
          display: "flex",
          color: "#fff",
          position: "relative",
          py: 5,
          px: 2,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          gap: 4,
          textAlign: "center",
        }}
      >
        <Typography level="h2" textColor="#fff" fontWeight="800">
          مـنـصـتـنـا الـتـعـلـيـمـيـة
        </Typography>

        <Typography
          level="title-lg"
          textColor="#fff"
          fontWeight={700}
          sx={{ maxWidth: { xs: "100%", md: "80%" }, lineHeight: 2 }}
        >
          تقوم على بناء مستقبلك التعليمي والمهني. نقدم دورات متخصصة تشمل مجموعة
          واسعة من المواضيع، مصممة لتناسب احتياجاتك وتطوير مهاراتك. كما ان
          خدماتنا التعليمية المدرسية والجامعية تعكس التزامنا بتطوير مسار التعلم
          الخاص بك. نقدم دعماً شاملاً يشمل دروسًا تعليمية مخصصة، وموارد تعلم
          متقدمة لتعزيز فهمك. سواء كنت في المدرسة الثانوية أو الجامعة، نسعى
          لتوفير بيئة تعلم داعمة تساعدك على تحقيق أفضل أداء ممكن والنجاح في
          رحلتك الأكاديمية.
        </Typography>
        <Link href={`/education/`}>
          <Button color="neutral">اكـتـشـف مـنـصـتـنـا الـتـعـلـيـمـة</Button>
        </Link>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #0e6b81d6, #faaf40e6)",
        }}
      />
    </Box>
  );
}

export default EducationPlatform;
