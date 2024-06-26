import React from "react";
import styles from "./Home.module.css";
import { HomeCard } from "../../components";

export const Home = () => {
  return (
    <div className={styles.content}>
      <HomeCard />
    </div>
  );
};
