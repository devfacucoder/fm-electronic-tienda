import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import MenuMobile from "./MenuMobile";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" flex  justify-between   w-full h-[50px] bg-orange-400">
      {isMenuOpen && <MenuMobile onClose={setIsMenuOpen} />}
      <div className="w-[30%] h-full  ">
        <img
          className="w-full h-full object-scale-down"
          src="/fm-icon-trans.png"
          alt=""
        />
      </div>
      <button className="w-[20%] h-full flex justify-center items-center " onClick={() => setIsMenuOpen(true)}  >
        <FaBars fontSize={"30px"} />
      </button>
    </header>
  );
}
//            <h1 className='w-[40%] bg-red-500  flex items-center justify-center' >FM Electronic</h1>

export default Header;
