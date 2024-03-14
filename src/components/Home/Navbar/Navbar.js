"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({ scrollToSection }) => {
  const [showMobilemenu, setShoeMobilemenu] = useState(false);
  return (
    <section className={styles.mainContainer}>
      <div className={styles.navbar}>
        <div className={styles.leftItems}>
          <div className={styles.navItem}>
            <div className={styles.dropdown}>
              <p>Product</p>
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
              <div className={styles.subDropdown}>
                <ol className={styles.dropDownMenu}>
                  <li>
                    <Link href="/newpage">Ranking Engine</Link>
                  </li>
                  <li>
                    <Link href="/newpage">Kubetools Gpt</Link>
                  </li>
                  <li>
                    <Link href="/newpage">Sandboxes</Link>
                  </li>
                  <li>
                    <Link href="/newpage">Services</Link>
                  </li>
                  <li>
                    <Link href="/newpage">Consulting</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <nav className={styles.navItem}>
            <span onClick={() => scrollToSection("blog")}>Blog</span>
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
            <a href="/newpage">Community</a>
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
          <p className={styles.navItem}>
            <Link href={"/newpage"}>Events</Link>
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
          </p>
          <nav className={styles.navItem}>
            <span onClick={() => scrollToSection("footer")}>Contact us</span>
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
            <input className={styles.searchInput} type="text" />
          </p>
        </div>

        <div className={styles.action}>
          <button>Early access</button>
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
          <div className={styles.navItem}>
            <div className={styles.dropdown}>
              <p>Collection</p>
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
              <div className={styles.subDropdown}>
                <ol className={styles.dropDownMenu}>
                  <li>
                    <Link href="#">Ranking Engine</Link>
                  </li>
                  <li>
                    <Link href="#">Kubetools Gpt</Link>
                  </li>
                  <li>
                    <Link href="#">Sandboxes</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Consulting</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <nav className={styles.navItem}>
            <span onClick={() => scrollToSection("blog")}>Blog</span>

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
            <span>Community</span>
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
            <span>Events</span>
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
            <span>Contact us</span>
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
