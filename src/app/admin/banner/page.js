"use client";
import styles from "./banner.module.css";

import Link from "next/link";
import { useGetAllBanner } from "@/utils/banner";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "@/components/Home/MyError/Error";
import PlaceholderImage from "../../../assets/images/company2.jpg";
import Image from "next/image";
const Banner = () => {
  const { data, isLoading, isError, error } = useGetAllBanner();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorComponent message={error ? error.message : "Error"} />;
  }

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.btnWrapper}>
        <Link href={"/admin/banner/addnewbanner"}>
          <button className={styles.button}>Add New Banner</button>
        </Link>
      </div>

      <div className={styles.container}>
        {data &&
          !isError &&
          !isLoading &&
          data.data?.map((item) => (
            <Link href={`/admin/banner/${item._id}`}>
              <div key={item.id} className={styles.banner}>
                <img
                  width={500}
                  height={500}
                  src={item.image}
                  alt={`Image ${item.index}`}
                />
                <div className={styles.bannerdescription}>
                  <p>{item.description}</p>
                  <a className={styles.link} href={item.link}>
                    {" "}
                    {item.linkText}{" "}
                  </a>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Banner;
