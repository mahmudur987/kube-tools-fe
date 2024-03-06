"use client";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "@/components/Home/MyError/Error";
import { useGetTools } from "@/utils/ToolsData";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import styles from "./dashboard.module.css";
import SingleTool from "@/components/Dashboard/SingleTool";
import AddToolModal from "@/components/Common/Modals/AddToolModal/AddToolModal";
import AddCategoryModal from "@/components/Common/Modals/AddCategoryModal/AddCategoryModal";
import Axios from "@/utils/Axios";
import toast from "react-hot-toast";
import UpdateCategory from "@/components/Common/Modals/UpdateCategoryModal/UpdateCategoryModal";
// ... (imports)

const Dashboard = () => {
  const { data, isLoading, isError, error, refetch } = useGetTools();
  const [addToolModal, setAddToolModal] = useState(false);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState("");
  const handleDeleteCategory = async (id) => {
    try {
      const { data } = await Axios.delete(`/deletecategory/${id}`);
      toast.success(data.message ? data.message : "Deleted successfully", {
        id: 1,
      });
      refetch();
    } catch (error) {
      toast.error(error ? error.message : "An error occurred", { id: 1 });
    }
  };

  const handleUpdateCategory = (id) => {
    setUpdateCategoryModal(true);
    setCategory(id);
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorComponent message={error.message} />}

      {data && (
        <div className={styles.containerWrapper}>
          <div className={styles.addcategory}>
            <button onClick={() => setAddCategoryModal(true)}>
              Add Category
            </button>
          </div>

          {data?.data?.map((category) => (
            <div key={category._id} className={styles.container}>
              <h2>{category.category.name}</h2>
              <div className={styles.categoryActions}>
                <button
                  onClick={() => {
                    setAddToolModal(true);
                    setCategoryId(category._id);
                  }}
                >
                  Add Tool
                </button>
                <button onClick={() => handleUpdateCategory(category)}>
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
                {/* Render tools using SingleTool component */}
                <SingleTool category={category} />
              </table>
            </div>
          ))}
        </div>
      )}
      <AddToolModal
        isOpen={addToolModal}
        setAddToolModal={setAddToolModal}
        id={categoryId}
      />
      <AddCategoryModal
        isOpen={addCategoryModal}
        setAddCategoryModal={setAddCategoryModal}
      />
      <UpdateCategory
        isOpen={updateCategoryModal}
        setUpdateCategoryModal={setUpdateCategoryModal}
        category={category}
      />
    </div>
  );
};

export default Dashboard;
