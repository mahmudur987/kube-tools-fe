"use client";
import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.resultsWrapper}>
      <div className={styles.resultContainer}>
        <div className={styles.resultsRow1}>
          <h5>Blog</h5>
          <p>
            <span>photonstorm/phaser</span>
          </p>
        </div>
        <div className={styles.resultsRow2}>
          <h5>Tool</h5>
          <p>
            <span>photonstorm/phaser</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
