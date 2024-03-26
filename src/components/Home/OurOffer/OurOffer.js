"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./OurOffer.module.css";
import img1 from "../../../assets/images/Rectangle 1.png";
import img2 from "../../../assets/images/Rectangle 2.png";
import img3 from "../../../assets/images/Rectangle 3.png";
import img4 from "../../../assets/images/codesandbox.png";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
const offersData = [
  {
    id: 1,
    image: img1,
    title: "Kubetools Recommender System",
    description:
      "A Comprehensive Community-driven ranking and catalog of the Kubernetes tools ",
    bottomText: "Read More ",
  },

  {
    id: 2,
    image: img2,
    title: "Kubetools Sandbox",
    description:
      "Hands-on Learning & Interactive Kubernetes Tools Playground instances on-the-fly.",
    bottomText: "Read More    ",
  },

  {
    id: 3,
    image: img3,
    title: "Kubetools GPT",
    description:
      "A Comprehensive Community-driven ranking and catalog of the Kubernetes tools.      ",
    bottomText: "Read More",
  },
];

const OurOffer = () => {
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
    centerMode: true,
    centerPadding: "0",
    rtl: false,
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
          initialSlide: 0,
          centerPadding: 0, // Set to 0 for no padding
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
    <main className={styles.maincontainer}>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>What we offer</h1>
        </header>
        {windowWidth > 500 ? (
          <div className={styles.contents}>
            {offersData.map((data) => (
              <div key={data.id} className={styles.content}>
                <div className={styles.card}>
                  <figure className={styles.imageWrapper}>
                    <Image width={200} height={200} src={data.image} alt="" />
                    <span className={styles.roundImage}>
                      <Image width={200} height={200} src={img4} alt="" />
                    </span>
                  </figure>

                  <div className={styles.cardMiddle}>
                    <h3 className={styles.cardtitle}>{data.title}</h3>
                    <p className={styles.cardDescription}>
                      {" "}
                      {data.description}{" "}
                    </p>
                  </div>

                  <p className={styles.cardBottom}>
                    <Link href={"/newpage"}> {data.bottomText} </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 17L10 11L4 5"
                        stroke="#6D45F1"
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
        ) : (
          <div className={styles.slidercontents}>
            <Slider ref={sliderRef} {...settings}>
              {offersData?.map((data) => (
                <div key={data.id} className={styles.content}>
                  <div className={styles.card}>
                    <figure className={styles.imageWrapper}>
                      <Image width={200} height={200} src={data.image} alt="" />
                      <span className={styles.roundImage}>
                        <Image width={200} height={200} src={img4} alt="" />
                      </span>
                    </figure>

                    <div className={styles.cardMiddle}>
                      <h3 className={styles.cardtitle}>{data.title}</h3>
                      <p className={styles.cardDescription}>
                        {" "}
                        {data.description}{" "}
                      </p>
                    </div>

                    <p className={styles.cardBottom}>
                      <Link href={"/"}> {data.bottomText} </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 17L10 11L4 5"
                          stroke="#6D45F1"
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

              <button className={styles.rightbtn} onClick={next} type="button">
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
        )}
      </section>
    </main>
  );
};

export default OurOffer;
