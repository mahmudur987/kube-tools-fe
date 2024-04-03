"use client";

import { useState } from "react";
import styles from "./AddToolModal.module.css";
import { useAddToolInCategory, useGetTools } from "../../../../utils/ToolsData";
import toast from "react-hot-toast";

const AddToolModal = ({ isOpen, setAddToolModal, id }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [githubStars, setGithubStars] = useState("");
  const { mutate: addtool } = useAddToolInCategory();
  const { refetch } = useGetTools();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, description, link, githubStars };
    addtool(
      { data, id },
      {
        onSuccess: (data, isError, error) => {
          toast.success(" Tool  added successfully", { id: 1 });
          setName("");
          setDescription("");
          setLink("");
          setGithubStars("");
          refetch();
          setAddToolModal(false);
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
          onClick={() => setAddToolModal(false)}
        >
          x
        </button>
        <h2>Add New Tool</h2>
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
          <div className={styles.fromControl}>
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.fromControl}>
            <label htmlFor="">Link</label>
            <input
              type="text"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          <div className={styles.fromControl}>
            <label htmlFor="">GitHub Star</label>
            <input
              type="number"
              placeholder="GitHub Stars"
              value={githubStars}
              onChange={(e) => setGithubStars(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit">Add Tool</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToolModal;
