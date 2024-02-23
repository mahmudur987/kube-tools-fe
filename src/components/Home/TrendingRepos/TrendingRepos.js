"use client";

import React, { useState } from "react";
import styles from "./TrendingRepo.module.css";

import ErrorComponent from "../MyError/Error";
import { categories, toolsData } from "@/Data/data";

const options = [
  {
    key: "past_24_hours",
    title: "Past 24 hours",
  },
  {
    key: "past_week",
    title: "Past week",
  },
  {
    key: "past_month",
    title: "Past month",
  },
  {
    key: "past_3_months",
    title: "Past 3 months",
  },
];

const TrendingRepos = () => {
  const collections = categories;
  const [period, setPeriod] = useState("past_24_hours");

  const [rowsPerPage, setrowsPerPage] = useState(20);

  const [collectionId, setCollectionId] = useState(collections[0].id);

  const tools = toolsData.find((x) => x.category.id === collectionId)?.tools;
  console.log(tools);
  return (
    <section className={styles.containerWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Trending Repos</h1>
          <p className={styles.description}>
            The following table ranks repositories using three metrics: stars,
            pull requests, and issues. The table compares last 28 days or the
            most recent two months of data and indicates whether repositories
            are moving up or down the rankings.
          </p>

          <div className={styles.content}>
            <header className={styles.contentHeading}>
              <div className={styles.hedingItems}>
                <div className={styles.twoSelects}>
                  <select
                    onChange={(e) => setPeriod(e.target.value)}
                    className={styles.select}
                  >
                    {options.map((x) => (
                      <option key={x.key} value={x.key}>
                        {x.title}{" "}
                      </option>
                    ))}
                  </select>

                  <select
                    onChange={(e) => setCollectionId(e.target.value)}
                    className={styles.collectionselect}
                  >
                    <option>Collections</option>
                    {collections?.map((item, i) => {
                      return (
                        <option
                          value={item.id}
                          style={{
                            color: `${
                              item.id === collectionId ? "#6d45f1" : ""
                            }`,
                          }}
                          onClick={() => setCollectionId(item.id)}
                          key={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className={styles.hedingItems}>
                <span>Row per page</span>
                <select
                  onChange={(e) => setrowsPerPage(e.target.value)}
                  className={styles.select2}
                >
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </header>

            {collections.length > 0 ? (
              <div className={styles.contentBottom}>
                <div className={styles.contentleft}>
                  <h3>Collections</h3>
                  {collections?.map((item, i) => {
                    return (
                      <p
                        style={{
                          color: `${item.id === collectionId ? "#6d45f1" : ""}`,
                        }}
                        onClick={() => setCollectionId(item.id)}
                        key={item.id}
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </div>
                <div className={styles.contentRight}>
                  <div className={styles.row1}>
                    <h4 className={styles.col1}>Rank</h4>
                    <h4 className={styles.col2}>
                      <span>Tool Name</span>
                    </h4>
                    <h4 className={styles.col3}>Score </h4>
                  </div>

                  {tools?.slice(0, rowsPerPage).map((item, i) => (
                    <div
                      key={i}
                      className={styles.row2}
                      style={{ fontWeight: `${i === 0 && 700}` }}
                    >
                      <p
                        style={{ fontWeight: `${i === 0 && 700}` }}
                        className={styles.col1}
                      >
                        {i + 1}
                      </p>
                      <p
                        style={{ fontWeight: `${i === 0 && 700}` }}
                        className={styles.col2}
                      >
                        <span> {item.name} </span>
                      </p>
                      <p
                        style={{ fontWeight: `${i === 0 && 700}` }}
                        className={styles.col3}
                      >
                        {item.githubStars}{" "}
                      </p>
                    </div>
                  ))}

                  {!tools && <ErrorComponent message={"no data to show"} />}
                </div>
              </div>
            ) : (
              <ErrorComponent message={"No data to show"} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingRepos;
