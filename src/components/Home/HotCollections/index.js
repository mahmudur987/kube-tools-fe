import React from "react";
import styles from "./Collection.module.css";
import Collections from "./Collections";

export function CollectionsSection() {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1>KubeTool Ranking engine</h1>
          </header>

          <Collections />
        </div>
      </div>
    </section>
  );
}
