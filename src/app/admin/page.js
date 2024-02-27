"use client";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "@/components/Home/MyError/Error";
import { useGetTools } from "@/utils/ToolsData";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import styles from "./dashboard.module.css";
const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetTools();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  console.log(data);

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorComponent message={error.message} />}

      {data && (
        <div className={styles.containerWrapper}>
          <div className={styles.addcategory}>
            <button>Add Category</button>
          </div>

          {data?.data?.map((category) => (
            <div key={category._id} className={styles.container}>
              <h2>{category.category.name}</h2>
              <div className={styles.categoryActions}>
                <button onClick={() => handleAddTool(category._id)}>
                  Add Tool
                </button>
                <button onClick={() => handleUpdateCategory(category._id)}>
                  Update Category
                </button>
                <button onClick={() => handleDeleteCategory(category._id)}>
                  <AiTwotoneDelete />
                </button>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Link</th>
                    <th>GitHub Stars</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {category.tools.map((tool) => (
                    <tr key={tool._id}>
                      <td>{tool.name}</td>
                      <td>{tool.description}</td>
                      <td>
                        <a
                          className={styles.link}
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {tool.link}
                        </a>
                      </td>
                      <td>{tool.githubStars}</td>
                      <td className={styles.tdAction}>
                        <button onClick={() => handleUpdateTool(tool)}>
                          Update
                        </button>
                        <span onClick={() => handleDeleteTool(tool)}>
                          <AiTwotoneDelete />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
