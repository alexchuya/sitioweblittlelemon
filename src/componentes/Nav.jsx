import React from 'react';
import logo from '../imagenes/Logo 1.png';
import "../styles/Nav.css";

function Nav() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo del sitio" />
      </div>
      <nav className="header-nav">
        <ul className="header-menu">
          <li className="header-item">Home</li>
          <li className="header-item">About</li>
          <li className="header-item">Menu</li>
          <li className="header-item">Reservations</li>
          <li className="header-item">Order Online</li>
          <li className="header-item">Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
