"use client";
import styles from "./page.module.css";
import Hero from "../components/hero/Hero";

import HomeAbout from "../components/home-about/HomeAbout";
import { Container, Grid } from "@mui/joy";
import { services } from "../data/data";
import CategoryCard from "../components/category-card/CategoryCard";
import SectionTitles from "../components/section-titles/SectionTitles";
import ClientsCard from "../components/clients-card/ClientsCard";
import ClientSlider from "../components/client-slider/ClientSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Container>
        <HomeAbout />
        <SectionTitles text="خــدمــاتــنــا" />
        <Grid container spacing={2}>
          {services.map((item, id) => (
            <Grid key={id} xs={12} md={4}>
              <CategoryCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <ClientSlider />
    </main>
  );
}
