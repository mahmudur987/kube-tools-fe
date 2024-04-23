"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "../Search/Search";
import { Suspense } from "react";
import Image from "next/image";
import logo from "@/assets/logo.jpg";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  return (
    <section
      className={styles.mainContainer}
      onMouseLeave={() =>
        setTimeout(() => {
          setSearch("");
        }, 1000)
      }
    >
      <div className={styles.navbar}>
        <div className={styles.siteLogo}>
          <Link href={"/"}>
            <figure>
              <Image height={100} width={100} src={logo} />
            </figure>
          </Link>
        </div>

        <div className={styles.leftItems}>
          {/* products */}
          <div className={styles.navItem}>
            <div className={styles.dropdown}>
              <p>
                <Link href={"/newpage"}>Products</Link>
              </p>
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
                <ol style={{ width: "220px" }} className={styles.dropDownMenu}>
                  <li>
                    <Link href={pathname === "/" ? "#offer" : "/#offer"}>
                      Recommendation Engine
                    </Link>
                  </li>
                  <li>
                    <Link href={pathname === "/" ? "#offer" : "/#offer"}>
                      KubetoolsGPT
                    </Link>
                  </li>
                  <li>
                    <Link href={pathname === "/" ? "#offer" : "/#offer"}>
                      Sandbox
                    </Link>
                  </li>
                  <li>
                    <Link href={"/newpage"}>Services</Link>
                  </li>
                  <li>
                    <Link href="/newpage">Consulting</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* community */}
          <div className={styles.navItem}>
            <div className={styles.dropdown}>
              <p>Community</p>
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
                    <Link href={"https://x.com/kubetools"} target="_blank">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={" https://www.linkedin.com/company/kubetools/"}
                      target="_blank"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://join.slack.com/t/kubetoolsio/shared_invite/zt-2haak9hap-bwum9UwIwcZEfAAXZXVqwA"
                      }
                      target="_blank"
                    >
                      Slack
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* Blog */}
          <nav className={styles.navItem}>
            <Link href={pathname === "/" ? "#blog" : "/#blog"}>Blog</Link>
          </nav>

          {/* Event */}
          <nav className={styles.navItem}>
            <Link href={"/newpage"}>Events</Link>
          </nav>
        </div>

        <div className={styles.middle}>
          <p
            style={{ borderRadius: `${search ? " 24px 24px 0px 0px" : ""}` }}
            className={styles.searchInputWrapper}
          >
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
            <input
              className={styles.searchInput}
              value={search ? search : ""}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
            />
          </p>

          <Suspense>
            {search && (
              <div className={styles.result}>
                <Search search={search} setSearch={setSearch} />
              </div>
            )}
          </Suspense>
        </div>
        <div className={styles.action}>
          <button>
            <Link href={pathname === "/" ? "#footer" : "/#footer"}>
              Contact Us
            </Link>
          </button>
        </div>
        <div className={styles.mobileContainer}>
          <p
            onClick={() => setShowMobileMenu((pre) => !pre)}
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

      {showMobileMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.navItem}>
            <Link href={"#"} className={styles.dropdown}>
              <p>Products</p>

              <div className={styles.subDropdown}>
                <ol
                  className={styles.dropDownMenu}
                  onClick={() => setShowMobileMenu(false)}
                >
                  <li>
                    <Link href={pathname === "/" ? "#offer" : "/#offer"}>
                      Recommendation Engine
                    </Link>
                  </li>
                  <li>
                    <Link href={pathname === "/" ? "#offer" : "/#offer"}>
                      Kubetools GPT
                    </Link>
                  </li>
                  <li>
                    <Link href={pathname === "/" ? "#offer" : "/#offer"}>
                      Sandbox
                    </Link>
                  </li>
                  <li>
                    <Link href={"/newpage"}>Services</Link>
                  </li>
                  <li>
                    <Link href="/newpage">Consulting</Link>
                  </li>
                </ol>
              </div>
            </Link>
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
          </div>
          <div className={styles.navItem}>
            <Link href={"#"} className={styles.dropdown}>
              <p>Community</p>
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
                <ol
                  className={styles.dropDownMenu}
                  onClick={() => setShowMobileMenu(false)}
                >
                  <li>
                    <Link href={"https://x.com/kubetools"} target="_blank">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={" https://www.linkedin.com/company/kubetools/"}
                      target="_blank"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://join.slack.com/t/kubetoolsio/shared_invite/zt-2haak9hap-bwum9UwIwcZEfAAXZXVqwA"
                      }
                      target="_blank"
                    >
                      Slack
                    </Link>
                  </li>
                </ol>
              </div>
            </Link>
          </div>
          <nav
            className={styles.navItem}
            onClick={() => setShowMobileMenu(false)}
          >
            <Link href={pathname === "/" ? "#blog" : "/#blog"}>Blog</Link>

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

          <nav
            className={styles.navItem}
            onClick={() => setShowMobileMenu(false)}
          >
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
          </nav>
          <nav className={styles.navItem}>
            <Link
              href={pathname === "/" ? "#footer" : "/#footer"}
              onClick={() => setShowMobileMenu(false)}
            >
              Contact us
            </Link>
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
