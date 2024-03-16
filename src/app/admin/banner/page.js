"use client";
import { data } from "@/app/page";
import styles from "./banner.module.css";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.btnWrapper}>
        <Link href={"/admin/banner/addnewbanner"}>
          <button className={styles.button}>Add New Banner</button>
        </Link>
      </div>

      <div className={styles.container}>
        {data?.map((item) => (
          <div key={item.id} className={styles.banner}>
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={`Image ${item.index}`}
            />
            <div className={styles.bannerdescription}>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
