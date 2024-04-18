"use client";

import React, { useEffect, useState } from "react";
import styles from "./DrawerLayout.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Changed from next/navigation to next/router
import Axios from "@/utils/Axios";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";

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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
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
  useEffect(() => {
    setLoading(true);
    const fetchUserData = async () => {
      const { data } = await Axios.post(
        "/user/userData",
        {},
        {
          headers: {
            authorization: isToken,
          },
        }
      );
      setUser(data?.data);
    };
    setLoading(false);
    fetchUserData();
  }, [isToken]); // Empty dependency array to run only once after component mounts

  if (loading) {
    return <LoadingSpinner />;
  }
  if (!isToken) {
    if (typeof window !== "undefined") {
      router.push("/login");
    }
    return null;
  }

  return (
    <>
      {user?.role === "admin" && (
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
      )}
    </>
  );
};

export default Layout;
