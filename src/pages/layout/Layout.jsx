import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import logo from "../../assets/logo.png";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Navigation />
      </div>
      <div className={styles.header}>
        <img src={logo} alt="лого" />
      </div>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
