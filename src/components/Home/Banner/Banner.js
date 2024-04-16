"use client";

import Link from "next/link";
import styles from "./Banner.module.css";

const Banner = () => {
  // const [showSearch, setShowSearch] = useState(false);

  return (
    <section className={styles.containerWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <p className={styles.topDescription}>
            Empowering Kubernetes Success with Premier Tools
          </p>
          <h1 className={styles.heading}>
            The Future of Kubernetes Tools Discovery
          </h1>
          <p className={styles.description}>
            Empowering DevOps Teams with GenAI-Powered Recommendations
          </p>
          <div className={styles.action}>
            <Link
              href={
                "https://docs.google.com/forms/d/1Icdpfich9abQBcStAhBMCSMdj9vn__fQmDkbr1RgAok/viewform?edit_requested=true"
              }
              target="_blank"
            >
              <button>Early access</button>
            </Link>
          </div>

          {/* <div className={styles.searchWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 20.9999L16.65 16.6499"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search a developer/repo/org"
              onClick={() => setShowSearch((pre) => !pre)}
              onBlur={() => setShowSearch((pre) => !pre)}
            />
    

            {showSearch && (
              <div className={styles.resultsContainer}>
                <Search />
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
