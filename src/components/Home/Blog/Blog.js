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
  },

  {
    id: 2,

    description:
      "Top 5 Kubernetes Backup and Storage Solutions: Velero and More",
  },

  {
    id: 3,
    title: "Kubetools GPT",
    description:
      "Top 5 Kubernetes Backup and Storage Solutions: Velero and More ",
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
  }, []);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "50",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <main className={styles.containerWrapper}>
      <section className={styles.maincontainer}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Blogs</h1>
            <p>
              The following table ranks repositories using three metrics: stars,
              pull requests, and issues. The table compares last 28 days or the
              most recent two months of data and indicates whether repositories
              are moving up or down the rankings.
            </p>
          </header>

          {windowWidth > 500 ? (
            <div>
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
                          <span> Read more</span>
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
            </div>
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
                      <Link href={"/"}> Read more</Link>
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
