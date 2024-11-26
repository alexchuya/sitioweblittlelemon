import React from 'react';
import restaurant from "../imagenes/restaurant.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Sección de imagen del restaurante */}
      <section className="footer-imagen">
        <img src={restaurant} alt="Imagen del restaurante" />
      </section>

      {/* Sección de navegación */}
      <nav className="footer-navigation">
        <h3>Navegación</h3>
        <ul>
          <li><Link className="LinkStyle" to="#">Inicio</Link></li>
          <li><Link className="LinkStyle" to="#">Reservaciones</Link></li>
          <li><Link className="LinkStyle" to="#">Menú</Link></li>
          <li><Link className="LinkStyle" to="#">Sobre Nosotros</Link></li>
          <li><Link className="LinkStyle" to="#">Contacto</Link></li>
        </ul>
      </nav>

      {/* Sección de contacto y redes sociales */}
      <section className="footer-contact">
        <h3>Redes Sociales</h3>
        <div className="social-media">
          <Link className="LinkStyle" to="#"><i className="fab fa-facebook" aria-label="Facebook"></i></Link>
          <Link className="LinkStyle" to="#"><i className="fab fa-twitter" aria-label="Twitter"></i></Link>
          <Link className="LinkStyle" to="#"><i className="fab fa-instagram" aria-label="Instagram"></i></Link>
          <Link className="LinkStyle" to="#"><i className="fab fa-linkedin" aria-label="LinkedIn"></i></Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
