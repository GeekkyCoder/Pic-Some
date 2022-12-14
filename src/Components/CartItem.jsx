import React, { useContext } from "react";
import { Context } from "../Context/Context";

function CartItem({ removeFromCart }) {
  const { cartItem } = useContext(Context);

  const cartElements = cartItem.map((cart) => (
    <div key={cart.id} className="cart-item">
      <i
        onClick={() => removeFromCart(cart.id)}
        className="ri-delete-bin-line"
      ></i>

      <img src={cart.url} width="130px" />
      <p>$5.90</p>
    </div>
  ));
  return <>{cartElements}</>;
}

export default CartItem;
