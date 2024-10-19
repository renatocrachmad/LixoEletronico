import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Post from '../../components/Post'; // Importar o componente Post
import SocialLinks from '../../components/SocialLinks'; // Importar o componente de redes sociais

const Home = () => {
  return (
    <div className="home">
      <main className="home-main">
        <h2>Bem-vindo à Reciclagem de Lixo Eletrônico</h2>
        <p>
          Aqui você pode aprender a descartar corretamente seu lixo eletrônico e compartilhar
          conhecimentos sobre reciclagem.
        </p>
        
        
        <Post 
          title="Como descartar computadores antigos?"
          content="Computadores antigos podem ser descartados em pontos de coleta especializados. Certifique-se de apagar todos os dados antes de entregar."
          image="https://www.adrenaline.com.br/wp-content/uploads/2024/02/Windows-11-em-PC-antigo-Acabou.jpeg" 
        />

        <Post 
          title="Importância da reciclagem de eletrônicos"
          content="A reciclagem de eletrônicos ajuda a reduzir o lixo e recuperar materiais valiosos, além de proteger o meio ambiente."
          
        />
      </main>
      <SocialLinks />
    </div>
  );
};

export default Home;
