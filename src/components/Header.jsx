import React from "react";
import logo from "../assets/img/numbanalogo.png";

function Header() {
  return (
    <>
      <header className="container header">
        <img
          className="header__logo"
          src={logo}
          alt="logo"
          width="60"
        />
        <a className="header__carrito" href="/">
            Carrito
            <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </header>
    </>
  );
}

export default Header;
