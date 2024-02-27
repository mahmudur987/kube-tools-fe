// UpdateToolModal.js

import { useState } from "react";
import styles from "./UpdateToolModal.css";

const UpdateToolModal = ({ isOpen, onClose, onAddTool }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [githubStars, setGithubStars] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    // Call onAddTool function to add the tool
    onAddTool({ name, description, link, githubStars });
    // Clear form fields
    setName("");
    setDescription("");
    setLink("");
    setGithubStars("");
    // Close modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <h2>Add New Tool</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="GitHub Stars"
            value={githubStars}
            onChange={(e) => setGithubStars(e.target.value)}
            required
          />
          <button type="submit">Add Tool</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateToolModal;
