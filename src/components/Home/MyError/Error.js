import React from "react";
import styles from "./Error.module.css";

const ErrorComponent = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <span className={styles.errorIcon}>❌</span>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};

export default ErrorComponent;
