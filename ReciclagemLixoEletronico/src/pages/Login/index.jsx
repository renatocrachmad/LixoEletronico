import React, { useState } from 'react';
import './style.css';
import SocialLinks from '../../components/SocialLinks';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
          />
        </div>
        <button type="submit" className="login-button">Entrar</button>
      </form>
      <p className="register-link">
        Não tem uma conta? <a href="/register">Cadastre-se</a>
      </p>
      <SocialLinks />
    </div>
    
  );
};

export default Login;
