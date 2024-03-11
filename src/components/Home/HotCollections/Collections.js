"use client";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Collection.module.css";
import ErrorComponent from "../MyError/Error";
import ToolCategoryCard from "./ToolCategoryCard/ToolCategoryCard";
import { useGetTools } from "@/utils/ToolsData";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";

export default function Collections() {
  const { data, isLoading, isError, error } = useGetTools();
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    cssEase: "linear",
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint according to your needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
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
    <>
      <section className={styles.container}>
        {isLoading && (
          <p className={styles.spinerContainer}>
            <LoadingSpinner />
          </p>
        )}

        {data && (
          <Slider ref={sliderRef} {...settings}>
            {data?.data.map((category) => (
              <ToolCategoryCard
                key={category.category.id}
                category={category.category}
                tools={category.tools}
              />
            ))}
          </Slider>
        )}

        {isError && (
          <ErrorComponent
            message={isError ? error.message : "No data to show"}
          />
        )}
        <div className={styles.btnWrapper}>
          <button className={styles.leftbtn} onClick={previous} type="button">
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
      </section>
    </>
  );
}
