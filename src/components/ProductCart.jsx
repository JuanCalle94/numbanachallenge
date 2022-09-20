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
          <div>
            <button onClick={()=> addItemToCart(props)}>+</button>
            <p>{props.amount}</p>
            <button onClick={()=> deleteItemInCart(props)}>-</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
