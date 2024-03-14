import React from "react";
import styles from "./NewsletterBox.module.css";

const NewsletterBox = () => {
  return (
    <div className={styles.newsletterBox}>
      <h2>Subscribe to our Newsletter</h2>
      <p>Stay updated with our latest news and promotions.</p>
      <form className={styles.form}>
        <input type="email" placeholder="Your email address" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterBox;
