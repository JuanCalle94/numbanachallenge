import React from "react";
import image from "../assets/img/defaultimg.png";

function ProductCard(props) {
  return (
    <>
      <div className="productcard">
        <img className="productcard__img" src={image} alt="defaultimg" />
        <div className="productcard__info">
          <h3 className="productcard--tittle">{props.nombre}</h3>
          <div className="productcard--price__container">
            <p className="productcard--price__tittle">precio</p>
            <p className="productcard--price"><span>$</span>{props.precio}</p>
            <a className="productcard__carrito" href="/">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
