import React from "react";
import styles from "./index.module.css";
import SearchBar from "../SearchBar";
export default function HelpCenterHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className={styles["help-center-header"]}>
      <h1 className={styles["header-title"]}>
        <span className={styles["header-title-text"]}>
          {title || "Portkey Help Center"}
        </span>
      </h1>
      <h4 className={styles["header-subtitle"]}>
        <span>{subtitle || "Hello, How Can We Help You?"}</span>
      </h4>
      <div className={styles["search-bar-container"]}>
        <SearchBar position="page"></SearchBar>
      </div>
    </div>
  );
}
