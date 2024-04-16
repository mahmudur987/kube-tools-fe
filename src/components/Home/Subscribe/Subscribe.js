import React from "react";
import styles from "./Subscribe.module.css";
import NewsletterBox from "@/components/Common/NewsLetterBox/NewsletterBox";
const Subscribe = () => {
  return (
    <div className={styles.container}>
      <NewsletterBox />
    </div>
  );
};

export default Subscribe;
