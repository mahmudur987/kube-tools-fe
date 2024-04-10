import React from "react";
import styles from "./Collection.module.css";
import Collections from "./Collections";

export function CollectionsSection() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.containerWrapper}>
        <header className={styles.header}>
          <h1>Trending Tools</h1>
        </header>

        <Collections />
      </div>
    </section>
  );
}
