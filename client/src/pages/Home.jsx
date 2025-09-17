import React from "react";
import CardCategory from "../components/CardCategory";
function Home() {
  return (
    <div className="bg_img flex flex-col  w-full min-h-screen text-center">
      <div className="bg-gray-800/75  font-mono min-h-[40px] py-2 px-2 border-b-[1px] border-yellow-500 ">
        <h1 className="text-white font-mono text-[30px] ">FM Electronic</h1>
        <h3 className="braak-words text-[15px] text-white">
          Tecnologia, Auriculares, Parlantes y mas accesorios
        </h3>
      </div>

      <section className="flex w-full flex-col items-center py-4 gap-4 bg-gray-800/75">
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </section>
    </div>
  );
}

export default Home;
