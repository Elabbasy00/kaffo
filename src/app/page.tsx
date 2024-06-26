import styles from "./page.module.css";
import Hero from "../components/hero/Hero";
import HomeAbout from "../components/home-about/HomeAbout";
import { Container, Grid } from "@mui/joy";
import { categoryes } from "../data/data";
import CategoryCard from "../components/category-card/CategoryCard";
import SectionTitles from "../components/section-titles/SectionTitles";
// import ServiceSlider from "../components/service-slider/ServiceSlider";
// import TeamSlider from "../components/team-slider/TeamSlider";
import ContactUs from "../components/contact-us/ContactUs";
// import EducationPlatform from "../components/education-platform/EducationPlatform";
import BlogsSection from "../components/blogs-section/BlogsSection";
import ServiceSection from "../components/service-slider/ServiceSection";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <HomeAbout />
      <SectionTitles text="خــدمــاتــنــا" />
      <Container>
        <Grid container spacing={2}>
          {categoryes.map((item, id) => (
            <Grid key={id} xs={12} sm={6} md={4}>
              <CategoryCard item={item} />
            </Grid>
          ))}
        </Grid>
        <ServiceSection />
      </Container>
      {/* <EducationPlatform /> */}
      <BlogsSection offest={0} limit={4} />
      {/* <SectionTitles text="فريق العمل" /> */}
      {/* <TeamSlider /> */}
      <ContactUs />
    </main>
  );
}
