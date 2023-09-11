import React from "react";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 px-10">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
