import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2025 Quai Antique</p>
      </footer>
    </>
  );
};

export default Layout;
