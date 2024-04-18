"use client";
import UserData from "@/components/Dashboard/User/Userdata";
import { useAllUser } from "@/utils/user";
import React, { useState } from "react";
import styles from "./userPage.module.css";
import LoadingSpinner from "@/components/Common/LoadingSpiner/LoadingSpiner";
import ErrorComponent from "@/components/Home/MyError/Error";
import AddUser from "@/components/Common/Modals/AddUserModal/AddUserModal";
import Axios from "@/utils/Axios";
const User = () => {
  const { data, isLoading, isError, error, refetch } = useAllUser();
  const [addUser, setAddUser] = useState(false);

  const handleDelete = async (userId) => {
    console.log("Delete user:", userId);

    try {
      const { data } = await Axios.delete(`/user/deleteUser/${userId}`);
      console.log(data);
      refetch();
      toast.success(data?.status ?? "Delete  successfully");
      setAddToolModal(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message ?? "Error Happen ");
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorComponent message={error ? error.message : "Error"} />;
  }
  return (
    <>
      <div>
        <div className={styles.btnWrapper}>
          <button onClick={() => setAddUser(true)}>Add User</button>
        </div>

        <div>
          {data && !isError && !isLoading && (
            <UserData users={data?.data} onDelete={handleDelete} />
          )}
        </div>
      </div>
      <AddUser isOpen={addUser} setAddToolModal={setAddUser} />
    </>
  );
};

export default User;
