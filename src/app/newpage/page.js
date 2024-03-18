// MaintenancePage.js

import Link from "next/link";
import styles from "./NewPage.module.css";

const MaintenancePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Coming Soon</h1>
      <Link href={"/"}>Back</Link>
    </div>
  );
};

export default MaintenancePage;
