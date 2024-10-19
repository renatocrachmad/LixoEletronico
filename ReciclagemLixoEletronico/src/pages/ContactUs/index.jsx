import React, { useState } from 'react';
import './style.css';
import SocialLinks from '../../components/SocialLinks';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio para a API ou backend
    console.log("Mensagem enviada: ", formData);
  };

  return (
    <div className="contact-container">
      <h2>Fale Conosco</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="contact-button">Enviar</button>
      </form>
      <SocialLinks />
    </div>
  );
};

export default ContactUs;
