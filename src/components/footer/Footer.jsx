import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-column">
          <h4>Horaires</h4>
          <p>Lun-Sam : 12h-14h / 19h-22h</p>
        </div>
        <div className="footer-column">
          <h4>Adresse</h4>
          <p>5, rue de la vielle mer 35380</p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>QuaiAntiqueRestaurant@gmail.com</p>
        </div>
        <div className="footer-column">
          <p>&copy; 2025 Quai Antique</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
