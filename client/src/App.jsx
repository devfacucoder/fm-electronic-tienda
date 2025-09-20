import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import PageProduct from "./pages/PageProduct";
import Publicar from "./pages/Publicar";
function App() {

  return (
     <div className="bg-gray-100 min-h-screen w-full ">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/productos" element={<Products/>} />
            <Route path="/productos/:categoria" element={<Products/>} />
            <Route path="/productos/:categoria/:product" element={<PageProduct/>} />

            <Route path="/Login" element={<Login/>} />
            <Route path="/publicar" element={<Publicar/>} />

          </Routes>


        </main>


     </div>
  );
}

export default App;
