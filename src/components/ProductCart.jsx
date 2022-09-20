import React from "react";
import image from "../assets/img/defaultimg.png";

function ProductCart(props) {
  return (
    <>
      <div className="productcart">
        <img
          className="productcart__img"
          src={props.banner ? props.banner : image}
          alt="defaultimg"
        />
        <div className="productcart__info">
          <h3 className="productcart__tittle">{props.nombre}</h3>
          <div className="productcart__price__container">
            <div>
              <p className="productcart__price__tittle">Precio:</p>
              <p className="productcart__price__quanty">
                <span className="productcart__price__currency">$</span>
                {props.precio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
