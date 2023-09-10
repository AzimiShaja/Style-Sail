import React from "react";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Shop = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 px-10">
      {products.map(({ name, id, imageUrl, price }) => {
        return (
          <div
            key={id}
            className="product-card h-[350px] flex flex-col gap-2 justify-between my-5 relative items-center"
          >
            <img
              className="w-full min-h-full object-cover rounded-md"
              src={imageUrl}
              alt={`${name}`}
            />

            <div className="flex w-full justify-between items-center">
              <span className="text-md font-bold font-open">{name}</span>
              <span className="">${price}</span>
            </div>
            <button
              onClick={() => {
                addItemToCart(product);
              }}
              className="absolute top-[250px] bg-gray-100 p-3 rounded-md hidden hover:scale-105 duration-300 border border-black "
            >
              Add to card
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
