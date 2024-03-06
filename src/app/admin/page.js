"use client";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "@/components/Home/MyError/Error";
import { useGetTools } from "@/utils/ToolsData";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import styles from "./dashboard.module.css";
import SingleTool from "@/components/Dashboard/SingleTool";
import AddToolModal from "@/components/Common/Modals/AddToolModal/AddToolModal";
const Dashboard = () => {
  const { data, isLoading, isError, error } = useGetTools();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addToolModal, setAddToolModal] = useState(false);

  const handleCloseModal = () => {
    setAddToolModal(false);
    setIsModalOpen(false);
  };
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
                <button onClick={() => setAddToolModal(true)}>Add Tool</button>
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
                <SingleTool category={category} />
              </table>
            </div>
          ))}
        </div>
      )}

      <AddToolModal isOpen={addToolModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Dashboard;
