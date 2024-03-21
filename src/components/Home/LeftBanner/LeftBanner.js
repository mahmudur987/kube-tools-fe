// LeftBanner.js
import Image from "next/image";
import styles from "./LeftBanner.module.css";
import { useGetAllBanner } from "@/utils/banner";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "../MyError/Error";
import PlaceholderImage from "../../../assets/images/company1.jpg";
const LeftBanner = () => {
  const { data: banner, isLoading, isError, error } = useGetAllBanner();
  console.log(banner?.data);
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
              <img
                width={200}
                height={200}
                src={item?.image}
                alt={`Image ${item.index}`}
              />
              <div className={styles.bannerdescription}>
                <p>{item.description}</p>
                <a href={item.link}> {item.linkText} </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LeftBanner;
