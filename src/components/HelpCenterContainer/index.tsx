import React from "react";
import styles from "./index.module.css";

const ArticleItem = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <a className={styles["article-item-container"]} href={link}>
      <div className={styles["article-item-inner"]}>
        <h2>{title}</h2>
        <p className={styles["article-item-description"]}>{description}</p>
      </div>
    </a>
  );
};

export const Articles = ({ data }) => {
  return (
    <div className={styles.articles}>
      {data.items.map((props, idx) => (
        <ArticleItem key={idx} {...props} />
      ))}
    </div>
  );
};
