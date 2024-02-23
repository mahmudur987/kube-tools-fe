import React from "react";
import styles from "./Collection.module.css";
import Collections from "./Collections";

export function CollectionsSection() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>Hot Collection</h1>
            <p>
              The following table ranks repositories using three metrics: stars,
              pull requests, and issues. The table compares last 28 days or the
              most recent two months of data and indicates whether repositories
              are moving up or down the rankings.
            </p>
          </header>

          <Collections />
        </div>
      </div>
    </section>
  );
}
