import React, { useContext} from "react";
import { Context } from "../Context/Context";
import Image from "./Image";
import getClass from "../utils/getClass";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((photo,index)=> {
    return  <Image key={photo.id} img={photo} className={getClass(index)} />
  })
  return(
     <main className="photos">
    {imageElements}
    </main>
  )
}

export default Photos;
