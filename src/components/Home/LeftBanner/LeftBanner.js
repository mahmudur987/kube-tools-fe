// LeftBanner.js
import Image from "next/image";
import styles from "./LeftBanner.module.css";
import { useGetAllBanner } from "@/utils/banner";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "../MyError/Error";

const LeftBanner = () => {
  const { data: banner, isLoading, isError, error } = useGetAllBanner();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorComponent message={error ? error.message : "Error"} />;
  }
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
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
      </div>
    </div>
  );
};

export default LeftBanner;
