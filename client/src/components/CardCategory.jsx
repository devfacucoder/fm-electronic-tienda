import React from "react";
import { useNavigate, Link } from "react-router-dom";
function CardCategory({
  pText = "Categoria algo",
  pImg = "https://i.pinimg.com/1200x/8f/31/79/8f31796882abc90722705eaa33de0050.jpg",
  pLink = "Auriculares-bluetooth",
}) {
  const navigate = useNavigate();

  return (
    <div className="w-[170px] h-[170px] rounded-2xl p-[2px] bg-gradient-to-tr from-yellow-900 via-yellow-500 to-yellow-200 shadow-lg shadow-blue-700">
      <Link to={"/productos/"+pLink}>
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900">
          <h3 className="absolute w-full bottom-0 left-0 text-white bg-gradient-to-l to-black/55 from-black  ">
            {pText}
          </h3>
          <img className="w-full h-full object-cover" src={pImg} alt="" />
        </div>
      </Link>
    </div>
  );
}
//https://i.pinimg.com/1200x/8f/31/79/8f31796882abc90722705eaa33de0050.jpg
export default CardCategory;

//https://i.pinimg.com/736x/0b/32/1d/0b321d2f7e6ed4d40af7003533473c0a.jpg
