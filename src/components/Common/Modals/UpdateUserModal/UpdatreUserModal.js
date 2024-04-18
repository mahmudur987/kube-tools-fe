"use client";

import { useEffect, useState } from "react";
import styles from "./UpdateUserModal.module.css";
import toast from "react-hot-toast";
import { useAllUser } from "@/utils/user";
import Axios from "@/utils/Axios";

const UpdateUser = ({ isOpen, setAddToolModal, user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const { refetch } = useAllUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password, role };
    if (!user) {
      return toast.error("Info missing ", { id: 1 });
    }

    try {
      const { data } = await Axios.patch(
        `/user/updateUser/${user?._id}`,
        userData
      );
      console.log(data);
      refetch();
      toast.success(data?.status ?? "Update successfully");
      setAddToolModal(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message ?? "Error Happen ");
    }
  };
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);
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
        <h2>Update Admin Details</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fromControl}>
            <label htmlFor=""> Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.fromControl}>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              readOnly
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.fromControl}>
            <label htmlFor="">Password</label>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.fromControl}>
            <label htmlFor="">Role</label>
            <input
              type="text"
              placeholder="GitHub Stars"
              defaultValue={role}
              readOnly
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button type="button" onClick={() => setAddToolModal(false)}>
              Cancel
            </button>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
