"use client";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "@/components/Home/MyError/Error";
import React from "react";
import styles from "./newLetter.module.css";
import { deleteEmail, useGetAllEmails } from "@/utils/newsLetter";
import toast from "react-hot-toast";
const NewsLetter = () => {
  const { data, isError, error, isLoading, refetch } = useGetAllEmails();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorComponent message={error ? error.message : "Error"} />;
  }
  console.log(data);

  const handleDelete = async (id) => {
    const { data, error } = await deleteEmail(id);

    if (data) {
      toast.success("Email delete  successfully");
      refetch();
    }
    if (error) {
      toast.error("Error Happen");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1>News Letter Email List</h1>
      <div className={styles.container}>
        {data &&
          data?.data.map((x, i) => (
            <p key={i}>
              <span> {x.email}</span>

              <button onClick={() => handleDelete(x._id)}> Delete</button>
            </p>
          ))}
      </div>
    </div>
  );
};

export default NewsLetter;
