import React from 'react'
import logo from '../imagenes/Logo 1.png'
import "../styles/Nav.css"

function Nav() {
  return (
    <div className="header">
      <div className="header-logo">
          <img src={logo} alt="Logo" />
      </div>
      <div className="header-item">Home</div>
      <div className="header-item">About</div>
      <div className="header-item">Menu</div>
      <div className="header-item">Reservatiions</div>
      <div className="header-item">Order Online</div>
      <div className="header-item">Login</div>
    </div>
   

  )
}

export default Nav
