import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Контакты</h1>
      <form>
        <label>
          Имя:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Сообщение:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Отправить</button>
      </form>
      <p>Email: example@example.com</p>
      <p>Телефон: +123456789</p>
    </div>
  );
}

export default Contact;
