import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="home-main">
        <h2>Bem-vindo à Reciclagem de Lixo Eletrônico</h2>
        <p>
          Aqui você pode aprender a descartar corretamente seu lixo eletrônico e compartilhar
          conhecimentos sobre reciclagem.
        </p>
      </main>
    </div>
  );
};

export default Home;
