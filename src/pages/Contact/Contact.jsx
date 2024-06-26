import React from "react";
import styles from "./Contact.module.css";
import { ContactCard } from "../../components";

export const Contact = () => {
  return (
    <div className={styles.content}>
      <ContactCard />
    </div>
  );
};
