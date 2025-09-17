import React from "react";
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <header className=" flex  justify-between   w-full h-[50px] bg-orange-400">
      <div className="w-[30%] h-full  ">
        <img
          className="w-full h-full object-scale-down"
          src="/fm-icon-trans.png"
          alt=""
        />
      </div>
      <button className="w-[20%] h-full flex justify-center items-center ">
        <FaBars fontSize={"30px"} />
      </button>
    </header>
  );
}
//            <h1 className='w-[40%] bg-red-500  flex items-center justify-center' >FM Electronic</h1>

export default Header;
