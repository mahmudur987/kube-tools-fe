"use client";

import React, { useEffect, useState } from "react";
import styles from "./DrawerLayout.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Create a function to check token expiration
function checkTokenExpiration() {
  const expiration = localStorage.getItem("tokenExpiration");
  if (expiration) {
    const currentTime = new Date().getTime();
    if (currentTime > parseInt(expiration)) {
      // Token has expired, remove it
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }
}

// Call this function when your application starts or when necessary
const layout = ({ children }) => {
  const router = useRouter();
  const isToken = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    return router.push("/login");
  };
  useEffect(() => {
    checkTokenExpiration();
  }, [isToken]);
  if (!isToken) {
    return router.push("/login");
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

export default layout;
