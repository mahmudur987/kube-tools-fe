"use client";

import React, { useState } from "react";
import styles from "./SingleTool.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import AddToolModal from "../Common/Modals/AddToolModal/AddToolModal";
import UpdateToolModal from "../Common/Modals/UpdateToolModal/UpdateToolModal";

const SingleTool = ({ category }) => {
  const [updateToolModal, setUpdateToolModal] = useState(false);
  const [tool, setTool] = useState(null);
  const handleOpenModal = (tool) => {
    setUpdateToolModal(true);
    setTool(tool);
  };

  const handleCloseModal = () => {
    setUpdateToolModal(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <tbody>
        {category.tools.map((tool) => (
          <tr key={tool._id}>
            <td>{tool.name}</td>
            <td>{tool.description}</td>
            <td>
              <a
                className={styles.link}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tool.link}
              </a>
            </td>
            <td>{tool.githubStars}</td>
            <td className={styles.tdAction}>
              <button onClick={() => handleOpenModal(tool)}>Update</button>
              <span onClick={() => handleDeleteTool(tool)}>
                <AiTwotoneDelete />
              </span>
            </td>
          </tr>
        ))}
      </tbody>

      <UpdateToolModal
        isOpen={updateToolModal}
        onClose={handleCloseModal}
        tool={tool}
      />
    </>
  );
};

export default SingleTool;
