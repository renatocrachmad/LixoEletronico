import React, { useState } from 'react';
import './style.css';
import SocialLinks from '../../components/SocialLinks';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    // Aqui você pode adicionar a lógica de envio para a API
    console.log("Dados enviados: ", formData);
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de Usuário</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
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

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="register-button">Cadastrar</button>
      </form>
      <SocialLinks />
    </div>
  );
};

export default Register;
