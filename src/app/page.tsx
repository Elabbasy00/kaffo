"use client";
import styles from "./page.module.css";
import Hero from "../components/hero/Hero";

import HomeAbout from "../components/home-about/HomeAbout";
import { Container, Grid } from "@mui/joy";
import { categoryes } from "../data/data";
import CategoryCard from "../components/category-card/CategoryCard";
import SectionTitles from "../components/section-titles/SectionTitles";
import ClientSlider from "../components/client-slider/ClientSlider";
import ServiceSlider from "../components/service-slider/ServiceSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Container>
        <HomeAbout />
        <SectionTitles text="خــدمــاتــنــا" />
        <Grid container spacing={2}>
          {categoryes.map((item, id) => (
            <Grid key={id} xs={12} md={4}>
              <CategoryCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <ServiceSlider />
      <SectionTitles text="شـركـاء الـنـجـاح" />
      <ClientSlider />
      {/* <SectionTitles text="الـمـدونـة" /> */}
    </main>
  );
}
