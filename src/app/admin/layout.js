"use client";

import React, { useEffect } from "react";
import styles from "./DrawerLayout.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Changed from next/navigation to next/router

// Create a function to check token expiration
function checkTokenExpiration() {
  if (typeof window !== "undefined") {
    const expiration = localStorage.getItem("tokenExpiration");
    if (expiration) {
      const currentTime = new Date().getTime();
      if (currentTime > parseInt(expiration)) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
      }
    }
  }
}

// Call this function when your application starts or when necessary
const Layout = ({ children }) => {
  const router = useRouter();
  let isToken = null;

  if (typeof window !== "undefined") {
    isToken = localStorage.getItem("token");
  }

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    router.push("/login");
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []); // Empty dependency array to run only once after component mounts

  if (!isToken) {
    // Redirect to login page if there's no token
    if (typeof window !== "undefined") {
      // Check if localStorage is available
      router.push("/login");
    }
    return null; // Return null to avoid rendering anything if redirecting
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.drawerContent}>
        <div className={styles.leftSide}>
          <p>
            <span>
              <Link href={"/admin"}>Tools</Link>
            </span>
            <span>
              <Link href={"/admin/user"}>User</Link>
            </span>
            <span>
              <Link href={"/admin/banner"}>Banner</Link>
            </span>
            <span>
              <Link href={"/admin/newsletter"}>News Letter</Link>
            </span>
            <span>
              <button onClick={handleLogout}>Logout</button>
            </span>
          </p>
        </div>
      </div>

      <div className={styles.drawerSide}>{children}</div>
    </main>
  );
};

export default Layout;
