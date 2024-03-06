"use client";

import React, { useState } from "react";
import styles from "./SingleTool.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import AddToolModal from "../Common/Modals/AddToolModal/AddToolModal";
import UpdateToolModal from "../Common/Modals/UpdateToolModal/UpdateToolModal";
import { useGetTools } from "@/utils/ToolsData";
import toast from "react-hot-toast";
import Axios from "@/utils/Axios";

const SingleTool = ({ category }) => {
  const { refetch } = useGetTools();

  const [updateToolModal, setUpdateToolModal] = useState(false);
  const [tool, setTool] = useState({});
  const handleOpenModal = (tool) => {
    setUpdateToolModal(true);
    setTool(tool);
  };

  const handleCloseModal = () => {
    setUpdateToolModal(false);
  };
  const handleDeletetool = async (id) => {
    console.log(id);
    console.log(category._id);

    try {
      const { data } = await Axios.delete(`/deletetool/${category._id}/${id}`);
      toast.success(data.message ? data.message : "Deleted successfully", {
        id: 1,
      });
      refetch();
    } catch (error) {
      toast.error(error ? error.message : "An error occurred", { id: 1 });
    }
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
              <span onClick={() => handleDeletetool(tool._id)}>
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
        categoryid={category._id}
      />
    </>
  );
};

export default SingleTool;
