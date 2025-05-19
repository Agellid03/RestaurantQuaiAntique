import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Ferme le menu si on passe en Desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <h2 className="logo">
        <Link to="/">Quai Antique</Link>
      </h2>
      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Acceuil
          </Link>
        </li>

        <li>
          <Link to="/menu" onClick={handleLinkClick}>
            Menu
          </Link>
        </li>

        <li>
          <Link to="/reservation" onClick={handleLinkClick}>
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
