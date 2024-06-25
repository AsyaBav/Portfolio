import React from 'react';

function Blog() {
  const posts = [
    { id: 1, title: 'Статья 1', excerpt: 'Краткое описание статьи 1', link: '/blog/1' },
    { id: 2, title: 'Статья 2', excerpt: 'Краткое описание статьи 2', link: '/blog/2' },
    // добавь больше статей по желанию
  ];

  return (
    <div>
      <h1>Мой блог</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={post.link}>Читать дальше</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
