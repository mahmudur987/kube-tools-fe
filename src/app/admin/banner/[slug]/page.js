"use client";

import { deleteBanner, updateBanner, useGetSingleBanner } from "@/utils/banner";
import styles from "./SingleBanner.module.css";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "@/components/Home/MyError/Error";
import toast from "react-hot-toast";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const SingleBanner = ({ params }) => {
  const router = useRouter();
  const {
    data: bannerData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetSingleBanner(params.slug);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    index: 0,
    description: "",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (image) {
      const imageData = new FormData();
      imageData.append("image", image);

      const url = `https://api.imgbb.com/1/upload?key=01e9a46c0987f0b1cd8a75c228de8843`;
      fetch(url, {
        method: "POST",
        body: imageData,
      })
        .then((res) => res.json())
        .then(async (imagedata) => {
          if (imagedata.success) {
            const photoURL = imagedata.data.display_url;
            formData.image = photoURL;
            const { data, error } = await updateBanner(params.slug, formData);
            if (data) {
              toast.success("Banner update successfully", { id: 3 });
              refetch();
              setImage(null);
            }
            if (error) {
              toast.error("Error", { id: 2 });
            }

            setLoading(false);
          }
        });
    } else {
      const { data, error } = await updateBanner(params.slug, formData);
      if (data) {
        toast.success("Banner update successfully", { id: 3 });
        refetch();
      }
      if (error) {
        toast.error("Error", { id: 2 });
      }
      setLoading(false);
    }
  };
  useEffect(() => {
    setFormData(bannerData);
  }, [bannerData]);

  const handleDelete = async () => {
    const { data, error } = await deleteBanner(params.slug);
    if (data) {
      toast.success("Banner delete successfully", { id: 3 });
      router.push("/admin/banner");
    }
    if (error) {
      toast.error("Error", { id: 2 });
    }
  };

  if (isLoading || loading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorComponent message={error ? error.message : "Error"} />;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.top}>
        <Link href={"/admin/banner"}>
          <IoMdArrowRoundBack />
          <span>Back</span>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {bannerData && !isLoading && !isError && (
        <div className={styles.container}>
          <div>
            <img className={styles.image} src={bannerData.image} alt="Banner" />

            <input
              className={styles.input}
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              disabled={!isEditing}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Index</p>

              <input
                className={styles.input}
                type="text"
                name="index"
                value={formData?.index}
                readOnly={!isEditing}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <p>Description</p>
              <span>
                {
                  "<p> description <a href='link'>link text</a> description </p>"
                }
              </span>
              <textarea
                rows={10}
                className={styles.textarea}
                name="description"
                value={formData?.description}
                readOnly={!isEditing}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.btnWrapper}>
              <button type="button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit"}
              </button>
              {isEditing && <button type="submit">Submit</button>}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SingleBanner;
