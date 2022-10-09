import React, { useContext } from "react";
import { useHover } from "../Hooks/useHover";
import { Context } from "../Context/Context";
import CartItem from "./CartItem";

function Image({ img, className }) {
  const { handleFavorite, addToCart, removeFromCart, cartItem } =
    useContext(Context);
  const { imgRef } = useHover();

  console.log(imgRef);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => handleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => handleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItem.some((cart) => cart.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          onClick={() => removeFromCart(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => addToCart(img.id)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className="image-grid" ref={imgRef} />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
