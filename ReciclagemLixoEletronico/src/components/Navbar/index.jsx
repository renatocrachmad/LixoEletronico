import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { isAuthenticated } from '../../Utils/auth'; // Verifica se o usuário está logado

const Navbar = () => {
  return (
    <header>
      <h1 className="navbar-logo">ReciclaTech</h1>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categorias</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Cadastro</Link></li>
          <li><Link to="/contact">Fale Conosco</Link></li>

          {/* Mostrar link do Profile apenas se o usuário estiver autenticado */}
          {isAuthenticated() && (
            <li><Link to="/profile">Perfil</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
