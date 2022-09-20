import React, {useContext} from "react";
import image from "../assets/img/defaultimg.png";
import { CartContext } from "../context/CartContext";

function ProductCart(props) {

  const {deleteItemInCart,addItemToCart} = useContext(CartContext);

  return (
    <>
      <div className="productcart">
        <img
          className="productcart__img"
          src={props.banner ? props.banner : image}
          alt="defaultimg"
        />
        <div className="productcart__info">
          <div>
          <h3 className="productcart__tittle">{props.nombre}</h3>
          <div className="productcart__price__container">
            <div>
              <p className="productcart__price__tittle">Precio:</p>
              <p className="productcart__price__quanty">
                <span className="productcart__price__currency">$</span>
                {props.amount * props.precio}
              </p>
            </div>
          </div>
          </div>
          <div className="productcart__buttons__container">
            <button className="productcart__buttons plas" onClick={()=> addItemToCart(props)}>+</button>
            <p>{props.amount}</p>
            <button className="productcart__buttons" onClick={()=> deleteItemInCart(props)}>x</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
