"use client";

// FormDataForm.js

import { useState } from "react";
import styles from "./addnewbanner.module.css"; // Import CSS module

const FormDataForm = () => {
  const [index, setIndex] = useState("");
  const [image, setImage] = useState("");
  const [paragraph, setParagraph] = useState(
    "<p> text description here.</p><a href='link'>link text</a>"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("index", index);
    formData.append("image", image);
    formData.append("description", paragraph);

    fetch("your-submit-url", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle response
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Index:
          <input
            type="text"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Image:
          <input
            type="file"
            onChange={(e) => setImage(e.target.value)}
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          <p>Paragraphs: below the writing format copy it and Edit yours</p>
          {"<p> text description here.</p><a href='link'>link text</a>"}
          <textarea
            key={index}
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            className={styles.textarea}
          />
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default FormDataForm;
