import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Ou '../index.css' si tu centralises tout

const Home = () => {
  return (
    <>
      {/* Section HERO */}
      <section className="hero">
        <h2 className="hero-title">Bienvenue au Quai Antique</h2>
        <p>
          Le chef Arnaud Michant vous invite au Quai Antique pour une expérience
          gastronomique unique.
        </p>
        <Link to="/reservation" className="cta-reserver">
          Réserver
        </Link>
      </section>

      {/* Section PRÉSENTATION */}
      <section className="presentation fade-in">
        <img src="/images/Presentation.jpg" alt="Présentation du restaurant" />
        <div className="presentation-text">
          <h3>Une cuisine de caractère</h3>
          <p>
            L’élégance du goût, l’âme de la cuisine française. Découvrez une
            cuisine raffinée et authentique, entre tradition et créativité, dans
            un cadre chaleureux et soigné.
          </p>
          <Link to="/menu" className="cta-menu">
            Nos Menus
          </Link>
        </div>
      </section>

      {/* Section PRODUITS FRAIS */}
      <section className="fresh fade-in">
        <img src="/images/Saumon.jpg" alt="Produit frais" />
        <div className="fresh-text">
          <h3>Le restaurant</h3>
          <p>
            Nous sélectionnons nos ingrédients auprès de producteurs locaux pour
            vous offrir une cuisine de saison, authentique et savoureuse. Le
            chef Michant se réjouit de vous recevoir.
          </p>
          <Link to="/galerie" className="cta-galerie">
            Notre histoire & Galerie
          </Link>
        </div>
      </section>

      <section className="events fade-in">
        <img src="/images/Resto.jpg" alt="" />
        <div className="events-text">
          <h3>Acceuillir vos événements</h3>
          <p>
            Contactez-nous pour l'organisation d'un repas d'affaires ou la
            privatisation du restaurant Quai Antique pour votre prochain
            évévenment
          </p>
          <Link to="/events" className="cta-events">
            En savoir plus
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
