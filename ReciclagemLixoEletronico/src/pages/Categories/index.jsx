import React from 'react';
import './style.css';
import SocialLinks from '../../components/SocialLinks';

const Categories = () => {
  const categories = [
    { name: 'Baterias', description: 'Descartar baterias de celulares e laptops em locais adequados.' },
    { name: 'Placas de Circuito', description: 'Reciclagem de placas de circuitos de aparelhos eletrônicos.' },
    { name: 'Monitores e Telas', description: 'Reciclagem de monitores de computador e televisores.' },
    { name: 'Aparelhos de Som e TV', description: 'Destinação adequada de aparelhos de som, rádios e televisores antigos.' },
    { name: 'Celulares e Tablets', description: 'Reciclagem de celulares, tablets e dispositivos móveis.' },
  ];

  return (
    <div className="categories-container">
      <h2>Categorias de Lixo Eletrônico</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
      <SocialLinks />
    </div>
  );
};

export default Categories;
