import React from "react";
import styles from "./ProjectsCard.module.css";
import project_1 from "../../assets/project-1.jpg";
import project_2 from "../../assets/project-2.jpg";
import project_3 from "../../assets/project-3.jpg";

export const ProjectsCard = () => {
  const projects = [
    {
      id: 1,
      name: "Проект 1",
      img: project_1,
      technologies: "React, Node.js",
      link: "#",
    },
    {
      id: 2,
      name: "Проект 2",
      img: project_2,
      technologies: "Vue, Firebase",
      link: "#",
    },

    {
      id: 3,
      name: "Проект 3",
      img: project_3,
      technologies: "React, Express",
      link: "#",
    },
  ];

  return (
    <div className={styles.content}>
      <h1>Мои проекты</h1>
      <div className={styles.project}>
        {projects.map((project) => (
          <div key={project.id} className={styles.info}>
            <h2>{project.name}</h2>
            <img src={project.img} alt="Картинка" />
            <span>Технологии: {project.technologies}</span>
            <a href={project.link}>Ссылка на проект</a>
          </div>
        ))}
      </div>
    </div>
  );
};
