"use client";

import { useState } from "react";
import styles from "./AddUserModal.module.css";
import toast from "react-hot-toast";
import { useAllUser } from "@/utils/user";
import Axios from "@/utils/Axios";

const AddUser = ({ isOpen, setAddToolModal, id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const { refetch } = useAllUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email, password, role };
    if (!email || !name || !password) {
      toast.error("Info missing ");
    }

    try {
      const { data } = await Axios.post("/user/register", userData);
      console.log(data);
      refetch();
      toast.success(data?.status ?? "Admin added successfully");
      setAddToolModal(false);
    } catch (error) {
      console.error(error);
      toast.error(error.message ?? "Error Happen ");
    }
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
        <h2>Add New Admin</h2>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.fromControl}>
            <label htmlFor="">Password</label>
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
            <button type="submit">Add Admin</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
