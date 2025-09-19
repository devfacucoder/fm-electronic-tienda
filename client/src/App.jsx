import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
function App() {

  return (
     <div className="bg-gray-100 min-h-screen w-full ">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/productos" element={<Products/>} />
            <Route path="/Login" element={<Login/>} />

          </Routes>


        </main>


     </div>
  );
}

export default App;
