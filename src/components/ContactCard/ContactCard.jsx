import React, { useState } from "react";
import styles from "./ContactCard.module.css";

export const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, message };
    console.log(data);

    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      setIsSubmitted(true);
      setSubmittedData(data);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className={styles.content}>
      <h1>Контакты</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span>Для сотрудничества, заполните информацию:</span>
        <label className={styles.field}>
          Имя:
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Введите имя"
          />
        </label>
        <label className={styles.field}>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Введите почту"
          />
        </label>
        <label className={styles.field}>
          Сообщение:
          <textarea
            name="message"
            value={message}
            onChange={handleChangeMessage}
            placeholder="Введите сообщение"
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
      {isSubmitted && (
        <div className={styles.info}>
          <h2>Введенные данные:</h2>
          <p>
            Имя: <span>{submittedData.name}</span>
          </p>
          <p>
            Email: <span>{submittedData.email}</span>
          </p>
          <p>
            Сообщение: <span>{submittedData.message}</span>
          </p>
        </div>
      )}
    </div>
  );
};
