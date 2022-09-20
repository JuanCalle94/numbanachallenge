import React,  { useContext, useEffect, useState  } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/img/numbanalogo.png";
import { Link } from "react-router-dom";

function Header() {

  const [cartLength , setCartLength] = useState(0);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setCartLength(
    cartItems.reduce(
      (previous,current) => previous + current.amount,0)
    )
  }, [cartItems])

  return (
    <>
      <header className="container header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="logo"
          width="60"
        />
        </Link>
        <Link to="/carro">
        <button className="header__carrito">
            <p className="header__carrito__length">{cartLength}</p>
            <p className="header__carrito__name">Carrito</p> 
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
        </Link>

      </header>
    </>
  );
}

export default Header;
