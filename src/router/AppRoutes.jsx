import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Reservation from '../pages/Reservation';
import About from '../pages/About';
import Events from '../pages/Events';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />

        <Route path="/events" element={<Events />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
