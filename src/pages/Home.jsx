import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <>
      <section className="hero">
        <h2 className="hero-title">Bienvenue au Quai Antique</h2>
        <p>Le chef Arnaud Michant vous invite Quai Antique</p>
        <Link to="/reservation" className="cta-reserver">
          Reserver
        </Link>
      </section>

      <section className="presentation">
        <img src="/images/Presentation.jpg" alt="Présentation du restaurant" />
        <div className="presentation-text">
          <h3>Une cuisine de caractère</h3>
          <p>
            L’élégance du goût, l’âme de la cuisine française. Découvrez une
            cuisine raffinée et authentique, entre tradition et créativité, dans
            un cadre chaleureux et soigné.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
