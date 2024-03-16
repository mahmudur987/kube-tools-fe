"use client";
import Footer from "@/components/Home/Footer/Footer";
import Navbar from "@/components/Home/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./DrawerLayout.module.css";
import Link from "next/link";
const layout = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <div className={`${styles.drawer} `}>
        <div className={styles.drawerContent}>
          <button className={styles.drawerToggle}>opendrawer</button>
          <div className={styles.leftSide}>
            <ul>
              <li>
                <Link href={"/admin"}>Tools</Link>
              </li>
              <li>
                <Link href={"/admin/user"}>User</Link>
              </li>
              <li>
                <Link href={"/admin/banner"}>Banner</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.drawerSide}>{children}</div>
      </div>

      <Footer />
    </main>
  );
};

export default layout;
