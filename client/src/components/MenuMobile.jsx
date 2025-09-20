import React, { useEffect } from "react";
import { Link } from "react-router-dom";
function MenuMobile({ onClose }) {
  useEffect(() => {
    // 👇 Cada vez que el usuario presione "atrás" en el navegador o celular
    const handleBackButton = () => {
      onClose(false);
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [onClose]);

  return (
    <>
      <div
        onClick={() => {
          onClose(false);
        }}
        className="bg-black/70 w-full h-screen fixed z-10"
      ></div>
      <div className="flex flex-col justify-between px-2 bg-orange-500 w-[80%] h-screen fixed top-0 left-0 z-30">
        <ul className="w-full text-[20px] ">
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>Buscar</li>
          <li>
            <Link to={"/"}>Otra página</Link>
          </li>
          <li>
            <Link to={"/publicar"}>Publicar</Link>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <Link className="" to={"/login"}>
            Ingresar
          </Link>
          <button
            onClick={() => {
              onClose(false);
            }}
            className="text-[30px]"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuMobile;
