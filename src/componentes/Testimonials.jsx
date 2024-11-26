import React from 'react';
import perfil1 from '../imagenes/peter grifin.png';
import perfil2 from '../imagenes/testimonio1.png';
import perfil3 from '../imagenes/negra.png';
import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="content-testimonials">
      <h2 className="section-title">Testimonios</h2>
      <article className="testimonial-container">
        <header className="perfil-container">
          <h3 className="nombre-perfil">Homero Simpson</h3>
          <img src={perfil1} alt="Foto de Homero Simpson" className="perfil-image" />
        </header>
        <p className="testimonial">Lo mejor que he probado</p>
      </article>
      <article className="testimonial-container">
        <header className="perfil-container">
          <h3 className="nombre-perfil">Peter Griffin</h3>
          <img src={perfil2} alt="Foto de Peter Griffin" className="perfil-image" />
        </header>
        <p className="testimonial">Lo mejor que he probado</p>
      </article>
      <article className="testimonial-container">
        <header className="perfil-container">
          <h3 className="nombre-perfil">Natasha Berlet</h3>
          <img src={perfil3} alt="Foto de Natasha Berlet" className="perfil-image" />
        </header>
        <p className="testimonial">The salad is very good</p>
      </article>
    </section>
  );
}

export default Testimonials;
