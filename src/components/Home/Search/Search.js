"use client";
import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { blogData } from "../Blog/Blog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetSearchResult } from "@/utils/ToolsData";
import Highlighter from "react-highlight-words";
function searchBlogData(keyword) {
  const lowerCaseKeyword = keyword.toLowerCase();

  const searchData = blogData.filter((item) =>
    item.description.toLowerCase().includes(lowerCaseKeyword)
  );

  return searchData;
}
const Search = ({ search, setSearch }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const { data, isLoading, isError, error } = useGetSearchResult(search);
  const HandleSetCollection = (collectionId, toolId) => {
    setSearch("");
    router.push(
      `/?collectionId=${collectionId}&toolId=${toolId}&SearchText=${search}&section=${"rank"} `
    );
  };
  useEffect(() => {
    const searchData = searchBlogData(search);
    setBlogs(searchData);
  }, [search]);

  return (
    <div className={styles.resultsWrapper}>
      <div className={styles.resultContainer}>
        {data?.length === 0 ||
          (blogs.length === 0 && !data && (
            <p className={styles.noResult}>No results found for " {search} "</p>
          ))}

        {blogs && blogs.length > 0 && (
          <div className={styles.resultsRow1}>
            <h5>Blog</h5>
            {blogs?.map((x) => (
              <Link href={"/#blog"} onClick={() => setSearch("")}>
                <Highlighter
                  highlightStyle={{
                    color: "blue",
                    background: "white",
                    fontWeight: "700",
                  }}
                  searchWords={search.split("")}
                  autoEscape={true}
                  textToHighlight={x.description}
                />
              </Link>
            ))}
          </div>
        )}
        {data && !isLoading && !isError && data?.data.length > 0 && (
          <div className={styles.resultsRow2}>
            <h5>Tool</h5>
            {data?.data?.map((x) => {
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
        )}
      </div>
    </div>
  );
};

export default Search;
