"use client";
import React from "react";
import styles from "./Search.module.css";
import img1 from "../../../assets/icons/Ellipse 1.png";
import img2 from "../../../assets/icons/Ellipse 2.png";
import img3 from "../../../assets/icons/user.png";
import img4 from "../../../assets/icons/Ellipse 3.png";
import img5 from "../../../assets/icons/Ellipse 4.png";
import img6 from "../../../assets/icons/Ellipse 5.png";
import img7 from "../../../assets/icons/Ellipse 6.png";
import img8 from "../../../assets/icons/Ellipse 8.png";
const Search = () => {
  return (
    <div className={styles.resultsWrapper}>
      <div className={styles.resultHeading}>
        <h4>All</h4>
        <h4>Developer</h4>
        <h4>Repo</h4>
      </div>

      <div className={styles.resultsRow1}>
        <h5>Repo</h5>
        <p>
          <img src={img5} alt="" />
          <span>photonstorm/phaser</span>
        </p>
        <p>
          <img src={img6} alt="" />
          <span>photonstorm/phaser</span>
        </p>
        <p>
          <img src={img7} alt="" />
          <span>photonstorm/phaser</span>
        </p>
        <p>
          <img src={img8} alt="" />
          <span>photonstorm/phaser</span>
        </p>
        <p>
          <img src={img1} alt="" />
          <span>photonstorm/phaser</span>
        </p>
      </div>
      <div className={styles.resultsRow2}>
        <h5>user</h5>
        <p>
          <img src={img1} alt="" />
          <span>photonstorm/phaser</span>
        </p>
        <p>
          <img src={img4} alt="" />
          <span>photonstorm/phaser</span>
        </p>
        <p>
          <img src={img2} alt="" />
          <span>photonstorm/phaser</span>
        </p>
        <p>
          <img src={img3} alt="" />
          <span>photonstorm/phaser4</span>
        </p>
      </div>
    </div>
  );
};

export default Search;
