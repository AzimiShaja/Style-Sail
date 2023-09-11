import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
        onClick={addProductToCart}
        className="absolute top-[250px] bg-gray-100 p-3 rounded-md hidden hover:scale-105 duration-300 border border-black "
      >
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;
