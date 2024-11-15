import React from 'react'
import greenSalad from '../imagenes/green-salad.png'
import "../styles/Especiales.css"

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
    <div>
      <div className="content-row-new">
        <div className="text-column">
          <h1>This week's specials</h1>
        </div>
        <div className="button-column">
          <button className="new-button">Online Menu</button>
        </div>
      </div>

      <div className="content-foods">
        {products.map((product, index) => (
          <div key={index} className={`product-container${index + 1}`}>
            <img src={product.image} alt={`Imagen del ${product.title}`} className="product-image"/>
            <div className="product-details">
              <div className="product-title-price">
                <h2 className="product-title">{product.title}</h2>
                <span className="product-price">{product.price}</span>
              </div>
              <p className="product-description">{product.description}</p>
              <button className="order-button">Ordenar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Especiales;
