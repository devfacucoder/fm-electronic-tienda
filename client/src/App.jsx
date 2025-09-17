import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {

  return (
     <div className="bg-gray-100 min-h-screen w-full ">
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/productos" element={<Products/>} />

          </Routes>


        </main>


     </div>
  );
}

export default App;
