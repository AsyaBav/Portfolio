import React from "react";
import styles from "./HomeCard.module.css";

export const HomeCard = () => {
  return (
    <div className={styles.content}>
      <h1>
        Привет! <br /> Меня зовут Иван Иванов
      </h1>
      <div className={styles.text}>
        <p>
          Я фрилансер, занимаюсь дизайном и разработкой UI/UX, проживаю в
          Лондоне, Англия. Стремлюсь создавать захватывающие и красивые
          веб-приложения с помощью тщательно продуманного кода и
          ориентированного на пользователя дизайна.
        </p>
      </div>
      <img
        src="https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531618.jpg?t=st=1719322558~exp=1719326158~hmac=a4b2a777c06b7b6c9c5a0fa9a491cc5defc8fc77d3828c14890e352db0247b60&w=1060"
        alt="Фото профиля"
      />
    </div>
  );
};
