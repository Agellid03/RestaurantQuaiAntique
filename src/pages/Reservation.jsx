import React, { useState } from 'react';
import '../styles/reservation.css';
import InputField from '../components/InputField';

const Reservation = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    date: '',
    heure: '',
    couverts: 1,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nom) newErrors.nom = 'Nom requis';
    if (!formData.email || !formData.email.includes('@'))
      newErrors.email = 'Email invalide';
    if (!formData.date) newErrors.date = 'Date requise';
    if (!formData.heure) newErrors.heure = 'Heure requise';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage('');
      return;
    }

    setMessage(`Merci ${formData.nom}, votre réservation est confirmée !`);
    setErrors({});
  };

  return (
    <section className="reservation">
      <h2>Réservez une table</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <InputField
          label="Nom"
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          error={errors.nom}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="Date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          error={errors.date}
        />
        <InputField
          label="Heure"
          type="time"
          name="heure"
          value={formData.heure}
          onChange={handleChange}
          error={errors.heure}
        />
        <InputField
          label="Nombre de couverts"
          type="number"
          name="couverts"
          min="1"
          max="12"
          value={formData.couverts}
          onChange={handleChange}
        />
        <button type="submit">Réserver</button>
      </form>
      {message && <p className="confirmation show">{message}</p>}
    </section>
  );
};

export default Reservation;
