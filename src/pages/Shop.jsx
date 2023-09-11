import React from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div>
      {Object.keys(categoriesMap).map((title) => (
        <div key={title} className="p-10">
          <h2 className="text-4xl font-bold font-poppins">
            {title.toUpperCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
            {categoriesMap[title].map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
