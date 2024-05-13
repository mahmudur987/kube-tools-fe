"use client";

import { useEffect, useState } from "react";
import styles from "./UpdateToolModal.module.css";
import { useGetTools, useUpdatetool } from "@/utils/ToolsData";
import toast from "react-hot-toast";

const UpdateToolModal = ({ isOpen, onClose, tool, categoryid }) => {
  const [name, setName] = useState(tool?.name);
  const [description, setDescription] = useState(tool?.description);
  const [link, setLink] = useState(tool?.link);
  const [githubStars, setGithubStars] = useState(tool?.githubStars);
  const { mutate: updatetool } = useUpdatetool();
  const { refetch } = useGetTools();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, description, link, githubStars };

    const id = tool._id;
    updatetool(
      { data, categoryid, toolid: tool._id },
      {
        onSuccess: (data) => {
          toast.success(
            data.message ? data.message : " Tool update successfully",
            {
              id: 1,
            }
          );
          onClose();
          refetch();
        },
        onError: (err) => {
          toast.error(err ? err.message : "Error to update", { id: 2 });
          console.error(err);
        },
      }
    );
  };

  useEffect(() => {
    if (tool) {
      const { name, description, link, githubStars } = tool;
      setName(name);
      setDescription(description);
      setLink(link);
      setGithubStars(githubStars);
    }
  }, [tool]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>
        <h2>Update Tool</h2>
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
              type="text"
              placeholder="GitHub Stars"
              value={githubStars}
              onChange={(e) => setGithubStars(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Update Tool</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToolModal;
