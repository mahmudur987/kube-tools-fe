"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Blog.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export const blogData = [
  {
    id: 1,
    tag1: " Backup",
    tag2: " Storage",
    description:
      "Top 5 Kubernetes Backup and Storage Solutions: Velero and More",
    link: "https://blog.kubetools.io/top-5-kubernetes-backup-and-storage-solutions-velero-and-more/",
  },

  {
    id: 2,
    tag1: "Cluster Management",
    tag2: "Kubernetes",
    description: "k0smotron: Revolutionizing Kubernetes Cluster Management",
    link: "https://www.kubetools.io/k0smotron-revolutionizing-kubernetes-cluster-management/",
  },

  {
    id: 3,
    tag1: " Kubernetes",
    tag2: "Storage Providers",
    description: "Top 5 Storage Provider Tools for Kubernetes",
    link: "https://blog.kubetools.io/top-5-storage-provider-tools-for-kubernetes/",
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
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    centerMode: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  const previous = () => {
    sliderRef.current.slickPause();
    sliderRef.current.slickNext();
  };

  const next = () => {
    sliderRef.current.slickPause();
    sliderRef.current.slickPrev();
  };

  return (
    <main id="blog" className={styles.containerWrapper}>
      <section className={styles.maincontainer}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Blog</h1>
          </header>

          {windowWidth > 100 ? (
            <>
              <div className={styles.sliderContents}>
                <Slider ref={sliderRef} {...settings}>
                  {blogData.map((data) => (
                    <div key={data.id} className={styles.content}>
                      <div className={styles.card}>
                        <div className={styles.cardTop}>
                          <span className={styles.text1}>{data.tag1}</span>
                          <span className={styles.text2}>{data.tag2}</span>
                        </div>

                        <div className={styles.cardMiddle}>
                          <p className={styles.cardDescription}>
                            {" "}
                            {data.description}{" "}
                          </p>
                        </div>

                        <p className={styles.cardBottom}>
                          <a href={data.link} target="_blank">
                            {" "}
                            Read more
                          </a>
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
                  onMouseLeave={() => sliderRef.current.slickPlay()}
                  type="button"
                >
                  <FaArrowLeft />
                </button>

                <button
                  className={styles.rightbtn}
                  onClick={next}
                  onMouseLeave={() => sliderRef.current.slickPlay()}
                  type="button"
                >
                  <FaArrowRight />
                </button>
              </div>
            </>
          ) : (
            <div className={styles.contents}>
              {blogData.map((data) => (
                <div key={data.id} className={styles.content}>
                  <div className={styles.card}>
                    <div className={styles.cardTop}>
                      <span className={styles.text1}>{data.tag1}</span>
                      <span className={styles.text2}>{data.tag2}</span>
                    </div>

                    <div className={styles.cardMiddle}>
                      <p className={styles.cardDescription}>
                        {" "}
                        {data.description}{" "}
                      </p>
                    </div>

                    <p className={styles.cardBottom}>
                      <a href={data.link} target="_blank">
                        {" "}
                        Read more
                      </a>
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
