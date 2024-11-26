import React from 'react';
import greenSalad from '../imagenes/green-salad.png';
import "../styles/Especiales.css";

function Especiales() {
  const products = [
    {
      title: "Ensalada Cesar",
      price: "$4.70",
      description: "Esta es la descripción del producto. Aquí puedes detallar las características y beneficios.",
      image: greenSalad
    },
    {
      title: "Spaguetti",
      price: "$9.00",
      description: "Esta es la descripción del producto. Aquí puedes detallar las características y beneficios.",
      image: greenSalad
    },
    {
      title: "Lasana",
      price: "$5.50",
      description: "Esta es la descripción del producto. Aquí puedes detallar las características y beneficios.",
      image: greenSalad
    }
  ];

  return (
    <section className="especiales">
      <header className="content-row-new">
        <div className="text-column">
          <h1>Specials of the Week</h1>
        </div>
        <div className="button-column">
          <button className="new-button" aria-label="View Online Menu">Online Menu</button>
        </div>
      </header>

      <div className="content-foods">
        {products.map((product, index) => (
          <article key={index} className={`product-container${index + 1}`}>
            <img 
              src={product.image} 
              alt={`Delicious ${product.title}`} 
              className="product-image"
              aria-label={`Image of ${product.title}`}
            />
            <div className="product-details">
              <div className="product-title-price">
                <h2 className="product-title">{product.title}</h2>
                <span className="product-price">{product.price}</span>
              </div>
              <p className="product-description">{product.description}</p>
              <button 
                className="order-button" 
                aria-label={`Order ${product.title}`}
              >
                Order
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Especiales;
