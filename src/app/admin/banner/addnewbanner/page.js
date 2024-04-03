"use client";

// FormDataForm.js

import { useEffect, useState } from "react";
import styles from "./addnewbanner.module.css"; // Import CSS module
import { postBanner, useGetAllBanner } from "@/utils/banner";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";

const FormDataForm = () => {
  const { data, refetch } = useGetAllBanner();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    index: 0,
    description: "",
    link: "",
    linkText: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!image) {
      toast.error("select Image");
    }

    const imageData = new FormData();
    imageData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=8eb7115635ce90b5c861efdf7ac3bb3a`;
    fetch(url, {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then(async (imagedata) => {
        // console.log(imagedata.data)
        if (imagedata.success) {
          const photoURL = imagedata.data.display_url;
          formData.image = photoURL;
          const { data, error } = await postBanner(formData);
          if (data) {
            toast.success("banner added successfully", { id: 3 });
            refetch();
            setFormData({
              index: 0,
              description: "",
              link: "",
              linkText: "",
            });
            setImage(null);
          }
          if (error) {
            toast.error("Error", { id: 2 });
          }

          setLoading(false);
        }
      });
  };
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ["index"]: data?.data?.length + 1,
    }));
  }, [data]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      <h1>Add new banner</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>
          <span>Index </span>
          <input
            style={{ fontSize: "20px", width: "50px" }}
            className={styles.input}
            type="text"
            name="link"
            placeholder="Link"
            value={formData.index}
            onChange={handleChange}
          />
        </p>
        <textarea
          rows={8}
          className={styles.input}
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="link"
          placeholder="Link"
          value={formData.link}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="text"
          name="linkText"
          placeholder="Link Text"
          value={formData.linkText}
          onChange={handleChange}
          required
        />
        <label htmlFor="">Image</label>
        <input
          className={styles.input}
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormDataForm;
