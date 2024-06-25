import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">Обо мне</Link></li>
            <li><Link to="/projects">Проекты</Link></li>
            <li><Link to="/blog">Блог</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
    </nav>
  )
}