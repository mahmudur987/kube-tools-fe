// LeftBanner.js
import Image from "next/image";
import styles from "./LeftBanner.module.css";
import { useGetAllBanner } from "@/utils/banner";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "../MyError/Error";
import Slider from "react-slick";

const MiddleBanner = () => {
  const { data: banner, isLoading, isError, error } = useGetAllBanner();
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0",
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        centerMode: true,
        centerPadding: "50px",
        adaptiveHeight: true,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        centerMode: true,
        adaptiveHeight: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
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
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorComponent message={error ? error.message : "Error"} />;
  }
  return (
    <div className={styles.newContainer}>
      <Slider {...settings}>
        {banner &&
          !isError &&
          !isLoading &&
          banner?.data.map((item) => (
            <div key={item.id} className={styles.banner}>
              <Image
                width={200}
                height={200}
                src={item?.image}
                alt={`Image ${item.index}`}
              />
              <div className={styles.bannerDescription}>
                <p>
                  {item.description.slice(0, 250)}
                  {item.description.length > 250 ?? "....."}
                </p>
                <a href={item.link}> {item.linkText} </a>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MiddleBanner;
