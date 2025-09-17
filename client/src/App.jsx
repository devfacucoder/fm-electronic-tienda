import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom"

import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const [count, setCount] = useState(0);

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
