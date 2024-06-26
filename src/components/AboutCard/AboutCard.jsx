import React from "react";
import styles from "./AboutCard.module.css";

export const AboutCard = () => {
  return (
    <div className={styles.about}>
      <h2>Обо мне</h2>
      <p>
        Я Иван, веб-разработчик с более чем 5-летним опытом. Я специализируюсь
        на разработке с использованием React, Node.js и других современных
        технологий.
      </p>
      <h2>Опыт работы</h2>
      <div className={styles.work}>
        <span>Компания ABC - Frontend Developer (2018 - наст. время)</span>
        <span>Компания XYZ - Junior Developer (2015 - 2018)</span>
      </div>
      <h2>Образование</h2>
      <p>Бакалавр компьютерных наук, Университет Программирования, 2015</p>
      <h2>Навыки</h2>
      <div className={styles.skill}>
        <span>JavaScript, React, Redux, </span>
        <span>Node.js, Express, </span>
        <span>HTML, CSS, SASS</span>
      </div>
    </div>
  );
};
