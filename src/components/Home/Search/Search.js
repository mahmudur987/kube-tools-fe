"use client";
import React from "react";
import styles from "./Search.module.css";
import { blogData } from "../Blog/Blog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetSearchResult } from "@/utils/ToolsData";
import Highlighter from "react-highlight-words";

const Search = ({ search, setSearch }) => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetSearchResult(search);

  const HandleSetCollection = (collectionId, toolId) => {
    setSearch("");
    router.push(
      `/?collectionId=${collectionId}&toolId=${toolId}&SearchText=${search}&section=${"rank"} `
    );
  };

  return (
    <div className={styles.resultsWrapper}>
      <div className={styles.resultContainer}>
        <div className={styles.resultsRow1}>
          <h5>Blog</h5>
          {blogData.map((x) => (
            <Link href={"/#blog"} onClick={() => setSearch("")}>
              <span>{x.description}</span>
            </Link>
          ))}
        </div>
        <div className={styles.resultsRow2}>
          <h5>Tool</h5>
          {data &&
            !isLoading &&
            !isError &&
            data?.data?.map((x) => {
              return (
                <p key={x._id}>
                  {x?.tools.length > 0 &&
                    x.tools.map((y) => {
                      return (
                        <p onClick={() => HandleSetCollection(x._id, y._id)}>
                          <Highlighter
                            highlightStyle={{
                              color: "blue",
                              background: "white",
                              fontWeight: "700",
                            }}
                            searchWords={search.split("")}
                            autoEscape={true}
                            textToHighlight={y.name}
                          />
                        </p>
                      );
                    })}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
