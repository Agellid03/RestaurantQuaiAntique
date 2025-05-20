import React, { useState } from 'react';
import '../styles/events.css';

const Events = () => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.objet) {
      newErrors.objet = 'Veuillez sélectionner un objet.';
    }
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis.';
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse email est invalide.";
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis.';
    }

    return newErrors;
  };

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: '',
  });

  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Supprimer l'erreur liée au champ si l'utilisateur le corrige
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setConfirmation('');
      return;
    }

    setErrors({});
    setConfirmation('Votre demande a bien été envoyée !');
  };

  return (
    <section className="evenements-page">
      <div className="event-description">
        <h2>Privatiser le Quai Antique</h2>
        <p>
          Que ce soit pour un repas d’affaires, un anniversaire, un mariage ou
          tout autre événement, notre équipe vous accompagne pour organiser un
          moment inoubliable dans un cadre raffiné.
        </p>
        <a href="/brochure.pdf" className="cta-brochure" download>
          Télécharger la brochure
        </a>
      </div>

      <form className="event-form" onSubmit={handleSubmit}>
        <h3>Demande de devis</h3>

        <label htmlFor="objet">Objet</label>
        <select
          name="objet"
          id="objet"
          value={formData.objet}
          onChange={handleChange}
          className={errors.nom ? 'error-field' : ''}
        >
          <option value="">-- Veuillez choisir une option --</option>
          <option value="repas">Repas d'affaires</option>
          <option value="mariage">Mariage</option>
          <option value="privatisation">Privatisation</option>
          <option value="autre">Autre</option>
        </select>
        {errors.objet && <span className="error">{errors.objet}</span>}

        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name="nom"
          placeholder="Votre nom"
          value={formData.nom}
          onChange={handleChange}
          className={errors.nom ? 'error-field' : ''}
        />
        {errors.nom && <span className="error">{errors.nom}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          className={errors.nom ? 'error-field' : ''}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Votre message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={errors.nom ? 'error-field' : ''}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Envoyer</button>
        {confirmation && <p className="confirmation">{confirmation}</p>}
      </form>
    </section>
  );
};

export default Events;
