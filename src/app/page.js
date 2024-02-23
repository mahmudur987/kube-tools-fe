"use client";
import { css } from "@emotion/react";
import Blog from "@/components/Home/Blog/Blog";
import styles from "./page.module.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import Banner from "@/components/Home/Banner/Banner";
import Footer from "@/components/Home/Footer/Footer";
import OurOffer from "@/components/Home/OurOffer/OurOffer";
import TrendingRepos from "@/components/Home/TrendingRepos/TrendingRepos";

export default function Home() {
  const inter = css`
    font-family: "DM Sans", sans-serif;
    /* Additional styles */
  `;

  return (
    <main className={styles.main} css={inter}>
      <Navbar />
      <Banner />
      <TrendingRepos />

      <OurOffer />
      <Blog />
      <Footer />
    </main>
  );
}
