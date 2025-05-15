import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to="/">Acceuil</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
