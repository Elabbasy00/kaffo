import BoardCard from "@/src/components/board-card/BoardCard";
import ServicesAccordion from "@/src/components/service-accordion/ServiceAccordion";
import IconCard from "@/src/components/icon-card/IconCard";
import PageHeader from "@/src/components/page-header/PageHeader";
import SectionTitles from "@/src/components/section-titles/SectionTitles";
import TowSideLayout from "@/src/components/tow-side-layout/TowSideLayout";
import { team } from "@/src/data/data";
import { Box, Button, Container, Grid, Typography } from "@mui/joy";
import Link from "next/link";
import React from "react";

const OurValuesData = [
  {
    name: "الـدقـة",
    desc: "نحن ملتزمون بتزويد عملائنا بأفضل الخدمات التعليمية والبرمجية. يتمتع فريقنا بالتدريب العالي والخبرة، وهم يدركون دائمًا أهمية الدقة.",
    img: "/icons/innovation.svg",
  },
  {
    name: "احـتـرافـيـة",
    desc: "نحن نؤمن بأن فريقنا يجب أن يتصرف دائمًا بشكل احترافي وأخلاقي. يجب عليهم احترام عملائهم وثقافات عملائهم.",
    img: "/icons/excellence.svg",
  },
  {
    name: "سـريـة",
    desc: "نحن نفهم أهمية معلومات عملائنا. في كفو نحافظ علي سرية عملائنا و نضمن لهم سرية تامة للبيانات",

    img: "/icons/confidentiality.svg",
  },
  {
    name: "الـمـرونـة",
    desc: "نحن نفهم أن عملائنا لديهم احتياجات مختلفة. نحن نتحلى بالمرونة وعلى استعداد للعمل مع عملائنا لإيجاد أفضل الحلول لاحتياجاتهم.",
    img: "/icons/flexibility.svg",
  },
  {
    name: "باسعار منخفضة",
    desc: "نحن نؤمن بأن الجميع يجب أن يحصلوا على خدمات عالية الجودة. نحن نقدم خدماتنا بأسعار مختلفة، حتى يتمكن عملاؤنا من العثور على الخيار الذي يناسب ميزانيتهم.",
    img: "/icons/affordability.svg",
  },
];
function page() {
  return (
    <div>
      <PageHeader
        background="/pages-headers/about-us.jpg"
        title="مــن نــحــن"
        subtitle="رؤيــتــنـا، هـدفـنا، رسـالـتنا"
      />

      <TowSideLayout withEffect img="/home.jpg">
        <Typography color="primary" fontSize="lg" fontWeight="lg">
          تـعـرف عـلـي كـفـوَّ
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          نقدم خـدمـات تعليمية و برمجية متقنة علي اعلي مستوي
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          بمساعدة فريقنا المتميز نستطيع تقديم خدماتنا بجودة عالمية و اسعار
          تنافسية
        </Typography>
        <Button component={Link} href="/contact" size="lg">
          تـواصـل مـعـانـا
        </Button>
      </TowSideLayout>
      <Container sx={{ my: 6 }}>
        <Box sx={{ mb: 7 }}>
          <ServicesAccordion />
        </Box>
        <Grid container spacing={3}>
          {OurValuesData.map((item, idx) => (
            <Grid key={idx} xs={12} sm={6}>
              <IconCard item={item} />
            </Grid>
          ))}
        </Grid>

        <SectionTitles text="فـريـق الـعـمـل" />
        <Grid container spacing={1}>
          {team.map((item, idx) => (
            <Grid key={item.id} xs={12} sm={6} md={4} lg={3}>
              <BoardCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default page;
