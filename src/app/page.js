"use client";
import { css } from "@emotion/react";
import Blog from "@/components/Home/Blog/Blog";
import styles from "./page.module.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import Banner from "@/components/Home/Banner/Banner";
import Footer from "@/components/Home/Footer/Footer";
import OurOffer from "@/components/Home/OurOffer/OurOffer";
import TrendingRepos from "@/components/Home/TrendingRepos/TrendingRepos";
import { CollectionsSection } from "@/components/Home/HotCollections";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function Home() {
  const inter = css`
    font-family: "DM Sans", sans-serif;
    /* Additional styles */
  `;
  const queryClient = new QueryClient();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main} css={inter}>
        <Navbar scrollToSection={scrollToSection} />
        <Banner />
        <TrendingRepos />
        <CollectionsSection />
        <OurOffer />
        <Blog />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
