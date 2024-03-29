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
import LeftBanner from "@/components/Home/LeftBanner/LeftBanner";

import img1 from "../assets/images/company1.jpg";
import img2 from "../assets/images/company2.jpg";
import img3 from "../assets/images/company3.jpg";
import MiddleBanner from "@/components/Home/LeftBanner/MiddleBanner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const data = [
  {
    id: 1,
    index: 0,
    image: img1,
    description:
      "<p>This is the description for item 1.</p><p>It may contain multiple paragraphs.</p><a href='https://example.com'>Visit Example</a>",
  },
  {
    id: 2,
    index: 1,
    image: img2,
    description:
      "<p>This is the description for item 2.</p><p>It may contain multiple paragraphs as well.</p><a href='https://example.com'>Visit Example</a>",
  },
  {
    id: 3,
    index: 2,
    image: img3,
    description:
      "<p>This is the description for item 3.</p><p>It can also have links and other HTML elements.</p><a href='https://example.com'>Visit Example</a>",
  },
  {
    id: 3,
    index: 2,
    image: img3,
    description:
      "<p>This is the description for item 3.</p><p>It can also have links and other HTML elements.</p><a href='https://example.com'>Visit Example</a>",
  },
];

export default function Home() {
  const inter = css`
    font-family: "DM Sans", sans-serif;
    /* Additional styles */
  `;
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    console.log(router);

    const { scrollTo } = router.query || {};
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.query]);
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main} css={inter}>
        <Navbar />
        <Banner />
        <div className={styles.join}>
          <div className={styles.left}>
            <MiddleBanner />

            <TrendingRepos />
            <CollectionsSection />
            <OurOffer />
            <Blog />
          </div>
          <div className={styles.right}>
            <LeftBanner data={data} />
          </div>
        </div>
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
