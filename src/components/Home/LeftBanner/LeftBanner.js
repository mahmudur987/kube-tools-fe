// LeftBanner.js
import Image from "next/image";
import styles from "./LeftBanner.module.css";

const LeftBanner = ({ data }) => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        {data.map((item) => (
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

export default LeftBanner;
