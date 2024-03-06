// AddCategoryModal.js

import { useState } from "react";
import styles from "./AddCategoryModal.module.css";
import { useAddcategory, useGetTools } from "@/utils/ToolsData";
import toast from "react-hot-toast";

const AddCategoryModal = ({ isOpen, setAddCategoryModal }) => {
  const [name, setName] = useState("");
  const { mutate: AddNewCategory } = useAddcategory();
  const { refetch } = useGetTools();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      category: {
        name: name,
      },
      tools: [],
    };
    AddNewCategory(
      { data },
      {
        onSuccess: (data) => {
          toast.success("a neww tool added ", { id: 1 });
          setName("");
          refetch();
          setAddCategoryModal(false);
          console.log(data);
        },
        onError: (error) => {
          toast.error("Error Happen ", { id: 1 });
          console.error("Error", error);
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => setAddCategoryModal(false)}
        >
          Close
        </button>
        <h2>Add Category</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fromControl}>
            <label htmlFor="">Tool Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
