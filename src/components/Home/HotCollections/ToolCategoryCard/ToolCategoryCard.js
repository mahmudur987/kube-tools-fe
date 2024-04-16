// components/ToolCategoryCard.js
import React, { useState } from "react";
import styles from "./ToolategoryCard.module.css"; // Import your CSS module
import arrowright from "../../../../assets/icons/arrow 3.png";
import Image from "next/image";
const ToolCategoryCard = ({ category, tools }) => {
  const [count, setCount] = useState(3);

  const sortedTools = tools.sort((a, b) => b.githubStars - a.githubStars);
  const topThreeTools = sortedTools.slice(0, count);

  return (
    <div
      className={styles.card}
      style={{ display: `${tools.length == 0 ? "none" : ""}` }}
    >
      <h2 className={styles.categoryName}>{category.name}</h2>
      <p className={styles.toolsNumber}> {tools.length} repository</p>

      <ul className={styles.topThreeList}>
        {topThreeTools.map((tool, i) => (
          <li key={tool.id} className={styles.tool}>
            <span>{i + 1}</span>
            <a href={tool.link} target="_blank">
              {tool.name.slice(0, 30)}
            </a>
          </li>
        ))}
      </ul>

      <p
        onClick={() => {
          if (count < 4) {
            setCount(count + 1);
          }
        }}
        className={styles.seeMore}
      >
        <span>See more</span>
        <Image src={arrowright} height={20} width={20} />
      </p>
    </div>
  );
};

export default ToolCategoryCard;
