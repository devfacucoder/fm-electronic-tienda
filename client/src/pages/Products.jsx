import React, { use, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";
import CardProducts from "../components/CardProducts";
import CardCategory from "../components/CardCategory";

function Products() {
  const { categoria } = useParams();
  const locaion = useLocation();
  useEffect(() => {
    console.log(locaion);
  });
  if (categoria) {
    return (
      <div>
        <ul className="w-full py-2 flex flex-col items-center gap-2">
          <CardProducts/>
          <CardProducts/>
          <CardProducts/>

        </ul>
      </div>
    );
    
  }
  return (
      <div>
        <ul className="w-full py-2 flex flex-col items-center gap-2">
          <CardCategory/>
          <CardCategory/>
          <CardCategory/> 
        </ul>
      </div>
    );
}

export default Products;
