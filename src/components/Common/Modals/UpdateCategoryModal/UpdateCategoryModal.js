// AddCategoryModal.js

import { useEffect, useState } from "react";
import styles from "./UpdateCategoryModal.module.css";
import { useAddcategory, useGetTools } from "@/utils/ToolsData";
import toast from "react-hot-toast";
import Axios from "@/utils/Axios";

const UpdateCategory = ({ isOpen, setUpdateCategoryModal, category }) => {
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const { refetch } = useGetTools();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = {
      name,
      index,
    };
    try {
      const { data } = await Axios.patch(
        `updateCategory/${category._id}`,
        update
      );
      toast.success(data ? data.message : "update successfully", { id: 1 });
      setUpdateCategoryModal(false);
      refetch();
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error ? error.message : "Error Happen", { id: 2 });
    }
  };
  useEffect(() => {
    setName(category?.category?.name);
    setIndex(category.index);
  }, [category]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => setUpdateCategoryModal(false)}
        >
          x
        </button>
        <h2>Update Category</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fromControl}>
            <label htmlFor="">Category Index</label>
            <input
              type="text"
              placeholder="Name"
              value={index}
              onChange={(e) => setIndex(e.target.value)}
              required
            />
          </div>
          <div className={styles.fromControl}>
            <label htmlFor="">Category Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
