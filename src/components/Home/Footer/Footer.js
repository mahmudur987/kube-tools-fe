"use client";
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import NewsletterBox from "@/components/Common/NewsLetterBox/NewsletterBox";
import img1 from "@/assets/icons/icon (1).png";
import img2 from "@/assets/icons/icon (2).png";
import img3 from "@/assets/icons/icon (3).png";
import img4 from "@/assets/icons/icon (4).png";

import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/newpage");
  };

  return (
    <footer id="footer" className={styles.footer}>
      <section className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.top}>
            {/* left */}
            <div className={styles.footerLeft}>
              <div className={styles.footerLeftWrapper}>
                <h3 onClick={() => router.push("/")}>KUBETOOLS</h3>
                <div className={styles.contatUs}>
                  <h4>Contact Us</h4>
                  <p>
                    Kubetools Technologies Inc 8 Nelson St W, Brampton, ON L6X
                    1B7 Canada  Email : contact@kubetools.io
                  </p>
                  <p onClick={handleNavigate} className={styles.socialMedia}>
                    <Image src={img1} width={30} height={30} />
                    <Image src={img2} width={30} height={30} />
                    <Image src={img3} width={30} height={30} />
                    <Image src={img4} width={30} height={30} />
                  </p>
                </div>
              </div>
            </div>
            {/* right    */}
            <div className={styles.footerRight}>
              <div className={styles.contents}>
                {/* cols-1 */}
                <div className={styles.cols}>
                  <NewsletterBox />
                </div>
                <div className={styles.cols}>
                  <h4>Company</h4>
                  <p onClick={handleNavigate}>About Us</p>
                  <p onClick={handleNavigate}>Policy</p>
                  <p onClick={handleNavigate}>Events</p>
                  <p onClick={handleNavigate}> Career</p>
                  <p onClick={handleNavigate}> Blogs</p>
                </div>

                {/* cols-2 */}
                <div className={styles.cols}>
                  <h4>Product</h4>
                  <p onClick={handleNavigate}>Recommended System</p>
                  <p onClick={handleNavigate}>Contact Us</p>
                </div>
                {/* cols-3 */}
                <div className={styles.cols}>
                  <h4>Resources</h4>
                  <p onClick={handleNavigate}>Contact support</p>
                  <p onClick={handleNavigate}>Knowledge base</p>
                  <p onClick={handleNavigate}>Help desk</p>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}

          <div className={styles.coppy}>
            <p>Copyright@2023</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
