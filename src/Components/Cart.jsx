import React from "react";
import CartItem from "./CartItem";
function Cart() {
  return(
    <main className="cart-page">
    <h1>Check out</h1>
    {<CartItem />}
    <p className="total-cost">500</p>
    <p>You have no items in your cart.</p>
</main>
  )
}

export default Cart;
