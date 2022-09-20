import React from "react";
import image from "../assets/img/defaultimg.png";

function ProductCard(props) {
  return (
    <>
      <div className="productcard">
        <img className="productcard__img" src={props.banner ? props.banner : image} alt="defaultimg" />
        <div className="productcard__info">
          <h3 className="productcard__tittle">{props.nombre}</h3>
          <div className="productcard__price__container">
            <div>
              <p className="productcard__price__tittle">Precio:</p>
              <p className="productcard__price__quanty">
                <span className="productcard__price__currency">$</span>
                {props.precio}
              </p>
            </div>
            <a className="productcard__button__carrito" href="/">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
