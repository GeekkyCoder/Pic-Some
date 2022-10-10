import React, { useContext,useState } from "react";
import CartItem from "./CartItem";
import { Context } from "../Context/Context";
function Cart() {
  const { removeFromCart, cartItem, placeOrder,btnText } = useContext(Context);
  const totalPrice = 5.99 * cartItem.length;
  const totalCostDisplay = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {<CartItem removeFromCart={removeFromCart} />}
      <p className="total-cost">{totalCostDisplay}</p>
      {cartItem.length > 0 && <h2>Total</h2>}
      {cartItem.length === 0 && <h2>Cart is Empty</h2>}
      {cartItem.length > 0 && (
        <button className=" btn order-btn" onClick={placeOrder}>
        {btnText}
        </button>
      )}
    </main>
  );
}

export default Cart;
