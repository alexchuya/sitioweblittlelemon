import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import restaurantfood from '../imagenes/restaurantfood.png';
import "../styles/Homepage.css";

function Homepage() {
  const navigate = useNavigate(); // Inicializar useNavigate

  // Función para manejar el clic en el botón
  const handleReserveClick = () => {
    navigate('/reserve'); // Redirigir a la página de reservas
  };

  return (
    <div className="content-row">
      <div className="content-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Este es un párrafo que describe el contenido
          relacionado con el título y subtítulo.
          La Joseline no me quiere y nunca me quiso, lo único que me queda es esto.
        </p>
        <button className="content-button" onClick={handleReserveClick}>
          Reserve a Table
        </button>
      </div>
      <div className="content-image">
        <img src={restaurantfood} alt="Imagen de un gato" />
      </div>
    </div>
  );
}

export default Homepage;
