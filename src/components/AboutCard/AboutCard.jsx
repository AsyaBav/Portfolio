import React from 'react';
import styles from './AboutCard.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1>Обо мне</h1>
      <p>Я Иван, веб-разработчик с более чем 5-летним опытом. Я специализируюсь на разработке с использованием React, Node.js и других современных технологий.</p>
      <h2>Опыт работы</h2>
      <ul>
        <li>Компания ABC - Frontend Developer (2018 - наст. время)</li>
        <li>Компания XYZ - Junior Developer (2015 - 2018)</li>
      </ul>
      <h2>Образование</h2>
      <p>Бакалавр компьютерных наук, Университет Программирования, 2015</p>
      <h2>Навыки</h2>
      <ul>
        <li>JavaScript, React, Redux</li>
        <li>Node.js, Express</li>
        <li>HTML, CSS, SASS</li>
      </ul>
    </div>
  );
}

export default About;
