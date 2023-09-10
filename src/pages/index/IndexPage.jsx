import React from "react";
import { categories } from "./categories.js";

const IndexPage = () => {
  return (
    <div className="grid lg:grid-cols-3  max-lg:grid-cols-1 gap-4 p-4 ">
      {categories.map(({ id, title, imageUrl, col }) => {
        return (
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            key={id}
            className={`category-container item-bg flex flex-col items-center justify-center ${col}  cursor-pointer items-center  min-h-[400px]  bg-cover bg-center bg-no-repeat duration-300`}
          >
            <div className="category-body-container bg-gray-100 opacity-60 hover:opacity-100 duration-300 rounded-md p-4 border box-border border-black flex flex-col items-center gap-1">
              <h2 className="font-bold text-lg">{title}</h2>
              <p className="text-sm font-light ">Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndexPage;
