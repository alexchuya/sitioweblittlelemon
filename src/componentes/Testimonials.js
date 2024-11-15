import React from 'react'
import perfil1 from '../imagenes/peter grifin.png'
import perfil2 from '../imagenes/testimonio1.png'
import perfil3 from '../imagenes/negra.png'
import "../styles/Testimonials.css"

function Testimonials() {
  return (
        <div className="content-testimonials">
            <div className="testimonial1-container">
                <div className='perfil-container'>
                    <h1 className='nombre-perfil'>Homero Simpson</h1>
                    <img   src={perfil1} alt="perfil1" className="perfil-image"/>
                </div>
                <div className='testimonial'>
                    <p>Lo mejor que e probado</p>
                </div>
            </div>
            <div className="testimonial2-container">
                <div className='perfil-container'>
                    <h1 className='nombre-perfil'>Peter Grifin</h1>
                    <img   src={perfil2} alt="perfil2" className="perfil-image"/>
                </div>
                <div className='testimonial'>
                    <p>Lo mejor que e probado</p>
                </div>
            </div>
            <div className="testimonial3-container">
                <div className='perfil-container'>
                    <h1 className='nombre-perfil'>Nathasha berlet</h1>
                    <img   src={perfil3} alt="perfil3" className="perfil-image"/>
                </div>
                <div className='testimonial'>
                    <p>The salad is very good</p>
                </div>
            </div>
        </div>
  )
}

export default Testimonials
