import React, { useState } from "react";
import styles from "./UserDate.module.css";
import UpdateUser from "@/components/Common/Modals/UpdateUserModal/UpdatreUserModal";

const UserData = ({ users, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const handleUpdate = (data) => {
    setUser(data);
    setIsOpen(true);
  };
  return (
    <>
      <div className={styles.container}>
        {users.map((user) => (
          <div key={user._id} className={styles.user}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <div className={styles.buttons}>
              <button onClick={() => handleUpdate(user)}>Update</button>
              <button onClick={() => onDelete(user._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <UpdateUser isOpen={isOpen} setAddToolModal={setIsOpen} user={user} />
    </>
  );
};

export default UserData;
