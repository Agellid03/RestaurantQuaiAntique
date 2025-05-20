import React from 'react';
import '../styles/menu.css';

const plats = [
  {
    nom: 'Filet de bœuf au poivre',
    description: 'Accompagné de pommes grenailles et sauce au poivre vert',
    prix: '24€',
    img: '/images/boeuf.jpeg',
  },
  {
    nom: 'Saumon rôti à l’aneth',
    description: 'Avec riz sauvage et légumes croquants',
    prix: '21€',
    img: '/images/Saumon.jpg',
  },
  {
    nom: 'Risotto aux champignons',
    description: 'Crémeux, avec parmesan et huile de truffe',
    prix: '19€',
    img: '/images/risotto.jpeg',
  },
  {
    nom: 'Burger Maison Rustique',
    description:
      'Pain fait maison avec graine de sésame, Steak de 100g gramme et sauce maison. Accompagné de frites, salade ou les deux !',
    prix: '15€',
    img: '/images/burger.jpeg',
  },
  {
    nom: 'Merlue au groseille et beurre',
    description:
      'Merlue frais, accompagné de groseille et une sauce au beurre légère.',
    prix: '22€',
    img: '/images/merlue.jpeg',
  },
  {
    nom: 'Margharita traditionel',
    description: 'Pizza fait maison à la maniere napolitaine.',
    prix: '12€',
    img: '/images/pizza.jpeg',
  },
];
const Menu = () => {
  return (
    <section className="menu-page">
      <h2 className="menu-title">Notre carte</h2>
      <div className="menu-grid">
        {plats.map((plat, index) => (
          <div className="plat-card fade-in" key={index}>
            <img src={plat.img} alt={plat.nom} className="plat-image" />
            <h3>{plat.nom}</h3>
            <p>{plat.description}</p>
            <span className="prix">{plat.prix}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
