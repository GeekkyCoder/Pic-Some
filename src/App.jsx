import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Image from "./Components/Image";
import {Routes,Route} from 'react-router-dom'
import Photos from "./Components/Photos";
import Cart from "./Components/Cart";


function App() {
  return (
    <>
      <Header />
       <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
       </Routes>
    </>
  );
}

export default App;
