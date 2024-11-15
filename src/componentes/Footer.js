import React from 'react'
import restaurant from "../imagenes/restaurant.png"
import "../styles/Footer.css"
import { Link} from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
      <div className="footer-imagen">
          <img src={restaurant} alt="restaurant" />
      </div>
      
      <div className="footer-navigation">
            <h3>Navegación</h3>
            <ul>
                <li><Link className="LinkStyle" to="#">Inicio</Link></li>
                <li><Link className="LinkStyle" to="#">Reservaciones</Link></li>
                <li><Link className="LinkStyle" to="#">Menú</Link></li>
                <li><Link className="LinkStyle" to="#">Sobre Nosotros</Link></li>
                <li><Link className="LinkStyle" to="#">Contacto</Link></li>
            </ul>
        </div>
        <div className="footer-contact">
            <h3>Redes Sociales</h3>
            <div className="social-media">
                <Link className="LinkStyle" to="#"><i className="fab fa-facebook"></i></Link>
                <Link className="LinkStyle" to="#"><i className="fab fa-twitter"></i></Link>
                <Link className="LinkStyle" to="#"><i className="fab fa-instagram"></i></Link>
                <Link className="LinkStyle" to="#"><i className="fab fa-linkedin"></i></Link>
            </div>
        </div> 
      </div>

    </>
    

  )
}

export default Footer