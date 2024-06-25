import React from 'react';

function Projects() {
  const projects = [
    { id: 1, name: 'Проект 1', description: 'Описание проекта 1', technologies: 'React, Node.js', link: '#' },
    { id: 2, name: 'Проект 2', description: 'Описание проекта 2', technologies: 'Vue, Firebase', link: '#' },
    // добавь больше проектов по желанию
  ];

  return (
    <div>
      <h1>Мои проекты</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Технологии: {project.technologies}</p>
            <a href={project.link}>Ссылка на проект</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
