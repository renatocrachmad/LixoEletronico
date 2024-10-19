import React from 'react';
import './style.css';
import SocialLinks from '../../components/SocialLinks';

const Profile = () => {
  return (
    <div className="profile">
      <h2>Meu Perfil</h2>
      <p>Bem-vindo(a) à sua página de perfil. Aqui você pode gerenciar suas informações pessoais.</p>
      <div className="profile-details">
        <p><strong>Nome:</strong> Usuário Exemplo</p>
        <p><strong>Email:</strong> exemplo@usuario.com</p>
        {/* Adicione mais detalhes aqui conforme necessário */}
      </div>
      <SocialLinks />
    </div>
  );
};

export default Profile;
