import React from "react";
import styles from "./Blog.module.css";
import { BlogCard } from "../../components";

export const Blog = () => {
  return (
    <div className={styles.content}>
      <BlogCard />
    </div>
  );
};
