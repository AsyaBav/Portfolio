import React, { useState, useEffect } from "react";
import styles from "./BlogCard.module.css";

export const BlogCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className={styles.content}>
      <h1>Мой блог</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.id} className={styles["list-item"]}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
