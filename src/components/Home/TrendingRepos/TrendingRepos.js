"use client";

import React, { useEffect, useState } from "react";
import styles from "./TrendingRepo.module.css";
import ErrorComponent from "../MyError/Error";
import { useGetCategories, useGetToolsByCategory } from "@/utils/ToolsData";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import downArrow from "../../../assets/icons/Vector.png";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Highlighter from "react-highlight-words";
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
  const searchParams = useSearchParams();
  const search = searchParams.get("collectionId");
  const searchText = searchParams.get("SearchText");
  const toolId = searchParams.get("toolId");
  const sectionId = searchParams.get("section");
  const [period, setPeriod] = useState(options[0]?.key);
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const categoriesQuery = useGetCategories();
  const [count, setCount] = useState(10);
  const [collectionId, setCollectionId] = useState(
    categoriesQuery?.data?.data?.[0]?._id
  );
  const toolsQuery = useGetToolsByCategory(
    collectionId ? collectionId : categoriesQuery?.data?.data?.[0]?._id
  );

  console.log(toolId);

  useEffect(() => {
    const data = toolsQuery?.data?.data?.tools;
    setTools(data);
  }, [toolsQuery]);

  useEffect(() => {
    const currentDate = new Date();

    if (tools?.length > 0) {
      let filteredData = tools;

      switch (period) {
        case "past_24_hours":
          filteredData = tools.filter((item) => {
            const publishDate = new Date(item.publishDate);
            const hoursDifference =
              (currentDate - publishDate) / (1000 * 60 * 60);
            return hoursDifference <= 24;
          });
          break;
        case "past_week":
          filteredData = tools.filter((item) => {
            const publishDate = new Date(item.publishDate);
            const daysDifference =
              (currentDate - publishDate) / (1000 * 60 * 60 * 24);
            return daysDifference <= 7;
          });
          break;
        case "past_month":
          filteredData = tools.filter((item) => {
            const publishDate = new Date(item.publishDate);
            const daysDifference =
              (currentDate - publishDate) / (1000 * 60 * 60 * 24);
            return daysDifference <= 30;
          });
          break;
        case "past_3_months":
          filteredData = tools.filter((item) => {
            const publishDate = new Date(item.publishDate);
            const daysDifference =
              (currentDate - publishDate) / (1000 * 60 * 60 * 24);
            return daysDifference <= 90;
          });
          break;
        default:
          break;
      }

      setFilteredTools(filteredData);
    }
  }, [period, tools]);

  useEffect(() => {
    if (search) {
      setCollectionId(search);
    }
  }, [search]);
  useEffect(() => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [sectionId, toolId, collectionId]);

  return (
    <Suspense>
      <section id="rank" className={styles.containerWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Kubetools Ranking</h1>
            <p className={styles.description}>
              We ranked all the Kubernetes tools with score according to their
              popularity.
            </p>

            <div className={styles.content}>
              <header className={styles.contentHeading}>
                <div className={styles.headingItems}>
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
                      className={styles.collectionSelect}
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
                <div className={styles.headingItems}>
                  <span style={{ color: "black" }}>Row per page</span>
                  <select
                    onChange={(e) => setRowsPerPage(e.target.value)}
                    className={styles.select2}
                  >
                    <option value={20}>20</option>
                    <option value={10}>10</option>
                    <option value={5}>5</option>
                  </select>
                </div>
              </header>
              {categoriesQuery.isLoading && <LoadingSpinner />}
              {categoriesQuery.data && (
                <div className={styles.contentBottom}>
                  <div className={styles.contentleft}>
                    <h3>Select a category </h3>
                    {categoriesQuery?.data?.data
                      ?.slice(0, count)
                      .map((item, i) => {
                        return (
                          <p
                            className={styles.categoryItem}
                            style={{
                              backgroundColor: `${
                                item._id === collectionId
                                  ? "rgb(205, 230, 238)"
                                  : ""
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
                      filteredTools
                        ?.slice(0, rowsPerPage)
                        .sort((a, b) => b.githubStars - a.githubStars)
                        .map((item, i) => (
                          <div
                            id={item._id}
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
                              rel=""
                              style={{ fontWeight: `${i === 0 && 700}` }}
                              className={styles.col2}
                            >
                              {toolId && toolId === item._id ? (
                                <Highlighter
                                  highlightStyle={{
                                    color: "blue",
                                    background: "white",
                                    fontWeight: "700",
                                  }}
                                  searchWords={searchText.split("")}
                                  autoEscape={true}
                                  textToHighlight={item.name}
                                />
                              ) : (
                                <span> {item.name} </span>
                              )}

                              {(new Date() - new Date(item.publishDate)) /
                                (1000 * 60 * 60 * 24) <
                              3 ? (
                                <span className={styles.new}>new</span>
                              ) : (
                                ""
                              )}
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
              <div
                onClick={() => setCount((pre) => pre + 10)}
                className={styles.loadMore}
              >
                <button>Load more</button>
                <Image src={downArrow} height={8} width={15} />
              </div>
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
    </Suspense>
  );
};

export default TrendingRepos;
