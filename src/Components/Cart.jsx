import React,{useContext} from "react";
import CartItem from "./CartItem";
import {Context} from "../Context/Context"
function Cart() {
  const {removeFromCart} = useContext(Context)
  return(
    <main className="cart-page">
    <h1>Check out</h1>
    {<CartItem removeFromCart={removeFromCart} />}
    <p className="total-cost">500</p>
    <p>You have no items in your cart.</p>
</main>
  )
}

export default Cart;
