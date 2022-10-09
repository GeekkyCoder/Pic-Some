import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";

function Header() {
  const { cartItem } = useContext(Context);

  function cartClass() {
    return cartItem.length > 0
      ? "ri-shopping-cart-fill "
      : "ri-shopping-cart-line";
  }

  return (
    <header>
      <Link to="/">
        <h2>Pic Some</h2>
      </Link>
      <span className="cart-item-count">{cartItem.length}</span>
      <Link to="/cart">
        <i className={`${cartClass()} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
