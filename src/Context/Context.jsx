import React, { useState, useEffect } from "react";
import { useHover } from "../Hooks/useHover";
const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItem, setCartItems] = useState([]);
  const [btnText, setBtnTxt] = useState("Order Now");

  function handleFavorite(imgId) {
    setAllPhotos((prevPhotos) => {
      return prevPhotos.map((photo) => {
        if (photo.id === imgId) {
          return { ...photo, isFavorite: !photo.isFavorite };
        } else {
          return photo;
        }
      });
    });
  }

  function addToCart(imgId) {
    setBtnTxt("Order Now");
    const cartItem = allPhotos.find((photo) => photo.id === imgId);
    setCartItems((prevCartItems) => {
      return [...prevCartItems, cartItem];
    });
  }

  function removeFromCart(imgId) {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((cartItem) => cartItem.id !== imgId);
    });
  }

  function emptyCart() {
    setCartItems([]);
  }

  function placeOrder() {
    setBtnTxt("your order has been placed");
    setTimeout(() => {
      emptyCart();
    }, 3000);
  }

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        );
        if (!response.ok) {
          new Error(response.status);
        }
        const photosArray = await response.json();
        setAllPhotos(photosArray);
      } catch (err) {
        throw Error(err);
      }
    };
    fetchPhotos();
  }, []);
  return (
    <Context.Provider
      value={{
        allPhotos,
        handleFavorite,
        addToCart,
        removeFromCart,
        placeOrder,
        emptyCart,
        cartItem,
        btnText,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
