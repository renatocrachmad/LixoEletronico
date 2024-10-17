import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <header>
      <h1 className="navbar-logo">ReciclaTech</h1>
      <nav className="navbar">
        <ul className="navbar-links">
          <li>Home</li>
          <li>Login</li>
          <li>Cadastro</li>
          <li>Fale Conosco</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
