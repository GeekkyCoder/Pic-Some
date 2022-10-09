import React,{useContext } from "react";
import { useHover } from "../Hooks/useHover";
import { Context } from "../Context/Context";

function Image({ img, className }) {
  const { handleFavorite, addToCart } = useContext(Context);
  const { imgRef } = useHover();

  function heartIcon() {
    if (img.isFavorite) {
       return <i onClick={() => handleFavorite(img.id)} className="ri-heart-fill favorite" ></i>
      
    } else {
        return <i onClick={() => handleFavorite(img.id)} className="ri-heart-line favorite" ></i>
    }
  }

  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className="image-grid" ref={imgRef} />
      {heartIcon()}
      <i
        onClick={() => addToCart(img.id)}
        className="ri-add-circle-line cart"
      ></i>
    </div>
  )
}

export default Image;
