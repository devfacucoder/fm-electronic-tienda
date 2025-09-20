import React from "react";
import { Link } from "react-router-dom";
function CardProducts({ pLinkl = "auricular-f0" }) {
  return (
    <Link to={`/productos/auriculares/${pLinkl}`}>
      <div className="w-[200px] h-[280px]  border-1 border-amber-500  shadow-lg shadow-gray-400">
        <div className="w-full h-[70%]">
          <img
            className="w-full h-full"
            src="https://i.pinimg.com/1200x/54/17/d7/5417d7f80559c7dcabd3930e6206602b.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="bg-gray-300 h-[30%] text-black flex flex-col items-start px-2">
          <p className="font-mono text-[15px]">Auricular Bluetooth f9</p>

          <b className="text-[20px]">12000$</b>
          <s>15000$</s>
        </div>
      </div>
    </Link>
  );
}

export default CardProducts;
