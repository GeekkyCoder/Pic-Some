import React, { useContext } from "react";
import { Context } from "../Context/Context";
function CartItem() {
  const { cartItem } = useContext(Context);

  const cartElements = cartItem.map((cart) => (
    <div className="cart-item">
      <i className="ri-delete-bin-line"></i>

      <img src={cart.url} width="130px" />
      <p>$5.99</p>
    </div>
  ));
  return <>{cartElements}</>;
}

export default CartItem;
