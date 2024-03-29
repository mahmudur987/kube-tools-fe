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
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
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
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <ErrorComponent message={isError ? error.message : "No data to show"} />
    );
  }
  return (
    <>
      {data && (
        <section className={styles.container}>
          <Slider ref={sliderRef} {...settings}>
            {data?.data.map((category) => (
              <ToolCategoryCard
                key={category.category.id}
                category={category.category}
                tools={category.tools}
              />
            ))}
          </Slider>

          <div className={styles.btnWrapper}>
            <button className={styles.leftbtn} onClick={previous} type="button">
              <FaArrowLeft />
            </button>

            <button className={styles.rightbtn} onClick={next} type="button">
              <FaArrowRight />
            </button>
          </div>
        </section>
      )}
    </>
  );
}
