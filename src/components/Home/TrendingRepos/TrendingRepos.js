"use client";

import React, { useEffect, useState } from "react";
import styles from "./TrendingRepo.module.css";
import ErrorComponent from "../MyError/Error";
import { useGetCategories, useGetToolsByCategory } from "@/utils/ToolsData";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";

const options = [
  {
    key: "past_3_months",
    title: "Past 3 months",
  },
  {
    key: "past_month",
    title: "Past month",
  },
  {
    key: "past_week",
    title: "Past week",
  },

  {
    key: "past_24_hours",
    title: "Past 24 hours",
  },
];

const TrendingRepos = () => {
  const [period, setPeriod] = useState(options[0].key);
  const [tools, setTools] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const categoriesQuery = useGetCategories();
  const [collectionId, setCollectionId] = useState(
    categoriesQuery?.data?.data?.[0]?._id
  );

  const toolsQuery = useGetToolsByCategory(
    collectionId ? collectionId : categoriesQuery?.data?.data?.[0]?._id
  );
  console.log(period);
  useEffect(() => {
    const data = toolsQuery?.data?.data?.tools;

    setTools(data);

    const currentDate = new Date(); // Current date and time

    if (data && period === "past_24_hours") {
      const filteredDataPast24Hours = data?.filter((item) => {
        const publishDate = new Date(item.publishDate);
        const timeDifference = currentDate.getTime() - publishDate.getTime();
        const hoursDifference = timeDifference / (1000 * 60 * 60); // Convert milliseconds to hours
        return hoursDifference <= 24;
      });
      setTools(filteredDataPast24Hours);
    }
    if (data && period === "past_week") {
      const filteredDataPastWeek = data.filter((item) => {
        const publishDate = new Date(item.publishDate);
        const timeDifference = currentDate.getTime() - publishDate.getTime();
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

        return daysDifference <= 7; // Filter items published in the last 7 days
      });
      setTools(filteredDataPastWeek);
    }
    if (data && period === "past_month") {
      const filteredDataPastMonth = data?.filter((item) => {
        const publishDate = new Date(item.publishDate);
        const timeDifference = currentDate.getTime() - publishDate.getTime();
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

        return daysDifference <= 30;
      });

      setTools(filteredDataPastMonth);
    }

    if (data && period === "past_3_months") {
      const filteredDataPast3Months = data?.filter((item) => {
        const publishDate = new Date(item.publishDate);
        const timeDifference = currentDate.getTime() - publishDate.getTime();
        const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days

        return daysDifference <= 90;
      });

      setTools(filteredDataPast3Months);
    }

    // console.log("Filtered Data Past 24 Hours:", filteredDataPast24Hours);
    // console.log("Filtered Data Past Week:", filteredDataPastWeek);
    // console.log("Filtered Data Past Month:", filteredDataPastMonth);
    // console.log("Filtered Data Past 3 Months:", filteredDataPast3Months);
  }, [toolsQuery, period]);
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
                    {categoriesQuery?.data?.data?.map((item, i) => {
                      return (
                        <option
                          value={item.id}
                          style={{
                            color: `${
                              item.id === collectionId ? "#6d45f1" : ""
                            }`,
                          }}
                          onClick={() => setCollectionId(item.id)}
                          key={item._id}
                        >
                          {item?.category}
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
            {categoriesQuery.isLoading && <LoadingSpinner />}
            {categoriesQuery.data && (
              <div className={styles.contentBottom}>
                <div className={styles.contentleft}>
                  <h3>Collections</h3>
                  {categoriesQuery?.data?.data?.map((item, i) => {
                    return (
                      <p
                        style={{
                          color: `${
                            item._id === collectionId ? "#6d45f1" : ""
                          }`,
                        }}
                        onClick={() => setCollectionId(item._id)}
                        key={item._id}
                      >
                        {item.category}
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
                  {toolsQuery?.isLoading && <LoadingSpinner />}
                  {toolsQuery?.data &&
                    toolsQuery?.data?.data?.tools.length > 0 &&
                    tools
                      ?.slice(0, rowsPerPage)
                      .sort((a, b) => b.githubStars - a.githubStars)
                      .map((item, i) => (
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
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontWeight: `${i === 0 && 700}` }}
                            className={styles.col2}
                          >
                            <span> {item.name} </span>
                          </a>
                          <p
                            style={{ fontWeight: `${i === 0 && 700}` }}
                            className={styles.col3}
                          >
                            {item.githubStars}{" "}
                          </p>
                        </div>
                      ))}

                  {toolsQuery.isError && (
                    <ErrorComponent message={"no data to show"} />
                  )}
                  {!toolsQuery.isError &&
                    toolsQuery?.data?.data?.tools.length === 0 && (
                      <ErrorComponent message={"no data to show"} />
                    )}
                </div>
              </div>
            )}

            {categoriesQuery.isError && (
              <ErrorComponent
                message={
                  categoriesQuery.isError
                    ? categoriesQuery.error.message
                    : "data not found"
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingRepos;
