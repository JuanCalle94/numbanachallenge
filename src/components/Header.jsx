import React from "react";
import logo from "../assets/img/numbanalogo.png";
import { Link } from "react-router-dom";

function Header() {
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
        <a className="header__carrito" href="/">
            <p>Carrito</p> 
            <i className="fa-solid fa-cart-shopping"></i>
        </a>
        </Link>

      </header>
    </>
  );
}

export default Header;
