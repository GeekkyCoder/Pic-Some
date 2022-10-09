import React, { useState, useEffect, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef(null);

  function mouseEnter() {
    setHovered(true);
  }

  function mouseLeave() {
    setHovered(false);
  }

  useEffect(() => {
    console.log("enetered");
    imgRef.current.addEventListener("mouseenter", mouseEnter);
    imgRef.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      console.log("removing....");
      imgRef.current.removeEventListener("mouseenter", mouseEnter);
      imgRef.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return { hovered, imgRef };
}

export { useHover };
