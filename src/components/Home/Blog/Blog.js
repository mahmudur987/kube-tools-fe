"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Blog.module.css";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const offersData = [
  {
    id: 1,
    description:
      "Top 5 Kubernetes Backup and Storage Solutions: Velero and More",
    link: "https://www.kubetools.io/top-5-kubernetes-backup-and-storage-solutions-velero-and-more/",
  },

  {
    id: 2,

    description: "k0smotron: Revolutionizing Kubernetes Cluster Management",
    link: "https://www.kubetools.io/k0smotron-revolutionizing-kubernetes-cluster-management-2/",
  },

  {
    id: 3,
    title: "Kubetools GPT",
    description: "Top 5 Storage Provider Tools for Kubernetes",
    link: "https://www.kubetools.io/top-5-storage-provider-tools-for-kubernetes/",
  },
];

const Blog = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [""]);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        centerMode: true,
        centerPadding: "50",
        adaptiveHeight: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        centerMode: true,
        adaptiveHeight: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        centerMode: true,
        adaptiveHeight: true,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <main id="blog" className={styles.containerWrapper}>
      <section className={styles.maincontainer}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Blogs</h1>
          </header>

          {windowWidth > 800 ? (
            <>
              <div className={styles.sliderContents}>
                <Slider ref={sliderRef} {...settings}>
                  {offersData.map((data) => (
                    <div key={data.id} className={styles.content}>
                      <div className={styles.card}>
                        <div className={styles.cardTop}>
                          <span className={styles.text1}>Tags</span>
                          <span className={styles.text2}>New Technology</span>
                        </div>

                        <div className={styles.cardMiddle}>
                          <p className={styles.cardDescription}>
                            {" "}
                            {data.description}{" "}
                          </p>
                        </div>

                        <p className={styles.cardBottom}>
                          <a href={data.link}> Read more</a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 12H19"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12 5L19 12L12 19"
                              stroke="white"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className={styles.btnWrapper}>
                <button
                  className={styles.leftbtn}
                  onClick={previous}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 12H5"
                      stroke="#CDCDCD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 19L5 12L12 5"
                      stroke="#CDCDCD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className={styles.rightbtn}
                  onClick={next}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className={styles.contents}>
              {offersData.map((data) => (
                <div key={data.id} className={styles.content}>
                  <div className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.text1}>Tags</span>
                      <span className={styles.text2}>New Technology</span>
                    </div>

                    <div className={styles.cardMiddle}>
                      <p className={styles.cardDescription}>
                        {" "}
                        {data.description}{" "}
                      </p>
                    </div>

                    <p className={styles.cardBottom}>
                      <a href={data.link}> Read more</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12H19"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 5L19 12L12 19"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.c}></div>
      </section>
    </main>
  );
};

export default Blog;
