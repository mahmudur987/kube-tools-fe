// LeftBanner.js
import Image from "next/image";
import Link from "next/link";
import styles from "./LeftBanner.module.css";
import { useGetAllBanner } from "@/utils/banner";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "../MyError/Error";
import { useRouter } from "next/navigation";

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
            <div key={item._id} className={styles.banner}>
              <Image
                width={200}
                height={200}
                src={item?.image}
                alt={`Image Banner`}
              />
              <div
                dangerouslySetInnerHTML={{ __html: item.description }}
                className={styles.bannerDescription}
              ></div>
            </div>
          ))}

        <div className={styles.bottomLink}>
          <Link href={" https://blog.kubetools.io/sponsors/"} target="_blank">
            Promote Your Product Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
