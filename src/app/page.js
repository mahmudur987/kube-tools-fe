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
import { Suspense } from "react";
import MiddleBanner from "@/components/Home/LeftBanner/MiddleBanner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";

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
            <Suspense
              fallback={
                <div>
                  <LoadingSpinner />
                </div>
              }
            >
              <TrendingRepos />
            </Suspense>

            <CollectionsSection />
            <OurOffer />
            <Blog />
          </div>
          <div className={styles.right}>
            <LeftBanner />
          </div>
        </div>
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
