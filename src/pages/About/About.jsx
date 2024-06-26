import React from "react";
import styles from "./About.module.css";
import { AboutCard } from "../../components";

export const About = () => {
  return (
    <div className={styles.content}>
      <AboutCard />
    </div>
  );
};
