"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showMobilemenu, setShoeMobilemenu] = useState(false);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.navbar}>
        <div className={styles.leftItems}>
          <nav className={styles.navItem}>
            <span>Collection</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nav>
          <nav className={styles.navItem}>
            <span>Blog</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nav>
          <nav className={styles.navItem}>
            <span>More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nav>
        </div>

        <div className={styles.middle}>
          <p className={styles.searchInputWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4999 18L13.8749 14.375"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>

        <div className={styles.mobileContainer}>
          <p
            onClick={() => setShoeMobilemenu((pre) => !pre)}
            className={styles.mobileHamBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 10H3"
                stroke="#6D45F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 6H3"
                stroke="#6D45F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 14H3"
                stroke="#6D45F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 18H3"
                stroke="#6D45F1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>

      {showMobilemenu && (
        <div className={styles.mobileMenu}>
          <nav className={styles.navItem}>
            <span>Collection</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nav>
          <nav className={styles.navItem}>
            <span>Blog</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nav>
          <nav className={styles.navItem}>
            <span>More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#6D45F1"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </nav>
        </div>
      )}
    </section>
  );
};

export default Navbar;
