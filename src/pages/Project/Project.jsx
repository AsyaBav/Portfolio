import React from "react";
import styles from "./Project.module.css";
import { ProjectsCard } from "../../components";

export const Project = () => {
  return (
    <div className={styles.content}>
      <ProjectsCard />
    </div>
  );
};
