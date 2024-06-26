import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GoProjectSymlink } from "react-icons/go";
import { GrArticle } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";

const navItems = [
  {
    label: "Главная",
    icon: IoHome,
    route: "",
  },
  {
    label: "Обо мне",
    icon: CgProfile,
    route: "about",
  },
  {
    label: "Проекты",
    icon: GoProjectSymlink,
    route: "projects",
  },
  {
    label: "Блог",
    icon: GrArticle,
    route: "blog",
  },
  {
    label: "Контакты",
    icon: IoMdContacts,
    route: "contact",
  },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item.route);
    navigate(`/${item.route === "" ? "" : item.route}`);
  };

  return (
    <nav>
      <ul className={styles.nav}>
        {navItems.map((item) => (
          <li
            key={item.route}
            className={`${styles["nav-item"]} ${activeItem === item.route ? styles.active : ""}`}
            onClick={() => handleItemClick(item)}
          >
            <span>{item.label}</span>
            <item.icon />
          </li>
        ))}
      </ul>
    </nav>
  );
};
