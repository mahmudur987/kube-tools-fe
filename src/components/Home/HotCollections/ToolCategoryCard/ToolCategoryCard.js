// components/ToolCategoryCard.js
import React from "react";
import styles from "./ToolategoryCard.module.css"; // Import your CSS module

const ToolCategoryCard = ({ category, tools }) => {
  const sortedTools = tools.sort((a, b) => b.githubStars - a.githubStars);
  const topThreeTools = sortedTools.slice(0, 3);

  return (
    <div className={styles.card}>
      <h2 className={styles.categoryName}>{category.name}</h2>
      <p className={styles.toolsNumber}> {tools.length} repository</p>

      <ul className={styles.topThreeList}>
        {topThreeTools.map((tool, i) => (
          <li key={tool.id} className={styles.tool}>
            <span>{i + 1}</span>
            <a href={tool.link} target="_blank">
              {tool.name}
            </a>
          </li>
        ))}
      </ul>

      <p>see more</p>
    </div>
  );
};

export default ToolCategoryCard;
